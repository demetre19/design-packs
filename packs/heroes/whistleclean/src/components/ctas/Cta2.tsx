{/* Echo: a single white panel with one pill that fills teal on hover, 260ms */}
import { brand } from "../../brand";
import { Container, PillButton, Section } from "../../echo";

/* Framed CTA: an inset panel on 10 of 12 columns, centred, with generous inner measure. */
export default function Cta2() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="mx-auto max-w-[980px]">
          <div className="wc-surface grid grid-cols-1 items-center gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="wc-display text-[clamp(28px,3.4vw,42px)]">No lock-in. Just a better clean.</h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted">{brand.noPitch} A real person replies the same business day.</p>
            </div>
            <PillButton size="lg">Book a discovery call</PillButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
