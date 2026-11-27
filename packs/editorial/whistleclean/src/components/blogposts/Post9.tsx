{/* Artifact: a bundle of notes exchanged between an office manager and her night cleaner | Echo: each letter is signed on a short hairline; the bundle's index is a row of dated links whose lines wipe teal | Interactions: the index links jump to a letter and wipe, 300ms; hovering a letter straightens it from its resting tilt, 260ms */}
import { bySlug, seriesName } from "../../journal";
import { Byline, SeriesNav, related } from "../../editorial/kit";

const letters = [
  { from: "office", date: "Mon 3 Mar", body: "Hi, whoever cleans on Mondays. The plant by the window in the east bay is a peace lily and it's drooping. Could you water it if the soil's dry? A cup is plenty. Thanks, Mel." },
  { from: "night", date: "Mon 3 Mar, 20:40", body: "Hi Mel. Watered the lily, about a cup, soil was dry. I also moved it 30 cm back from the heater vent, which I think was drying it out. Hope that's OK. Rosa." },
  { from: "office", date: "Thu 10 Apr", body: "Rosa, the lily is thriving. Different question: someone keeps leaving mugs in the meeting room sink. Please don't feel you have to wash them. That's on us." },
  { from: "night", date: "Thu 10 Apr, 19:55", body: "Understood. I'll stack them on the drying rack and leave them. If you'd like, I can leave a small card saying 'mugs go in the dishwasher'. Some teams find a note from the cleaner works better than one from the manager." },
  { from: "office", date: "Tue 3 Jun", body: "The card worked. Two weeks without a single mug. Also, we're having a team lunch Friday and there might be more mess than usual. Sorry in advance." },
  { from: "night", date: "Fri 6 Jun, 21:10", body: "Nothing to apologise for, that's what we're here for. Kitchen took an extra twenty minutes. The cake was still on the bench so I covered it and put it in the fridge. Rosa." },
  { from: "office", date: "Mon 1 Sep", body: "Rosa, the whole team signed this. We've worked here eighteen months and never met you, but we know you. Thank you. Mel and Level 4." },
];

/* LETTERS — an introduction, then the notes as paper slips alternating left and right down a centre line, each slightly tilted. */
export default function Post9() {
  const e = bySlug("letters-night-shift");
  return (
    <article className="bg-ground pb-24">
      <header className="mx-auto max-w-[680px] px-5 pt-20 sm:px-0">
        <p className="wc-label text-teal">{seriesName(e.series)} · Letters</p>
        <h1 className="wc-display mt-5 text-[clamp(36px,5.6vw,64px)]">{e.title}</h1>
        <Byline entry={e} className="mt-5" />
        <div className="mt-10 space-y-5 text-[18px] leading-[1.8]">
          <p>Mel manages the office on Level 4 at 80 Market Street. Rosa has cleaned it three nights a week since March. They had never met when these notes were written. The notes were left on Mel's desk and on the cleaner's cupboard door, and Mel kept every one.</p>
          <p>We asked if we could publish them, lightly trimmed. Both said yes. We think they say more about what good cleaning feels like from the inside than anything we could write ourselves.</p>
        </div>
        <nav aria-label="Letters" className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
          {letters.map((l, i) => (
            <a key={i} href={`#letter-${i}`} className="wc-draw-host relative pb-1 text-[13px] font-medium tabular-nums text-muted transition-colors duration-[260ms] ease-care hover:text-ink">
              {l.date.split(",")[0]}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>
      <div className="relative mx-auto mt-16 max-w-[980px] px-5 sm:px-8">
        <span className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-line md:block" aria-hidden="true" />
        <ol className="flex flex-col gap-10">
          {letters.map((l, i) => {
            const right = l.from === "night";
            return (
              <li key={i} id={`letter-${i}`} className={`relative md:w-1/2 ${right ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
                <div className={`rounded-[4px] border border-line bg-paper p-6 transition-transform duration-[260ms] ease-care hover:rotate-0 ${i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"}`}>
                  <p className="wc-label text-muted">{right ? "From the night shift" : "From the office"} · {l.date}</p>
                  <p className="mt-4 text-[17px] leading-[1.75]">{l.body}</p>
                  <div className="mt-5 h-px w-24 bg-line" />
                  <p className="mt-2 text-[13px] text-muted">{right ? "Rosa M., Whistle Clean" : "Mel, office manager"}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <footer className="mx-auto mt-20 max-w-[680px] px-5 sm:px-0">
        <div className="border-t border-ink pt-6 text-[15px]">
          <p>Collected and introduced by <span className="font-semibold">Katrina S.</span>, Client Wellbeing Ambassador. Names shortened at the writers' request.</p>
        </div>
        <SeriesNav entry={e} className="mt-8" />
        <ul className="mt-6">{related(e).map((r) => <li key={r.slug}><a href={`#${r.slug}`} className="wc-draw-host relative block py-2 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a></li>)}</ul>
      </footer>
    </article>
  );
}
