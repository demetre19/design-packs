{/* Echo: each service cell's top hairline wipes teal on hover, 300ms, as its title turns teal, 260ms */}
import { ArrowUpRight } from "lucide-react";
import { services } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Editorial grid: a 3 x 2 ruled grid where hairlines, not cards, separate the services. */
export default function Feature1() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel>Services</SectionLabel>
            <h2 className="wc-display mt-8 text-[clamp(32px,4vw,52px)]">Six kinds of clean, one standard.</h2>
          </div>
          <p className="col-span-12 self-end text-[17px] leading-relaxed text-muted md:col-span-5 md:col-start-8">
            Every service runs to a written checklist, uses the same eucalyptus-based products and is signed off before we leave the site.
          </p>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-x-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="wc-draw-host group relative block border-t border-line pb-10 pt-8 focus-visible:outline-offset-8">
                  <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                  <div className="bg-ground">
                    <Icon size={20} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
                    <h3 className="wc-heading mt-5 flex items-center gap-2 text-[22px] group-hover:text-teal transition-colors duration-[260ms] ease-care">
                      {s.name}
                      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-muted">{s.line}</p>
                    {s.from && <p className="wc-label mt-5 text-teal">From {s.from} + GST</p>}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
