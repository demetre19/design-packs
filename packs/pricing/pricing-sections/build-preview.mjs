// Builds preview.html: all 20 components inlined, rendered with React UMD + Babel standalone + Tailwind Play CDN.
import { readFileSync, writeFileSync } from "node:fs";
const parts = [];
for (let i = 1; i <= 20; i++) {
  let src = readFileSync(new URL(`./components/Pricing${i}.jsx`, import.meta.url), "utf8");
  src = src.replace(/^import .*$/gm, "").replace("export default function", "function");
  parts.push(`window.Pricing${i} = (() => {\n${src}\nreturn Pricing${i};\n})();`);
}
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pricing Sections</title>
<script src="https://cdn.tailwindcss.com/3.4.1"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
<style>body{margin:0;background:#fff}</style>
</head><body>
<nav class="sticky top-0 z-50 flex gap-1 overflow-x-auto border-b border-slate-200 bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur">
${Array.from({ length: 20 }, (_, i) => `<a class="rounded px-2 py-1 text-slate-600 hover:bg-slate-100" href="#p${i + 1}">${i + 1}</a>`).join("")}
</nav>
<div id="root"></div>
<script type="text/babel" data-presets="react">
const { useState } = React;
${parts.join("\n\n")}
function App() {
  return <main>{Array.from({ length: 20 }, (_, i) => {
    const C = window["Pricing" + (i + 1)];
    return <div key={i} id={"p" + (i + 1)} className="relative scroll-mt-10">
      <span className="absolute left-3 top-3 z-10 rounded bg-black/70 px-2 py-0.5 font-mono text-[11px] text-white">Pricing{i + 1}</span>
      <C />
    </div>;
  })}</main>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body></html>`;
writeFileSync(new URL("./preview.html", import.meta.url), html);
console.log("preview.html written", html.length, "bytes");
