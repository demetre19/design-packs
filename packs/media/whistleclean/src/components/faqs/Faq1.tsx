{/* Echo: each question's top rule wipes teal on hover, 300ms; opening a question turns it teal and opens the answer downward, 300ms */}
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../../brand";
import { Container, Section } from "../../echo";

/* Accordion: label and heading on 4 columns, questions on 7. All answers stay in the DOM so the page is complete without script. */
export default function Faq1() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <div className="col-span-12 md:col-span-4">
          <p className="wc-label text-muted">Questions</p>
          <h2 className="wc-display mt-6 text-[clamp(30px,3.6vw,44px)]">Asked before every first clean.</h2>
        </div>
        <ul className="col-span-12 md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <li key={f.q} className="border-b border-line">
                <h3>
                  <button
                    className="wc-draw-host relative flex w-full items-center justify-between gap-6 border-t border-line py-6 text-left"
                    aria-expanded={on}
                    aria-controls={`faq1-${i}`}
                    onClick={() => setOpen(on ? null : i)}
                  >
                    <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                    <span className={`text-[18px] font-semibold transition-colors duration-[260ms] ease-care ${on ? "text-teal" : ""}`}>{f.q}</span>
                    <Plus size={18} strokeWidth={1.75} className={`shrink-0 text-muted transition-transform duration-[260ms] ease-care ${on ? "rotate-45 text-teal" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq1-${i}`} className={`grid transition-[grid-template-rows] duration-[300ms] ease-care ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden pr-10 text-[16px] leading-relaxed text-muted">
                    <span className="block pb-7">{f.a}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
