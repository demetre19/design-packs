{/* Artifact: a single night on one site told as a timeline, from the last person out to the first person in | Echo: the night is one vertical hairline wiped teal by reading progress; each logged moment is a eucalyptus leaf that lowers once it has been read past | Interactions: the timeline fills as you scroll; leaves above the reading point lie flat; a sticky clock shows the time of the moment in view; the hour index jumps and wipes, 300ms */}
import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";
import { bySlug, seriesName } from "../../journal";
import { Leaf } from "../../echo";
import { Byline, SeriesNav, related, useReadProgress } from "../../editorial/kit";

const night = [
  { t: "17:46", h: "Last person out", b: "The office manager sets the alarm and turns off the kitchen lights. The floor still has the shape of the day: chairs pushed back, a whiteboard half full, a pizza box balanced on the recycling bin." },
  { t: "18:30", h: "Team signs in", b: "Rosa and Tuan sign in at the lift and enter the alarm code. The time goes into the portal. They read the site notes on the cupboard door first: the lily needs water on Mondays, the boardroom has a client at 8:00 tomorrow." },
  { t: "18:42", h: "Entry and reception", b: "Glass doors on both faces, reception desk cleared surfaces only, mat lifted and vacuumed. The first zone is signed at 18:58, initials and time." },
  { t: "19:15", h: "Open-plan floor", b: "Desks are wiped around whatever is left on them, never under it. Bins are emptied and relined. The carpet is vacuumed edge to edge, working back toward the lift so nothing is walked on twice." },
  { t: "20:02", h: "Kitchenette", b: "The dishwasher is loaded and started. Sinks, taps and splashback are descaled. The fridge gets its Friday clear-out a day early because of a public holiday, with a note on the door about what went to compost." },
  { t: "20:38", h: "Bathrooms", b: "Basins, mirrors and fittings first, toilets inside and out, then consumables. Hand towel stock is low; two cartons left. It goes in the notes for the client." },
  { t: "21:05", h: "Touchpoints", b: "Handles, push plates, light switches, lift buttons, keypads. The last pass of the night, done with fresh cloths." },
  { t: "21:12", h: "Checklist signed", b: "Forty-two of forty-two. Tree T-04218 is logged against the visit. Alarm set, lights off, team signs out at the lift." },
  { t: "07:58", h: "First person in", b: "The first person in makes a coffee and does not notice anything at all. That is the point." },
];

/* TIMELINE ESSAY — a sticky clock on the left; a single vertical line carries the moments, filled teal as the night is read. */
export default function Post10() {
  const e = bySlug("overnight-timeline");
  const ref = useRef<HTMLOListElement>(null);
  const p = useReadProgress(ref);
  const [at, setAt] = useState(0);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver((xs) => xs.forEach((x) => x.isIntersecting && setAt(Number((x.target as HTMLElement).dataset.i))), { rootMargin: "-40% 0px -55% 0px" });
    root.querySelectorAll("li[data-i]").forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);
  return (
    <article className="bg-paper pb-24">
      <header className="mx-auto max-w-[1100px] px-5 pt-16 sm:px-8">
        <p className="wc-label text-teal">{seriesName(e.series)} · Timeline · Wed 26 Nov 2026</p>
        <h1 className="wc-display mt-4 max-w-[18ch] text-[clamp(38px,6vw,76px)]">{e.title}</h1>
        <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-muted">{e.dek}</p>
        <Byline entry={e} className="mt-4" />
        <nav aria-label="Hours" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
          {night.map((n, i) => (
            <a key={n.t} href={`#t-${i}`} className="wc-draw-host relative pb-1 text-[13px] font-medium tabular-nums text-muted transition-colors duration-[260ms] ease-care hover:text-ink">{n.t}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a>
          ))}
        </nav>
      </header>
      <div className="mx-auto mt-14 flex max-w-[1100px] gap-10 px-5 sm:px-8">
        <div className="hidden w-[180px] shrink-0 md:block">
          <div className="sticky top-10">
            <p className="wc-label flex items-center gap-2 text-muted"><Clock size={13} strokeWidth={1.75} aria-hidden="true" />Now reading</p>
            <p className="wc-figure mt-2 text-[56px] text-teal" aria-live="polite">{night[at].t}</p>
            <p className="mt-1 text-[14px] text-muted">{night[at].h}</p>
          </div>
        </div>
        <ol ref={ref} className="relative min-w-0 flex-1">
          <span className="absolute bottom-0 left-[16px] top-0 w-px bg-line" aria-hidden="true">
            <span className="absolute left-0 top-0 w-px bg-teal" style={{ height: `${p * 100}%` }} />
          </span>
          {night.map((n, i) => {
            const last = i === night.length - 1;
            return (
              <li key={n.t} id={`t-${i}`} data-i={i} className="relative flex gap-6 pb-14 last:pb-0">
                <span className="relative w-[34px] shrink-0 pt-[6px]">
                  <span className="relative block h-[14px] w-[34px] bg-paper"><Leaf bg="var(--color-paper)" active={i <= at} className="left-0 top-0" /></span>
                </span>
                <div className="min-w-0 max-w-[60ch]">
                  <p className="wc-label text-teal">{n.t}</p>
                  <h2 className={`mt-1 font-semibold ${last ? "wc-display text-[clamp(28px,3.4vw,40px)] text-teal" : "wc-heading text-[22px]"}`}>{n.h}</h2>
                  <p className="mt-3 text-[17px] leading-[1.75]">{n.b}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <footer className="mx-auto mt-20 max-w-[1100px] px-5 sm:px-8 md:pl-[250px]">
        <div className="border-t border-ink pt-6 text-[15px]">
          <p>Logged by <span className="font-semibold">Evenezer G.</span> from the night's portal record and the team's site notes. Times are as signed.</p>
        </div>
        <SeriesNav entry={e} className="mt-8" />
        <ul className="mt-6">{related(e).map((r) => <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>)}</ul>
      </footer>
    </article>
  );
}
