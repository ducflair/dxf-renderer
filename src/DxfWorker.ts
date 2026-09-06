import { DxfFetcher } from "./DxfFetcher.js";
import { DxfScene } from "./DxfScene.js";
import * as opentype from "opentype.js";
import type { DxfViewerOptions, FontFetcher } from "./types.js";

const MSG_SIGNATURE = "DxfWorkerMsg";

export class DxfWorkerRequest {
    seq: number;
    progressCbk: ((phase: string, size: number, totalSize: number | null) => void) | null;
    promise: Promise<any>;
    private _Resolve!: (value: any) => void;
    private _Reject!: (reason?: any) => void;

    constructor(seq: number, progressCbk: ((phase: string, size: number, totalSize: number | null) => void) | null = null) {
        this.seq = seq;
        this.progressCbk = progressCbk;
        this.promise = new Promise((resolve, reject) => {
            this._Resolve = resolve;
            this._Reject = reject;
        });
    }

    async GetResponse(): Promise<any> {
        return await this.promise;
    }

    SetResponse(response: any): void {
        this._Resolve(response);
    }

    SetError(error: any): void {
        this._Reject(error);
    }
}

export const DxfWorkerMsg = {
    LOAD: "LOAD",
    PROGRESS: "PROGRESS",
    DESTROY: "DESTROY"
} as const;

/** Wraps web-worker instance and provides unified interface to its services, including the when
 * web-worker is not used and all heavy operations are performed in main thread.
 */
export class DxfWorker {
    static WorkerMsg = DxfWorkerMsg;
    static Request = DxfWorkerRequest;

    worker: any;
    reqSeq: number = 1;
    requests: Map<number, DxfWorkerRequest> = new Map();
    progressCbk: any = null;

    /** @param worker Web worker instance with DxfViewer.SetupWorker() function called. Can be null
     *  for synchronous operations.
     *  @param isWorker True for worker-side wrapper.
     */
    constructor(worker: any, isWorker: boolean = false) {
        this.worker = worker;
        if (isWorker) {
            worker.onmessage = this._ProcessRequest.bind(this);
        } else if (worker) {
            worker.addEventListener("message", this._ProcessResponse.bind(this), false);
            worker.addEventListener("error", this._OnError.bind(this), false);
            this.reqSeq = 1;
            /* Indexed by sequence. */
            this.requests = new Map();
            this.progressCbk = null;
        }
    }

    /**
     * @param url DXF file URL.
     * @param fonts Fonts URLs.
     * @param options Viewer options. See DxfViewer.DefaultOptions.
     * @param progressCbk (phase, processedSize, totalSize)
     */
    async Load(
        url: string,
        fonts?: any[] | null,
        options?: DxfViewerOptions | null,
        progressCbk?: ((phase: string, processedSize: number, totalSize: number | null) => void) | null
    ): Promise<any> {
        if (this.worker) {
            return this._SendRequest(DxfWorker.WorkerMsg.LOAD,
                                     { url, fonts, options: this._CloneOptions(options) },
                                     progressCbk);
        } else {
            return this._Load(url, fonts, options, progressCbk);
        }
    }

    async Destroy(noWait: boolean = false): Promise<void> {
        if (this.worker) {
            if (!noWait) {
                await this._SendRequest(DxfWorker.WorkerMsg.DESTROY);
            }
            /* close() in the worker is not enough, instance is still visible in dev tools. */
            this.worker.terminate();
        }
    }

    async _ProcessRequest(event: any): Promise<void> {
        const msg = event.data;
        if (msg.signature !== MSG_SIGNATURE) {
            console.log("Message with bad signature", msg);
            return;
        }
        const resp: any = { seq: msg.seq, type: msg.type, signature: MSG_SIGNATURE };
        const transfers: any[] = [];
        try {
            resp.data = await this._ProcessRequestMessage(msg.type, msg.data, transfers, msg.seq);
        } catch (error) {
            console.error(error);
            resp.error = String(error);
        }
        this.worker.postMessage(resp, transfers);
        if (msg.type === DxfWorker.WorkerMsg.DESTROY) {
            this.worker.onmessage = null;
            this.worker.close();
            this.worker = null;
        }
    }

    async _ProcessRequestMessage(type: string, data: any, transfers: any[], seq: number): Promise<any> {
        switch (type) {
        case DxfWorker.WorkerMsg.LOAD: {
            const { scene, dxf } = await this._Load(
                data.url,
                data.fonts,
                data.options,
                (phase: string, size: number, totalSize: number | null) => this._SendProgress(seq, phase, size, totalSize));
            transfers.push(scene.vertices);
            transfers.push(scene.indices);
            transfers.push(scene.transforms);
            for (const frame of scene.oleFrames || []) {
                transfers.push(frame.oleData);
                transfers.push(frame.emfData);
            }
            if (scene.modelScene) {
                transfers.push(scene.modelScene.vertices);
                transfers.push(scene.modelScene.indices);
                transfers.push(scene.modelScene.transforms);
                for (const frame of scene.modelScene.oleFrames || []) {
                    transfers.push(frame.oleData);
                    transfers.push(frame.emfData);
                }
            }
            return { scene, dxf };
        }
        case DxfWorker.WorkerMsg.DESTROY:
            return null;
        default:
            throw new Error("Unknown message type: " + type);
        }
    }

    async _ProcessResponse(event: any): Promise<void> {
        const msg = event.data;
        if (msg.signature !== MSG_SIGNATURE) {
            console.log("Message with bad signature", msg);
            return;
        }
        const seq = msg.seq;
        const req = this.requests.get(seq);
        if (!req) {
            console.error("Unmatched message sequence: ", seq);
            return;
        }
        const data = msg.data;
        if (msg.type === DxfWorker.WorkerMsg.PROGRESS) {
            if (req.progressCbk) {
                req.progressCbk(data.phase, data.size, data.totalSize);
            }
            return;
        }
        this.requests.delete(seq);
        if (Object.prototype.hasOwnProperty.call(msg, "error")) {
            req.SetError(msg.error);
        } else {
            req.SetResponse(data);
        }
    }

    async _OnError(error: any): Promise<void> {
        console.error("DxfWorker worker error", error);
        const requests = Array.from(this.requests.values());
        this.requests.clear();
        requests.forEach(req => req.SetError(error));
    }

    async _SendRequest(type: string, data: any = null, progressCbk: any = null): Promise<any> {
        const seq = this.reqSeq++;
        const req = new DxfWorker.Request(seq, progressCbk);
        this.requests.set(seq, req);
        this.worker.postMessage({ seq, type, data, signature: MSG_SIGNATURE });
        return await req.GetResponse();
    }

    _SendProgress(seq: number, phase: string, size: number, totalSize: number | null): void {
        this.worker.postMessage({
            seq,
            type: DxfWorker.WorkerMsg.PROGRESS,
            data: { phase, size, totalSize },
            signature: MSG_SIGNATURE
        });
    }

    /** @return DxfScene serialized scene. */
    async _Load(url: string, fonts?: any[] | null, options: any = {}, progressCbk?: any): Promise<any> {
        let fontFetchers: FontFetcher[];
        if (fonts) {
            fontFetchers = this._CreateFontFetchers(fonts, progressCbk);
        } else {
            fontFetchers = [];
        }
        const dxf = await new DxfFetcher(url, options.fileEncoding).Fetch(progressCbk);
        if (progressCbk) {
            progressCbk("prepare", 0, null);
        }
        if (!options.sceneOptions) {
            options.sceneOptions = {};
        }
        if (options.sceneOptions.suppressPaperSpace === undefined && options.sceneOptions.layout === undefined) {
            const sheets = (dxf.layouts || []).filter((l: any) => !l.isModel);
            if (sheets.length > 0) {
                options.sceneOptions.suppressPaperSpace = false;
                options.sceneOptions.layout = sheets[0].name;
            } else {
                options.sceneOptions.suppressPaperSpace = true;
                options.sceneOptions.layout = "Model";
            }
        }
        const dxfScene = new DxfScene(options);
        await dxfScene.Build(dxf, fontFetchers);
        const activeLayout = (dxf.layouts || []).find((l: any) => l.name === dxfScene.scene.activeLayout);
        if (activeLayout && !activeLayout.isModel) {
            const modelOptions = this._CloneOptions(options);
            modelOptions.sceneOptions = {
                ...(modelOptions.sceneOptions || {}),
                suppressPaperSpace: true,
                layout: "Model"
            };
            const modelDxfScene = new DxfScene(modelOptions);
            await modelDxfScene.Build(dxf, fontFetchers);
            dxfScene.scene.modelScene = modelDxfScene.scene;
            const layerNamesByHandle = new Map(Object.values(dxf.tables?.layer?.layers || {})
                .filter((layer: any) => layer.handle)
                .map((layer: any) => [layer.handle, layer.name]));
            const layoutBlock = Object.values(dxf.blocks || {}).find((b: any) =>
                (activeLayout.blockRecordHandle && b.ownerHandle === activeLayout.blockRecordHandle) ||
                (b.name && b.name.toLowerCase() === "*paper_space" && (!activeLayout.blockRecordHandle || (dxf.layouts || []).length <= 2))
            ) as any;
            const candidateEntities = [
                ...((dxf.entities as any[]) || []),
                ...((layoutBlock?.entities as any[]) || []).map((e: any) => ({ ...e, inPaperSpace: true }))
            ];
            dxfScene.scene.viewports = candidateEntities.filter(entity =>
                entity.type === "VIEWPORT" &&
                entity.inPaperSpace &&
                (!activeLayout.blockRecordHandle || !entity.ownerHandle || entity.ownerHandle === activeLayout.blockRecordHandle || (layoutBlock?.handle && entity.ownerHandle === layoutBlock.handle)) &&
                (entity.viewportId ?? 0) > 1 &&
                (entity.status ?? 0) > 0 &&
                (entity.width ?? 0) > 0 &&
                (entity.height ?? 0) > 0 &&
                (entity.viewHeight ?? 0) > 0).map(entity => ({
                    ...entity,
                    frozenLayers: (entity.frozenLayerHandles || [])
                        .map((handle: any) => layerNamesByHandle.get(handle))
                        .filter(Boolean)
                }));
        }
        return { scene: dxfScene.scene, dxf: options.retainParsedDxf === true ? dxf : undefined };
    }

    _CreateFontFetchers(sources: any[], progressCbk?: any): FontFetcher[] {
        function CreateFetcher(source: any): FontFetcher {
            const url = typeof source === "string" ? source : source.url;
            let fontPromise: Promise<any> | null = null;
            const fetcher: FontFetcher = async function () {
                if (!fontPromise) {
                    if (progressCbk) {
                        progressCbk("font", 0, null);
                    }
                    fontPromise = fetch(url)
                        .then(response => response.arrayBuffer())
                        .then(data => (opentype as any).parse(data));
                }
                const font = await fontPromise;
                if (progressCbk) {
                    progressCbk("prepare", 0, null);
                }
                return font;
            };
            fetcher.fontNames = typeof source === "string" ? [] : (source.names ?? []);
            return fetcher;
        }

        const fetchers: FontFetcher[] = [];
        for (const source of sources) {
            fetchers.push(CreateFetcher(source));
        }
        return fetchers;
    }

    _CloneOptions(options: any): any {
        /* Default options values are taken from prototype so need to implement deep clone here. */
        if (Array.isArray(options)) {
            return options.map(o => this._CloneOptions(o));
        } else if (typeof options === "object" && options !== null) {
            const result: Record<string, any> = {};
            for (const propName in options) {
                result[propName] = this._CloneOptions(options[propName]);
            }
            return result;
        } else {
            return options;
        }
    }
}
