{/* Artifact: a visual essay about glass, laid out as a contact strip beside its notes | Echo: the plate numbers in the sticky text column are buttons whose lines wipe teal; the plate in view is marked by a wiped line | Interactions: scrolling the plates sets the active number, 300ms; clicking a number scrolls to its plate; hovering a plate tints its caption teal, 260ms */}
import { useEffect, useRef, useState } from "react";
import { bySlug, seriesName } from "../../journal";
import { Byline, SeriesNav, related } from "../../editorial/kit";

const plates = [
  { cap: "North partitions at 07:40. Low sun shows every arc a wet cloth leaves behind.", seed: "wc-glass-1", ratio: "aspect-[4/5]" },
  { cap: "The same glass after a dry second pass with a clean microfibre. Same product, no arcs.", seed: "wc-glass-2", ratio: "aspect-[4/5]" },
  { cap: "Meeting room 2. Handprints at 1.1 metres, where people lean in to read the whiteboard.", seed: "wc-glass-3", ratio: "aspect-[3/2]" },
  { cap: "Lift lobby doors. Wiped on both faces, every visit, because both faces get touched.", seed: "wc-glass-4", ratio: "aspect-[4/5]" },
  { cap: "The cupboard where the glass bottles live: labelled 1:20, never decanted into anything unlabelled.", seed: "wc-glass-5", ratio: "aspect-[3/2]" },
];

/* SPLIT VISUAL ESSAY — the essay text is a sticky column on the left 40%; the plates scroll on the right with numbered captions. */
export default function Post6() {
  const e = bySlug("glass-on-level-4");
  const [cur, setCur] = useState(0);
  const strip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = strip.current;
    if (!root) return;
    const io = new IntersectionObserver((xs) => xs.forEach((x) => x.isIntersecting && setCur(Number((x.target as HTMLElement).dataset.i))), { rootMargin: "-45% 0px -45% 0px" });
    root.querySelectorAll("figure[data-i]").forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);
  return (
    <article className="bg-paper pb-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 pt-16 sm:px-8 lg:flex-row lg:px-12">
        <div className="lg:sticky lg:top-8 lg:w-[40%] lg:self-start">
          <p className="wc-label text-teal">{seriesName(e.series)} · Visual essay</p>
          <h1 className="wc-display mt-4 text-[clamp(36px,5vw,60px)]">{e.title}</h1>
          <Byline entry={e} className="mt-4" />
          <div className="mt-8 max-w-[46ch] space-y-4 text-[16px] leading-[1.75]">
            <p>The office manager on Level 4 had one complaint in the first month: the north glass looked smeary every morning. She was right. It did not look smeary at night, when we cleaned it.</p>
            <p>Glass tells the truth at a low angle. At 21:00 under office lights, a wet wipe looks perfect. At 07:40 with the sun coming straight through, every arc shows.</p>
            <p>The fix was not a new product. It was a dry second pass with a clean cloth, and switching that zone to the glass mix at one in twenty. It adds four minutes a visit.</p>
            <p>These photographs were taken on the morning the complaint stopped.</p>
          </div>
          <ol className="mt-8 flex gap-1" aria-label="Plates">
            {plates.map((_, i) => (
              <li key={i}>
                <button onClick={() => document.getElementById(`glass-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" })} aria-current={cur === i ? "true" : undefined} className={`wc-draw-host relative w-10 pb-2 text-center text-[14px] font-semibold tabular-nums transition-colors duration-[260ms] ease-care ${cur === i ? "text-teal" : "text-muted hover:text-ink"}`}>
                  {String(i + 1).padStart(2, "0")}
                  <span className="absolute inset-x-1 bottom-0 h-px bg-line" aria-hidden="true" />
                  <span className="wc-draw absolute inset-x-1 bottom-0" data-active={cur === i ? "true" : undefined} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div ref={strip} className="flex flex-col gap-16 lg:w-[60%]">
          {plates.map((pl, i) => (
            <figure key={pl.seed} id={`glass-${i}`} data-i={i} className="group">
              <img src={`https://picsum.photos/seed/${pl.seed}/1000/1000`} alt="" className={`w-full rounded-[6px] object-cover ${pl.ratio}`} />
              <figcaption className="mt-4 flex gap-4">
                <span className="wc-figure text-[28px] text-line transition-colors duration-[260ms] ease-care group-hover:text-teal">{String(i + 1).padStart(2, "0")}</span>
                <span className="max-w-[48ch] pt-1 text-[15px] leading-relaxed text-muted transition-colors duration-[260ms] ease-care group-hover:text-ink">{pl.cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <footer className="mx-auto mt-20 max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 border-t border-ink pt-6 lg:flex-row">
          <p className="text-[15px] lg:w-[40%]">By <span className="font-semibold">Evenezer G.</span>, who looks after the Level 4 account and took these photographs at 07:40 on a clear October morning.</p>
          <div className="lg:w-[60%]">
            <SeriesNav entry={e} />
            <ul className="mt-6">{related(e).map((r) => <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>)}</ul>
          </div>
        </div>
      </footer>
    </article>
  );
}
