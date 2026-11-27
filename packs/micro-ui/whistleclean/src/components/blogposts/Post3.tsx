{/* Artifact: a technical product bulletin written like a plain-language reading of a safety data sheet | Echo: the contents rail marks the section in view with a wiped teal line; footnote markers wipe their underline and preview their note | Interactions: the rail follows scroll and its links jump to sections, 300ms; footnote markers open a note that slides in sideways, 280ms */}
import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import { products } from "../../records";
import { bySlug, fmtDate, seriesName } from "../../journal";
import { Byline, Note, SeriesNav, related } from "../../editorial/kit";

const sections = [
  { id: "s1", n: "1.0", t: "What the bottle says" },
  { id: "s2", n: "2.0", t: "What is in it" },
  { id: "s3", n: "3.0", t: "What it does to the air" },
  { id: "s4", n: "4.0", t: "Where it is not the right product" },
  { id: "s5", n: "5.0", t: "How to read the sheet yourself" },
];

/* TECHNICAL BULLETIN — a document header band with a reference number, a sticky numbered contents rail on the left, the body on a 64ch measure, spec marginalia on the right. */
export default function Post3() {
  const e = bySlug("eucalyptus-air");
  const prod = products[0];
  const [cur, setCur] = useState("s1");
  const body = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = body.current;
    if (!root) return;
    const io = new IntersectionObserver((xs) => xs.forEach((x) => x.isIntersecting && setCur(x.target.id)), { rootMargin: "-30% 0px -60% 0px" });
    root.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <article className="bg-ground pb-24">
      <header className="border-b border-ink bg-paper">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div>
            <p className="wc-label flex items-center gap-2 text-teal"><FileText size={14} strokeWidth={1.75} aria-hidden="true" />{seriesName(e.series)} · Bulletin {String(e.no).padStart(3, "0")}</p>
            <h1 className="wc-display mt-4 max-w-[22ch] text-[clamp(32px,4.4vw,52px)]">{e.title}</h1>
            <Byline entry={e} className="mt-4" />
          </div>
          <dl className="grid grid-cols-3 gap-6 text-[13px]">
            <div><dt className="wc-label text-muted">Product</dt><dd className="mt-1 font-semibold">{prod.code}</dd></div>
            <div><dt className="wc-label text-muted">Sheet</dt><dd className="mt-1 font-semibold tabular-nums">{prod.sds}</dd></div>
            <div><dt className="wc-label text-muted">Dilution</dt><dd className="mt-1 font-semibold tabular-nums">{prod.dilution}</dd></div>
          </dl>
        </div>
      </header>
      <div className="mx-auto flex max-w-[1180px] gap-12 px-5 pt-14 sm:px-8 lg:px-12">
        <nav aria-label="Contents" className="hidden w-[200px] shrink-0 lg:block">
          <ol className="sticky top-8">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={cur === s.id ? "true" : undefined} className={`wc-draw-host relative block py-2.5 text-[14px] transition-colors duration-[260ms] ease-care ${cur === s.id ? "text-teal" : "text-muted hover:text-ink"}`}>
                  <span className="wc-label mr-2">{s.n}</span>{s.t}
                  <span className="wc-draw absolute inset-x-0 bottom-0" data-active={cur === s.id ? "true" : undefined} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div ref={body} className="min-w-0 max-w-[64ch] flex-1 text-[17px] leading-[1.75]">
          <section id="s1">
            <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">1.0</span>What the bottle says</h2>
            <p className="mt-4">
              Every bottle we bring on site is labelled with the product name, the dilution and the zone it is for. The concentrate behind our everyday surface cleaner is about ninety per cent eucalyptus oil-based by formulation<Note n={1}>"Oil-based" describes the active cleaning base. Water is added at the dilution shown on the label.</Note>, and the label tells you exactly how much of it is in the bottle you are looking at: twenty-five millilitres in a litre.
            </p>
            <p className="mt-4">
              That matters because most complaints about cleaning smells are really complaints about over-dosing. A product that is fine at one in forty can be overwhelming at one in ten. Measuring every bottle is the simplest thing we do, and the most effective.
            </p>
          </section>
          <section id="s2" className="mt-14">
            <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">2.0</span>What is in it</h2>
            <p className="mt-4">
              Section 3 of the safety data sheet lists the composition<Note n={2}>SDS section 3, "Composition and information on ingredients". Ask us for the current sheet; we supply one for every product on site.</Note>. For our surface cleaner, that is a eucalyptus oil-based surfactant blend and plant-derived solvents, with the fragrance coming from the eucalyptus itself. There is no chlorine bleach and no ammonia in the products we use for day-to-day office cleaning.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-[14px]">
                <caption className="wc-label pb-3 text-left text-muted">Table 1 · Everyday products on a typical office site</caption>
                <thead><tr className="border-b border-ink"><th className="py-2 pr-4 font-semibold">Code</th><th className="py-2 pr-4 font-semibold">Product</th><th className="py-2 pr-4 font-semibold">Base</th><th className="py-2 text-right font-semibold">Dilution</th></tr></thead>
                <tbody>
                  {products.map((x) => (
                    <tr key={x.code} className="border-b border-line"><td className="py-2.5 pr-4 tabular-nums text-teal">{x.code}</td><td className="py-2.5 pr-4">{x.name}</td><td className="py-2.5 pr-4 text-muted">{x.base}</td><td className="py-2.5 text-right tabular-nums">{x.dilution}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section id="s3" className="mt-14">
            <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">3.0</span>What it does to the air</h2>
            <p className="mt-4">
              We are careful with claims here, because air quality depends on far more than a cleaning product: ventilation, carpets, furniture and the people in the room all play a part. What we can say is that the smell you notice the next morning comes from eucalyptus rather than chlorine, and that it fades within a few hours on a ventilated floor.
            </p>
            <p className="mt-4">
              Clients with staff who are sensitive to scent can ask for a fragrance-reduced routine<Note n={3}>We switch to lower-dose methods and dry passes on glass for sites that ask. The request is recorded in the site notes the team reads before each shift.</Note>. We note it in the site file and the regular team follows it every visit.
            </p>
          </section>
          <section id="s4" className="mt-14">
            <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">4.0</span>Where it is not the right product</h2>
            <p className="mt-4">
              Eucalyptus-based cleaners are not disinfectants. In medical rooms, on clinic touchpoints and anywhere an infection-control plan applies, we use the disinfectant that plan specifies, and we use it as directed. The bottle for that job is labelled differently so it cannot be confused on the trolley.
            </p>
          </section>
          <section id="s5" className="mt-14">
            <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">5.0</span>How to read the sheet yourself</h2>
            <p className="mt-4">
              A safety data sheet has sixteen sections, always in the same order. For most office managers, three are enough: section 2 for hazards, section 4 for first aid, and section 7 for storage. If you want copies for your own records, ask your Client Wellbeing Ambassador and we will send the current version of every sheet for the products on your site.
            </p>
          </section>
        </div>
        <aside className="hidden w-[180px] shrink-0 xl:block">
          <div className="sticky top-8 text-[13px] leading-relaxed text-muted">
            <p className="wc-label text-ink">Spec</p>
            <p className="mt-2">{prod.name}, {prod.code}</p>
            <p className="mt-2">Use: {prod.use}</p>
            <p className="mt-2">Sheet {prod.sds}</p>
            <p className="mt-2">Poisons Information 13 11 26</p>
          </div>
        </aside>
      </div>
      <footer className="mx-auto mt-20 max-w-[1180px] px-5 sm:px-8 lg:px-12 lg:pl-[284px]">
        <div className="max-w-[64ch] border-t border-ink pt-6">
          <p className="wc-label text-muted">Notes and sources</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[13.5px] text-muted">
            <li>Product formulation as described on the supplier's label and safety data sheet.</li>
            <li>Safety data sheet, section 3, current version supplied on site.</li>
            <li>Site notes are held per site and read by the team before each shift.</li>
          </ol>
          <p className="mt-6 text-[14px]">Bulletin {String(e.no).padStart(3, "0")} · {fmtDate(e.date)} · Next review in six months</p>
          <SeriesNav entry={e} className="mt-6" />
          <p className="wc-label mt-8 text-muted">Related bulletins and guides</p>
          <ul className="mt-2">
            {related(e).map((r) => (
              <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal"><span className="wc-label mr-2 text-teal">{String(r.no).padStart(3, "0")}</span>{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  );
}
