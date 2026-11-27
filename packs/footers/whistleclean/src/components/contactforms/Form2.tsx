{/* Echo: the chosen service tile is outlined teal on a mist ground, 240ms; the continue pill inverts on hover */}
import { useState } from "react";
import { services } from "../../brand";
import { Container, PillButton, Section } from "../../echo";

/* Step 1 of a short quote flow: choose a service. Three-column tile grid, step count in the label voice. */
export default function Form2() {
  const [choice, setChoice] = useState("office");
  return (
    <Section className="bg-paper">
      <Container className="max-w-[980px]">
        <p className="wc-label text-muted">Step 1 of 3</p>
        <h2 className="wc-display mt-5 text-[clamp(28px,3.4vw,42px)]">What needs cleaning?</h2>
        <fieldset className="mt-10">
          <legend className="sr-only">Service</legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              const on = choice === s.slug;
              return (
                <label key={s.slug} className="block cursor-pointer">
                  <input type="radio" name="f2-service" value={s.slug} checked={on} onChange={() => setChoice(s.slug)} className="peer sr-only" />
                  <span className={`block rounded-[10px] border p-5 transition-colors duration-[240ms] ease-care peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-teal ${on ? "border-teal bg-mist/50" : "border-line bg-paper"}`}>
                    <Icon size={20} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
                    <span className="mt-4 block text-[16px] font-semibold">{s.name}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-muted">{s.line}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="mt-10 flex items-center justify-between gap-6 border-t border-line pt-8">
          <p className="text-[14px] text-muted">Two more questions after this.</p>
          <PillButton tone="solid">Continue</PillButton>
        </div>
      </Container>
    </Section>
  );
}
