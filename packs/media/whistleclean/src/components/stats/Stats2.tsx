{/* Echo: three proof cards on hairline surfaces; deliberately still */}
import { brand } from "../../brand";
import { Container, Rule, Section } from "../../echo";

const stats = [
  { figure: brand.eucalyptus, title: "Eucalyptus oil-based", body: "Share of our cleaning products by base.", source: "MSDS" },
  { figure: "ISO", title: "9001:2015", body: "Quality management certification for every site.", source: "Audited" },
  { figure: "90", title: "Day check-ins", body: "A site walk with your Wellbeing Ambassador each quarter.", source: "Quarterly" },
];

/* Proof cards: three equal columns, figure first, explanation second. */
export default function Stats2() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="wc-draw-host mb-12 max-w-[520px]">
          <p className="wc-label text-muted">Measured, not promised</p>
          <Rule className="mt-3" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.title}>
              <div className="wc-surface p-7">
                <p className="wc-figure text-[56px] text-teal">{s.figure}</p>
                <p className="wc-heading mt-4 text-[19px]">{s.title}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
