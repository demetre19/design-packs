{/* Artifact: a safety data sheet (SDS) for the eucalyptus surface cleaner | Echo: numbered sections flow in columns under hairline headings, like the printed sheet | Interactions: none; a reading document with the full sheet linked from the portal */}
import { FileText } from "lucide-react";
import { products } from "../../records";
import { Container, Rule, Section } from "../../echo";

const p = products[0];
const sections = [
  { n: 1, t: "Identification", b: `${p.name}, product code ${p.code}. Recommended use: ${p.use.toLowerCase()}. Supplied ready to dilute at ${p.dilution}.` },
  { n: 2, t: "Hazard identification", b: "Not classified as hazardous at working dilution. Concentrate may irritate eyes. Keep out of reach of children." },
  { n: 3, t: "Composition", b: "Eucalyptus oil-based surfactant blend. Plant-derived solvents. Fragrance from eucalyptus only. No chlorine, no ammonia." },
  { n: 4, t: "First aid", b: "Eyes: rinse with water for 15 minutes. Skin: wash with soap and water. Swallowed: rinse mouth, do not induce vomiting, call 13 11 26." },
  { n: 5, t: "Fire-fighting", b: "Concentrate is combustible above its flash point. Use water spray, foam or dry chemical." },
  { n: 6, t: "Accidental release", b: "Absorb spills with an inert material. Rinse the area with water. Small volumes may go to sewer at working dilution." },
  { n: 7, t: "Handling and storage", b: "Store below 30°C in the original container, upright, away from food. Decant only into labelled spray bottles." },
  { n: 8, t: "Exposure controls", b: "No respirator needed at working dilution. Gloves recommended when handling concentrate." },
];

/* THE SAFETY DATA SHEET — a document header band, then sections flowing in CSS columns like the printed sheet. */
export default function Content3() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="wc-draw-host">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="wc-label text-muted">Content 03 · Safety data sheet · extract, sections 1 to 8 of 16</p>
              <h2 className="wc-display mt-5 text-[clamp(30px,3.6vw,48px)]">{p.name}</h2>
            </div>
            <dl className="flex gap-8 text-[13px]">
              <div><dt className="wc-label text-muted">Ref</dt><dd className="mt-1 font-semibold tabular-nums">{p.sds}</dd></div>
              <div><dt className="wc-label text-muted">Base</dt><dd className="mt-1 font-semibold">{p.base}</dd></div>
              <div><dt className="wc-label text-muted">Dilution</dt><dd className="mt-1 font-semibold tabular-nums">{p.dilution}</dd></div>
            </dl>
          </div>
          <Rule className="mt-8 !bg-ink" />
        </div>
        <div className="mt-12 gap-10 [column-fill:balance] sm:columns-2 lg:columns-3">
          {sections.map((s) => (
            <div key={s.n} className="mb-10 break-inside-avoid">
              <div tabIndex={0} className="wc-draw-host px-1 outline-none">
                <p className="flex items-baseline gap-3">
                  <span className="wc-figure text-[28px] text-teal">{s.n}</span>
                  <span className="wc-heading text-[17px]">{s.t}</span>
                </p>
                <span className="relative mt-3 block h-px bg-line"><span className="wc-draw absolute inset-0" /></span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{s.b}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 flex items-center gap-2 text-[13px] text-muted">
          <FileText size={15} strokeWidth={1.75} className="text-teal" aria-hidden="true" />
          Full 16-section sheet supplied on site and in the portal. Poisons Information Centre 13 11 26.
        </p>
      </Container>
    </Section>
  );
}
