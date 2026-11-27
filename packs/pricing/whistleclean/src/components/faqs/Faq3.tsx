{/* Echo: each question is a button; the current one is marked by a teal line that wipes down the index rule, 300ms */}
import { useState } from "react";
import { brand, faqs } from "../../brand";
import { Container, LineLink, Section } from "../../echo";

/* Index and answer: questions on 5 columns along a vertical rule, the chosen answer on 6. Answers are all rendered; only the chosen one is shown from md up. */
export default function Faq3() {
  const [i, setI] = useState(0);
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <div className="col-span-12 md:col-span-5">
          <p className="wc-label text-muted">FAQ</p>
          <ul className="mt-8 border-l border-line">
            {faqs.map((f, n) => (
              <li key={f.q}>
                <button
                  onClick={() => setI(n)}
                  onMouseEnter={() => setI(n)}
                  aria-current={i === n ? "true" : undefined}
                  className={`wc-draw-host relative block w-full py-3.5 pl-6 text-left text-[16px] font-medium transition-colors duration-[260ms] ease-care ${i === n ? "text-teal" : "text-muted hover:text-ink"}`}
                >
                  <span className={`absolute -left-px bottom-2 top-2 w-[2px] bg-teal transition-[clip-path] duration-[300ms] ease-care ${i === n ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]"}`} aria-hidden="true" />
                  {f.q}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="md:sticky md:top-24">
            <div className="wc-surface p-8 sm:p-10" aria-live="polite">
              <h3 className="wc-heading text-[24px]">{faqs[i].q}</h3>
              <p className="mt-5 text-[16px] leading-relaxed text-muted">{faqs[i].a}</p>
              <div className="mt-8"><LineLink>Still unsure? Call {brand.phone}</LineLink></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
