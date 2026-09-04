import { join } from "node:path";
import { existsSync, watch } from "node:fs";

const PORT = Number(process.env.PORT) || 3000;
const docsDir = join(import.meta.dir, "../docs");
const demoDir = join(import.meta.dir, "../demo");
const srcDir = join(import.meta.dir, "../src");

// 1. Initial build if needed
async function rebuild() {
  console.log("⚡ Rebuilding demo bundle…");
  const proc = Bun.spawn(["bun", "run", join(import.meta.dir, "build-demo.ts")], {
    stdout: "inherit",
    stderr: "inherit",
  });
  await proc.exited;
}

if (!existsSync(join(docsDir, "index.html")) || !existsSync(join(docsDir, "app.js"))) {
  await rebuild();
}

// 2. File watcher for live recompilation
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
function triggerRebuild() {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    await rebuild();
    console.log("✓ Rebuild complete! Refresh your browser.\n");
  }, 200);
}

watch(demoDir, { recursive: true }, (event, filename) => {
  if (filename) {
    console.log(`[watch] ${filename} changed`);
    triggerRebuild();
  }
});

watch(srcDir, { recursive: true }, (event, filename) => {
  if (filename) {
    console.log(`[watch] ${filename} changed`);
    triggerRebuild();
  }
});

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".dxf": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

// 3. HTTP Server with automatic port fallback
function startServer(initialPort: number) {
  for (let port = initialPort; port < initialPort + 100; port++) {
    try {
      const server = Bun.serve({
        port,
        fetch(req) {
          const url = new URL(req.url);
          let pathname = url.pathname;
          if (pathname === "/" || pathname === "") {
            pathname = "/index.html";
          }

          const filePath = join(docsDir, pathname);
          if (!existsSync(filePath)) {
            return new Response("Not Found", { status: 404 });
          }

          const ext = pathname.substring(pathname.lastIndexOf("."));
          const contentType = MIME_TYPES[ext] || "application/octet-stream";
          const file = Bun.file(filePath);

          return new Response(file, {
            headers: {
              "Content-Type": contentType,
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
            },
          });
        },
      });
      return server;
    } catch (e: any) {
      if (e?.code === "EADDRINUSE") {
        continue;
      }
      throw e;
    }
  }
  throw new Error("No available port found");
}

const server = startServer(PORT);

console.log("\n=======================================================");
console.log(`>> dxf-renderer dev server running at:`);
console.log(`   ➜ Local:   http://localhost:${server.port}/`);
console.log(`   Watching src/ and demo/ for changes…`);
console.log("=======================================================\n");
