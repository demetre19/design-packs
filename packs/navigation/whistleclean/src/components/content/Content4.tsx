{/* Artifact: the overnight crew roster board | Echo: each shift is a mist bar on the 17:00 to 07:00 axis | Interactions: hovering or focusing a shift fills its bar from the left, 300ms */}
import { Moon, Sunrise } from "lucide-react";
import { sites } from "../../records";
import { Container, Section } from "../../echo";

const start = 17, span = 14; // 17:00 to 07:00
const pos = (h: number) => (((h < start ? h + 24 : h) - start) / span) * 100;
const shifts = [
  { site: sites[0], from: 18.5, to: 21.2, who: "Rosa M." },
  { site: sites[1], from: 19, to: 21.5, who: "Priya K." },
  { site: sites[2], from: 18, to: 20.75, who: "Samir A." },
  { site: sites[3], from: 4.5, to: 6.5, who: "Rosa M." },
];
const ticks = [17, 19, 21, 23, 1, 3, 5, 7];

/* THE NIGHT ROSTER — absolute-positioned shift bars over a 14-hour axis; the board scrolls inside itself on phones. */
export default function Content4() {
  return (
    <Section className="bg-paper">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="wc-label text-muted">Content 04 · The roster · Tuesday night</p>
            <h2 className="wc-display mt-5 max-w-[20ch] text-[clamp(30px,3.4vw,44px)]">Done after you leave, finished before you arrive.</h2>
          </div>
          <p className="flex items-center gap-4 text-[13px] text-muted">
            <span className="flex items-center gap-1.5"><Moon size={14} strokeWidth={1.75} aria-hidden="true" />17:00</span>
            <span className="h-px w-10 bg-line" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><Sunrise size={14} strokeWidth={1.75} aria-hidden="true" />07:00</span>
          </p>
        </div>
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="relative min-w-[720px] pl-[200px] pr-16">
            <div className="relative h-6">
              {ticks.map((t) => (
                <span key={t} className="wc-label absolute -translate-x-1/2 text-muted" style={{ left: `${pos(t)}%` }}>{String(t).padStart(2, "0")}:00</span>
              ))}
            </div>
            {shifts.map((s) => (
              <div key={s.site.id + s.from} tabIndex={0} className="wc-draw-host group relative h-[76px] border-t border-line outline-none">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <div className="absolute -left-[200px] top-4 w-[180px]">
                  <p className="truncate text-[14px] font-semibold">{s.site.name}</p>
                  <p className="wc-label mt-1 text-muted">{s.site.id} · {s.site.suburb}</p>
                </div>
                <div className="absolute top-5 flex h-8 items-center overflow-hidden rounded-full bg-mist px-3" style={{ left: `${pos(s.from)}%`, width: `${pos(s.to) - pos(s.from)}%` }}>
                  <span className="absolute inset-0 bg-teal/15 transition-[clip-path] duration-[300ms] ease-care [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0)] group-focus:[clip-path:inset(0)]" aria-hidden="true" />
                  <span className="wc-label relative truncate text-teal">{s.who}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
