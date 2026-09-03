import { Vector2 } from "three";

export type PatternLineDef = {
    /** Line angle in radians. */
    angle: number;
    /** Base point for scaling, rotation and anchoring. [0,0] if not specified. */
    base?: Vector2;
    /** Offset for line instantiation. */
    offset: Vector2;
    /** Dash lengths. Solid line if not specified. Negative numbers for
     *  spaces, positive for dashes, zero for dots. */
    dashes?: number[];
};

export class Pattern {
    lines: PatternLineDef[];
    name: string | null;
    offsetInLineSpace: boolean;

    /**
     * @param lines
     * @param name
     * @param offsetInLineSpace Line offset is defined in line space when true, in pattern
     *  space when false. Pattern space offset is the observed behavior of AutoDesk viewer for
     *  patterns defined in hatch entity itself.
     */
    constructor(lines: PatternLineDef[], name: string | null = null, offsetInLineSpace: boolean = true) {
        this.lines = lines;
        this.name = name;
        this.offsetInLineSpace = offsetInLineSpace;
    }

    /** Detect QCAD default pattern embedded in HATCH entity. It does not correspond to real pattern
     * referenced by name.
     */
    get isQcadDefault(): boolean {
        if (this.lines.length !== 1) {
            return false;
        }
        const line = this.lines[0];
        if (line.dashes) {
            return false;
        }
        if (Math.abs(line.angle - Math.PI / 4) > 10e-14) {
            return false;
        }
        return true;
    }

    static ParsePatFile(content: string): Pattern {
        const lines = content.split(/\r?\n/);
        if (lines.length < 2) {
            throw new Error("Invalid .pat file content");
        }
        let name: string | null = null;
        const lineDefs: PatternLineDef[] = [];
        for (let line of lines) {
            line = line.trim();
            if (line === "") {
                continue;
            }
            if (line.startsWith(";")) {
                continue;
            }
            if (name === null) {
                const m = line.match(/\*([^,]+)(?:,.*)?/);
                if (!m) {
                    throw new Error("Bad header for .pat file content");
                }
                name = m[1];
                continue;
            }
            const commentPos = line.indexOf(";");
            if (commentPos !== -1) {
                line = line.substring(0, commentPos).trim();
            }
            let paramsStr = line.split(/\s*,\s*/);
            /* Tolerate trailing comma. */
            if (paramsStr[paramsStr.length - 1] === "") {
                paramsStr.length = paramsStr.length - 1;
            }
            const params = paramsStr.map(s => {
                const x = parseFloat(s);
                if (isNaN(x)) {
                    throw new Error("Failed to parse number in .pat file: " + s);
                }
                return x;
            });
            const lineDef: PatternLineDef = {
                angle: params[0] * Math.PI / 180,
                base: new Vector2(params[1], params[2]),
                offset: new Vector2(params[3], params[4])
            };
            if (params.length > 5) {
                lineDef.dashes = params.slice(5);
            }
            lineDefs.push(lineDef);
        }
        return new Pattern(lineDefs, name);
    }
}

const patternsRegistryMetric = new Map<string, Pattern>();
const patternsRegistryImperial = new Map<string, Pattern>();

export function RegisterPattern(pattern: Pattern, isMetric: boolean = true): void {
    if (!pattern.name) {
        throw new Error("Anonymous pattern cannot be registered");
    }
    const name = pattern.name.toUpperCase();
    const registry = isMetric ? patternsRegistryMetric : patternsRegistryImperial;
    if (registry.has(name)) {
        console.warn(`Pattern with name ${name} is already registered`);
        return;
    }
    registry.set(name, pattern);
}

export function LookupPattern(name: string, isMetric: boolean = true): Pattern | null {
    return (isMetric ? patternsRegistryMetric : patternsRegistryImperial).get(name.toUpperCase()) ?? null;
}
