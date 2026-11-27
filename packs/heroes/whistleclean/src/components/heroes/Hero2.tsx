{/* Echo: the quote pill fills teal on hover, 260ms; the how-it-works link's underline wipes teal, 300ms */}
import { ShieldCheck } from "lucide-react";
import { brand } from "../../brand";
import { Container, PillButton, LineLink, SectionLabel } from "../../echo";

/* Editorial split: 6 columns of copy against 5 columns of framed image, offset one column like a measured margin. */
export default function Hero2() {
  return (
    <section className="bg-ground pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Container className="grid grid-cols-12 items-center gap-y-14 md:gap-x-8">
        <div className="col-span-12 md:col-span-6">
          <SectionLabel>Office cleaning · Melbourne</SectionLabel>
          <h1 className="wc-display mt-8 text-[clamp(40px,5.6vw,72px)] text-ink">
            The office is clear before anyone walks in.
          </h1>
          <p className="mt-6 max-w-[48ch] text-[18px] leading-relaxed text-muted">
            We clean after close, check every surface against a signed list, and leave the air smelling of eucalyptus rather than bleach.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <PillButton size="lg">Book your office clean</PillButton>
            <LineLink href="#how">How it works</LineLink>
          </div>
          <p className="mt-10 flex items-center gap-2 text-[14px] text-muted">
            <ShieldCheck size={16} strokeWidth={1.75} className="text-teal" aria-hidden="true" />
            Police-checked, fully insured, {brand.certification} certified
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <figure className="block">
            <img
              src="https://picsum.photos/seed/wc-morning-desk/900/1100"
              alt="A clean open-plan office in morning light"
              className="aspect-[9/11] w-full rounded-[6px] object-cover"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="wc-label text-muted">Level 4, 80 Market St</span>
              <span className="wc-label text-teal">Cleared 05:42</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
