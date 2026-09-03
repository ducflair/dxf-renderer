/**
 * build.ts — Bun build script for dxf-renderer
 *
 * Produces:
 *   dist/index.js           — ESM bundle
 *   dist/index.cjs          — CJS bundle
 *   dist/SetupWorker.js     — ESM worker entry
 *   dist/SetupWorker.cjs    — CJS worker entry
 *   dist/index.d.ts         — Entry declaration re-export
 *   dist/SetupWorker.d.ts   — Worker declaration re-export
 *   dist/types/             — Cleanly encapsulated declaration files
 */

import { $ } from 'bun';
import { existsSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = import.meta.dir;
const distDir = join(root, 'dist');

// Clean dist directory
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

const externals = [
  'three',
  'three/*',
  'cfb',
  'cfb/*',
  'exceljs',
  'exceljs/*',
  'earcut',
  'emf-converter',
  'opentype.js',
  'loglevel',
  'node:*',
];

// ---------------------------------------------------------------------------
// ESM bundle
// ---------------------------------------------------------------------------
console.log('▶ Building ESM bundle…');
const esm = await Bun.build({
  entrypoints: [join(root, 'src/index.ts'), join(root, 'src/SetupWorker.ts')],
  outdir: distDir,
  format: 'esm',
  target: 'browser',
  external: externals,
  sourcemap: 'external',
  minify: true,
});

if (!esm.success) {
  console.error('✗ ESM build failed:', esm.logs);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// CJS bundle
// ---------------------------------------------------------------------------
console.log('▶ Building CJS bundle…');
const cjs = await Bun.build({
  entrypoints: [join(root, 'src/index.ts'), join(root, 'src/SetupWorker.ts')],
  outdir: distDir,
  format: 'cjs',
  target: 'browser',
  external: externals,
  naming: '[name].cjs',
  sourcemap: 'external',
  minify: true,
});

if (!cjs.success) {
  console.error('✗ CJS build failed:', cjs.logs);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// TypeScript declarations
// ---------------------------------------------------------------------------
console.log('▶ Generating TypeScript declarations in dist/types/…');
await $`node node_modules/typescript/bin/tsc --project tsconfig.build.json`.cwd(root);

// Provide root re-export declarations for compatibility
writeFileSync(
  join(distDir, 'index.d.ts'),
  'export * from "./types/index.js";\nexport type * from "./types/types.js";\n'
);
writeFileSync(
  join(distDir, 'SetupWorker.d.ts'),
  'export * from "./types/SetupWorker.js";\n'
);

console.log('✓ Build complete → dist/');
