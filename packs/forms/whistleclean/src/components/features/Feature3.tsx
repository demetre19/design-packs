{/* Echo: four steps share one rule; the step under the pointer or focus turns its label teal, 260ms */}
import { useState } from "react";
import { steps } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Numbered sequence: the onboarding steps are a real order, so they are numbered. Four equal columns on one shared rule. */
export default function Feature3() {
  const [current, setCurrent] = useState(0);
  return (
    <Section className="bg-ground" id="how">
      <Container>
        <SectionLabel>How it works</SectionLabel>
        <h2 className="wc-display mt-8 max-w-[18ch] text-[clamp(32px,4vw,52px)]">From first call to first clean in a week.</h2>
        <ol className="relative mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div className="absolute inset-x-0 top-0 hidden h-px bg-line lg:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <li
              key={s.step}
              tabIndex={0}
              onMouseEnter={() => setCurrent(i)}
              onFocus={() => setCurrent(i)}
              className="relative border-t border-line pt-8 outline-none lg:border-t-0"
            >
              <span className={`wc-label transition-colors duration-[260ms] ease-care ${current === i ? "text-teal" : "text-muted"}`}>
                Step {i + 1} of {steps.length}
              </span>
              <h3 className="wc-heading mt-4 text-[22px]">{s.step}</h3>
              <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
