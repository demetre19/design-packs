{/* Artifact: a visual essay of seven rooms photographed in the hour before a childcare centre opens | Echo: each plate's caption hangs from a hairline under the frame; captions are first-class, timestamped like a log | Interactions: hovering or focusing a plate slides its caption in along the hairline from the left, 280ms; the plate index links jump between rooms and wipe their line, 300ms */}
import { bySlug, seriesName } from "../../journal";
import { Byline, SeriesNav, related } from "../../editorial/kit";

const rooms = [
  { t: "05:12", room: "Entry", cap: "The first room a family sees and the last one we finish. Mats lifted, glass wiped on both faces, shoe rack cleared of sand.", seed: "wc-room-entry" },
  { t: "05:19", room: "Babies' room", cap: "Cot rails wiped with a low-tox cleaner and left to dry with the windows cracked. No fragrance in this room, by the director's request.", seed: "wc-room-cots" },
  { t: "05:26", room: "Toddlers' room", cap: "Every surface at knee height gets a second pass. That is where the hands are.", seed: "wc-room-toddlers" },
  { t: "05:31", room: "Kitchen", cap: "Benches, sink and the fridge handle. The cook arrives at 6:00 and should find nothing to do but cook.", seed: "wc-room-kitchen" },
  { t: "05:35", room: "Bathrooms", cap: "Child-height basins and taps, then the change table, then the floor, in that order.", seed: "wc-room-bath" },
  { t: "05:38", room: "Play yard door", cap: "The handle, the glass and the latch the children are not supposed to be able to reach.", seed: "wc-room-yard" },
  { t: "05:42", room: "Office", cap: "Last room, keys returned, alarm set to day mode. The checklist is signed on the way out.", seed: "wc-room-office" },
];

/* VISUAL ESSAY, PLATES LEAD — full-width plates with short text interludes on a narrow centred measure. */
export default function Post5() {
  const e = bySlug("seven-rooms");
  return (
    <article className="bg-ground pb-24">
      <header className="mx-auto max-w-[1240px] px-5 pt-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-teal">{seriesName(e.series)} · Visual essay · 7 plates</p>
            <h1 className="wc-display mt-4 text-[clamp(40px,7vw,96px)]">{e.title}</h1>
          </div>
          <div className="md:max-w-[34ch]">
            <p className="text-[16px] leading-relaxed text-muted">{e.dek}</p>
            <Byline entry={e} className="mt-3" />
          </div>
        </div>
        <nav aria-label="Rooms" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {rooms.map((r, i) => (
            <a key={r.t} href={`#plate-${i}`} className="wc-draw-host relative pb-1 text-[13px] font-medium text-muted transition-colors duration-[260ms] ease-care hover:text-ink">
              <span className="tabular-nums">{r.t}</span> {r.room}
              <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>
      <p className="mx-auto mt-16 max-w-[58ch] px-5 text-[19px] leading-[1.75]">
        Irene spent a week of early mornings with the team that cleans a Brunswick early learning centre. These are the rooms, in the order they are finished, between the first light going on and the first family arriving at seven.
      </p>
      {rooms.map((r, i) => (
        <figure key={r.t} id={`plate-${i}`} tabIndex={0} className="group mx-auto mt-16 max-w-[1240px] px-5 outline-none sm:px-8 lg:px-12">
          <img src={`https://picsum.photos/seed/${r.seed}/1600/${i % 3 === 1 ? 1100 : 900}`} alt={`${r.room} at ${r.t}`} className="w-full rounded-[6px] object-cover" />
          <div className="mt-3 h-px bg-line" />
          <figcaption className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-8">
            <span className="wc-label w-36 shrink-0 text-teal">{r.t} · {r.room}</span>
            <span className="max-w-[60ch] text-[15px] leading-relaxed text-muted transition-[translate,color] duration-[280ms] ease-care [translate:-6px_0] group-hover:text-ink group-hover:[translate:0_0] group-focus:text-ink group-focus:[translate:0_0]">{r.cap}</span>
          </figcaption>
          {i === 2 && (
            <p className="mx-auto mt-16 max-w-[58ch] text-[19px] leading-[1.75]">
              The rule in this centre is simple: nothing scented in the rooms where children sleep, and nothing left wet where a child can reach it. Everything else follows from those two lines.
            </p>
          )}
          {i === 4 && (
            <p className="mx-auto mt-16 max-w-[58ch] text-[19px] leading-[1.75]">
              Order matters. Clean the high surfaces before the low ones, and the floor last, so nothing that falls has to be cleaned twice.
            </p>
          )}
        </figure>
      ))}
      <p className="mx-auto mt-16 max-w-[58ch] px-5 text-[19px] leading-[1.75]">
        At 5:42 the alarm goes to day mode and the team signs out. The director arrives at 6:30 to a centre that looks exactly as it did the evening before, minus everything that happened in between.
      </p>
      <footer className="mx-auto mt-20 max-w-[860px] px-5 sm:px-8">
        <div className="border-t border-ink pt-6">
          <p className="text-[15px]">Photographs and words by <span className="font-semibold">Irene T.</span> Published with the centre director's permission; no children appear in these images.</p>
        </div>
        <SeriesNav entry={e} className="mt-8" />
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {related(e).map((r) => (
            <a key={r.slug} href={`#${r.slug}`} className="wc-draw-host relative pb-1 text-[15px] font-medium transition-colors duration-[260ms] ease-care hover:text-teal">{r.title}<span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" /></a>
          ))}
        </div>
      </footer>
    </article>
  );
}
