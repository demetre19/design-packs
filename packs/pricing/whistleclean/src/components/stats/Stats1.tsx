{/* Echo: four facts share one hairline; deliberately still */}
import { brand } from "../../brand";
import { Container, Section } from "../../echo";

const stats = [
  { figure: String(brand.founded), label: "Cleaning Melbourne since" },
  { figure: brand.rating.score, label: `Google rating from ${brand.rating.count} reviews` },
  { figure: String(brand.lockInMonths), label: "Months of lock-in" },
  { figure: "1 : 1", label: "Trees planted per clean" },
];

/* Figure row: four equal columns on one shared rule. All figures are published facts. */
export default function Stats1() {
  return (
    <Section className="bg-paper">
      <Container>
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="wc-draw-host group relative flex flex-col border-t border-line pr-6 pt-8">
              <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
              <dt className="wc-label order-2 mt-4 block max-w-[20ch] text-muted">{s.label}</dt>
              <dd className="wc-figure order-1 text-[clamp(44px,6vw,76px)] transition-colors duration-[260ms] ease-care group-hover:text-teal">{s.figure}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
