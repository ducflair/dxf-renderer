import { DxfViewer } from "../src/index.js";
import * as THREE from "three";

// DOM Elements
const canvasContainer = document.getElementById("canvas-container") as HTMLDivElement;
const uploaderOverlay = document.getElementById("uploader-overlay") as HTMLDivElement;
const uploaderCard = document.getElementById("uploader-card") as HTMLDivElement;
const fileInput = document.getElementById("file-input") as HTMLInputElement;
const fileBadge = document.getElementById("file-badge") as HTMLDivElement;
const btnOpenFile = document.getElementById("btn-open-file") as HTMLButtonElement;
const btnBrowseFile = document.getElementById("btn-browse-file") as HTMLButtonElement;
const btnToggleLayers = document.getElementById("btn-toggle-layers") as HTMLButtonElement;
const btnCloseLayers = document.getElementById("btn-close-layers") as HTMLButtonElement;
const btnToggleAllLayers = document.getElementById("btn-toggle-all-layers") as HTMLButtonElement;
const layersPanel = document.getElementById("layers-panel") as HTMLElement;
const layersList = document.getElementById("layers-list") as HTMLDivElement;
const layerSearch = document.getElementById("layer-search") as HTMLInputElement;
const layersBtnLabel = document.getElementById("layers-btn-label") as HTMLSpanElement;
const layoutsBar = document.getElementById("layouts-bar") as HTMLElement;
const viewControls = document.getElementById("view-controls") as HTMLDivElement;
const ctrlZoomIn = document.getElementById("ctrl-zoom-in") as HTMLButtonElement;
const ctrlZoomOut = document.getElementById("ctrl-zoom-out") as HTMLButtonElement;
const ctrlFit = document.getElementById("ctrl-fit") as HTMLButtonElement;
const ctrlCenter = document.getElementById("ctrl-center") as HTMLButtonElement;
const btnTheme = document.getElementById("btn-theme") as HTMLButtonElement;
const loadingModal = document.getElementById("loading-modal") as HTMLDivElement;
const loadingText = document.getElementById("loading-text") as HTMLDivElement;
const progressBar = document.getElementById("progress-bar") as HTMLDivElement;

// State
let viewer: DxfViewer | null = null;
let currentBlobUrl: string | null = null;
let isDarkTheme = true;
let layerVisibility = new Map<string, boolean>();
let layerData: Array<{ name: string; displayName: string; color: number }> = [];

// Initialize DxfViewer
function getViewerInstance(): DxfViewer {
  if (viewer) return viewer;

  viewer = new DxfViewer(canvasContainer, {
    autoResize: true,
    antialias: true,
    clearColor: new THREE.Color(isDarkTheme ? "#111827" : "#ffffff"),
    clearAlpha: 1.0,
    retainParsedDxf: true,
    blackWhiteInversion: true,
  });

  return viewer;
}

// Progress feedback
function setProgress(phase: string, current: number, total: number | null) {
  let phaseName = "Processing DXF...";
  if (phase === "fetch") phaseName = "Fetching DXF data...";
  else if (phase === "font") phaseName = "Loading fonts...";
  else if (phase === "parse") phaseName = "Parsing DXF entities...";
  else if (phase === "prepare") phaseName = "Generating WebGL batches...";

  loadingText.textContent = phaseName;
  if (total && total > 0) {
    const percent = Math.min(100, Math.round((current / total) * 100));
    progressBar.style.width = `${percent}%`;
  } else {
    progressBar.style.width = "70%";
  }
}

function showLoading(initialText = "Loading DXF...") {
  loadingText.textContent = initialText;
  progressBar.style.width = "15%";
  loadingModal.classList.remove("hidden");
}

function hideLoading() {
  loadingModal.classList.add("hidden");
  progressBar.style.width = "0%";
}

// Format bytes
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Standard CAD font stack with local Roboto and online NotoSans fallback for symbols
const CAD_FONTS = [
  {
    url: new URL("./fonts/Roboto-Regular.ttf", window.location.href).href,
    names: [
      "Standard",
      "Arial",
      "Helvetica",
      "Roboto",
      "txt",
      "simplex",
      "romans",
      "isocp",
      "iso",
      "simplex.shx",
      "txt.shx",
      "romans.shx",
    ],
  },
  "https://cdn.jsdelivr.net/gh/notofonts/noto-fonts@main/hinted/ttf/NotoSans/NotoSans-Regular.ttf",
  "https://cdn.jsdelivr.net/gh/notofonts/noto-fonts@main/hinted/ttf/NotoSansSymbols/NotoSansSymbols-Regular.ttf",
  "https://cdn.jsdelivr.net/gh/notofonts/noto-fonts@main/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf",
  "https://cdn.jsdelivr.net/gh/notofonts/noto-fonts@main/hinted/ttf/NotoSansMath/NotoSansMath-Regular.ttf",
];

// Load DXF from URL
async function loadDxfFromUrl(url: string, fileName: string, fileSize?: number) {
  try {
    showLoading("Initializing CAD renderer...");
    const v = getViewerInstance();

    // Setup worker factory relative to the current bundle
    const workerFactory = () => {
      try {
        return new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
      } catch (e) {
        console.warn("Could not create Web Worker, falling back to main thread", e);
        return null as any;
      }
    };

    await v.Load({
      url,
      fonts: CAD_FONTS,
      workerFactory,
      progressCbk: (phase, processed, total) => {
        setProgress(phase, processed, total);
      },
    });

    // Update UI badge
    fileBadge.textContent = `${fileName}${fileSize ? ` (${formatBytes(fileSize)})` : ""}`;
    fileBadge.classList.remove("hidden");

    // Hide uploader overlay, show viewport controls
    uploaderOverlay.classList.add("hidden");
    viewControls.classList.remove("hidden");

    // Fit view to bounds
    fitDrawingView();

    // Populate Layers and Layouts
    updateLayersUI();
    updateLayoutsUI();

    hideLoading();
  } catch (error) {
    hideLoading();
    console.error("Failed to load DXF:", error);
    alert(`Failed to load DXF drawing: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Load file from File object
async function handleFile(file: File) {
  if (!file.name.toLowerCase().endsWith(".dxf")) {
    alert("Please select a valid .dxf file.");
    return;
  }

  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
  }
  currentBlobUrl = URL.createObjectURL(file);
  await loadDxfFromUrl(currentBlobUrl, file.name, file.size);
}

// Fit View
function fitDrawingView() {
  if (!viewer) return;
  const bounds = viewer.GetBounds();
  const origin = viewer.GetOrigin();
  if (bounds && origin) {
    viewer.FitView(
      bounds.minX - origin.x,
      bounds.maxX - origin.x,
      bounds.minY - origin.y,
      bounds.maxY - origin.y,
      0.15
    );
  }
}

// Populate and manage Layers
function updateLayersUI() {
  if (!viewer) return;
  const layers = Array.from(viewer.GetLayers());
  layerData = layers;
  layerVisibility.clear();

  layersList.innerHTML = "";
  layersBtnLabel.textContent = `Layers (${layers.length})`;

  if (layers.length === 0) {
    layersList.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 0.85rem;">No layers found in drawing.</div>`;
    return;
  }

  renderLayersList(layerSearch.value.trim().toLowerCase());
}

function renderLayersList(filter = "") {
  layersList.innerHTML = "";
  const filtered = layerData.filter(l => l.name.toLowerCase().includes(filter));

  for (const layer of filtered) {
    const isVisible = layerVisibility.has(layer.name) ? layerVisibility.get(layer.name)! : true;
    layerVisibility.set(layer.name, isVisible);

    const item = document.createElement("div");
    item.className = "layer-item";

    const colorHex = `#${(layer.color & 0xffffff).toString(16).padStart(6, "0")}`;

    item.innerHTML = `
      <input type="checkbox" ${isVisible ? "checked" : ""} data-layer="${layer.name}">
      <span class="layer-color-dot" style="background-color: ${colorHex}"></span>
      <span class="layer-name" title="${layer.name}">${layer.name}</span>
    `;

    const checkbox = item.querySelector("input")!;
    checkbox.addEventListener("change", (e) => {
      e.stopPropagation();
      const visible = checkbox.checked;
      layerVisibility.set(layer.name, visible);
      viewer?.ShowLayer(layer.name, visible);
    });

    item.addEventListener("click", () => {
      checkbox.checked = !checkbox.checked;
      const visible = checkbox.checked;
      layerVisibility.set(layer.name, visible);
      viewer?.ShowLayer(layer.name, visible);
    });

    layersList.appendChild(item);
  }
}

// Populate and manage Layouts / Sheets
function updateLayoutsUI() {
  if (!viewer) return;
  const layouts = Array.from(viewer.GetLayouts());
  layoutsBar.innerHTML = "";

  if (layouts.length <= 1) {
    layoutsBar.classList.add("hidden");
    return;
  }

  layoutsBar.classList.remove("hidden");
  const activeLayout = viewer.GetActiveLayout();

  for (const layout of layouts) {
    const tab = document.createElement("button");
    tab.className = `layout-tab ${layout.name === activeLayout ? "active" : ""}`;
    const iconSvg = layout.isModel
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;
    tab.innerHTML = `${iconSvg}<span>${layout.name}</span>`;

    tab.addEventListener("click", async () => {
      if (layout.name === viewer?.GetActiveLayout()) return;

      showLoading(`Switching to sheet: ${layout.name}...`);
      try {
        await viewer?.SetLayout(layout.name);
        fitDrawingView();
        updateLayoutsUI();
      } catch (err) {
        console.error("Error switching layout:", err);
      } finally {
        hideLoading();
      }
    });

    layoutsBar.appendChild(tab);
  }
}

// Toggle Theme (Dark CAD / Light Paper)
function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.documentElement.setAttribute("data-theme", isDarkTheme ? "dark" : "light");

  const canvasBg = new THREE.Color(isDarkTheme ? "#111827" : "#ffffff");
  if (viewer) {
    const renderer = viewer.GetRenderer();
    renderer?.setClearColor(canvasBg, 1.0);
    viewer.Render();
  }
}

// Event Listeners
btnOpenFile.addEventListener("click", () => fileInput.click());
btnBrowseFile.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  if (fileInput.files && fileInput.files[0]) {
    handleFile(fileInput.files[0]);
    fileInput.value = "";
  }
});

// Drag & Drop Handling
uploaderCard.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploaderCard.classList.add("drag-over");
});

uploaderCard.addEventListener("dragleave", () => {
  uploaderCard.classList.remove("drag-over");
});

uploaderCard.addEventListener("drop", (e) => {
  e.preventDefault();
  uploaderCard.classList.remove("drag-over");
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    handleFile(e.dataTransfer.files[0]);
  }
});

// Window-wide drag & drop
window.addEventListener("dragover", (e) => e.preventDefault());
window.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    handleFile(e.dataTransfer.files[0]);
  }
});

// Layers Panel Drawer
btnToggleLayers.addEventListener("click", () => {
  layersPanel.classList.toggle("open");
});

btnCloseLayers.addEventListener("click", () => {
  layersPanel.classList.remove("open");
});

layerSearch.addEventListener("input", (e) => {
  renderLayersList((e.target as HTMLInputElement).value.trim().toLowerCase());
});

let allLayersVisible = true;
btnToggleAllLayers.addEventListener("click", () => {
  if (!viewer) return;
  allLayersVisible = !allLayersVisible;
  for (const layer of layerData) {
    layerVisibility.set(layer.name, allLayersVisible);
    viewer.ShowLayer(layer.name, allLayersVisible);
  }
  renderLayersList(layerSearch.value.trim().toLowerCase());
});

// View Controls
ctrlZoomIn.addEventListener("click", () => {
  if (!viewer) return;
  const cam = viewer.GetCamera();
  cam.zoom *= 1.25;
  cam.updateProjectionMatrix();
  viewer.Render();
});

ctrlZoomOut.addEventListener("click", () => {
  if (!viewer) return;
  const cam = viewer.GetCamera();
  cam.zoom /= 1.25;
  cam.updateProjectionMatrix();
  viewer.Render();
});

ctrlFit.addEventListener("click", fitDrawingView);

ctrlCenter.addEventListener("click", () => {
  if (!viewer) return;
  const bounds = viewer.GetBounds();
  if (bounds) {
    const width = bounds.maxX - bounds.minX;
    viewer.SetView({ x: 0, y: 0 }, width || 100);
  }
});

btnTheme.addEventListener("click", toggleTheme);

// Keyboard Shortcuts
window.addEventListener("keydown", (e) => {
  if (e.key === "f" || e.key === "F") {
    fitDrawingView();
  } else if (e.key === "+" || e.key === "=") {
    ctrlZoomIn.click();
  } else if (e.key === "-") {
    ctrlZoomOut.click();
  }
});
