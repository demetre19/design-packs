{/* Artifact: the tree planting register, one entry per clean | Echo: the month column is a stack of eucalyptus leaves, one per tree | Interactions: hovering the month stacks lowers every leaf in turn with a 12ms stagger, 260ms each */}
import { TreeDeciduous } from "lucide-react";
import { visits } from "../../records";
import { Container, Leaf, Section } from "../../echo";

const months = [
  { m: "Aug", n: 13 }, { m: "Sep", n: 13 }, { m: "Oct", n: 14 }, { m: "Nov", n: 12 },
];

/* THE TREE REGISTER — an oversized running total sits behind the ledger on a lower z-layer; ledger and month stacks share an unequal 3 : 1 flex. */
export default function Content5() {
  return (
    <Section className="relative overflow-hidden bg-ground">
      <p className="wc-figure pointer-events-none absolute -right-6 top-10 select-none text-[clamp(120px,22vw,320px)] text-mist" aria-hidden="true">4,247</p>
      <Container className="relative">
        <p className="wc-label text-muted">Content 05 · The tree register · Site WC-0412</p>
        <h2 className="wc-display mt-5 max-w-[18ch] text-[clamp(30px,3.6vw,48px)]">One clean, one tree. Here is the receipt.</h2>
        <div className="mt-14 flex flex-col gap-14 lg:flex-row">
          <ol className="lg:flex-[3]">
            <li className="wc-label flex gap-4 pb-3 text-muted">
              <span className="w-24">Tree</span><span className="w-28">Visit</span><span className="flex-1">Site</span><span className="w-20 text-right">Running</span>
            </li>
            {visits.map((v, i) => (
              <li key={v.tree} tabIndex={0} className="wc-draw-host relative flex gap-4 border-t border-line bg-ground/80 py-4 text-[15px] tabular-nums outline-none">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <span className="w-24 font-semibold text-teal">{v.tree}</span>
                <span className="w-28">{v.date}</span>
                <span className="flex-1 text-muted">{v.site} · cleaned by {v.by}</span>
                <span className="w-20 text-right">{4245 + i}</span>
              </li>
            ))}
            <li className="border-t border-line pt-4 text-[13px] text-muted">Planting partner and location published quarterly.</li>
          </ol>
          <div className="wc-leaf-host flex gap-6 lg:flex-1" tabIndex={0} aria-label="Leaves per month, one per clean">
            {months.map((mo) => (
              <div key={mo.m} className="flex flex-1 flex-col items-center">
                <div className="flex flex-col-reverse gap-1.5">
                  {Array.from({ length: mo.n }, (_, i) => (
                    <span key={i} className="relative block h-[14px] w-[34px]">
                      <Leaf className="left-0 top-0" style={{ transitionDelay: `${i * 12}ms` }} />
                    </span>
                  ))}
                </div>
                <span className="wc-label mt-3 border-t border-line pt-2 text-muted">{mo.m} · {mo.n}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 flex items-center gap-2 text-[13px] text-muted"><TreeDeciduous size={15} strokeWidth={1.75} className="text-teal" aria-hidden="true" />Sample register. Counts illustrate a three-day-a-week office.</p>
      </Container>
    </Section>
  );
}
