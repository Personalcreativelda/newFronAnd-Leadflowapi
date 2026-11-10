// Depois do "vite build": põe o HTML da página inicial dentro de <div id="root"> em dist/index.html.
// Sem isto a página chegava vazia a quem não corre JavaScript (verificação da marca da Google).
// O app continua igual: o React desenha por cima ao abrir.
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist-prerender");

await build({
  logLevel: "warn",
  build: {
    ssr: "src/entry-prerender.tsx",
    outDir,
    emptyOutDir: true,
    rollupOptions: { output: { format: "esm", entryFileNames: "entry.mjs" } },
  },
  ssr: { noExternal: true },
});

const { render } = await import(pathToFileURL(path.join(outDir, "entry.mjs")).href);
const html = render();
if (!html || html.length < 1000) throw new Error("Prerender vazio");

const indexPath = path.join(root, "dist", "index.html");
const index = await readFile(indexPath, "utf8");
if (!index.includes('<div id="root"></div>')) throw new Error('dist/index.html sem <div id="root"></div>');
await writeFile(indexPath, index.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
await rm(outDir, { recursive: true, force: true });
console.log(`✔ Página inicial desenhada em dist/index.html (${Math.round(html.length / 1024)} KB)`);
