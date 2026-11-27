{/* Artifact: the site logbook, read backwards from last night | Echo: every entry is a link whose baseline wipes teal as the eye scans down; the active series chip is set on mist | Interactions: hovering or focusing an entry wipes its line, 300ms, and turns its title teal, 260ms; series chips filter the log */}
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { authorOf, entries, fmtDate, series, seriesName } from "../../journal";
import { Container, Section } from "../../echo";

/* THE LOGBOOK — reverse-chronological ledger grouped by month, the month sticky in a narrow left gutter. */
export default function Archive1() {
  const [only, setOnly] = useState<string | null>(null);
  const list = entries.filter((e) => !only || e.series === only);
  const months = Array.from(new Set(list.map((e) => e.date.slice(0, 7))));
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-6 border-b border-ink pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Journal · The logbook</p>
            <h1 className="wc-display mt-4 text-[clamp(36px,5vw,64px)]">Everything we've written, newest first.</h1>
          </div>
          <p className="wc-label text-muted">{list.length} entries · {months.length} months</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by series">
          {[{ id: null as string | null, name: "All series" }, ...series].map((s) => (
            <button key={s.name} onClick={() => setOnly(s.id)} aria-pressed={only === s.id} className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-[240ms] ease-care ${only === s.id ? "bg-mist text-teal" : "text-muted hover:bg-mist/60 hover:text-ink"}`}>
              {s.name}
            </button>
          ))}
        </div>
        <div className="mt-10">
          {months.map((m) => (
            <section key={m} className="flex flex-col gap-2 border-t border-line pt-6 pb-8 md:flex-row md:gap-0">
              <h2 className="wc-label text-teal md:sticky md:top-6 md:w-[160px] md:shrink-0 md:self-start">
                {new Date(m + "-01T00:00:00").toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
              </h2>
              <ol className="min-w-0 flex-1">
                {list.filter((e) => e.date.startsWith(m)).map((e) => (
                  <li key={e.slug}>
                    <a href={`#${e.slug}`} className="wc-draw-host group relative flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4">
                      <span className="wc-label w-14 text-muted">{fmtDate(e.date, "short")}</span>
                      <span className="min-w-0 flex-1 text-[18px] font-semibold transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                      <span className="text-[13px] text-muted">{seriesName(e.series)} · {authorOf(e.author).name} · {e.read} min</span>
                      <ArrowUpRight size={15} strokeWidth={1.75} className="text-muted transition-colors duration-[260ms] ease-care group-hover:text-teal" aria-hidden="true" />
                      <span className="absolute inset-x-0 bottom-0 h-px bg-line/70" aria-hidden="true" />
                      <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
