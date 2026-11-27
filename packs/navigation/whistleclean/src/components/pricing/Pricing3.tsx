{/* Echo: each rate row's top rule wipes teal on hover, 300ms, as its price and arrow turn teal */}
import { ArrowRight } from "lucide-react";
import { aud, officePricing } from "../../brand";
import { Container, LineLink, Section, SectionLabel } from "../../echo";

/* Rate ledger: the full published range as a precise list, label on 4 columns, figures right-aligned in tabular numerals. */
export default function Pricing3() {
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <div className="col-span-12 md:col-span-4">
          <SectionLabel>Rate card</SectionLabel>
          <h2 className="wc-display mt-8 text-[clamp(30px,3.6vw,44px)]">Office cleaning, per month.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">Ballpark ranges plus GST. Medical, childcare and end-of-lease are quoted per site.</p>
          <div className="mt-8"><LineLink href="#quote">Ask for a fixed quote</LineLink></div>
        </div>
        <ul className="col-span-12 md:col-span-7 md:col-start-6">
          {officePricing.map((o) => (
            <li key={o.visits}>
              <a href="#quote" className="wc-draw-host group relative grid grid-cols-[1fr_auto_auto] items-center gap-6 border-t border-line py-6 last:border-b">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <span className="text-[17px] font-medium">
                  {o.visits} {o.visits === 1 ? "clean" : "cleans"} a week
                  <span className="wc-label ml-3 text-muted">~{o.visits * 7} people</span>
                </span>
                <div className="px-3 py-1">
                  <span className="wc-figure text-[22px] group-hover:text-teal transition-colors duration-[260ms] ease-care">
                    {aud(o.low)} to {aud(o.high)}
                  </span>
                </div>
                <ArrowRight size={16} strokeWidth={1.75} className="text-muted group-hover:text-teal transition-colors duration-[260ms] ease-care" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
