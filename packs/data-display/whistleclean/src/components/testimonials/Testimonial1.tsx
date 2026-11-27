{/* Echo: the quote in the large display scale over a hairline attribution rule */}
import { brand, testimonials } from "../../brand";
import { Container, Section } from "../../echo";

/* Single large quote: 9 of 12 columns, set in the display voice. SAMPLE content; replace with a verified review. */
export default function Testimonial1() {
  const t = testimonials[0];
  return (
    <Section className="bg-paper">
      <Container>
        <div className="lg:w-9/12 wc-draw-host bg-paper pr-6">
          <p className="wc-label text-muted">From a client · {brand.rating.score} on {brand.rating.source}</p>
          <blockquote className="wc-display mt-8 text-[clamp(28px,3.8vw,48px)] text-ink">
            <span className="text-teal">“</span>{t.quote}<span className="text-teal">”</span>
          </blockquote>
          <div className="relative mt-10 h-px w-full bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
          <p className="mt-6 text-[15px]"><span className="font-semibold">{t.name}</span><span className="text-muted">, {t.org}</span></p>
        </div>
      </Container>
    </Section>
  );
}
