{/* Echo: three quotes on hairline cards; deliberately still */}
import { Quote } from "lucide-react";
import { testimonials } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Three-up wall on a 12-column grid. SAMPLE quotes; replace with verified reviews. */
export default function Testimonial2() {
  return (
    <Section className="bg-ground">
      <Container>
        <SectionLabel>What clients notice</SectionLabel>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.org} className="wc-surface wc-draw-host flex flex-col p-7">
              <Quote size={20} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed">{t.quote}</blockquote>
              <div className="relative mt-8 h-px bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
              <p className="mt-5 text-[14px] font-semibold">{t.name}</p>
              <p className="text-[14px] text-muted">{t.org}</p>
              <p className="wc-label mt-3 text-teal">{t.site}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
