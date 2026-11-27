{/* Echo: a tree tally drawn as eucalyptus leaves, one per clean; hovering settles every leaf in turn, 260ms with a 12ms stagger */}
import { brand } from "../../brand";
import { Container, Leaf, Section } from "../../echo";

/* Impact strip: statement on 5 columns, a 40-leaf tally on 7 (one leaf per clean in a sample month for a 2-visit office). */
export default function Stats3() {
  const n = 40;
  return (
    <Section className="bg-paper">
      <Container className="grid grid-cols-12 items-end gap-y-10 md:gap-x-8">
        <div className="col-span-12 md:col-span-5">
          <p className="wc-label text-muted">One clean, one tree</p>
          <h2 className="wc-display mt-5 text-[clamp(30px,3.6vw,44px)]">A twice-weekly office plants about 104 trees a year.</h2>
          <p className="mt-4 text-[15px] text-muted">Every visit since {brand.founded} has been matched with a tree.</p>
        </div>
        <div className="wc-leaf-host col-span-12 md:col-span-7" tabIndex={0} aria-label={`${n} leaves, one per clean`}>
          <div className="grid grid-cols-10 gap-y-7 border-b border-line pb-4">
            {Array.from({ length: n }, (_, i) => (
              <span key={i} className="relative h-[14px]">
                <Leaf bg="var(--color-paper)" className="left-0 top-0" style={{ transitionDelay: `${i * 12}ms` }} />
              </span>
            ))}
          </div>
          <p className="wc-label mt-3 text-muted">Sample: 40 cleans · 20 weeks</p>
        </div>
      </Container>
    </Section>
  );
}
