{/* Echo: the visits track marks each stop with a small ring that fills teal when chosen, 260ms */}
import { useState } from "react";
import { aud, officePricing } from "../../brand";
import { Container, PillButton, Section, SectionLabel } from "../../echo";

/* Calculator: headcount maps to visits a week (one day per seven people), visits map to the published range. */
export default function Pricing2() {
  const [visits, setVisits] = useState(2);
  const p = officePricing.find((o) => o.visits === visits)!;
  return (
    <Section className="bg-paper">
      <Container className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="col-span-12 md:col-span-6">
          <SectionLabel>Estimate</SectionLabel>
          <h2 className="wc-display mt-8 text-[clamp(32px,4vw,48px)]">How often should we come?</h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-muted">
            A good starting point is one cleaning day a week for every seven people in the office.
          </p>
          <fieldset className="mt-12">
            <legend className="wc-label text-muted">Visits per week</legend>
            <div className="relative mt-8">
              <div className="absolute inset-x-[13px] top-0 h-px bg-line" aria-hidden="true" />
              <div className="relative flex justify-between">
                {officePricing.map((o) => (
                  <label key={o.visits} className="wc-draw-host relative flex w-[26px] cursor-pointer flex-col items-center">
                    <input
                      type="radio"
                      name="visits"
                      value={o.visits}
                      checked={visits === o.visits}
                      onChange={() => setVisits(o.visits)}
                      className="peer sr-only"
                    />
                    <span className={`absolute -top-[4px] left-[8px] h-[9px] w-[9px] rounded-full border transition-colors duration-[260ms] ease-care ${visits === o.visits ? "border-teal bg-teal" : "border-line bg-paper"}`} aria-hidden="true" />
                    <span className={`mt-6 text-[15px] font-semibold tabular-nums transition-colors duration-[260ms] ease-care peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-teal ${visits === o.visits ? "text-teal" : "text-muted"}`}>
                      {o.visits}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>
        </div>
        <div className="col-span-12 self-end md:col-span-5 md:col-start-8">
          <div className="wc-surface p-8">
            <p className="wc-label text-muted">{visits} {visits === 1 ? "visit" : "visits"} a week · about {visits * 7} people</p>
            <p className="wc-figure mt-5 text-[clamp(40px,5vw,56px)] text-ink" aria-live="polite">
              {aud(p.low)}<span className="text-muted"> to </span>{aud(p.high)}
            </p>
            <p className="mt-2 text-[15px] text-muted">per month, ballpark</p>
            <div className="mt-8"><PillButton>Book a site walk</PillButton></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
