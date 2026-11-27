{/* Echo: three facts under one full-width hairline; the quote pill fills teal on hover, 260ms */}
import { aud, brand, officePricing } from "../../brand";
import { Container, PillButton, Rule } from "../../echo";

/* Typographic only: one sentence set large, a measured rule, and three facts on a 12-column baseline. */
export default function Hero3() {
  const base = officePricing[0];
  return (
    <section className="bg-ground pb-20 pt-20 sm:pb-28 sm:pt-28">
      <Container>
        <p className="wc-label text-muted">{brand.name}</p>
        <h1 className="wc-display mt-6 max-w-[14ch] text-[clamp(52px,10vw,148px)] text-ink">
          Clear by <span className="text-teal">7:58</span> on Monday.
        </h1>
        <div className="wc-draw-host mt-14 cursor-default">
          <Rule />
          <dl className="grid grid-cols-12 gap-y-8 pt-8">
            <div className="col-span-12 sm:col-span-4">
              <dt className="wc-label text-muted">Lock-in</dt>
              <dd className="wc-heading mt-2 text-[24px]">{brand.lockInMonths} months</dd>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <dt className="wc-label text-muted">For every clean</dt>
              <dd className="wc-heading mt-2 text-[24px]">One tree planted</dd>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <dt className="wc-label text-muted">Weekly office clean</dt>
              <dd className="wc-heading mt-2 text-[24px]">
                {aud(base.low)} to {aud(base.high)} <span className="text-[15px] font-normal text-muted">/ mo + GST</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-14">
          <PillButton size="lg">Request a quote</PillButton>
        </div>
      </Container>
    </section>
  );
}
