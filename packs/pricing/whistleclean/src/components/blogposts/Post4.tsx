{/* Artifact: a clinic touchpoint checklist, written around an annotated floor plan | Echo: numbered markers on the plan are buttons whose rings fill teal; the checklist lines end in eucalyptus leaves that lie flat when signed off | Interactions: hovering or focusing a marker or its list row highlights the pair, 260ms; ticking a line lowers its leaf, 260ms */}
import { useState } from "react";
import { Check } from "lucide-react";
import { bySlug, seriesName } from "../../journal";
import { Leaf } from "../../echo";
import { Byline, SeriesNav, related } from "../../editorial/kit";

const points = [
  { n: 1, t: "Front door push plate", f: "Every visit", x: 8, y: 80 },
  { n: 2, t: "Reception counter and pen", f: "Every visit", x: 22, y: 64 },
  { n: 3, t: "Waiting-room chair arms", f: "Every visit", x: 36, y: 72 },
  { n: 4, t: "Payment terminal", f: "Every visit", x: 26, y: 50 },
  { n: 5, t: "Corridor light switches", f: "Every visit", x: 48, y: 46 },
  { n: 6, t: "Treatment-room door handles", f: "Every visit", x: 62, y: 30 },
  { n: 7, t: "Examination bed rails", f: "Per plan", x: 74, y: 18 },
  { n: 8, t: "Sink taps and dispensers", f: "Every visit", x: 84, y: 34 },
  { n: 9, t: "Bathroom flush button", f: "Every visit", x: 86, y: 70 },
  { n: 10, t: "Staff kitchen fridge handle", f: "Daily", x: 64, y: 78 },
];

/* ANNOTATED FIGURE DOCUMENT — the plan is sticky on the left half; the text and numbered checklist scroll on the right. */
export default function Post4() {
  const e = bySlug("clinic-touchpoints");
  const [hot, setHot] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([1, 2, 3]);
  const toggle = (n: number) => setDone((d) => (d.includes(n) ? d.filter((x) => x !== n) : [...d, n]));
  return (
    <article className="bg-paper pb-24">
      <div className="mx-auto max-w-[1240px] px-5 pt-16 sm:px-8 lg:px-12">
        <p className="wc-label text-teal">{seriesName(e.series)} · Bulletin {String(e.no).padStart(3, "0")}</p>
        <h1 className="wc-display mt-4 max-w-[24ch] text-[clamp(32px,4.6vw,56px)]">{e.title}</h1>
        <Byline entry={e} className="mt-4" />
      </div>
      <div className="mx-auto mt-12 flex max-w-[1240px] flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:px-12">
        <figure className="lg:sticky lg:top-8 lg:w-1/2 lg:self-start">
          <div className="wc-plate relative aspect-[4/3] w-full rounded-[6px]">
            <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <g fill="none" stroke="var(--color-teal)" strokeWidth="0.3">
                <rect x="3" y="3" width="94" height="69" /><line x1="40" y1="3" x2="40" y2="40" /><line x1="55" y1="40" x2="97" y2="40" /><line x1="55" y1="40" x2="55" y2="72" /><line x1="3" y1="40" x2="40" y2="40" />
              </g>
            </svg>
            {points.map((p) => (
              <button
                key={p.n}
                onMouseEnter={() => setHot(p.n)}
                onMouseLeave={() => setHot(null)}
                onFocus={() => setHot(p.n)}
                onBlur={() => setHot(null)}
                aria-label={`${p.n}, ${p.t}`}
                className={`absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[11px] font-semibold tabular-nums transition-colors duration-[260ms] ease-care ${hot === p.n ? "border-teal bg-teal text-paper" : "border-teal bg-paper text-teal"}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {p.n}
              </button>
            ))}
          </div>
          <figcaption className="wc-label mt-3 text-muted">Figure 1 · Ten touchpoints in a six-room GP clinic. Hover a number to find it in the list.</figcaption>
        </figure>
        <div className="min-w-0 lg:w-1/2">
          <div className="max-w-[58ch] space-y-5 text-[17px] leading-[1.75]">
            <p>Most of the risk in a clinic sits on a small number of surfaces that many hands touch in a day. A practice manager does not need a hundred-line schedule to manage them. They need to know which surfaces those are, how often each one is treated, and who signed for it.</p>
            <p>The plan in figure 1 marks the ten we treat on a typical six-room practice. Your own list will differ: a physio clinic has more equipment handles, a dental practice has more chair controls. We build the list with you on the site walk and keep it in the site file.</p>
            <p>"Every visit" means exactly that. "Per plan" means the surface is covered by your infection-control plan, which sets the product and the contact time. On those surfaces we follow your plan, not ours, and we use the disinfectant it specifies rather than our everyday eucalyptus-based cleaners.</p>
            <p>The column on the right of each line below is a sign-off, not decoration. Each night the team ticks the line, and the record is available to you in the portal the next morning. If a line is missed, you will see it, and so will we.</p>
            <p>Finally, ask for the safety data sheet for every product used in your rooms. We supply one for each, and your plan should reference them.</p>
          </div>
          <p className="wc-label mt-10 text-muted">Touchpoint checklist · {done.length} of {points.length} signed tonight</p>
          <ol className="mt-3 border-t border-ink">
            {points.map((p) => {
              const ok = done.includes(p.n);
              return (
                <li
                  key={p.n}
                  onMouseEnter={() => setHot(p.n)}
                  onMouseLeave={() => setHot(null)}
                  className={`relative flex items-center gap-4 py-3 pr-12 transition-colors duration-[260ms] ease-care ${hot === p.n ? "bg-mist/50" : ""}`}
                >
                  <span className="wc-label w-6 text-teal">{String(p.n).padStart(2, "0")}</span>
                  <span className="flex-1 text-[15px]">{p.t}</span>
                  <span className="wc-label hidden text-muted sm:block">{p.f}</span>
                  <button onClick={() => toggle(p.n)} aria-pressed={ok} aria-label={`Sign off ${p.t}`} className={`flex h-5 w-5 items-center justify-center rounded-[4px] border transition-colors duration-[260ms] ease-care ${ok ? "border-teal bg-teal text-paper" : "border-line hover:border-teal"}`}>
                    {ok && <Check size={13} strokeWidth={2.5} />}
                  </button>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
                  <Leaf bg="var(--color-paper)" active={ok} className="-bottom-[7px] right-0" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <footer className="mx-auto mt-20 flex max-w-[1240px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:px-12">
        <div className="lg:w-1/2">
          <p className="wc-label text-muted">Prepared by</p>
          <p className="mt-2 text-[15px]"><span className="font-semibold">Katrina S.</span>, Client Wellbeing Ambassador. Katrina walks each clinic with its practice manager every 90 days.</p>
        </div>
        <div className="lg:w-1/2">
          <SeriesNav entry={e} />
          <ul className="mt-6">
            {related(e).map((r) => (
              <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  );
}
