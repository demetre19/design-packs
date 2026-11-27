{/* Artifact: the site-walk route sheet drawn on the first visit | Echo: the route draws itself along the plan, and each walked stop's rule is wiped teal | Interactions: hovering or focusing a stop draws the route up to it, 300ms, and wipes the rules of every stop walked so far */}
import { useState } from "react";
import { Footprints } from "lucide-react";
import { Container, Section } from "../../echo";

const stops = [
  { x: 12, y: 82, title: "Lift lobby", note: "Start here. Lift buttons and the glass entry door count as touchpoints." },
  { x: 12, y: 30, title: "Reception", note: "Desk cleared by staff before 6pm; we wipe only clear surfaces." },
  { x: 46, y: 22, title: "Meeting rooms 1 to 3", note: "Whiteboards wiped only if marked 'clean me'." },
  { x: 80, y: 30, title: "Kitchenette", note: "Dishwasher loaded and run at 20:00. Descaler on taps weekly." },
  { x: 74, y: 76, title: "Bathrooms", note: "Restock from the cleaner's cupboard behind door B." },
  { x: 40, y: 64, title: "Open-plan floor", note: "Vacuum edge to edge last, working back toward the lift." },
];

/* THE SITE WALK — an absolute-positioned plan with the route drawn as SVG segments, and the walk notes as a narrow running column. */
export default function Content2() {
  const [at, setAt] = useState(0);
  return (
    <Section className="bg-paper">
      <Container>
        <p className="wc-label text-muted">Content 02 · The site walk</p>
        <div className="mt-6 flex flex-col gap-12 lg:flex-row">
          <div className="relative lg:flex-[1.6]">
            <h2 className="wc-display max-w-[16ch] text-[clamp(30px,3.4vw,44px)]">We walk the floor once, in the order we'll clean it.</h2>
            <div className="wc-plate relative mt-10 aspect-[16/11] w-full rounded-[6px]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <rect x="4" y="8" width="92" height="86" fill="none" stroke="var(--color-teal)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
                <line x1="30" y1="8" x2="30" y2="44" stroke="var(--color-teal)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
                <line x1="62" y1="8" x2="62" y2="44" stroke="var(--color-teal)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
                <line x1="62" y1="62" x2="96" y2="62" stroke="var(--color-teal)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
                {stops.slice(1).map((s, i) => {
                  const p = stops[i];
                  return (
                    <line
                      key={s.title}
                      x1={p.x} y1={p.y} x2={s.x} y2={s.y}
                      pathLength={1}
                      stroke="var(--color-teal)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="1"
                      style={{ strokeDashoffset: i < at ? 0 : 1, transition: "stroke-dashoffset 300ms var(--ease-care)" }}
                    />
                  );
                })}
              </svg>
              {stops.map((s, i) => (
                <span
                  key={s.title}
                  className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-teal bg-paper text-[12px] font-semibold tabular-nums text-teal"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
              ))}
              <span className="wc-label absolute bottom-3 right-4 text-teal">Level 4 · 640 m²</span>
            </div>
          </div>
          <ol className="lg:flex-1 lg:pt-28">
            {stops.map((s, i) => (
              <li key={s.title}>
                <button
                  onMouseEnter={() => setAt(i)}
                  onFocus={() => setAt(i)}
                  onClick={() => setAt(i)}
                  className="relative block w-full border-t border-line py-4 text-left"
                >
                  <span className="wc-draw absolute inset-x-0 -top-px" data-active={i <= at ? "true" : undefined} aria-hidden="true" />
                  <span className="flex items-baseline gap-3">
                    <span className="wc-label w-6 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`text-[16px] font-semibold transition-colors duration-[260ms] ease-care ${i === at ? "text-teal" : ""}`}>{s.title}</span>
                  </span>
                  <span className="mt-1 block pl-9 text-[14px] leading-relaxed text-muted">{s.note}</span>
                </button>
              </li>
            ))}
            <li className="flex items-center gap-2 border-t border-line pt-4 text-[13px] text-muted">
              <Footprints size={15} strokeWidth={1.75} aria-hidden="true" /> Walk time about 20 minutes
            </li>
          </ol>
        </div>
      </Container>
    </Section>
  );
}
