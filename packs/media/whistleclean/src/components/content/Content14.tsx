{/* Artifact: the quote worksheet filled in during the site walk | Echo: working lines on ruled paper with dotted leaders; the total is double-ruled | Interactions: the people stepper re-works every line as headcount changes */}
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { aud, officePricing } from "../../brand";
import { Container, Section } from "../../echo";

/* THE QUOTE WORKSHEET — ruled paper (repeating gradient) with a teal margin line; working lines use flex dotted leaders. */
export default function Content14() {
  const [people, setPeople] = useState(24);
  const visits = Math.min(5, Math.max(1, Math.ceil(people / 7)));
  const band = officePricing.find((o) => o.visits === visits)!;
  const lines = [
    { k: "People on site", v: `${people}` },
    { k: "1 day per 7 people", v: `${people} ÷ 7 = ${(people / 7).toFixed(1)}` },
    { k: "Visits a week, rounded up", v: `${visits}` },
    { k: "Monthly band, + GST", v: `${aud(band.low)} to ${aud(band.high)}` },
  ];
  return (
    <Section className="bg-paper">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="lg:w-[32%]">
          <p className="wc-label text-muted">Content 14 · The quote worksheet</p>
          <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,44px)]">The arithmetic, shown.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">This is the same sheet we fill in on the site walk. The fixed quote adjusts for floor area, fit-out and access.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="wc-label text-muted">People</span>
            <button onClick={() => setPeople((p) => Math.max(1, p - 1))} aria-label="Fewer people" className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-teal hover:text-teal"><Minus size={16} strokeWidth={1.75} /></button>
            <output className="wc-figure w-12 text-center text-[24px]" aria-live="polite">{people}</output>
            <button onClick={() => setPeople((p) => Math.min(60, p + 1))} aria-label="More people" className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-teal hover:text-teal"><Plus size={16} strokeWidth={1.75} /></button>
          </div>
        </div>
        <div className="relative flex-1 rounded-[4px] border border-line bg-paper py-8 pl-12 pr-4 sm:pl-20 sm:pr-10 [background-image:repeating-linear-gradient(to_bottom,transparent_0_39px,var(--color-line)_39px_40px)]">
          <span className="absolute inset-y-0 left-6 w-px bg-teal/50 sm:left-12" aria-hidden="true" />
          <p className="wc-label h-10 leading-10 text-muted">Worksheet · Site walk · Level 4, 80 Market St</p>
          {lines.map((l) => (
            <div key={l.k} tabIndex={0} className="wc-draw-host relative flex h-10 items-end gap-2 pb-2 text-[14px] outline-none sm:text-[15px]">
              <span className="min-w-0 truncate">{l.k}</span>
              <span className="mb-[5px] flex-1 border-b border-dotted border-muted/50" aria-hidden="true" />
              <span className="shrink-0 font-semibold tabular-nums">{l.v}</span>
              <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
            </div>
          ))}
          <div tabIndex={0} className="wc-draw-host relative mt-10 flex flex-wrap items-baseline justify-between gap-x-4 pb-3 outline-none">
            <span className="wc-heading text-[18px]">Estimate</span>
            <span className="wc-figure text-[clamp(28px,3vw,36px)] text-teal">{aud(band.low)} to {aud(band.high)}</span>
            <span className="absolute inset-x-0 bottom-0 h-px bg-ink" aria-hidden="true" />
            <span className="absolute inset-x-0 -bottom-[4px] h-px bg-ink" aria-hidden="true" />
            
          </div>
        </div>
      </Container>
    </Section>
  );
}
