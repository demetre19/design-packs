{/* Echo: each caption rule wipes teal on hover, 300ms, as the caption turns teal */}
import { Container, Section, SectionLabel } from "../../echo";

const shots = [
  { seed: "wc-reception", caption: "Reception, Southbank", span: "md:col-span-7", ratio: "aspect-[7/5]" },
  { seed: "wc-boardroom", caption: "Boardroom, Cremorne", span: "md:col-span-5", ratio: "aspect-[5/5]" },
  { seed: "wc-kitchenette", caption: "Kitchenette, Richmond", span: "md:col-span-4", ratio: "aspect-[4/5]" },
  { seed: "wc-clinic-hall", caption: "Clinic corridor, Hawthorn", span: "md:col-span-8", ratio: "aspect-[8/5]" },
];

/* Measured grid: a 7/5 then 4/8 rhythm on 12 columns; the asymmetry alternates like a floor plan. */
export default function Gallery1() {
  return (
    <Section className="bg-ground">
      <Container>
        <SectionLabel>Recent sites</SectionLabel>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          {shots.map((s) => (
            <a key={s.seed} href="#" className={`wc-draw-host group block ${s.span}`}>
              <div>
                <img src={`https://picsum.photos/seed/${s.seed}/1000/700`} alt={s.caption} className={`${s.ratio} w-full rounded-[6px] object-cover`} />
              </div>
              <div className="relative mt-5 h-px bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
              <p className="wc-label mt-3 text-muted transition-colors duration-[260ms] ease-care group-hover:text-teal">{s.caption}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
