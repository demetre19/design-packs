{/* Artifact: the minutes of a 90-day site check-in | Echo: margin notes sit beside the agenda like annotations | Interactions: hovering or focusing an agenda item slides its margin note in from the left, 280ms */}
import { CalendarCheck } from "lucide-react";
import { brand } from "../../brand";
import { Container, Section } from "../../echo";

const items = [
  { t: "Walk-through findings", b: "Floor, kitchenette and bathrooms walked with the office manager. Glass partitions on the north side show smearing in low sun.", note: "Switch glass to the 1:20 mix and a dry second pass." },
  { t: "Consumables", b: "Hand towel use up about 20% since the team grew to 42. Current stock lasts roughly two visits.", note: "Raise par level from 8 to 12 cartons." },
  { t: "Schedule", b: "Wednesday clean to move 30 minutes later during the December all-hands week.", note: "Roster change confirmed with Tuan N." },
  { t: "Impact", b: "39 trees planted on this account in the quarter. Certificate added to the portal.", note: "Next planting report due February." },
];
const actions = [
  { a: "Change glass method on north partitions", who: "Tuan N.", due: "3 Dec" },
  { a: "Raise hand towel par to 12 cartons", who: "Katrina S.", due: "1 Dec" },
  { a: "Shift Wednesdays to 19:00 for 15 to 19 Dec", who: "Roster", due: "15 Dec" },
];

/* THE 90-DAY MINUTES — a document body with a wide left margin; margin notes are absolutely positioned against their paragraph and enter sideways. */
export default function Content7() {
  return (
    <Section className="bg-ground">
      <Container>
        <header className="flex flex-col gap-3 border-b border-ink pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="wc-label text-muted">Content 07 · Minutes · {brand.checkIns} check-in</p>
            <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,44px)]">Quarter three, Level 4, 80 Market St</h2>
          </div>
          <p className="flex items-center gap-2 text-[14px] text-muted"><CalendarCheck size={16} strokeWidth={1.75} className="text-teal" aria-hidden="true" />Thu 20 Nov 2026 · Katrina S., office manager</p>
        </header>
        <ol className="mt-4">
          {items.map((it, i) => (
            <li key={it.t} tabIndex={0} className="wc-draw-host group relative py-7 outline-none md:pl-[34%]">
              
              <aside className="mb-3 pl-9 text-[13px] leading-relaxed text-teal md:absolute md:left-0 md:top-7 md:mb-0 md:w-[calc(34%-64px)] md:pl-0 md:text-right md:opacity-0 md:-translate-x-3 md:transition-[opacity,translate] md:duration-[280ms] md:ease-care md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus:translate-x-0 md:group-focus:opacity-100">
                {it.note}
              </aside>
              <h3 className="wc-heading pl-9 text-[19px] md:pl-0">{String(i + 1).padStart(2, "0")} · {it.t}</h3>
              <p className="mt-2 max-w-[58ch] pl-9 text-[15px] leading-relaxed text-muted md:pl-0">{it.b}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 md:pl-[34%]">
          <p className="wc-label text-muted">Actions</p>
          <ul className="mt-3">
            {actions.map((a) => (
              <li key={a.a} className="wc-draw-host relative flex gap-4 border-t border-line py-3 text-[14px]">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <span className="flex-1">{a.a}</span>
                <span className="w-24 text-muted">{a.who}</span>
                <span className="w-14 text-right tabular-nums text-muted">{a.due}</span>
                
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
