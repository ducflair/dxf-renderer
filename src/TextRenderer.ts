import { Entity } from "./DxfScene.js";
import { Matrix3, Vector2, ShapePath, ShapeUtils } from "three";
import { MTextFormatParser, type MTextFormatEntity } from "./MTextFormatParser.js";
import type { FontFetcher, TextRendererOptions } from "./types.js";

/** Regex for parsing special characters in text entities. */
const SPECIAL_CHARS_RE = /(?:%%([dpcou%]))|(?:\\U\+([0-9a-f]{4}))/gi;

function NormalizeFontName(name?: string | null): string | null {
    if (!name) {
        return null;
    }
    const basename = String(name).trim().replaceAll("\\", "/").split("/").pop();
    if (!basename) return null;
    return basename.toLowerCase()
        .replace(/\.(?:ttf|otf|ttc|shx)$/i, "")
        .replace(/(?:[-\s](?:regular|normal))+$/i, "");
}

/**
 * Parse special characters in text entities and convert them to corresponding unicode
 * characters.
 * https://knowledge.autodesk.com/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ENU/AutoCAD-Core/files/GUID-518E1A9D-398C-4A8A-AC32-2D85590CDBE1-htm.html
 * @param text Raw string.
 * @return String with special characters replaced.
 */
export function ParseSpecialChars(text: string): string {
    return text.replaceAll(SPECIAL_CHARS_RE, (match, p1, p2) => {
        if (p1 !== undefined) {
            switch (p1.toLowerCase()) {
            case "d":
                return "\xb0";
            case "p":
                return "\xb1";
            case "c":
                return "\u2205";
            case "o":
                /* Toggles overscore mode on and off, not implemented. */
                return "";
            case "u":
                /* Toggles underscore mode on and off, not implemented. */
                return "";
            case "%":
                return "%";
            }
        } else if (p2 !== undefined) {
            const code = parseInt(p2, 16);
            if (isNaN(code)) {
                return match;
            }
            return String.fromCharCode(code);
        }
        return match;
    });
}

/** TEXT group attribute 72 values. */
export const HAlign = Object.freeze({
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    ALIGNED: 3,
    MIDDLE: 4,
    FIT: 5
} as const);

export type HAlignValue = typeof HAlign[keyof typeof HAlign];

/** TEXT group attribute 73 values. */
export const VAlign = Object.freeze({
    BASELINE: 0,
    BOTTOM: 1,
    MIDDLE: 2,
    TOP: 3
} as const);

export type VAlignValue = typeof VAlign[keyof typeof VAlign];

/** MTEXT group attribute 71 values. */
const MTextAttachment = Object.freeze({
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP_RIGHT: 3,
    MIDDLE_LEFT: 4,
    MIDDLE_CENTER: 5,
    MIDDLE_RIGHT: 6,
    BOTTOM_LEFT: 7,
    BOTTOM_CENTER: 8,
    BOTTOM_RIGHT: 9
} as const);

export type CharPath = {
    advance: number;
    path: ShapePath | null;
    bounds: { xMin: number; xMax: number; yMin: number; yMax: number };
};

class Font {
    data: any;
    charMap: Map<string, any>;
    scale: number;

    constructor(data: any) {
        this.data = data;
        this.charMap = new Map();
        for (const glyph of Object.values(data.glyphs.glyphs) as any[]) {
            if (glyph.unicode === undefined) {
                continue;
            }
            this.charMap.set(String.fromCodePoint(glyph.unicode), glyph);
        }
        /* Scale to transform the paths to size 1. */
        this.scale = 100 / ((this.data.unitsPerEm || 2048) * 72);
    }

    /**
     * @param char Character code point as string.
     * @return True if the font has glyphs for the specified character.
     */
    HasChar(char: string): boolean {
        return this.charMap.has(char);
    }

    /**
     * @param char Character code point as string.
     * @return Path is scaled to size 1. Null if no glyphs for the specified characters.
     */
    GetCharPath(char: string): CharPath | null {
        const glyph = this.charMap.get(char);
        if (!glyph) {
            return null;
        }
        const scale = this.scale;
        const path = new ShapePath();
        for (const cmd of glyph.path.commands) {
            switch (cmd.type) {
            case 'M':
                path.moveTo(cmd.x * scale, cmd.y * scale);
                break;
            case 'L':
                path.lineTo(cmd.x * scale, cmd.y * scale);
                break;
            case 'Q':
                path.quadraticCurveTo(cmd.x1 * scale, cmd.y1 * scale,
                                      cmd.x * scale, cmd.y * scale);
                break;
            case 'C':
                path.bezierCurveTo(cmd.x1 * scale, cmd.y1 * scale,
                                   cmd.x2 * scale, cmd.y2 * scale,
                                   cmd.x * scale, cmd.y * scale);
                break;
            }
        }
        return {
            advance: glyph.advanceWidth * scale,
            path,
            bounds: {
                xMin: glyph.xMin * scale,
                xMax: glyph.xMax * scale,
                yMin: glyph.yMin * scale,
                yMax: glyph.yMax * scale
            }
        };
    }

    GetKerning(c1: string, c2: string): number {
        const i1 = this.data.charToGlyphIndex(c1);
        if (i1 === 0) {
            return 0;
        }
        const i2 = this.data.charToGlyphIndex(c2);
        if (i2 === 0) {
            return 0;
        }
        return this.data.getKerningValue(i1, i2) * this.scale;
    }
}

export class CharShape {
    font: Font;
    advance: number;
    bounds: { xMin: number; xMax: number; yMin: number; yMax: number };
    vertices: Vector2[] | null = null;
    indices: number[] = [];

    constructor(font: Font, glyph: CharPath, options: TextRendererOptions) {
        this.font = font;
        this.advance = glyph.advance;
        this.bounds = glyph.bounds;
        if (glyph.path) {
            const shapes = glyph.path.toShapes(false);
            this.vertices = [];
            this.indices = [];
            for (const shape of shapes) {
                const shapePoints = shape.extractPoints(options.curveSubdivision ?? 2);
                /* Ensure proper vertices winding. */
                if (!ShapeUtils.isClockWise(shapePoints.shape)) {
                    shapePoints.shape = shapePoints.shape.reverse();
                    for (const hole of shapePoints.holes) {
                        if (ShapeUtils.isClockWise(hole)) {
                            hole.reverse();
                        }
                    }
                }
                /* This call also removes duplicated end vertices. */
                const indices = ShapeUtils.triangulateShape(shapePoints.shape, shapePoints.holes);

                const baseIdx = this.vertices.length;

                for (const v of shapePoints.shape) {
                    this.vertices.push(v);
                }
                for (const hole of shapePoints.holes) {
                    for (const v of hole) {
                        this.vertices.push(v);
                    }
                }
                for (const tuple of indices) {
                    for (const idx of tuple) {
                        this.indices.push(baseIdx + idx);
                    }
                }
            }
        } else {
            this.vertices = null;
        }
    }

    /** Get vertices array transformed to the specified position and with the specified size. */
    GetVertices(position: { x: number; y: number }, size: number): Vector2[] | null {
        if (!this.vertices) return null;
        return this.vertices.map(v => v.clone().multiplyScalar(size).add(position as any));
    }
}

/** Encapsulates calculations for a single-line text block. */
class TextBlock {
    fontSize: number;
    color?: number | null;
    glyphs: { shape: CharShape; vertices: Vector2[] | null }[];
    bounds: { xMin: number; xMax: number; yMin: number; yMax: number } | null;
    curX: number;
    prevChar: string | null;
    prevFont: Font | null;

    constructor(fontSize: number, color?: number | null) {
        this.fontSize = fontSize;
        this.color = color;
        this.glyphs = [];
        this.bounds = null;
        this.curX = 0;
        this.prevChar = null;
        this.prevFont = null;
    }

    PushChar(char: string, shape: CharShape): void {
        let offset: number;
        if (this.prevChar !== null && this.prevFont === shape.font) {
            offset = this.prevFont.GetKerning(this.prevChar, char);
        } else {
            offset = 0;
        }
        const x = this.curX + offset * this.fontSize;
        let vertices: Vector2[] | null;
        if (shape.vertices && shape.vertices.length > 0) {
            vertices = shape.GetVertices({ x, y: 0 }, this.fontSize);
            const xMin = x + shape.bounds.xMin * this.fontSize;
            const xMax = x + shape.bounds.xMax * this.fontSize;
            const yMin = shape.bounds.yMin * this.fontSize;
            const yMax = shape.bounds.yMax * this.fontSize;
            if (this.bounds === null) {
                this.bounds = { xMin, xMax, yMin, yMax };
            } else {
                if (xMin < this.bounds.xMin) {
                    this.bounds.xMin = xMin;
                }
                if (yMin < this.bounds.yMin) {
                    this.bounds.yMin = yMin;
                }
                if (xMax > this.bounds.xMax) {
                    this.bounds.xMax = xMax;
                }
                if (yMax > this.bounds.yMax) {
                    this.bounds.yMax = yMax;
                }
            }
        } else {
            vertices = null;
        }
        this.curX = x + shape.advance * this.fontSize;
        this.glyphs.push({ shape, vertices });
        this.prevChar = char;
        this.prevFont = shape.font;
    }

    GetCurrentPosition(): number {
        return this.curX;
    }

    *Render(
        startPos: { x: number; y: number },
        endPos: { x: number; y: number } | null,
        rotation: number = 0,
        widthFactor: number | null = 1,
        hAlign: number = HAlign.LEFT,
        vAlign: number = VAlign.BASELINE,
        color?: number | null,
        layer: string | null = null
    ): Generator<Entity> {
        if (this.bounds === null) {
            return;
        }

        const effectiveEndPos = endPos ?? startPos;
        let rot = rotation ? rotation * -Math.PI / 180 : 0;
        const wFactor = widthFactor ?? 1;
        const effectiveHAlign = hAlign ?? HAlign.LEFT;
        const effectiveVAlign = vAlign ?? VAlign.BASELINE;

        let origin = new Vector2();
        let scale = new Vector2(wFactor, 1);
        let insertionPos =
            (effectiveHAlign === HAlign.LEFT && effectiveVAlign === VAlign.BASELINE) ||
            effectiveHAlign === HAlign.FIT || effectiveHAlign === HAlign.ALIGNED ?
            new Vector2(startPos.x, startPos.y) : new Vector2(effectiveEndPos.x, effectiveEndPos.y);

        const GetFitScale = () => {
            const width = effectiveEndPos.x - startPos.x;
            if (width < Number.MIN_VALUE * 2) {
                return wFactor;
            }
            return width / (this.bounds!.xMax - this.bounds!.xMin);
        };

        const GetFitRotation = () => {
            return -Math.atan2(effectiveEndPos.y - startPos.y, effectiveEndPos.x - startPos.x);
        };

        switch (effectiveHAlign) {
        case HAlign.LEFT:
            origin.x = this.bounds.xMin;
            break;
        case HAlign.CENTER:
            origin.x = (this.bounds.xMax - this.bounds.xMin) / 2;
            break;
        case HAlign.RIGHT:
            origin.x = this.bounds.xMax;
            break;
        case HAlign.MIDDLE:
            origin.x = (this.bounds.xMax - this.bounds.xMin) / 2;
            origin.y = (this.bounds.yMax - this.bounds.yMin) / 2;
            break;
        case HAlign.ALIGNED: {
            const f = GetFitScale();
            scale.x = f;
            scale.y = f;
            rot = GetFitRotation();
            break;
        }
        case HAlign.FIT:
            scale.x = GetFitScale();
            rot = GetFitRotation();
            break;
        default:
            console.warn("Unrecognized hAlign value: " + effectiveHAlign);
        }

        switch (effectiveVAlign) {
        case VAlign.BASELINE:
            break;
        case VAlign.BOTTOM:
            origin.y = this.bounds.yMin;
            break;
        case VAlign.MIDDLE:
            origin.y = (this.bounds.yMax - this.bounds.yMin) / 2;
            break;
        case VAlign.TOP:
            origin.y = this.bounds.yMax;
            break;
        default:
            console.warn("Unrecognized vAlign value: " + effectiveVAlign);
        }

        const transform = new Matrix3().translate(-origin.x, -origin.y).scale(scale.x, scale.y)
            .rotate(rot).translate(insertionPos.x, insertionPos.y);

        for (const glyph of this.glyphs) {
            if (glyph.vertices) {
                for (const v of glyph.vertices) {
                    v.applyMatrix3(transform);
                }
                yield new Entity({
                    type: Entity.Type.TRIANGLES,
                    vertices: glyph.vertices,
                    indices: glyph.shape.indices,
                    layer,
                    color: (this.color ?? color) as number
                });
            }
        }
    }
}

class TextBoxChunk {
    paragraph: TextBoxParagraph;
    fontSize: number;
    color: number | null;
    prevChunk: TextBoxChunk | null;
    lastChar: string | null = null;
    lastShape: CharShape | null = null;
    leadingSpaces: number = 0;
    spaceStartKerning: number | null = null;
    spaceEndKerning: number | null = null;
    block: TextBlock | null = null;
    position: number = 0;

    constructor(paragraph: TextBoxParagraph, fontSize: number, color: number | null, prevChunk: TextBoxChunk | null) {
        this.paragraph = paragraph;
        this.fontSize = fontSize;
        this.color = color;
        this.prevChunk = prevChunk;
    }

    PushSpace(): void {
        if (this.block) {
            throw new Error("Illegal operation");
        }
        this.leadingSpaces++;
    }

    PushChar(char: string, shape: CharShape): void {
        if (this.spaceStartKerning === null) {
            if (this.leadingSpaces === 0) {
                this.spaceStartKerning = 0;
                this.spaceEndKerning = 0;
            } else {
                if (this.prevChunk && this.prevChunk.lastShape &&
                    this.prevChunk.fontSize === this.fontSize &&
                    this.prevChunk.lastShape.font === this.paragraph.textBox.spaceShape?.font) {

                    this.spaceStartKerning =
                        this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar!, " ");
                } else {
                    this.spaceStartKerning = 0;
                }
                if (shape.font === this.paragraph.textBox.spaceShape?.font) {
                    this.spaceEndKerning = shape.font.GetKerning(" ", char);
                } else {
                    this.spaceEndKerning = 0;
                }
            }
        }

        if (this.block === null) {
            this.block = new TextBlock(this.fontSize, this.color);
        }
        this.block.PushChar(char, shape);

        this.lastChar = char;
        this.lastShape = shape;
    }

    GetSpacingWidth(): number {
        const advance = this.paragraph.textBox.spaceShape?.advance ?? 0;
        return (this.leadingSpaces * advance +
            (this.spaceStartKerning ?? 0) + (this.spaceEndKerning ?? 0)) * this.fontSize;
    }

    GetWidth(withSpacing: boolean): number {
        if (this.block === null) {
            return 0;
        }
        let width = this.block.GetCurrentPosition();
        if (withSpacing) {
            width += this.GetSpacingWidth();
        }
        return width;
    }
}

class TextBoxLine {
    paragraph: TextBoxParagraph;
    startChunkIdx: number;
    numChunks: number;
    width: number;

    constructor(paragraph: TextBoxParagraph, startChunkIdx: number, numChunks: number, width: number) {
        this.paragraph = paragraph;
        this.startChunkIdx = startChunkIdx;
        this.numChunks = numChunks;
        this.width = width;
    }

    ApplyAlignment(boxWidth: number, defaultAlignment: number): void {
        const alignment = this.paragraph.alignment ?? defaultAlignment;
        switch (alignment) {
        case ParagraphAlignment.LEFT:
            break;
        case ParagraphAlignment.CENTER: {
            const offset = (boxWidth - this.width) / 2;
            this.ForEachChunk(chunk => chunk.position += offset);
            break;
        }
        case ParagraphAlignment.RIGHT: {
            const offset = boxWidth - this.width;
            this.ForEachChunk(chunk => chunk.position += offset);
            break;
        }
        case ParagraphAlignment.JUSTIFY: {
            const space = boxWidth - this.width;
            if (space <= 0 || this.numChunks === 1) {
                break;
            }
            const step = space / (this.numChunks - 1);
            let offset = 0;
            this.ForEachChunk(chunk => {
                chunk.position += offset;
                offset += step;
            });
            break;
        }
        default:
            throw new Error("Unhandled alignment: " + this.paragraph.alignment);
        }
    }

    ForEachChunk(handler: (chunk: TextBoxChunk) => void): void {
        for (let i = 0; i < this.numChunks; i++) {
            handler(this.paragraph.chunks[this.startChunkIdx + i]);
        }
    }
}

const ParagraphAlignment = Object.freeze({
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    JUSTIFY: 3
} as const);

class TextBoxParagraph {
    static Alignment = ParagraphAlignment;

    textBox: TextBox;
    chunks: TextBoxChunk[];
    curChunk: TextBoxChunk | null;
    alignment: number | null;
    lines: TextBoxLine[] | null;
    color: number | null;

    constructor(textBox: TextBox) {
        this.textBox = textBox;
        this.chunks = [];
        this.curChunk = null;
        this.alignment = null;
        this.lines = null;
        this.color = null;
    }

    FeedChar(c: string): void {
        const shape = this.textBox.charShapeProvider(c);
        if (shape === null) {
            return;
        }
        if (this.curChunk === null) {
            this._AddChunk();
        }
        this.curChunk!.PushChar(c, shape);
    }

    FeedSpace(): void {
        if (this.curChunk === null || this.curChunk.lastChar !== null) {
            this._AddChunk();
        }
        this.curChunk!.PushSpace();
    }

    SetAlignment(alignment: number | null): void {
        this.alignment = alignment;
    }

    SetColor(color: number | null): void {
        this.color = color;
    }

    BuildLines(boxWidth: number | null): void {
        if (this.curChunk === null) {
            return;
        }
        this.lines = [];
        let startChunkIdx = 0;
        let curChunkIdx = 0;
        let curWidth = 0;

        const CommitLine = () => {
            this.lines!.push(new TextBoxLine(this, startChunkIdx, curChunkIdx - startChunkIdx, curWidth));
            startChunkIdx = curChunkIdx;
            curWidth = 0;
        };

        for (; curChunkIdx < this.chunks.length; curChunkIdx++) {
            const chunk = this.chunks[curChunkIdx];
            let chunkWidth = chunk.GetWidth(startChunkIdx === 0 || curChunkIdx !== startChunkIdx);
            if (boxWidth !== null && boxWidth !== 0) {
                if (curWidth + chunkWidth > boxWidth) {
                    if (curChunkIdx === 0 && chunk.leadingSpaces > 0) {
                        this.lines.push(new TextBoxLine(this, startChunkIdx, startChunkIdx, 0));
                        chunk.leadingSpaces = 0;
                        chunkWidth = chunk.GetWidth(false);
                    }
                    if (curWidth !== 0) {
                        CommitLine();
                    }
                }
            }
            chunk.position = curWidth;
            curWidth += chunkWidth;
        }
        if (startChunkIdx !== curChunkIdx && curWidth !== 0) {
            CommitLine();
        }
    }

    GetMaxLineWidth(): number {
        if (this.lines === null) {
            return 0;
        }
        let maxWidth = 0;
        for (const line of this.lines) {
            if (line.width > maxWidth) {
                maxWidth = line.width;
            }
        }
        return maxWidth;
    }

    ApplyAlignment(boxWidth: number, defaultAlignment: number): void {
        if (this.lines) {
            for (const line of this.lines) {
                line.ApplyAlignment(boxWidth, defaultAlignment);
            }
        }
    }

    _AddChunk(): void {
        this.curChunk = new TextBoxChunk(this, this.textBox.fontSize, this.color, this.curChunk);
        this.chunks.push(this.curChunk);
    }
}

/** Encapsulates layout calculations for a multiline text block. */
class TextBox {
    static Paragraph = TextBoxParagraph;

    fontSize: number;
    charShapeProvider: (char: string) => CharShape | null;
    curParagraph: TextBoxParagraph;
    paragraphs: TextBoxParagraph[];
    spaceShape: CharShape | null;

    constructor(fontSize: number, charShapeProvider: (char: string) => CharShape | null) {
        this.fontSize = fontSize;
        this.charShapeProvider = charShapeProvider;
        this.curParagraph = new TextBoxParagraph(this);
        this.paragraphs = [this.curParagraph];
        this.spaceShape = charShapeProvider(" ");
    }

    FeedText(formattedText: MTextFormatEntity[]): void {
        function* FlattenItems(items: MTextFormatEntity[]): Generator<MTextFormatEntity> {
            for (const item of items) {
                if (item.type === MTextFormatParser.EntityType.SCOPE && Array.isArray(item.content)) {
                    yield* FlattenItems(item.content);
                } else {
                    yield item;
                }
            }
        }

        let curAlignment: number | null = null;
        let curColor: number | null = null;

        for (const item of FlattenItems(formattedText)) {
            switch (item.type) {
            case MTextFormatParser.EntityType.TEXT:
                for (const c of (item.content as string)) {
                    if (c === " ") {
                        this.curParagraph.FeedSpace();
                    } else {
                        this.curParagraph.FeedChar(c);
                    }
                }
                break;

            case MTextFormatParser.EntityType.PARAGRAPH:
                this.curParagraph = new TextBoxParagraph(this);
                this.curParagraph.SetAlignment(curAlignment);
                this.curParagraph.SetColor(curColor);
                this.paragraphs.push(this.curParagraph);
                break;

            case MTextFormatParser.EntityType.NON_BREAKING_SPACE:
                this.curParagraph.FeedChar(" ");
                break;

            case MTextFormatParser.EntityType.PARAGRAPH_ALIGNMENT: {
                let a: number | null = null;
                switch (item.alignment) {
                case "l":
                    a = ParagraphAlignment.LEFT;
                    break;
                case "c":
                    a = ParagraphAlignment.CENTER;
                    break;
                case "r":
                    a = ParagraphAlignment.RIGHT;
                    break;
                case "d":
                    a = ParagraphAlignment.JUSTIFY;
                    break;
                case "j":
                    a = null;
                    break;
                }
                this.curParagraph.SetAlignment(a);
                curAlignment = a;
                break;
            }

            case MTextFormatParser.EntityType.COLOR:
                curColor = item.color ?? null;
                this.curParagraph.SetColor(curColor);
                break;
            }
        }
    }

    *Render(
        position: { x: number; y: number },
        width: number | null,
        rotation: number,
        direction: { x: number; y: number } | null,
        attachment: number,
        lineSpacing: number = 1,
        color?: number | null,
        layer: string | null = null
    ): Generator<Entity> {
        for (const p of this.paragraphs) {
            p.BuildLines(width);
        }
        let boxWidth = width;
        if (boxWidth === null || boxWidth === 0) {
            boxWidth = 0;
            for (const p of this.paragraphs) {
                const pWidth = p.GetMaxLineWidth();
                if (pWidth > boxWidth) {
                    boxWidth = pWidth;
                }
            }
        }

        let defaultAlignment: number = ParagraphAlignment.LEFT;
        switch (attachment) {
        case MTextAttachment.TOP_CENTER:
        case MTextAttachment.MIDDLE_CENTER:
        case MTextAttachment.BOTTOM_CENTER:
            defaultAlignment = ParagraphAlignment.CENTER;
            break;
        case MTextAttachment.TOP_RIGHT:
        case MTextAttachment.MIDDLE_RIGHT:
        case MTextAttachment.BOTTOM_RIGHT:
            defaultAlignment = ParagraphAlignment.RIGHT;
            break;
        }

        for (const p of this.paragraphs) {
            p.ApplyAlignment(boxWidth, defaultAlignment);
        }

        let rot = rotation;
        if (direction !== null) {
            rot = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
        }

        const lineHeight = lineSpacing * 5 * this.fontSize / 3;

        let height = 0;
        for (const p of this.paragraphs) {
            if (p.lines === null) {
                height++;
            } else {
                height += p.lines.length;
            }
        }
        height *= lineHeight;

        let origin = new Vector2();
        switch (attachment) {
        case MTextAttachment.TOP_LEFT:
            break;
        case MTextAttachment.TOP_CENTER:
            origin.x = boxWidth / 2;
            break;
        case MTextAttachment.TOP_RIGHT:
            origin.x = boxWidth;
            break;
        case MTextAttachment.MIDDLE_LEFT:
            origin.y = -height / 2;
            break;
        case MTextAttachment.MIDDLE_CENTER:
            origin.x = boxWidth / 2;
            origin.y = -height / 2;
            break;
        case MTextAttachment.MIDDLE_RIGHT:
            origin.x = boxWidth;
            origin.y = -height / 2;
            break;
        case MTextAttachment.BOTTOM_LEFT:
            origin.y = -height;
            break;
        case MTextAttachment.BOTTOM_CENTER:
            origin.x = boxWidth / 2;
            origin.y = -height;
            break;
        case MTextAttachment.BOTTOM_RIGHT:
            origin.x = boxWidth;
            origin.y = -height;
            break;
        default:
            throw new Error("Unhandled alignment");
        }

        const transform = new Matrix3().translate(-origin.x, -origin.y)
            .rotate(-rot * Math.PI / 180).translate(position.x, position.y);

        let y = -this.fontSize;
        for (const p of this.paragraphs) {
            if (p.lines === null) {
                y -= lineHeight;
                continue;
            }
            for (const line of p.lines) {
                for (let chunkIdx = line.startChunkIdx;
                     chunkIdx < line.startChunkIdx + line.numChunks;
                     chunkIdx++) {

                    const chunk = p.chunks[chunkIdx];
                    let x = chunk.position;
                    if (chunkIdx === 0 || chunkIdx !== line.startChunkIdx) {
                        x += chunk.GetSpacingWidth();
                    }
                    const v = new Vector2(x, y);
                    v.applyMatrix3(transform);
                    if (chunk.block) {
                        yield* chunk.block.Render(v, null, rot, null,
                                                  HAlign.LEFT, VAlign.BASELINE,
                                                  color, layer);
                    }
                }
                y -= lineHeight;
            }
        }
    }
}

/**
 * Helper class for rendering text.
 */
export class TextRenderer {
    static DefaultOptions: Required<TextRendererOptions> = {
        curveSubdivision: 2,
        fallbackChar: "\uFFFD?"
    };

    fontFetchers: FontFetcher[];
    fonts: Font[];
    preferredFontFetchers: Map<string, FontFetcher>;
    preferredFonts: Map<string, Font>;
    options: Required<TextRendererOptions>;
    shapes: Map<string, CharShape | null>;
    stubShapeLoaded: boolean;
    stubShape: CharShape | null;

    constructor(fontFetchers?: FontFetcher[] | null, options: TextRendererOptions | null = null) {
        this.fontFetchers = fontFetchers ? [...fontFetchers] : [];
        this.fonts = [];
        this.preferredFontFetchers = new Map();
        this.preferredFonts = new Map();
        for (const fetcher of this.fontFetchers) {
            for (const name of fetcher.fontNames ?? []) {
                const normalized = NormalizeFontName(name);
                if (normalized) {
                    this.preferredFontFetchers.set(normalized, fetcher);
                }
            }
        }

        this.options = { ...TextRenderer.DefaultOptions, ...(options || {}) };
        this.shapes = new Map();
        this.stubShapeLoaded = false;
        this.stubShape = null;
    }

    async FetchFonts(text: string, fontName: string | null = null): Promise<boolean> {
        await this._FetchPreferredFont(fontName);
        if (!this.stubShapeLoaded) {
            this.stubShapeLoaded = true;
            for (const char of Array.from(this.options.fallbackChar)) {
                if (await this.FetchFonts(char)) {
                    this.stubShape = this._CreateCharShape(char, null);
                    break;
                }
            }
        }
        let charMissing = false;
        for (const char of text) {
            if (char.codePointAt(0)! < 0x20) {
                continue;
            }
            let found = false;
            for (const font of this._GetFonts(fontName)) {
                if (font.HasChar(char)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                continue;
            }
            if (!this.fontFetchers) {
                return false;
            }
            while (this.fontFetchers.length > 0) {
                const fetcher = this.fontFetchers.shift()!;
                const font = await this._FetchFont(fetcher);
                this._RegisterFont(font, fetcher);
                if (font.HasChar(char)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                charMissing = true;
            }
        }
        return !charMissing;
    }

    get canRender(): boolean {
        return this.fonts !== null && this.fonts.length > 0;
    }

    GetLineWidth(text: string, fontSize: number, fontName: string | null = null): number {
        const block = new TextBlock(fontSize);
        for (const char of text) {
            const shape = this._GetCharShape(char, fontName);
            if (!shape) {
                continue;
            }
            block.PushChar(char, shape);
        }
        return block.GetCurrentPosition();
    }

    *Render({
        text, startPos, endPos = null, rotation = 0, widthFactor = 1, hAlign = 0, vAlign = 0,
        color, layer = null, fontSize, fontName = null
    }: {
        text: string;
        startPos: { x: number; y: number };
        endPos?: { x: number; y: number } | null;
        rotation?: number | null;
        widthFactor?: number | null;
        hAlign?: number | null;
        vAlign?: number | null;
        color: number;
        layer?: string | null;
        fontSize: number;
        fontName?: string | null;
    }): Generator<Entity> {
        const block = new TextBlock(fontSize);
        for (const char of text) {
            const shape = this._GetCharShape(char, fontName);
            if (!shape) {
                continue;
            }
            block.PushChar(char, shape);
        }
        yield* block.Render(startPos, endPos, rotation ?? 0, widthFactor, hAlign ?? 0, vAlign ?? 0, color, layer);
    }

    *RenderMText({
        formattedText, position, fontSize, width = null, rotation = 0, direction = null,
        attachment, lineSpacing = 1, color, layer = null, fontName = null
    }: {
        formattedText: MTextFormatEntity[];
        position: { x: number; y: number };
        fontSize?: number | null;
        width?: number | null;
        rotation?: number | null;
        direction?: { x: number; y: number } | null;
        attachment: number;
        lineSpacing?: number | null;
        color: number;
        layer?: string | null;
        fontName?: string | null;
    }): Generator<Entity> {
        const effectiveFontSize = fontSize || 1;
        const box = new TextBox(effectiveFontSize, char => this._GetCharShape(char, fontName));
        box.FeedText(formattedText);
        yield* box.Render(position, width, rotation ?? 0, direction, attachment, lineSpacing ?? 1, color, layer);
    }

    _GetCharShape(char: string, fontName: string | null = null): CharShape | null {
        const key = `${NormalizeFontName(fontName) ?? ""}\0${char}`;
        let shape = this.shapes.get(key);
        if (shape !== undefined) {
            return shape;
        }
        shape = this._CreateCharShape(char, fontName);
        this.shapes.set(key, shape);
        return shape;
    }

    _CreateCharShape(char: string, fontName: string | null = null): CharShape | null {
        for (const font of this._GetFonts(fontName)) {
            const path = font.GetCharPath(char);
            if (path) {
                return new CharShape(font, path, this.options);
            }
        }
        return this.stubShape;
    }

    async _FetchFont(fontFetcher: FontFetcher): Promise<Font> {
        return new Font(await fontFetcher());
    }

    async _FetchPreferredFont(fontName?: string | null): Promise<void> {
        const normalized = NormalizeFontName(fontName);
        if (!normalized || this.preferredFonts.has(normalized)) {
            return;
        }
        const fetcher = this.preferredFontFetchers.get(normalized);
        if (!fetcher) {
            return;
        }
        const index = this.fontFetchers.indexOf(fetcher);
        if (index >= 0) {
            this.fontFetchers.splice(index, 1);
        }
        this._RegisterFont(await this._FetchFont(fetcher), fetcher);
    }

    _RegisterFont(font: Font, fetcher: FontFetcher): void {
        if (!this.fonts.includes(font)) {
            this.fonts.push(font);
        }
        for (const name of fetcher.fontNames ?? []) {
            const normalized = NormalizeFontName(name);
            if (normalized) {
                this.preferredFonts.set(normalized, font);
            }
        }
    }

    _GetFonts(fontName?: string | null): Font[] {
        const preferred = this.preferredFonts.get(NormalizeFontName(fontName) ?? "");
        if (!preferred) {
            return this.fonts;
        }
        return [preferred, ...this.fonts.filter(font => font !== preferred)];
    }
}
