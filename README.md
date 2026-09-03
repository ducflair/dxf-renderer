# dxf-renderer [![npm](https://img.shields.io/npm/v/dxf-renderer)](https://www.npmjs.com/package/dxf-renderer)

High-performance 2D DXF renderer and viewer component for WebGL (via [Three.js](https://threejs.org)), written in TypeScript with dual ESM and CommonJS support.

> [!NOTE]
> `dxf-renderer` is an actively maintained TypeScript fork of [`dxf-viewer`](https://github.com/vagran/dxf-viewer) originally created by [Artyom Lebedev](https://github.com/vagran) / [SIA SPH Engineering](https://www.sphengineering.com).

## Install

```bash
bun add dxf-renderer
# or
npm install dxf-renderer
```

## Usage

```typescript
import { DxfViewer, DxfFetcher } from "dxf-renderer";

const canvas = document.getElementById("cad-canvas") as HTMLCanvasElement;
const viewer = new DxfViewer(canvas, {
  canvasWidth: 800,
  canvasHeight: 600,
  autoResize: true,
});

await viewer.load({
  url: "sample.dxf",
  fonts: ["fonts/Roboto-Regular.ttf"],
  progressCbk: (phase, received, total) => {
    console.log(`${phase}: ${received}/${total}`);
  },
});
```

### Web Worker Setup

File parsing and geometry generation can be delegated to a Web Worker for maximum UI responsiveness:

```typescript
// worker.ts
import { SetupWorker } from "dxf-renderer/SetupWorker";

SetupWorker();
```

```typescript
// main.ts
const viewer = new DxfViewer(canvas, {
  workerFactory: () => new Worker(new URL("./worker.ts", import.meta.url), { type: "module" }),
});
```

## Features

* **Worker Offloading**: File fetching, parsing, and buffer generation run seamlessly in a dedicated Web Worker.
* **Geometry Batching**: Merges draw calls into batch buffers minimizing total WebGL draw operations.
* **Instanced Rendering**: Repeated features (such as block references and inserts) utilize WebGL instanced rendering.
* **Multi-Font & Fallback Support**: Lazy-loads glyphs across multiple TTF fonts as characters are encountered.
* **Layer Management**: Dynamically toggle and inspect drawing layers without rebuilding geometry.
* **Paper Space & Viewports**: Supports layout sheets, viewports, and model-space projections.
* **Embedded Image & OLE Rendering**: Supports raster images and embedded OLE spreadsheets/EMF records.

## License and Attribution

This project is licensed under the terms of the [Mozilla Public License 2.0](LICENSE) (MPL-2.0).

- **Original Project**: [`dxf-viewer`](https://github.com/vagran/dxf-viewer) — Copyright (c) 2024 SIA SPH Engineering and `dxf-viewer` contributors.
- **Modifications & TypeScript Conversion**: Copyright (c) 2026 Jorge Soares and `dxf-renderer` contributors.
- **Embedded DXF Parser**: [MIT License](src/parser/LICENSE) — Copyright (c) 2015 GDS Storefront Estimating.
- **Hatch Patterns**: Derived from [QCAD](https://github.com/qcad/qcad/blob/master/patterns/metric).

To support the original creator of `dxf-viewer` (Artyom Lebedev): [![Donate](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=orange&logo=paypal)](https://www.paypal.com/donate?business=artyom.lebedev@gmail.com&no_recurring=0&item_name=To+support+`dxf-viewer`+project+maintenance.+Thank+you!&currency_code=EUR)
