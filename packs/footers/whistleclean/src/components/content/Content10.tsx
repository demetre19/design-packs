{/* Artifact: the room-by-room end-of-lease (bond) inspection checklist | Echo: one hairline is wiped teal room by room as the inspection advances | Interactions: hovering or focusing a room wipes the line up to it, 300ms, fills each passed room's ring, 260ms, and swaps the item list */}
import { useState } from "react";
import { Check } from "lucide-react";
import { Container, Section } from "../../echo";

const rooms = [
  { r: "Entry", items: ["Door, frame and handle", "Light switches", "Skirting boards", "Floor, vacuumed and mopped"] },
  { r: "Living", items: ["Window tracks and sills", "Blinds, slat by slat", "Power points", "Walls spot-cleaned"] },
  { r: "Kitchen", items: ["Oven, racks and seals", "Rangehood filter degreased", "Cupboards inside and out", "Splashback grout"] },
  { r: "Bathroom", items: ["Shower screen descaled", "Exhaust fan cover", "Grout and silicone", "Mirror and cabinet"] },
  { r: "Bedrooms", items: ["Wardrobe tracks", "Inside drawers", "Ceiling fan blades", "Carpet steam-cleaned"] },
  { r: "Laundry", items: ["Tub and taps", "Behind the machine space", "Lint trap housing", "Floor waste"] },
];

/* THE BOND CHECKLIST — a horizontal walk line with absolutely placed room stops, then the chosen room's items flowing in CSS columns. */
export default function Content10() {
  const [at, setAt] = useState(2);
  return (
    <Section className="bg-paper">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 className="wc-display max-w-[18ch] text-[clamp(30px,3.4vw,44px)]">Cleaned to the agent's list, room by room.</h2>
          <p className="wc-label text-muted">Content 10 · Bond checklist · agent's room order</p>
        </div>
        <div className="relative mt-16 overflow-x-auto pb-4">
          <div className="relative min-w-[600px]">
            <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
            <div className="absolute left-0 top-0 h-px bg-teal transition-[width] duration-[300ms] ease-care" style={{ width: `${(at / (rooms.length - 1)) * 100}%` }} aria-hidden="true" />
            <ol className="flex justify-between">
              {rooms.map((r, i) => (
                <li key={r.r} className="relative w-0">
                  <button
                    onMouseEnter={() => setAt(i)}
                    onFocus={() => setAt(i)}
                    onClick={() => setAt(i)}
                    aria-current={i === at ? "step" : undefined}
                    className="absolute -left-[13px] top-0 flex w-[90px] flex-col items-start pt-6"
                  >
                    <span className={`absolute -top-[4px] left-[8px] h-[9px] w-[9px] rounded-full border transition-colors duration-[260ms] ease-care ${i <= at ? "border-teal bg-teal" : "border-line bg-paper"}`} aria-hidden="true" />
                    <span className={`text-[14px] font-semibold transition-colors duration-[260ms] ease-care ${i === at ? "text-teal" : i < at ? "text-ink" : "text-muted"}`}>{r.r}</span>
                    <span className="wc-label mt-1 text-muted">{i < at ? "Passed" : i === at ? "Checking" : "Next"}</span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="h-20" />
          </div>
        </div>
        <ul className="mt-8 gap-10 sm:columns-2" aria-live="polite">
          {rooms[at].items.map((it) => (
            <li key={it} className="mb-4 flex break-inside-avoid items-center gap-3 border-b border-line pb-4 text-[16px]">
              <Check size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />{it}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
