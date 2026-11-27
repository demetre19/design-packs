{/* Artifact: a practical planning guide, structured as a worked calculation | Echo: the guide opens with a summary box; each numbered step's heading is a link that wipes teal; the worked-example rows are buttons whose lines wipe as they are chosen | Interactions: choosing an example floor plan wipes its row, 300ms, and reworks the result below; step links jump within the guide */}
import { useState } from "react";
import { ListChecks } from "lucide-react";
import { aud, brand, officePricing } from "../../brand";
import { bySlug, seriesName } from "../../journal";
import { PillButton } from "../../echo";
import { Byline, SeriesNav, related } from "../../editorial/kit";

const examples = [
  { name: "Design studio, Cremorne", people: 12, note: "One kitchenette, two bathrooms, mostly hot desks." },
  { name: "Accounting practice, South Melbourne", people: 24, note: "Meeting rooms used by clients daily." },
  { name: "Agency floor, Richmond", people: 42, note: "Open plan, big kitchen, late finishes." },
  { name: "Head office, Docklands", people: 70, note: "Two floors, lots of glass, a gym shower." },
];
const steps = ["Count the people, not the square metres", "Divide by seven and round up", "Adjust for the rooms that work hardest", "Check it against the published band"];

/* STRUCTURED GUIDE — a summary box first, then four numbered steps in a two-track layout: step text on the left, a live worked example on the right. */
export default function Post8() {
  const e = bySlug("cleaning-days");
  const [ex, setEx] = useState(1);
  const pick = examples[ex];
  const visits = Math.min(5, Math.ceil(pick.people / 7));
  const band = officePricing.find((o) => o.visits === visits)!;
  return (
    <article className="bg-paper pb-24">
      <div className="mx-auto max-w-[1100px] px-5 pt-16 sm:px-8">
        <p className="wc-label text-teal">{seriesName(e.series)} · Guide</p>
        <h1 className="wc-display mt-4 max-w-[20ch] text-[clamp(34px,4.8vw,58px)]">{e.title}</h1>
        <Byline entry={e} className="mt-4" />
        <aside className="mt-10 rounded-[14px] bg-mist/60 p-6 sm:p-8">
          <p className="wc-label flex items-center gap-2 text-teal"><ListChecks size={14} strokeWidth={1.75} aria-hidden="true" />The short answer</p>
          <p className="mt-3 max-w-[60ch] text-[18px] leading-relaxed">
            Start with one cleaning day a week for every seven people, round up, and cap at five days. Then adjust for kitchens, clients and glass. For most Melbourne offices that lands between {aud(officePricing[0].low)} and {aud(officePricing[2].high)} a month plus GST.
          </p>
          <ol className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {steps.map((s, i) => (
              <li key={s}><a href={`#step-${i + 1}`} className="wc-draw-host relative pb-1 text-[14px] font-medium transition-colors duration-[260ms] ease-care hover:text-teal">{i + 1}. {s}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>
            ))}
          </ol>
        </aside>
        <div className="mt-14 flex flex-col gap-12 lg:flex-row">
          <div className="max-w-[60ch] text-[17px] leading-[1.75] lg:flex-[1.3]">
            <section id="step-1">
              <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">Step 1</span>{steps[0]}</h2>
              <p className="mt-3">Floor area tells you how long it takes to vacuum. People tell you how much mess there is. A half-empty floor of 600 square metres needs less cleaning than a packed floor of 300. Count the people who are usually in on a normal day, not the headcount on the payroll.</p>
            </section>
            <section id="step-2" className="mt-10">
              <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">Step 2</span>{steps[1]}</h2>
              <p className="mt-3">Our working rule is {brand.headcountRule.toLowerCase()}. It comes from years of watching bins, kitchens and bathrooms fill up. Twelve people round up to two days. Twenty-four round up to four. Above thirty-five, five days a week is almost always right.</p>
            </section>
            <section id="step-3" className="mt-10">
              <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">Step 3</span>{steps[2]}</h2>
              <p className="mt-3">Three things push a site up a day: a kitchen people actually cook in, clients visiting daily, and lots of glass. One thing pushes it down: a team that is mostly remote on Mondays and Fridays. We adjust for these on the site walk rather than guessing on the phone.</p>
            </section>
            <section id="step-4" className="mt-10">
              <h2 className="wc-heading text-[22px]"><span className="wc-label mr-3 text-teal">Step 4</span>{steps[3]}</h2>
              <p className="mt-3">We publish our ballpark bands so you can sanity-check any quote, ours included. Your fixed price arrives within 24 hours of the walk, there is no lock-in, and you can change the number of days as the office changes.</p>
            </section>
          </div>
          <aside className="lg:sticky lg:top-8 lg:flex-1 lg:self-start">
            <p className="wc-label text-muted">Worked examples · choose one</p>
            <ul className="mt-3">
              {examples.map((x, i) => (
                <li key={x.name}>
                  <button onClick={() => setEx(i)} aria-pressed={ex === i} className="wc-draw-host relative block w-full py-3 text-left">
                    <span className={`block text-[15px] font-semibold transition-colors duration-[260ms] ease-care ${ex === i ? "text-teal" : ""}`}>{x.name}</span>
                    <span className="block text-[13px] text-muted">{x.people} people · {x.note}</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
                    <span className="wc-draw absolute inset-x-0 bottom-0" data-active={ex === i ? "true" : undefined} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-[1fr_auto] gap-y-2 rounded-[14px] bg-ground p-5 text-[14.5px]" aria-live="polite">
              <dt className="text-muted">People</dt><dd className="text-right tabular-nums">{pick.people}</dd>
              <dt className="text-muted">÷ 7, rounded up</dt><dd className="text-right tabular-nums">{Math.ceil(pick.people / 7)}</dd>
              <dt className="text-muted">Days a week (max 5)</dt><dd className="text-right font-semibold tabular-nums">{visits}</dd>
              <dt className="text-muted">Published band</dt><dd className="text-right font-semibold tabular-nums text-teal">{aud(band.low)} to {aud(band.high)}</dd>
            </dl>
            <div className="mt-6"><PillButton tone="solid">Book a site walk</PillButton></div>
          </aside>
        </div>
        <footer className="mt-20 border-t border-ink pt-6">
          <p className="text-[15px]"><span className="font-semibold">Evenezer G.</span> looks after new client enquiries and has done most of our site walks this year.</p>
          <SeriesNav entry={e} className="mt-8" />
          <p className="wc-label mt-8 text-muted">More from the Workplace Guide</p>
          <ul className="mt-2 flex flex-wrap gap-x-8">{related(e).map((r) => <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>)}</ul>
        </footer>
      </div>
    </article>
  );
}
