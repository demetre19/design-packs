{/* Echo: two edge-glint cards, one per path; each laps its border once on hover, 900ms */}
import { Phone } from "lucide-react";
import { brand } from "../../brand";
import { Container, Glint, PillButton, Section } from "../../echo";

/* Two paths, equal weight: write to us or call us. Two halves of a 12-column grid. */
export default function Cta4() {
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Glint radius={18} faceClassName="flex flex-col p-8 sm:p-10">
          <p className="wc-label text-muted">Prefer to write</p>
          <h3 className="wc-display mt-4 text-[32px]">Request a quote online.</h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">Two minutes, five questions. Fixed price within 24 hours of the site walk.</p>
          <div className="mt-8"><PillButton tone="solid">Start the form</PillButton></div>
        </Glint>
        <Glint radius={18} faceClassName="flex flex-col p-8 sm:p-10">
          <p className="wc-label text-muted">Prefer to talk</p>
          <h3 className="wc-display mt-4 text-[32px]">Call the South Melbourne office.</h3>
          <p className="mt-3 flex flex-1 items-center gap-2 text-[22px] font-semibold tabular-nums text-teal">
            <Phone size={20} strokeWidth={1.75} aria-hidden="true" />{brand.phone}
          </p>
          <div className="mt-8"><PillButton>Book a call back</PillButton></div>
        </Glint>
      </Container>
    </Section>
  );
}
