/* Editorial kit: reading furniture shared by the blog templates. Each template composes these differently. */
import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { authorOf, bySlug, entries, fmtDate, seriesName, type Entry } from "../journal";

/* Reading progress for one article: 0 to 1 as the article scrolls past the viewport. */
export function useReadProgress(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(total <= 0 ? (r.top < 0 ? 1 : 0) : Math.min(1, Math.max(0, -r.top / total)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [ref]);
  return p;
}

/* The reading line: a sticky hairline at the top of the article that is wiped teal as you read. */
export function ReadingLine({ progress, label }: { progress: number; label?: string }) {
  return (
    <div className="sticky top-0 z-30 bg-ground/95 backdrop-blur-[2px]" aria-hidden="true">
      <div className="relative h-px bg-line">
        <span className="absolute inset-y-0 left-0 bg-teal" style={{ width: `${progress * 100}%`, height: "2px", top: "-0.5px" }} />
      </div>
      {label && <p className="wc-label px-5 py-1.5 text-muted sm:px-8">{label} · {Math.round(progress * 100)}%</p>}
    </div>
  );
}

/* Footnote marker: a superscript button whose underline wipes; its note slides in sideways beneath the line. */
export function Note({ n, children }: { n: number; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="wc-draw-host relative -top-[0.5em] mx-0.5 px-0.5 text-[0.72em] font-semibold tabular-nums text-teal"
      >
        {n}
        <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
      </button>
      <span
        id={id}
        role="tooltip"
        hidden={!open}
        className="absolute left-0 top-[calc(100%+6px)] z-20 w-[min(280px,60vw)] rounded-[8px] border border-line bg-paper p-3 text-[13px] font-normal leading-relaxed text-ink animate-[wc-note_280ms_var(--ease-care)_both]"
      >
        <span className="wc-label mr-1.5 text-teal">{n}</span>{children}
      </span>
      <style>{"@keyframes wc-note { from { opacity: 0; translate: -8px 0; } to { opacity: 1; translate: 0 0; } }"}</style>
    </span>
  );
}

export function PullQuote({ children, cite, className = "" }: { children: ReactNode; cite?: string; className?: string }) {
  return (
    <figure className={`my-12 border-l-2 border-teal pl-6 ${className}`}>
      <blockquote className="wc-display text-[clamp(24px,3vw,34px)] text-ink">{children}</blockquote>
      {cite && <figcaption className="wc-label mt-4 text-muted">{cite}</figcaption>}
    </figure>
  );
}

/* Byline block: author and role from the published team, series and date from the journal. */
export function Byline({ entry, className = "" }: { entry: Entry; className?: string }) {
  const a = authorOf(entry.author);
  return (
    <p className={`text-[14px] text-muted ${className}`}>
      <span className="font-semibold text-ink">{a.name}</span>, {a.role} · {fmtDate(entry.date)} · {entry.read} min read
    </p>
  );
}

/* Series navigation: previous and next entries within the same series, as two clickable rows. */
export function SeriesNav({ entry, className = "" }: { entry: Entry; className?: string }) {
  const inSeries = entries.filter((e) => e.series === entry.series).sort((a, b) => a.date.localeCompare(b.date));
  const i = inSeries.findIndex((e) => e.slug === entry.slug);
  const prev = inSeries[i - 1];
  const next = inSeries[i + 1];
  return (
    <nav aria-label={`${seriesName(entry.series)} series`} className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {[prev, next].map((e, k) =>
        e ? (
          <a key={e.slug} href={`#${e.slug}`} className={`wc-draw-host group relative block py-4 ${k ? "sm:text-right" : ""}`}>
            <span className={`wc-label flex items-center gap-1.5 text-muted ${k ? "sm:justify-end" : ""}`}>
              {k ? <>Next in {seriesName(e.series)}<ArrowRight size={13} strokeWidth={1.75} aria-hidden="true" /></> : <><ArrowLeft size={13} strokeWidth={1.75} aria-hidden="true" />Previous in {seriesName(e.series)}</>}
            </span>
            <span className="mt-2 block text-[16px] font-semibold transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
            <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
            <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
          </a>
        ) : (
          <span key={k} className="block py-4 text-[14px] text-muted">{k ? "This is the latest in the series." : "This is the first in the series."}</span>
        ),
      )}
    </nav>
  );
}

/* Related entries by shared topic, excluding the current one. */
export function related(entry: Entry, n = 3) {
  return entries
    .filter((e) => e.slug !== entry.slug)
    .map((e) => ({ e, score: e.topics.filter((t) => entry.topics.includes(t)).length + (e.series === entry.series ? 0.5 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.e);
}

export { bySlug };
