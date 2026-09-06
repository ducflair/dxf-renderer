import type * as THREE from "three";

/** See TextRenderer.DefaultOptions for default values and documentation. */
export type TextRendererOptions = {
    curveSubdivision?: number;
    fallbackChar?: string;
};

export const DefaultTextRendererOptions: Required<TextRendererOptions> = {
    curveSubdivision: 2,
    fallbackChar: "\uFFFD?"
};

/** See DxfScene.DefaultOptions for default values and documentation. */
export type DxfSceneOptions = {
    arcTessellationAngle?: number;
    minArcTessellationSubdivisions?: number;
    wireframeMesh?: boolean;
    suppressPaperSpace?: boolean;
    suppressNonPlotLayers?: boolean;
    layout?: string;
    textOptions?: TextRendererOptions;
};

/** See DxfViewer.DefaultOptions for default values and documentation. */
export type DxfViewerOptions = {
    canvasWidth?: number;
    canvasHeight?: number;
    autoResize?: boolean;
    clearColor?: THREE.Color;
    clearAlpha?: number;
    canvasAlpha?: boolean;
    canvasPremultipliedAlpha?: boolean;
    antialias?: boolean;
    colorCorrection?: boolean;
    blackWhiteInversion?: boolean;
    pointSize?: number;
    sceneOptions?: DxfSceneOptions;
    retainParsedDxf?: boolean;
    preserveDrawingBuffer?: boolean;
    fileEncoding?: string;
    renderer?: THREE.WebGLRenderer | null;
};

export type DxfViewerFontSource = string | { url: string; names?: string[] };
export type DxfViewerImageSource = string | { url: string; names: string[] };

export type DxfLayoutInfo = {
    id: string;
    name: string;
    tabOrder: number;
    isModel: boolean;
    isActive: boolean;
};

export type DxfViewerLoadParams = {
    url: string;
    fonts?: DxfViewerFontSource[] | null;
    images?: DxfViewerImageSource[] | null;
    progressCbk?: ((phase: "font" | "fetch" | "parse" | "prepare",
                   processedSize: number, totalSize: number | null) => void) | null;
    workerFactory?: (() => Worker) | null;
};

export type LayerInfo = {
    name: string;
    displayName: string;
    color: number;
};

export type EventName = "loaded" | "cleared" | "destroyed" | "resized" | "pointerdown" |
    "pointerup" | "viewChanged" | "message";

export type FontFetcher = {
    (): Promise<any>;
    fontNames?: string[];
};
