{/* Artifact: the service agreement, with plain-English margin translations | Echo: each clause is paired with its plain-English meaning | Interactions: hovering or focusing a clause slides the plain-English note in from the clause side and turns it teal, 280ms */}
import { Scale } from "lucide-react";
import { Container, Section } from "../../echo";

/* SAMPLE clause wording for layout only; the client's actual terms and a legal review are required before publishing. */
const clauses = [
  { n: "3.1", legal: "This Agreement commences on the Start Date and continues until terminated by either party in accordance with clause 9. No minimum term applies.", plain: "There is no lock-in. You can stop whenever you like." },
  { n: "4.2", legal: "The Contractor shall perform the Services in accordance with the Site Checklist, as amended by written agreement following each Quarterly Review.", plain: "We clean to a written list, and we update it with you every 90 days." },
  { n: "5.4", legal: "All personnel engaged in the performance of the Services shall hold a current National Police Check and be covered by the Contractor's insurances.", plain: "Everyone who enters your site is police-checked and insured." },
  { n: "7.1", legal: "Where the Client notifies a deficiency within 24 hours of a scheduled Service, the Contractor shall rectify the deficiency at no additional charge.", plain: "Tell us within a day if something's missed and we'll come back for free." },
  { n: "8.3", legal: "For each Service performed, the Contractor shall procure the planting of one (1) tree through a nominated planting partner.", plain: "Every clean plants a tree, and it's written into the contract." },
];

/* THE AGREEMENT — two unequal tracks (legal 3 : plain 2) per clause, joined by a drawn tie; translations enter sideways. */
export default function Content15() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Content 15 · The agreement</p>
            <h2 className="wc-display mt-5 max-w-[18ch] text-[clamp(30px,3.4vw,44px)]">The contract, with the meaning beside it.</h2>
          </div>
          <p className="flex items-center gap-2 text-[13px] text-muted"><Scale size={15} strokeWidth={1.75} aria-hidden="true" />Service agreement · sample clauses</p>
        </div>
        <ol className="mt-12 border-b border-line">
          {clauses.map((c) => (
            <li key={c.n} tabIndex={0} className="wc-draw-host group flex flex-col gap-4 border-t border-line py-7 outline-none md:flex-row md:gap-0">
              <div className="flex gap-5 md:flex-[3] md:pr-10">
                <span className="relative w-[34px] shrink-0 pt-[3px]">
                  
                  <span className="wc-label text-muted">{c.n}</span>
                </span>
                <p className="text-[14px] leading-relaxed text-muted">{c.legal}</p>
              </div>
              <div className="relative md:flex-[2] md:pl-10">
                <span className="wc-draw absolute -left-10 right-[calc(100%-28px)] top-[13px] hidden md:block" aria-hidden="true" />
                <p className="pl-[54px] text-[17px] font-semibold leading-snug transition-[opacity,translate,color] duration-[280ms] ease-care group-hover:text-teal group-focus:text-teal md:pl-0 md:opacity-60 md:[translate:-8px_0] md:group-hover:opacity-100 md:group-hover:[translate:0_0] md:group-focus:opacity-100 md:group-focus:[translate:0_0]">
                  {c.plain}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
