{/* Echo: a short hairline above the headline; the single pill fills teal on hover, 260ms */}
import { brand } from "../../brand";
import { Container, PillButton, Rule } from "../../echo";

/* Minimal centred: a narrow 6-column measure, one action, one line of proof. */
export default function Hero5() {
  return (
    <section className="bg-ground py-24 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <div className="wc-draw-host w-24"><Rule /></div>
        <p className="wc-label mt-8 text-muted">{brand.name}</p>
        <h1 className="wc-display mt-6 max-w-[16ch] text-[clamp(40px,6vw,76px)] text-ink">A cleaner office, quietly, every night.</h1>
        <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-muted">{brand.noPitch}</p>
        <div className="mt-10"><PillButton size="lg">Request a quote</PillButton></div>
        <p className="wc-label mt-8 text-muted">Zero lock-in · One tree per clean · {brand.certification}</p>
      </Container>
    </section>
  );
}
