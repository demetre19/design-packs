{/* Echo: answers sit open on hairline cards, nothing hidden; no motion, by design, because nothing here is clickable */}
import { faqs } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Open grid: every answer visible, two columns from 768px, no interaction required to read. */
export default function Faq2() {
  return (
    <Section className="bg-paper">
      <Container>
        <SectionLabel>Good to know</SectionLabel>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="wc-surface wc-draw-host p-7">
              <h3 className="wc-heading text-[19px]">{f.q}</h3>
              <div className="relative my-5 h-px bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
              <p className="text-[15px] leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
