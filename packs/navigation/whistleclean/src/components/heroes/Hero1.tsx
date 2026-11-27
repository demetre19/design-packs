{/* Echo: the quote pill fills white on the teal plate, 260ms; the pricing link's hairline wipes white, 300ms */}
import { Star } from "lucide-react";
import { brand } from "../../brand";
import { Container, PillButton, LineLink } from "../../echo";

/* Full-bleed: photograph pressed into the teal ground (luminosity blend), copy on the left five columns. */
export default function Hero1() {
  return (
    <section className="relative isolate overflow-hidden bg-teal text-paper">
      <img
        src="https://picsum.photos/seed/wc-floorplate/1800/1100"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal via-teal/85 to-teal/20" aria-hidden="true" />
      <Container className="grid min-h-[640px] grid-cols-12 items-end gap-y-12 pb-16 pt-28 sm:pb-20">
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <p className="wc-label text-mist">Commercial cleaning · Melbourne · Since {brand.founded}</p>
          <h1 className="wc-display mt-5 text-[clamp(44px,7vw,88px)]">Cleaning with love and integrity.</h1>
          <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-mist">
            Offices, clinics and childcare centres, cleaned after hours with eucalyptus-based products. No lock-in. A tree planted for every visit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <PillButton tone="onTeal" size="lg">Request a quote</PillButton>
            <LineLink href="#pricing" reverse className="!text-paper !border-paper/40 hover:!border-paper">
              See office pricing
            </LineLink>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
          <div className="wc-surface p-5 text-ink">
            <div className="flex items-center gap-1 text-teal" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} strokeWidth={1.75} fill="currentColor" />)}
            </div>
            <p className="wc-figure mt-3 text-[40px]">{brand.rating.score}</p>
            <p className="mt-1 text-[14px] text-muted">Average {brand.rating.source} rating from {brand.rating.count} reviews</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
