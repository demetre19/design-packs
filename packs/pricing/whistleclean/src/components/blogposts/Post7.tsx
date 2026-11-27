{/* Artifact: a quarterly field report from a 90-day site walk | Echo: numbered report sections open on full-width hairlines; the section links in the header wipe teal; the quarter's trees are counted in eucalyptus leaves | Interactions: section links jump and wipe their underline, 300ms; hovering the tree count lowers its leaves in turn, 260ms */}
import { bySlug, fmtDate, seriesName } from "../../journal";
import { sites } from "../../records";
import { Leaf } from "../../echo";
import { Byline, SeriesNav } from "../../editorial/kit";

const zones = [
  { z: "Entry and reception", done: 13, of: 13 },
  { z: "Open-plan floor", done: 13, of: 13 },
  { z: "Kitchenette", done: 12, of: 13 },
  { z: "Bathrooms", done: 13, of: 13 },
  { z: "Touchpoints", done: 13, of: 13 },
];

/* FIELD REPORT — a document header grid (site, date, attendees), a summary block of figures, then numbered sections 1 to 4 with tables. */
export default function Post7() {
  const e = bySlug("q3-site-report");
  const s = sites[0];
  return (
    <article className="bg-ground pb-24">
      <div className="mx-auto max-w-[980px] px-5 pt-16 sm:px-8">
        <p className="wc-label text-teal">{seriesName(e.series)} · Report {String(e.no).padStart(3, "0")}</p>
        <h1 className="wc-display mt-4 text-[clamp(32px,4.4vw,52px)]">{e.title}</h1>
        <Byline entry={e} className="mt-4" />
        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-ink py-5 text-[14px] sm:grid-cols-4">
          <div><dt className="wc-label text-muted">Site</dt><dd className="mt-1 font-semibold">{s.id}</dd></div>
          <div><dt className="wc-label text-muted">Walk date</dt><dd className="mt-1 font-semibold">20 Nov 2026</dd></div>
          <div><dt className="wc-label text-muted">Visits in quarter</dt><dd className="mt-1 font-semibold tabular-nums">39</dd></div>
          <div><dt className="wc-label text-muted">Attended</dt><dd className="mt-1 font-semibold">Katrina S., office manager</dd></div>
        </dl>
        <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {["Summary", "Checklist completion", "Findings", "Actions"].map((t, i) => (
            <a key={t} href={`#r-${i + 1}`} className="wc-draw-host relative pb-1 text-[14px] font-medium text-muted transition-colors duration-[260ms] ease-care hover:text-ink">
              {i + 1}. {t}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <section id="r-1" className="mt-14">
          <h2 className="wc-heading border-t border-line pt-6 text-[22px]"><span className="wc-label mr-3 text-teal">1</span>Summary</h2>
          <div className="mt-6 flex flex-col gap-6 rounded-[14px] bg-paper p-6 sm:flex-row sm:p-8">
            <div className="sm:flex-1"><p className="wc-figure text-[44px] text-teal">99.6%</p><p className="mt-1 text-[14px] text-muted">checklist lines signed across 39 visits</p></div>
            <div className="sm:flex-1"><p className="wc-figure text-[44px]">2</p><p className="mt-1 text-[14px] text-muted">client requests raised, both closed the same night</p></div>
            <div className="wc-leaf-host sm:flex-1">
              <p className="wc-figure text-[44px]">39</p>
              <p className="mt-1 text-[14px] text-muted">trees planted on this account</p>
              <div className="mt-3 flex flex-wrap gap-1" aria-hidden="true">
                {Array.from({ length: 13 }, (_, i) => <span key={i} className="relative block h-[14px] w-[34px]"><Leaf bg="var(--color-paper)" className="left-0 top-0" style={{ transitionDelay: `${i * 12}ms` }} /></span>)}
              </div>
              <p className="wc-label mt-2 text-muted">One leaf per three trees</p>
            </div>
          </div>
          <p className="mt-6 max-w-[64ch] text-[17px] leading-[1.75]">
            The quarter ran cleanly. One checklist line was missed in 39 visits, a kitchenette bin liner on 26 November, and the team noted the reason on the night. The office has grown from 36 to 42 people since the last walk, which shows in the consumables and in the kitchen.
          </p>
        </section>

        <section id="r-2" className="mt-14">
          <h2 className="wc-heading border-t border-line pt-6 text-[22px]"><span className="wc-label mr-3 text-teal">2</span>Checklist completion</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-[14.5px]">
              <thead><tr className="border-b border-ink"><th className="py-2 pr-4 font-semibold">Zone</th><th className="py-2 pr-4 text-right font-semibold">Weeks signed</th><th className="w-[40%] py-2 font-semibold">Completion</th></tr></thead>
              <tbody>
                {zones.map((z) => (
                  <tr key={z.z} className="border-b border-line">
                    <td className="py-3 pr-4">{z.z}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{z.done} / {z.of}</td>
                    <td className="py-3"><span className="relative block h-[3px] bg-line"><span className="absolute inset-y-0 left-0 bg-teal" style={{ width: `${(z.done / z.of) * 100}%` }} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="r-3" className="mt-14 max-w-[64ch] text-[17px] leading-[1.75]">
          <h2 className="wc-heading border-t border-line pt-6 text-[22px]"><span className="wc-label mr-3 text-teal">3</span>Findings</h2>
          <p className="mt-4"><span className="font-semibold">3.1 Glass.</span> The north partitions showed smearing in low morning sun. We changed the method to a one-in-twenty glass mix with a dry second pass. The office manager confirmed the change worked within a week.</p>
          <p className="mt-4"><span className="font-semibold">3.2 Consumables.</span> Hand towel use is up by about a fifth with the larger team. At the current par level, stock lasts roughly two visits, which is too close.</p>
          <p className="mt-4"><span className="font-semibold">3.3 Schedule.</span> The December all-hands week will run late on Wednesdays. The Wednesday clean moves thirty minutes later for that week only.</p>
        </section>

        <section id="r-4" className="mt-14">
          <h2 className="wc-heading border-t border-line pt-6 text-[22px]"><span className="wc-label mr-3 text-teal">4</span>Actions</h2>
          <ol className="mt-4">
            {[
              { a: "Glass method on north partitions changed to 1:20 with dry pass", who: "Tuan N.", due: "Done" },
              { a: "Hand towel par level raised from 8 to 12 cartons", who: "Katrina S.", due: "1 Dec" },
              { a: "Wednesday clean moved to 19:00, 15 to 19 December", who: "Roster", due: "15 Dec" },
            ].map((x) => (
              <li key={x.a}>
                <div className="relative flex flex-wrap gap-x-6 gap-y-1 py-3.5 text-[15px]">
                  <span className="min-w-0 flex-1">{x.a}</span><span className="w-24 text-muted">{x.who}</span><span className="w-16 text-right tabular-nums text-teal">{x.due}</span>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-20 border-t border-ink pt-6">
          <p className="text-[15px]">Report prepared by <span className="font-semibold">Katrina S.</span>, Client Wellbeing Ambassador, after the walk on 20 November. Next walk due February. Published {fmtDate(e.date)} with the client's permission.</p>
          <SeriesNav entry={e} className="mt-8" />
        </footer>
      </div>
    </article>
  );
}
