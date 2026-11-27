{/* Echo: commitment rows on hairlines; the meet-the-team pill fills teal on hover, 260ms */}
import { brand, differentiators } from "../../brand";
import { Container, PillButton, Section } from "../../echo";

/* Asymmetric split: a sticky 4-column statement against an 7-column ledger of commitments. */
export default function Feature2() {
  return (
    <Section className="bg-paper">
      <Container className="grid grid-cols-12 gap-y-14 md:gap-x-8">
        <div className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-24">
            <p className="wc-label text-muted">Why Whistle Clean</p>
            <h2 className="wc-display mt-6 text-[clamp(32px,4vw,48px)]">Care you can check.</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              Founded in {brand.founded} by {brand.founder} on a simple idea: cleaners are some of the hardest-working people anywhere, and the work should show it.
            </p>
            <div className="mt-8"><PillButton>Meet the team</PillButton></div>
          </div>
        </div>
        <ol className="col-span-12 md:col-span-7 md:col-start-6">
          {differentiators.map((d) => (
            <li key={d.title} className="wc-draw-host relative grid grid-cols-[1fr_auto] gap-x-6 border-t border-line py-7 last:border-b">
              <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
              <div>
                <h3 className="wc-heading text-[22px]">{d.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">{d.body}</p>
              </div>
              <span className="wc-label pt-2 text-teal">{d.care}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
