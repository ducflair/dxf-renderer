import * as CFB from "cfb";
import * as ExcelJS from "exceljs/dist/exceljs.min.js";

const CFB_SIGNATURE = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1];
const DEFAULT_COLUMN_WIDTH = 8.43;
const DEFAULT_ROW_HEIGHT = 15;
const EXCEL_COLUMN_PIXEL_WIDTH = 7;
const POINT_TO_PIXEL = 96 / 72;
const TARGET_SCALE = 4;
const MAX_CANVAS_DIMENSION = 4096;
const THEME_COLORS = [
    "#ffffff", "#000000", "#eeeCE1", "#1f497d", "#4f81bd", "#c0504d",
    "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#0000ff", "#800080"
];

function FindSignature(bytes: Uint8Array, signature: number[]): number {
    for (let i = 0; i <= bytes.length - signature.length; i++) {
        let matches = true;
        for (let j = 0; j < signature.length; j++) {
            if (bytes[i + j] !== signature[j]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            return i;
        }
    }
    return -1;
}

function ExtractPackage(oleData: ArrayBuffer): Uint8Array | null {
    if (!(oleData instanceof ArrayBuffer)) {
        return null;
    }
    const bytes = new Uint8Array(oleData);
    const offset = FindSignature(bytes, CFB_SIGNATURE);
    if (offset < 0) {
        return null;
    }
    const cfbApi: any = (CFB as any).read ? CFB : (CFB as any).default;
    const container = cfbApi.read(bytes.slice(offset), { type: "array" });
    const entry = cfbApi.find(container, "Package");
    return entry?.content?.length ? entry.content : null;
}

function ResolveColor(color: any, fallback: string): string {
    if (!color) {
        return fallback;
    }
    if (color.argb) {
        return `#${String(color.argb).slice(-6)}`;
    }
    let value = color.theme === undefined ? fallback : (THEME_COLORS[color.theme] ?? fallback);
    if (!value || color.tint === undefined) {
        return value;
    }
    const rgb = value.slice(1).match(/.{2}/g)?.map(component => Number.parseInt(component, 16));
    if (!rgb) return fallback;
    const tinted = rgb.map(component => color.tint < 0 ?
        component * (1 + color.tint) : component + (255 - component) * color.tint);
    return `#${tinted.map(component => Math.round(component).toString(16).padStart(2, "0")).join("")}`;
}

function GetBorderWidth(style?: string): number {
    switch (style) {
    case "hair": return 0.5;
    case "medium":
    case "mediumDashed":
    case "mediumDashDot":
    case "mediumDashDotDot": return 2;
    case "thick": return 3;
    case "double": return 1.25;
    default: return 1;
    }
}

function GetBorderDash(style?: string): number[] {
    if (style?.includes("DashDotDot")) return [6, 3, 1, 3, 1, 3];
    if (style?.includes("DashDot")) return [6, 3, 1, 3];
    if (style?.includes("Dashed") || style === "dashed") return [6, 3];
    if (style === "dotted") return [1, 2];
    return [];
}

function DrawBorder(ctx: CanvasRenderingContext2D, side: any, x1: number, y1: number, x2: number, y2: number): void {
    if (!side?.style) {
        return;
    }
    ctx.save();
    ctx.strokeStyle = ResolveColor(side.color, "#000000");
    ctx.lineWidth = GetBorderWidth(side.style);
    ctx.setLineDash(GetBorderDash(side.style));
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (side.style === "double") {
        const offset = 2;
        ctx.beginPath();
        if (y1 === y2) {
            ctx.moveTo(x1, y1 + offset);
            ctx.lineTo(x2, y2 + offset);
        } else {
            ctx.moveTo(x1 + offset, y1);
            ctx.lineTo(x2 + offset, y2);
        }
        ctx.stroke();
    }
    ctx.restore();
}

function WrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, wrapText?: boolean): string[] {
    const explicitLines = String(text ?? "").split(/\r?\n/);
    if (!wrapText) {
        return explicitLines;
    }
    const lines: string[] = [];
    for (const explicitLine of explicitLines) {
        const words = explicitLine.split(/\s+/);
        let line = "";
        for (const word of words) {
            const candidate = line ? `${line} ${word}` : word;
            if (line && ctx.measureText(candidate).width > maxWidth) {
                lines.push(line);
                line = word;
            } else {
                line = candidate;
            }
        }
        lines.push(line);
    }
    return lines;
}

function DrawText(ctx: CanvasRenderingContext2D, cell: any, x: number, y: number, width: number, height: number): void {
    const text = cell.text;
    if (!text) {
        return;
    }
    const font = cell.font || {};
    const alignment = cell.alignment || {};
    const fontSize = (font.size || 11) * POINT_TO_PIXEL;
    const fontStyle = `${font.italic ? "italic " : ""}${font.bold ? "bold " : ""}`;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
    ctx.clip();
    ctx.font = `${fontStyle}${fontSize}px ${font.name || "Arial"}, sans-serif`;
    ctx.fillStyle = ResolveColor(font.color, "#000000");
    ctx.textAlign = alignment.horizontal === "center" ? "center" :
        alignment.horizontal === "right" ? "right" : "left";
    ctx.textBaseline = "middle";
    const padding = 3;
    const textX = ctx.textAlign === "center" ? x + width / 2 :
        ctx.textAlign === "right" ? x + width - padding : x + padding;
    const lines = WrapText(ctx, text, Math.max(1, width - padding * 2), alignment.wrapText);
    const lineHeight = fontSize * 1.15;
    const blockHeight = lines.length * lineHeight;
    let textY: number;
    if (alignment.vertical === "top") {
        textY = y + padding + lineHeight / 2;
    } else if (alignment.vertical === "bottom") {
        textY = y + height - padding - blockHeight + lineHeight / 2;
    } else {
        textY = y + (height - blockHeight) / 2 + lineHeight / 2;
    }
    for (const line of lines) {
        ctx.fillText(line, textX, textY);
        textY += lineHeight;
    }
    ctx.restore();
}

export type MergedCellRange = {
    startColumn: number;
    startRow: number;
    endColumn: number;
    endRow: number;
};

function DecodeRange(range: string): MergedCellRange | null {
    const match = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(range);
    if (!match) {
        return null;
    }
    const decodeColumn = (label: string) => [...label].reduce((value, char) => value * 26 + char.charCodeAt(0) - 64, 0);
    return {
        startColumn: decodeColumn(match[1]),
        startRow: Number(match[2]),
        endColumn: decodeColumn(match[3]),
        endRow: Number(match[4])
    };
}

function GetMergedRanges(worksheet: any): Map<string, MergedCellRange> {
    const byCell = new Map<string, MergedCellRange>();
    for (const value of worksheet.model?.merges || []) {
        const range = DecodeRange(value);
        if (!range) continue;
        for (let row = range.startRow; row <= range.endRow; row++) {
            for (let column = range.startColumn; column <= range.endColumn; column++) {
                byCell.set(`${row}:${column}`, range);
            }
        }
    }
    return byCell;
}

function GetRangeBorder(worksheet: any, range: MergedCellRange, fallback: any): any {
    return {
        top: worksheet.getCell(range.startRow, range.startColumn).border?.top ?? fallback?.top,
        right: worksheet.getCell(range.startRow, range.endColumn).border?.right ?? fallback?.right,
        bottom: worksheet.getCell(range.endRow, range.startColumn).border?.bottom ?? fallback?.bottom,
        left: worksheet.getCell(range.startRow, range.startColumn).border?.left ?? fallback?.left
    };
}

export async function ReadOleSpreadsheet(oleData: ArrayBuffer): Promise<{ workbook: any; worksheet: any } | null> {
    const packageData = ExtractPackage(oleData);
    if (!packageData) {
        return null;
    }
    const excelApi: any = (ExcelJS as any).Workbook ? ExcelJS : (ExcelJS as any).default;
    const workbook = new excelApi.Workbook();
    await workbook.xlsx.load(packageData);
    const activeTab = workbook.views?.[0]?.activeTab ?? 0;
    const worksheet = workbook.worksheets[activeTab] ?? workbook.worksheets[0];
    return worksheet ? { workbook, worksheet } : null;
}

export async function RenderOleSpreadsheet(oleData: ArrayBuffer): Promise<HTMLCanvasElement | null> {
    if (typeof document === "undefined") {
        return null;
    }
    const spreadsheet = await ReadOleSpreadsheet(oleData);
    if (!spreadsheet) {
        return null;
    }
    const { worksheet } = spreadsheet;
    const rowCount = worksheet.actualRowCount || worksheet.rowCount;
    const columnCount = worksheet.actualColumnCount || worksheet.columnCount;
    if (!rowCount || !columnCount) {
        return null;
    }

    const columnWidths = Array.from({ length: columnCount }, (_, index) =>
        (worksheet.getColumn(index + 1).width || DEFAULT_COLUMN_WIDTH) * EXCEL_COLUMN_PIXEL_WIDTH);
    const rowHeights = Array.from({ length: rowCount }, (_, index) =>
        (worksheet.getRow(index + 1).height || DEFAULT_ROW_HEIGHT) * POINT_TO_PIXEL);
    const columnOffsets = [0];
    const rowOffsets = [0];
    for (const width of columnWidths) columnOffsets.push(columnOffsets[columnOffsets.length - 1] + width);
    for (const height of rowHeights) rowOffsets.push(rowOffsets[rowOffsets.length - 1] + height);

    const logicalWidth = columnOffsets[columnOffsets.length - 1];
    const logicalHeight = rowOffsets[rowOffsets.length - 1];
    const renderScale = Math.min(TARGET_SCALE,
        MAX_CANVAS_DIMENSION / logicalWidth, MAX_CANVAS_DIMENSION / logicalHeight);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(logicalWidth * renderScale));
    canvas.height = Math.max(1, Math.round(logicalHeight * renderScale));
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return null;
    }
    ctx.scale(renderScale, renderScale);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, logicalWidth, logicalHeight);

    const mergedRanges = GetMergedRanges(worksheet);
    for (let row = 1; row <= rowCount; row++) {
        for (let column = 1; column <= columnCount; column++) {
            const merged = mergedRanges.get(`${row}:${column}`);
            if (merged && (row !== merged.startRow || column !== merged.startColumn)) {
                continue;
            }
            const range: MergedCellRange = merged || {
                startRow: row, endRow: row, startColumn: column, endColumn: column
            };
            const cell = worksheet.getCell(row, column);
            const x = columnOffsets[range.startColumn - 1];
            const y = rowOffsets[range.startRow - 1];
            const width = columnOffsets[range.endColumn] - x;
            const height = rowOffsets[range.endRow] - y;
            const fill = cell.fill;
            if (fill?.type === "pattern" && fill.pattern === "solid") {
                ctx.fillStyle = ResolveColor(fill.fgColor || fill.bgColor, "#ffffff");
                ctx.fillRect(x, y, width, height);
            }
            DrawText(ctx, cell, x, y, width, height);
            const border = merged ? GetRangeBorder(worksheet, range, cell.border) : cell.border;
            DrawBorder(ctx, border?.top, x, y, x + width, y);
            DrawBorder(ctx, border?.right, x + width, y, x + width, y + height);
            DrawBorder(ctx, border?.bottom, x, y + height, x + width, y + height);
            DrawBorder(ctx, border?.left, x, y, x, y + height);
        }
    }
    return canvas;
}
