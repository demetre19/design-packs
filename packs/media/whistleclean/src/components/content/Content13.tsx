{/* Artifact: the overnight handover log, from the last person out to the first person in | Echo: the night is one vertical hairline with a eucalyptus leaf at each logged moment | Interactions: hovering or focusing a moment lowers its leaf and fills it teal, 260ms */}
import { Coffee, DoorClosed } from "lucide-react";
import { Container, Leaf, Section } from "../../echo";

const log = [
  { t: "17:46", e: "Last person out", d: "Alarm set by the office manager. Lights on the sensor timer." },
  { t: "18:30", e: "Team on site", d: "Rosa and Tuan sign in at the lift. Alarm code entered, logged in the portal." },
  { t: "19:15", e: "Floor finished", d: "Desks, bins and carpet. Two monitors left on, switched off at the wall." },
  { t: "20:38", e: "Bathrooms and kitchen", d: "Consumables restocked; towel cartons noted as low." },
  { t: "21:12", e: "Checklist signed", d: "42 of 42. Tree T-04218 logged. Alarm set, team signed out." },
  { t: "07:58", e: "First person in", d: "The office looks the way it did when it was new." },
];

/* THE HANDOVER LOG — a single vertical axis at 30% with entries hung off it; time sits left of the axis, the entry right, the last entry set larger. */
export default function Content13() {
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-[30%]">
            <p className="wc-label text-muted">Content 13 · The handover log</p>
            <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,44px)]">What happens between 17:46 and 07:58.</h2>
            <p className="mt-6 flex items-center gap-2 text-[13px] text-muted"><DoorClosed size={15} strokeWidth={1.75} aria-hidden="true" />Wed 26 Nov · WC-0412</p>
          </div>
          <ol className="relative md:flex-1">
            <span className="absolute bottom-6 left-[64px] top-2 w-px bg-line" aria-hidden="true" />
            {log.map((l, i) => {
              const last = i === log.length - 1;
              return (
                <li key={l.t} tabIndex={0} className="wc-leaf-host wc-draw-host relative flex gap-0 pb-10 outline-none last:pb-0">
                  <span className="wc-label w-[52px] shrink-0 pt-1.5 text-right text-muted">{l.t}</span>
                  <span className="relative w-[48px] shrink-0">
                    <Leaf className="left-[7px] top-[5px]" active={last ? true : undefined} />
                    <span className="wc-draw absolute left-[38px] right-0 top-[11px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block font-semibold ${last ? "wc-display text-[clamp(26px,3vw,36px)] text-teal" : "text-[16px]"}`}>
                      {last && <Coffee size={22} strokeWidth={1.5} className="mb-2 block" aria-hidden="true" />}
                      {l.e}
                    </span>
                    <span className="mt-1 block max-w-[54ch] text-[14px] leading-relaxed text-muted">{l.d}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
