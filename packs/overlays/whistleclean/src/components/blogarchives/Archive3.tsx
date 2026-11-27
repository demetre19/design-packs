{/* Artifact: the numbered document register kept in the office binder | Echo: the sorted column's header keeps its underline wiped; every row is a link whose base line wipes teal | Interactions: column headers sort the register, the format select filters it, rows wipe their line on hover or focus, 300ms */}
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { authorOf, entries, fmtDate, seriesName, type Format } from "../../journal";
import { Container, Section } from "../../echo";

type Key = "no" | "title" | "date" | "read";
const cols: Array<{ k: Key; label: string; className: string }> = [
  { k: "no", label: "No.", className: "w-14" },
  { k: "title", label: "Title", className: "flex-1 min-w-0" },
  { k: "date", label: "Date", className: "w-28 hidden sm:block" },
  { k: "read", label: "Min", className: "w-12 text-right" },
];

/* THE REGISTER — a dense, type-only table with numbered rows, sortable heads and a format filter. */
export default function Archive3() {
  const [sort, setSort] = useState<{ k: Key; dir: 1 | -1 }>({ k: "no", dir: -1 });
  const [fmt, setFmt] = useState<Format | "all">("all");
  const rows = useMemo(() => {
    const list = entries.filter((e) => fmt === "all" || e.format === fmt);
    return [...list].sort((a, b) => (a[sort.k] > b[sort.k] ? 1 : a[sort.k] < b[sort.k] ? -1 : 0) * sort.dir);
  }, [sort, fmt]);
  const formats = Array.from(new Set(entries.map((e) => e.format)));
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Journal · Register of documents</p>
            <h1 className="wc-display mt-4 text-[clamp(36px,5vw,60px)]">The register</h1>
          </div>
          <label className="wc-draw-host relative flex items-center gap-3 pb-2">
            <span className="wc-label text-muted">Format</span>
            <select value={fmt} onChange={(e) => setFmt(e.target.value as Format | "all")} className="appearance-none bg-transparent pr-2 text-[15px] font-medium outline-none">
              <option value="all">All formats</option>
              {formats.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
            <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
          </label>
        </div>
        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[560px]">
            <div className="flex gap-4 border-b border-ink pb-3" role="row">
              {cols.map((c) => (
                <button
                  key={c.k}
                  onClick={() => setSort((s) => ({ k: c.k, dir: s.k === c.k ? (s.dir === 1 ? -1 : 1) : 1 }))}
                  aria-sort={sort.k === c.k ? (sort.dir === 1 ? "ascending" : "descending") : "none"}
                  className={`wc-draw-host wc-label relative flex items-center gap-1 pb-1 text-left text-muted hover:text-ink ${c.className} ${c.k === "read" ? "justify-end" : ""}`}
                >
                  {c.label}
                  {sort.k === c.k && (sort.dir === 1 ? <ArrowUp size={11} strokeWidth={2} aria-hidden="true" /> : <ArrowDown size={11} strokeWidth={2} aria-hidden="true" />)}
                  <span className="wc-draw absolute inset-x-0 bottom-0" data-active={sort.k === c.k ? "true" : undefined} aria-hidden="true" />
                </button>
              ))}
            </div>
            <ol>
              {rows.map((e) => (
                <li key={e.slug}>
                  <a href={`#${e.slug}`} className="wc-draw-host group relative flex items-baseline gap-4 py-3.5 text-[14.5px]">
                    <span className="w-14 font-semibold tabular-nums text-teal">{String(e.no).padStart(3, "0")}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                      <span className="block text-[13px] text-muted">{seriesName(e.series)} · {e.format} · {authorOf(e.author).name}</span>
                    </span>
                    <span className="hidden w-28 tabular-nums text-muted sm:block">{fmtDate(e.date, "short")} {e.date.slice(0, 4)}</span>
                    <span className="w-12 text-right tabular-nums text-muted">{e.read}</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-line/70" aria-hidden="true" />
                    <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
            <p className="wc-label mt-4 text-muted">{rows.length} of {entries.length} documents</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
