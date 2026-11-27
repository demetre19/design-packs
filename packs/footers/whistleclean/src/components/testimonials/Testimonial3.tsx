{/* Echo: the client tabs are buttons; the selected tab's underline is wiped teal and hovering another wipes its underline in, 300ms */}
import { useState } from "react";
import { testimonials } from "../../brand";
import { Container, Section } from "../../echo";

/* Tabbed quote: image plate on 4 columns, quote on 7, tabs on the left of the header as a rule. SAMPLE quotes. */
export default function Testimonial3() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const seeds = ["wc-agency-floor", "wc-clinic-room", "wc-playroom"];
  return (
    <Section className="bg-paper">
      <Container>
        <div role="tablist" aria-label="Client stories" className="flex flex-wrap gap-x-8 border-b border-line">
          {testimonials.map((x, n) => (
            <button
              key={x.org}
              role="tab"
              aria-selected={i === n}
              onClick={() => setI(n)}
              className={`wc-draw-host relative pb-4 text-[15px] font-medium transition-colors duration-[260ms] ease-care ${i === n ? "text-teal" : "text-muted hover:text-ink"}`}
            >
              {x.org.split(",")[0]}
              <span className="wc-draw absolute inset-x-0 -bottom-px" data-active={i === n ? "true" : undefined} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-12 items-center gap-y-10 md:gap-x-8" role="tabpanel">
          <div className="col-span-12 md:col-span-4">
            <img src={`https://picsum.photos/seed/${seeds[i]}/700/800`} alt="" className="aspect-[7/8] w-full rounded-[6px] object-cover" />
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <blockquote className="wc-display text-[clamp(26px,3.2vw,40px)]">{t.quote}</blockquote>
            <p className="mt-8 text-[15px]"><span className="font-semibold">{t.name}</span><span className="text-muted">, {t.org}</span></p>
            <p className="wc-label mt-2 text-teal">{t.site}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
