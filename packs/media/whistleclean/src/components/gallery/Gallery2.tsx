{/* Echo: the split is a white hairline with a round knob that fills teal while dragged or focused, 260ms */}
import { useState } from "react";
import { Container, Section } from "../../echo";

/* Before and after: one 16:9 plate; the after image is clipped by the slider value. Inline SVG plates stand in for photography. */
export default function Gallery2() {
  const [pct, setPct] = useState(55);
  const [engaged, setEngaged] = useState(false);
  return (
    <Section className="bg-paper">
      <Container className="max-w-[1000px]">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="wc-display text-[clamp(28px,3.4vw,42px)]">Carpet, before and after steam.</h2>
          <p className="wc-label hidden text-muted sm:block">Level 2, Collingwood</p>
        </div>
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[10px] border border-line">
          <div className="absolute inset-0 bg-[#b9b4a6] [background-image:radial-gradient(rgba(60,50,35,.35)_1.2px,transparent_1.6px),radial-gradient(rgba(60,50,35,.2)_2px,transparent_2.6px)] [background-size:9px_9px,23px_23px]" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#9fb3ad] [background-image:repeating-linear-gradient(90deg,rgba(22,111,100,.08)_0_2px,transparent_2px_6px)]" style={{ clipPath: `inset(0 0 0 ${pct}%)` }} aria-hidden="true" />
          <span className="wc-label absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-muted">Before</span>
          <span className="wc-label absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-teal">After</span>
          <div className="wc-draw-host pointer-events-none absolute inset-y-0" style={{ left: `${pct}%` }}>
            <div className="absolute inset-y-0 -ml-px w-[2px] bg-paper" />
            <span className={`absolute -left-[9px] top-[calc(50%-9px)] h-[18px] w-[18px] rounded-full border-2 border-paper transition-colors duration-[260ms] ease-care ${engaged ? "bg-teal" : "bg-ink"}`} />
          </div>
          <input
            type="range"
            min={5}
            max={95}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            onFocus={() => setEngaged(true)}
            onBlur={() => setEngaged(false)}
            onPointerEnter={() => setEngaged(true)}
            onPointerLeave={() => setEngaged(false)}
            aria-label="Reveal the cleaned carpet"
            className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </Container>
    </Section>
  );
}
