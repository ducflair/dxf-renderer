import { mkdir, copyFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

async function buildDemo() {
  console.log("▶ Building GitHub Pages Demo in docs/…");

  const docsDir = join(import.meta.dir, "../docs");
  const fontsDir = join(docsDir, "fonts");

  await mkdir(docsDir, { recursive: true });
  await mkdir(fontsDir, { recursive: true });

  // 1. Bundle Web Worker
  console.log("  → Bundling Web Worker (docs/worker.js)…");
  const workerBuild = await Bun.build({
    entrypoints: [join(import.meta.dir, "../demo/worker.ts")],
    outdir: docsDir,
    naming: "worker.[ext]",
    target: "browser",
    minify: true,
  });

  if (!workerBuild.success) {
    console.error("Worker build failed:", workerBuild.logs);
    process.exit(1);
  }

  // 2. Bundle App
  console.log("  → Bundling Application (docs/app.js)…");
  const appBuild = await Bun.build({
    entrypoints: [join(import.meta.dir, "../demo/app.ts")],
    outdir: docsDir,
    naming: "app.[ext]",
    target: "browser",
    minify: true,
  });

  if (!appBuild.success) {
    console.error("App build failed:", appBuild.logs);
    process.exit(1);
  }

  // 3. Copy Assets
  console.log("  → Copying HTML and CSS…");
  await copyFile(join(import.meta.dir, "../demo/index.html"), join(docsDir, "index.html"));
  await copyFile(join(import.meta.dir, "../demo/style.css"), join(docsDir, "style.css"));

  // 4. Copy Fonts
  const demoFontsDir = join(import.meta.dir, "../demo/fonts");
  if (existsSync(demoFontsDir)) {
    const fontFiles = await readdir(demoFontsDir);
    for (const file of fontFiles) {
      await copyFile(join(demoFontsDir, file), join(fontsDir, file));
    }
  }

  // 5. Create .nojekyll so GitHub Pages serves raw files without Jekyll processing
  await Bun.write(join(docsDir, ".nojekyll"), "");

  console.log("✓ GitHub Pages Demo build complete! Files ready in docs/");
}

buildDemo().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
