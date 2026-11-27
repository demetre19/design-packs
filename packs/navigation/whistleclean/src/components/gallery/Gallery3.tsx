{/* Echo: a scroll strip of service plates under a hairline header */}
import { services } from "../../brand";
import { Container, Rule, Section } from "../../echo";

/* Scroll strip: cards on a fixed 280px measure, the strip scrolls inside its own container on narrow screens. */
export default function Gallery3() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="wc-draw-host flex items-end justify-between gap-6">
          <h2 className="wc-display text-[clamp(28px,3.4vw,42px)]">Where we work.</h2>
          <p className="wc-label text-muted">Scroll</p>
        </div>
        <div className="wc-draw-host mt-5"><Rule /></div>
        <ul className="-mx-2 mt-10 flex snap-x gap-10 overflow-x-auto px-2 pb-6">
          {services.map((s) => (
            <li key={s.slug} className="w-[260px] shrink-0 snap-start">
              <div className="bg-ground">
                <img src={`https://picsum.photos/seed/wc-site-${s.slug}/520/640`} alt="" className="aspect-[13/16] w-full rounded-[10px] object-cover" />
                <p className="mt-4 text-[16px] font-semibold">{s.name}</p>
                <p className="mt-1 text-[14px] text-muted">{s.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
