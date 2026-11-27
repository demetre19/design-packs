{/* Echo: a quiet comparison table; the Whistle Clean column is set in teal */}
import { Check, Minus } from "lucide-react";
import { Container, Section, SectionLabel } from "../../echo";

/* SAMPLE: the "typical contract" column is illustrative; verify every competitor claim before publishing. */
const rows: Array<{ label: string; us: string; them: string; usYes: boolean; themYes: boolean }> = [
  { label: "Minimum contract", us: "None", them: "12 to 24 months", usYes: true, themYes: false },
  { label: "Cleaning products", us: "90% eucalyptus oil-based", them: "Bleach and quat blends", usYes: true, themYes: false },
  { label: "Same team each visit", us: "Yes, met before day one", them: "Rostered as available", usYes: true, themYes: false },
  { label: "Quality checks", us: "Signed checklist, 90-day walk", them: "On complaint", usYes: true, themYes: false },
  { label: "Environmental return", us: "One tree per clean", them: "Not offered", usYes: true, themYes: false },
  { label: "Police-checked and insured", us: "Every cleaner", them: "Usually", usYes: true, themYes: true },
];

/* Comparison table: label column on 5, two measured value columns on 3.5 each. Scrolls inside itself on phones. */
export default function Feature4() {
  return (
    <Section className="bg-paper">
      <Container>
        <SectionLabel>The difference</SectionLabel>
        <h2 className="wc-display mt-8 max-w-[20ch] text-[clamp(32px,4vw,52px)]">What a typical contract leaves out.</h2>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[40%] pb-5 align-bottom"><span className="wc-label text-muted">Commitment</span></th>
                <th className="w-[30%] px-6 pb-5 align-bottom">
                  <span className="wc-draw-host relative inline-block text-[16px] font-semibold text-teal">
                    Whistle Clean
                    
                  </span>
                </th>
                <th className="w-[30%] px-6 pb-5 align-bottom"><span className="text-[16px] font-semibold text-muted">Typical contract</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="wc-draw-host group relative">
                  <th scope="row" className="relative border-t border-line py-5 pr-6 text-[15px] font-medium">
                    <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                    {r.label}
                  </th>
                  <td className="border-t border-line px-6 py-5 text-[15px]">
                    <div>
                      <span className="flex items-center gap-2"><Check size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />{r.us}</span>
                    </div>
                  </td>
                  <td className="border-t border-line px-6 py-5 text-[15px] text-muted">
                    <span className="flex items-center gap-2">
                      {r.themYes ? <Check size={16} strokeWidth={2} aria-hidden="true" /> : <Minus size={16} strokeWidth={2} aria-hidden="true" />}
                      {r.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
