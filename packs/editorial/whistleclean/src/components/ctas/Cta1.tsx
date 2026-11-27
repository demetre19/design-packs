{/* Echo: a teal band with the eucalyptus line drawing at its right edge; its single pill fills white on hover, 260ms */}
import { brand } from "../../brand";
import { Container, Gumlines, PillButton } from "../../echo";

/* Band CTA: statement on 7 columns, action and phone on 4, aligned to the band's baseline. */
export default function Cta1() {
  return (
    <section className="relative isolate overflow-hidden bg-teal text-paper">
      <Gumlines className="pointer-events-none absolute -right-10 top-0 -z-10 hidden h-full w-[260px] md:block" />
      <Container className="grid grid-cols-12 items-end gap-y-8 py-16 sm:py-20">
        <div className="col-span-12 md:col-span-7">
          <p className="wc-label text-mist">Quote in 24 hours</p>
          <h2 className="wc-display mt-5 text-[clamp(32px,4.4vw,56px)]">Walk into a clear office on Monday.</h2>
        </div>
        <div className="col-span-12 flex flex-col items-start gap-5 md:col-span-4 md:col-start-9 md:items-end">
          <PillButton tone="onTeal" size="lg">Request a quote</PillButton>
          <p className="text-[14px] text-mist">or call <span className="font-semibold text-paper tabular-nums">{brand.phone}</span></p>
        </div>
      </Container>
    </section>
  );
}
