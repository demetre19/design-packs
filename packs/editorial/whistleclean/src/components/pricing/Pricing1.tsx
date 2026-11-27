{/* Echo: each tier is a call to action on the edge glint, which laps its border once on hover, 900ms */}
import { Check } from "lucide-react";
import { aud, brand, officePricing } from "../../brand";
import { Container, Glint, PillButton, Section, SectionLabel } from "../../echo";

const tiers = [
  { name: "Weekly", visits: 1, size: "Up to 7 people", items: ["Full clean once a week", "Bins, kitchenette, bathrooms", "Signed checklist each visit"] },
  { name: "Twice weekly", visits: 2, size: "8 to 14 people", items: ["Everything in Weekly", "Mid-week touchpoint wipe", "Quarterly site walk"], featured: true },
  { name: "Every weekday", visits: 5, size: "35 people and up", items: ["Nightly full clean", "Same team every night", "Monthly carpet spot treatment"] },
];

/* Three-tier pricing on a 12-column grid. Prices are the published office ballpark ranges, + GST per month. */
export default function Pricing1() {
  return (
    <Section className="bg-ground" id="pricing">
      <Container>
        <SectionLabel>Office pricing</SectionLabel>
        <div className="mt-8 grid grid-cols-12 gap-y-4">
          <h2 className="wc-display col-span-12 text-[clamp(32px,4vw,52px)] md:col-span-6">Published prices. No lock-in.</h2>
          <p className="col-span-12 self-end text-[16px] leading-relaxed text-muted md:col-span-5 md:col-start-8">
            Ballpark monthly ranges, plus GST. {brand.headcountRule}. Your fixed quote arrives within 24 hours of the site walk.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => {
            const p = officePricing.find((o) => o.visits === t.visits)!;
            return (
              <Glint key={t.name} radius={18} faceClassName="flex flex-col p-7 sm:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="wc-heading text-[20px]">{t.name}</h3>
                  {t.featured && <span className="wc-label text-teal">Most chosen</span>}
                </div>
                <p className="wc-label mt-2 text-muted">{t.size}</p>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="wc-figure text-[44px] text-ink">{aud(p.low)}</span>
                  <span className="text-[15px] text-muted">to {aud(p.high)} / mo</span>
                </p>
                <ul className="mt-8 grid gap-3 border-t border-line pt-6">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-3 text-[15px]">
                      <Check size={16} strokeWidth={2} className="mt-1 shrink-0 text-teal" aria-hidden="true" />{i}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-2">
                  <PillButton tone={t.featured ? "solid" : "outline"} className="w-full justify-center">
                    Get a fixed quote
                  </PillButton>
                </div>
              </Glint>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
