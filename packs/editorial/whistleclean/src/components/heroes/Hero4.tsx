{/* Echo: a wide photograph with the copy slab overlapping it; the quote pill fills teal on hover, 260ms */}
import { Droplets } from "lucide-react";
import { brand } from "../../brand";
import { Container, PillButton, Rule } from "../../echo";

/* Media forward: a wide photograph takes 10 of 12 columns; copy steps in from the left margin over a white slab. */
export default function Hero4() {
  return (
    <section className="bg-ground py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-10 lg:col-start-3 lg:row-start-1">
            <img
              src="https://picsum.photos/seed/wc-glass-partition/1600/900"
              alt="Glass partitions in a cleaned office at dawn"
              className="aspect-[16/9] w-full rounded-[6px] object-cover"
            />
          </div>
          <div className="relative z-10 col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:-mb-24">
            <div className="wc-surface p-8 sm:p-10">
              <p className="wc-label text-muted">Since {brand.founded}</p>
              <h1 className="wc-display mt-5 text-[clamp(36px,4.6vw,60px)] text-ink">Every edge, every night, signed off.</h1>
              <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-muted">
                Commercial cleaning for Melbourne offices, clinics and childcare centres, checked against a written list before we leave.
              </p>
              <div className="mt-8"><PillButton>Request a quote</PillButton></div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 items-start gap-y-6 lg:mt-0">
          <div className="wc-draw-host col-span-12 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9">
            <Rule />
            <div className="mt-6 wc-surface flex gap-3 p-5">
              <Droplets size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              <p className="text-[14px] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Eucalyptus oil-based products.</span> Safety data sheets supplied for every product we bring on site.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
