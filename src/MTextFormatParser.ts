/** Parses MTEXT formatted text into more convenient intermediate representation. The MTEXT
 * formatting is not well documented, the only sources I found:
 * https://web.archive.org/web/20250910173415/https://adndevblog.typepad.com/autocad/2017/09/dissecting-mtext-format-codes.html
 * https://ezdxf.readthedocs.io/en/stable/dxfentities/mtext.html#mtext-inline-codes
 */

import colorTable from "./parser/AutoCadColorIndex.js";

const State = Object.freeze({
    TEXT: 0,
    ESCAPE: 1,
    /* Skip currently unsupported format codes till ';' */
    SKIP_FORMAT: 2,
    /* For \pxq* paragraph formatting. Not found documentation yet, so temporal naming for now. */
    PARAGRAPH1: 3,
    PARAGRAPH2: 4,
    PARAGRAPH3: 5,
    /* Parsing \Cxxx color code. */
    COLOR: 6,
    FONT_HEIGHT: 7,
    TRACKING: 8,
    WIDTH_FACTOR: 9,
    FONT_NAME: 10
});

export const MTextEntityType = Object.freeze({
    TEXT: 0,
    SCOPE: 1,
    PARAGRAPH: 2,
    NON_BREAKING_SPACE: 3,
    /** "alignment" property is either "r", "c", "l", "j", "d" for right, center, left, justify
     * (seems to be the same as left), distribute (justify) alignment.
     */
    PARAGRAPH_ALIGNMENT: 4,
    /** \Cxxx color code. "color" property specified (index resolved to actual color value). */
    COLOR: 5,
    FONT_HEIGHT: 6,
    TRACKING: 7,
    WIDTH_FACTOR: 8,
    FONT_NAME: 9,
    TAB: 10
    /* Many others are not yet implemented. */
});

export type MTextFormatEntity = {
    type: number;
    content?: any;
    color?: number;
    alignment?: string;
    factor?: number;
    height?: number;
    tracking?: number;
    widthFactor?: number;
    fontName?: string;
};

/** Single letter format codes which are not terminated by ";". */
const shortFormats = new Set([
    "L", "l", "O", "o", "K", "k", "P", "X", "~"
]);

const longFormats = new Set([
    "f", "F", "p", "Q", "H", "W", "S", "A", "C", "T"
]);

const validEscapes = new Set([
    "\\", "{", "}"
]);

export class MTextFormatParser {
    static EntityType = MTextEntityType;

    entities: MTextFormatEntity[];

    constructor() {
        this.entities = [];
    }

    Parse(text: string): void {
        text = text.replace(/\^J|\r\n|\n|\u2028|\u2029/g, "\\P");
        const n = text.length;
        let textStart = 0;
        let state: number = State.TEXT;
        const scopeStack: MTextFormatEntity[] = [];
        let curEntities = this.entities;
        let curPos = 0;
        const _this = this;

        function EmitText() {
            if (state !== State.TEXT || textStart === curPos) {
                return;
            }
            curEntities.push({
                type: MTextEntityType.TEXT,
                content: text.slice(textStart, curPos)
            });
            textStart = curPos;
        }

        function EmitEntity(type: number) {
            curEntities.push({ type });
        }

        function EmitColor() {
            const s = text.slice(textStart, curPos);
            const colorIndex = parseInt(s, 10);
            if (isNaN(colorIndex)) {
                return;
            }
            if (colorIndex < 1 || colorIndex > 255) {
                return;
            }
            /* We actually allow whole color table indices for better compatibility. */
            curEntities.push({ type: MTextEntityType.COLOR, color: colorTable[colorIndex] });
        }

        function PushScope() {
            const scope: MTextFormatEntity = {
                type: MTextEntityType.SCOPE,
                content: []
            };
            curEntities.push(scope);
            curEntities = scope.content;
            scopeStack.push(scope);
        }

        function PopScope() {
            if (scopeStack.length === 0) {
                /* Stack underflow, just ignore now. */
                return;
            }
            scopeStack.pop();
            if (scopeStack.length === 0) {
                curEntities = _this.entities;
            } else {
                curEntities = scopeStack[scopeStack.length - 1].content;
            }
        }

        for (; curPos < n; curPos++) {
            const c = text.charAt(curPos);

            switch (state) {
            case State.TEXT:
                if (c === "\t" || (c === "^" && text.charAt(curPos + 1).toUpperCase() === "I")) {
                    EmitText();
                    EmitEntity(MTextEntityType.TAB);
                    if (c === "^") {
                        curPos++;
                    }
                    textStart = curPos + 1;
                    continue;
                }
                if (c === "{") {
                    EmitText();
                    PushScope();
                    textStart = curPos + 1;
                    continue;
                }
                if (c === "}") {
                    EmitText();
                    PopScope();
                    textStart = curPos + 1;
                    continue;
                }
                if (c === "\\") {
                    EmitText();
                    state = State.ESCAPE;
                    continue;
                }
                continue;

            case State.ESCAPE:
                if (shortFormats.has(c)) {
                    switch (c) {
                    case "P":
                        EmitEntity(MTextEntityType.PARAGRAPH);
                        break;
                    case "~":
                        EmitEntity(MTextEntityType.NON_BREAKING_SPACE);
                        break;
                    }
                    state = State.TEXT;
                    textStart = curPos + 1;
                    continue;
                }
                if (longFormats.has(c)) {
                    switch (c) {
                    case "p":
                        state = State.PARAGRAPH1;
                        continue;
                    case "C":
                        state = State.COLOR;
                        textStart = curPos + 1;
                        continue;
                    case "H":
                        state = State.FONT_HEIGHT;
                        textStart = curPos + 1;
                        continue;
                    case "T":
                        state = State.TRACKING;
                        textStart = curPos + 1;
                        continue;
                    case "W":
                        state = State.WIDTH_FACTOR;
                        textStart = curPos + 1;
                        continue;
                    case "f":
                    case "F":
                        state = State.FONT_NAME;
                        textStart = curPos + 1;
                        continue;
                    }
                    state = State.SKIP_FORMAT;
                    continue;
                }
                /* Include current character into a next text chunk. Backslash is also included if
                 * character is not among allowed ones (that is how Autodesk viewer behaves).
                 */
                if (validEscapes.has(c)) {
                    textStart = curPos;
                } else {
                    textStart = curPos - 1;
                }
                state = State.TEXT;
                continue;

            case State.PARAGRAPH1:
                state = c === "x" ? State.PARAGRAPH2 : State.SKIP_FORMAT;
                continue;

            case State.PARAGRAPH2:
                state = c === "q" ? State.PARAGRAPH3 : State.SKIP_FORMAT;
                continue;

            case State.PARAGRAPH3:
                curEntities.push({ type: MTextEntityType.PARAGRAPH_ALIGNMENT, alignment: c });
                state = State.SKIP_FORMAT;
                continue;

            case State.SKIP_FORMAT:
                if (c === ";") {
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            case State.COLOR:
                if (c === ";") {
                    EmitColor();
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            case State.FONT_HEIGHT:
                if (c === ";") {
                    const s = text.slice(textStart, curPos).trim();
                    if (s.endsWith("x") || s.endsWith("X")) {
                        const val = parseFloat(s.slice(0, -1));
                        if (!isNaN(val) && val > 0) {
                            curEntities.push({ type: MTextEntityType.FONT_HEIGHT, factor: val });
                        }
                    } else {
                        const val = parseFloat(s);
                        if (!isNaN(val) && val > 0) {
                            curEntities.push({ type: MTextEntityType.FONT_HEIGHT, height: val });
                        }
                    }
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            case State.TRACKING:
                if (c === ";") {
                    let s = text.slice(textStart, curPos).trim();
                    if (s.endsWith("x") || s.endsWith("X")) {
                        s = s.slice(0, -1);
                    }
                    const val = parseFloat(s);
                    if (!isNaN(val) && val > 0) {
                        curEntities.push({ type: MTextEntityType.TRACKING, tracking: val });
                    }
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            case State.WIDTH_FACTOR:
                if (c === ";") {
                    const s = text.slice(textStart, curPos).trim();
                    const val = parseFloat(s);
                    if (!isNaN(val) && val > 0) {
                        curEntities.push({ type: MTextEntityType.WIDTH_FACTOR, widthFactor: val });
                    }
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            case State.FONT_NAME:
                if (c === ";") {
                    const s = text.slice(textStart, curPos).trim();
                    const [family, ...flags] = s.split("|");
                    const suffix = [flags.includes("b1") ? "Bold" : "", flags.includes("i1") ? "Italic" : ""].filter(Boolean).join(" ");
                    const fontName = suffix ? `${family} ${suffix}` : family;
                    if (fontName) {
                        curEntities.push({ type: MTextEntityType.FONT_NAME, fontName });
                    }
                    textStart = curPos + 1;
                    state = State.TEXT;
                }
                continue;

            default:
                throw new Error("Unhandled state");
            }
        }

        EmitText();
    }

    /**
     * @return List of format chunks. Each chunk is either a text chunk with
     * TEXT type or some format entity. Entity with type SCOPE represents format scope which has
     * nested list of entities in "content" property.
     */
    GetContent(): MTextFormatEntity[] {
        return this.entities;
    }

    /** Return only text chunks in a flattened sequence of strings. */
    *GetText(): Generator<string> {
        function* TraverseItems(items: MTextFormatEntity[]): Generator<string> {
            for (const item of items) {
                if (item.type === MTextEntityType.TEXT) {
                    yield item.content;
                } else if (item.type === MTextEntityType.SCOPE && Array.isArray(item.content)) {
                    yield* TraverseItems(item.content);
                }
            }
        }

        yield* TraverseItems(this.GetContent());
    }
}
