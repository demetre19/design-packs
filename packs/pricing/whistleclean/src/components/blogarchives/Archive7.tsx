{/* Artifact: the photographer's contact sheet from a month of site visits | Echo: every plate is a link; its caption line wipes teal beneath the frame; the active format filter is set on mist | Interactions: format chips filter the sheet; hovering a plate wipes its caption line, 300ms, and slides the dek in from the left, 280ms */}
import { useState } from "react";
import { entries, fmtDate, seriesName, type Format } from "../../journal";
import { Container, Section } from "../../echo";

/* CONTACT SHEET — image-forward: a dense 4-up sheet of plates with frame numbers, captions under each frame. */
export default function Archive7() {
  const formats: Array<Format | "All"> = ["All", ...Array.from(new Set(entries.map((e) => e.format)))];
  const [f, setF] = useState<Format | "All">("All");
  const list = entries.filter((e) => f === "All" || e.format === f);
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Journal · Contact sheet</p>
            <h1 className="wc-display mt-4 text-[clamp(36px,5vw,60px)]">Browse by picture</h1>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by format">
            {formats.map((x) => (
              <button key={x} onClick={() => setF(x)} aria-pressed={f === x} className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-[240ms] ease-care ${f === x ? "bg-mist text-teal" : "text-muted hover:bg-mist/60 hover:text-ink"}`}>{x}</button>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map((e) => (
            <li key={e.slug}>
              <a href={`#${e.slug}`} className="wc-draw-host group block">
                <span className="relative block overflow-hidden rounded-[4px]">
                  <img src={`https://picsum.photos/seed/${e.seed}/600/450`} alt="" className="aspect-[4/3] w-full object-cover" />
                  <span className="wc-label absolute left-2 top-2 rounded-[3px] bg-paper/90 px-1.5 py-0.5 text-ink">{String(e.no).padStart(2, "0")}</span>
                </span>
                <span className="relative mt-3 block h-px bg-line"><span className="wc-draw absolute inset-0" /></span>
                <span className="wc-label mt-3 block text-muted">{seriesName(e.series)} · {fmtDate(e.date, "short")} · {e.read} min</span>
                <span className="mt-1 block text-[15px] font-semibold leading-snug transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                <span className="mt-1 block overflow-hidden text-[13px] text-muted">
                  <span className="block opacity-0 transition-[opacity,translate] duration-[280ms] ease-care [translate:-8px_0] group-hover:opacity-100 group-hover:[translate:0_0] group-focus-visible:opacity-100 group-focus-visible:[translate:0_0]">{e.dek}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
