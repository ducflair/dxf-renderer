import DxfParser from "./parser/DxfParser.js";

/** Fetches and parses DXF file. */
export class DxfFetcher {
    url: string;
    encoding: string;

    constructor(url: string, encoding: string = "utf-8") {
        this.url = url;
        this.encoding = encoding;
    }

    /** @param progressCbk (phase, receivedSize, totalSize) */
    async Fetch(progressCbk: ((phase: "font" | "fetch" | "parse" | "prepare", receivedSize: number, totalSize: number | null) => void) | null = null): Promise<any> {
        const response = await fetch(this.url);
        const contentLength = response.headers.get('Content-Length');
        const totalSize = contentLength ? +contentLength : null;

        if (!response.body) {
            throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        let receivedSize = 0;
        let buffer = "";
        let decoder = new TextDecoder(this.encoding);
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                buffer += decoder.decode(new ArrayBuffer(0), { stream: false });
                break;
            }
            buffer += decoder.decode(value, { stream: true });
            receivedSize += value.length;
            if (progressCbk !== null) {
                progressCbk("fetch", receivedSize, totalSize);
            }
        }

        if (progressCbk !== null) {
            progressCbk("parse", 0, null);
        }
        const parser = new (DxfParser as any)();
        return parser.parseSync(buffer);
    }
}
