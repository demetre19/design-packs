{/* Artifact: the cleaner's trolley kit list, drawn as an annotated figure | Echo: leader lines draw from the trolley out to each callout | Interactions: hovering or focusing a callout draws its leader line, 300ms, and turns its part on the drawing teal, 260ms */}
import { useState } from "react";
import { Container, Section } from "../../echo";

const parts = [
  { id: "bottles", label: "Four labelled spray bottles", detail: "Pre-diluted each shift, colour-coded by zone.", side: "left", y: 22, px: 40, py: 26 },
  { id: "cloths", label: "Microfibre cloths, four colours", detail: "Blue desks, green kitchen, red toilets, yellow basins.", side: "left", y: 52, px: 40, py: 50 },
  { id: "vac", label: "HEPA backpack vacuum", detail: "Quiet enough for late-working staff.", side: "right", y: 18, px: 64, py: 22 },
  { id: "bin", label: "Separated waste bags", detail: "General, recycling, organics. Never mixed in the trolley.", side: "right", y: 50, px: 62, py: 56 },
  { id: "mop", label: "Flat mop and two buckets", detail: "Clean water and dirty water never meet.", side: "right", y: 82, px: 58, py: 80 },
];

/* THE TROLLEY KIT — an exploded figure: SVG drawing centred in a relative stage, callouts absolutely placed left and right with drawn leaders. */
export default function Content12() {
  const [hot, setHot] = useState<string | null>(null);
  return (
    <Section className="bg-paper">
      <Container>
        <p className="wc-label text-muted">Content 12 · The trolley kit</p>
        <h2 className="wc-display mt-5 max-w-[20ch] text-[clamp(30px,3.4vw,44px)]">Everything on the trolley has one job.</h2>
        <div className="relative mt-12 hidden aspect-[16/8] md:block">
          <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <g fill="none" strokeWidth="0.12" stroke="var(--color-ink)">
              <rect x="42" y="14" width="18" height="26" rx="1" />
              <line x1="42" y1="28" x2="60" y2="28" />
              <circle cx="45" cy="43" r="2" /><circle cx="57" cy="43" r="2" />
              <line x1="60" y1="14" x2="64" y2="6" />
              {[44, 47, 50, 53].map((x) => <rect key={x} x={x} y="8" width="2" height="6" rx="0.6" stroke={hot === "bottles" ? "var(--color-teal)" : "var(--color-ink)"} />)}
              <rect x="44" y="23" width="8" height="4" stroke={hot === "cloths" ? "var(--color-teal)" : "var(--color-ink)"} />
              <rect x="61" y="9" width="6" height="9" rx="2" stroke={hot === "vac" ? "var(--color-teal)" : "var(--color-ink)"} />
              <rect x="53" y="30" width="6" height="8" stroke={hot === "bin" ? "var(--color-teal)" : "var(--color-ink)"} />
              <line x1="58" y1="26" x2="66" y2="46" stroke={hot === "mop" ? "var(--color-teal)" : "var(--color-ink)"} />
              <rect x="63" y="45" width="7" height="1.5" stroke={hot === "mop" ? "var(--color-teal)" : "var(--color-ink)"} />
            </g>
            {parts.map((p) => {
              const x2 = p.side === "left" ? 24 : 76;
              return (
                <line
                  key={p.id}
                  x1={p.px} y1={p.py / 2} x2={x2} y2={p.y / 2}
                  pathLength={1}
                  stroke="var(--color-teal)"
                  strokeWidth="0.1"
                  strokeDasharray="1"
                  style={{ strokeDashoffset: hot === p.id ? 0 : 1, transition: "stroke-dashoffset 300ms var(--ease-care)" }}
                />
              );
            })}
          </svg>
          {parts.map((p) => (
            <button
              key={p.id}
              onMouseEnter={() => setHot(p.id)}
              onMouseLeave={() => setHot(null)}
              onFocus={() => setHot(p.id)}
              onBlur={() => setHot(null)}
              className={`absolute w-[22%] -translate-y-1/2 text-left ${p.side === "left" ? "left-0" : "right-0"}`}
              style={{ top: `${p.y}%` }}
            >
              <span className="relative block h-px bg-line"><span className="wc-draw absolute inset-0" /></span>
              <span className={`mt-3 block text-[14px] font-semibold transition-colors duration-[260ms] ease-care ${hot === p.id ? "text-teal" : ""}`}>{p.label}</span>
              <span className="mt-1 block text-[13px] leading-relaxed text-muted">{p.detail}</span>
            </button>
          ))}
        </div>
        <ul className="mt-10 md:hidden">
          {parts.map((p) => (
            <li key={p.id} className="wc-draw-host relative border-t border-line py-4">
              <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
              <p className="text-[15px] font-semibold">{p.label}</p>
              <p className="mt-1 text-[14px] text-muted">{p.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
