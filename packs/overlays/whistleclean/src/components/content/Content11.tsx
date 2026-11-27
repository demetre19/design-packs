{/* Artifact: the ISO 9001 quality management certificate and its audit trail | Echo: the certificate's seal is a eucalyptus leaf in a ring | Interactions: hovering the certificate lowers the seal leaf and fills it teal, 260ms */}
import { BadgeCheck } from "lucide-react";
import { brand } from "../../brand";
import { Container, Leaf, Section } from "../../echo";

/* SAMPLE audit dates and certificate number; confirm against the client's actual certificate before publishing. */
const audits = [
  { d: "Oct 2026", t: "Surveillance audit", r: "No non-conformities" },
  { d: "Oct 2025", t: "Surveillance audit", r: "One minor, closed in 14 days" },
  { d: "Oct 2024", t: "Recertification", r: "Certificate renewed" },
];

/* THE CERTIFICATE — the document is tilted 1deg and overlaps the audit trail with a negative margin on a higher z-layer. */
export default function Content11() {
  return (
    <Section className="bg-ground">
      <Container>
        <p className="wc-label text-muted">Content 11 · The certificate</p>
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center">
          <div className="relative z-10 rotate-[1deg] lg:w-[54%]">
            <div className="wc-surface wc-leaf-host relative px-8 py-10 sm:px-12 sm:py-14">
              <div className="flex items-start justify-between gap-6">
                <p className="wc-label text-muted">Certificate of registration</p>
                <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[1.5px] border-teal">
                  <span className="absolute inset-[5px] rounded-full border border-teal/40" />
                  <span className="relative block h-[14px] w-[34px]"><Leaf bg="var(--color-paper)" className="left-0 top-0" /></span>
                </span>
              </div>
              <p className="wc-display mt-8 text-[clamp(28px,3.2vw,40px)]">{brand.name}</p>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted">
                operates a quality management system that meets the requirements of <span className="font-semibold text-ink">{brand.certification}</span> for the scope:
              </p>
              <p className="mt-4 border-l-2 border-teal pl-4 text-[15px] italic leading-relaxed">
                Provision of commercial cleaning services to office, medical and childcare premises in metropolitan Melbourne.
              </p>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 text-[13px]">
                <div><dt className="wc-label text-muted">Certificate</dt><dd className="mt-1 font-semibold tabular-nums">QMS-0000 (sample)</dd></div>
                <div><dt className="wc-label text-muted">Address</dt><dd className="mt-1">South Melbourne VIC 3205</dd></div>
              </dl>
            </div>
          </div>
          <ol className="relative mt-[-24px] rounded-[6px] border border-line bg-paper px-6 pb-6 pt-12 lg:-ml-10 lg:mt-0 lg:flex-1 lg:py-8 lg:pl-20 lg:pr-8">
            <li className="wc-label flex items-center gap-2 pb-4 text-teal"><BadgeCheck size={15} strokeWidth={1.75} aria-hidden="true" />Audit trail</li>
            {audits.map((a) => (
              <li key={a.d} tabIndex={0} className="wc-draw-host relative flex gap-4 border-t border-line py-4 outline-none">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <span className="wc-label w-20 pt-0.5 text-muted">{a.d}</span>
                <span className="flex-1"><span className="block text-[15px] font-semibold">{a.t}</span><span className="block text-[13px] text-muted">{a.r}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
