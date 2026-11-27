{/* Artifact: a people essay from the Night Shift series, read with the margin used for quotations | Echo: a hairline down the margin's edge is wiped teal by reading progress; margin quotations sit against it | Interactions: the margin hairline follows scroll; margin quotes slide in from the margin edge when their paragraph is hovered, 280ms; end-matter links wipe, 300ms */}
import { useRef } from "react";
import { bySlug, fmtDate, seriesName } from "../../journal";
import { Byline, SeriesNav, related, useReadProgress } from "../../editorial/kit";

const paras: Array<{ text: string; margin?: string }> = [
  { text: "Our recruitment coordinator gets the same question at almost every interview. Why does a cleaning company ask about the last time you noticed something nobody else did? The answer is that noticing is the job. The vacuuming and the wiping can be taught in a week. The habit of seeing what is out of place takes longer, and it is what clients actually pay for.", margin: "Noticing is the job. The rest can be taught in a week." },
  { text: "We pay above award because the work is skilled, even when it is invisible. A cleaner who knows which partitions streak in low sun, which kitchenette tap drips, and which manager prefers the blinds left half open is worth more than a faster cleaner who does not. Turnover destroys that knowledge. Paying properly is the cheapest way we know to keep it." },
  { text: "Rostering follows the same logic. Wherever we can, the same people clean the same site, on the same nights, for years. Clients meet their team before the first clean. When a cleaner is away, the replacement reads the site notes the regular team keeps, not a generic checklist from head office.", margin: "Clients meet their team before the first clean." },
  { text: "Every cleaner we employ is police-checked and insured, and we tell clients that up front. It is not a marketing line. It is the minimum for being trusted with keys, alarm codes and offices full of other people's work. We would rather lose a contract than send someone unvetted into a building after dark." },
  { text: "Night work is hard on people. It is easy to forget that the person restocking the bathroom at nine at night has a family, a second job, or a long drive home. We schedule shifts so nobody finishes after midnight on a weeknight unless they have asked to, and we keep the overnight sites to small teams who look out for one another.", margin: "Nobody finishes after midnight on a weeknight unless they ask to." },
  { text: "Our founder's line about this has not changed since 2014: cleaners are some of the hardest-working people anywhere. The point of saying it is not to sound generous. It is to remind ourselves, and our clients, that a clean office is a piece of skilled work done by a person, and that the person deserves to be treated like it." },
];

/* MARGIN ESSAY — a full-bleed portrait opens the page; the text sits left on a 58ch measure; the right third is a quotation margin. */
export default function Post2() {
  const e = bySlug("hardest-working");
  const ref = useRef<HTMLElement>(null);
  const p = useReadProgress(ref);
  return (
    <article ref={ref} className="bg-paper pb-24">
      <div className="relative h-[52vh] min-h-[320px] w-full overflow-hidden">
        <img src={`https://picsum.photos/seed/${e.seed}/1800/900?grayscale`} alt="A cleaner restocking a bathroom late at night" className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <header className="-mt-24 relative max-w-[760px] bg-paper pt-10 pr-6">
          <p className="wc-label text-teal">{seriesName(e.series)} · {e.format} · No. {e.no}</p>
          <h1 className="wc-display mt-5 text-[clamp(36px,5.4vw,64px)]">{e.title}</h1>
          <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-muted">{e.dek}</p>
          <Byline entry={e} className="mt-6" />
        </header>
        <div className="relative mt-14">
          <span className="absolute bottom-0 top-0 hidden w-px bg-line lg:left-[66%] lg:block" aria-hidden="true">
            <span className="absolute left-0 top-0 w-px bg-teal" style={{ height: `${p * 100}%` }} />
          </span>
          {paras.map((x, i) => (
            <div key={i} className="group flex flex-col gap-4 lg:flex-row lg:gap-0">
              <p className={`text-[18px] leading-[1.8] lg:w-[66%] lg:pr-14 ${i ? "mt-6" : ""}`}>{x.text}</p>
              {x.margin && (
                <aside className="border-l-2 border-teal pl-4 lg:mt-6 lg:w-[34%] lg:border-l-0 lg:pl-10">
                  <p className="wc-heading text-[19px] text-teal transition-[opacity,translate] duration-[280ms] ease-care lg:opacity-70 lg:[translate:-8px_0] lg:group-hover:opacity-100 lg:group-hover:[translate:0_0]">{x.margin}</p>
                </aside>
              )}
            </div>
          ))}
        </div>
        <footer className="mt-20 flex flex-col gap-10 border-t border-ink pt-8 lg:flex-row">
          <div className="lg:w-[34%]">
            <p className="wc-label text-muted">About the writer</p>
            <p className="mt-3 text-[15px] leading-relaxed"><span className="font-semibold">Irene T.</span> coordinates recruitment at Whistle Clean and has interviewed most of the people who clean for us.</p>
            <p className="wc-label mt-3 text-muted">{fmtDate(e.date)}</p>
          </div>
          <div className="lg:flex-1">
            <SeriesNav entry={e} />
            <p className="wc-label mt-8 text-muted">Read next</p>
            <ul className="mt-2 columns-1 gap-8 sm:columns-2">
              {related(e, 4).map((r) => (
                <li key={r.slug} className="break-inside-avoid">
                  <a href={`#${r.slug}`} className="wc-draw-host relative block py-2.5 text-[15px] font-medium transition-colors duration-[260ms] ease-care hover:text-teal">
                    {r.title}
                    <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </article>
  );
}
