{/* Artifact: the seasonal cleaning calendar, Melbourne's four seasons as the year's work | Echo: each season opens on a full-width hairline with its name set large; entries are links whose lines wipe teal | Interactions: hovering or focusing an entry wipes its line, 300ms; the season tabs jump between bands */}
import { entries, fmtDate, seriesName, type Entry } from "../../journal";
import { Container, Section } from "../../echo";

const seasonOf = (iso: string) => {
  const m = Number(iso.slice(5, 7));
  const y = iso.slice(0, 4);
  if (m >= 9 && m <= 11) return { key: `${y}-spring`, name: "Spring", y, note: "Windows after winter, carpets before the end-of-year rush." };
  if (m >= 6 && m <= 8) return { key: `${y}-winter`, name: "Winter", y, note: "Wet entries, heaters on, bins full of tissues." };
  if (m >= 3 && m <= 5) return { key: `${y}-autumn`, name: "Autumn", y, note: "Leaves on every mat." };
  return { key: `${y}-summer`, name: "Summer", y, note: "Dust, fans and the long January quiet." };
};

/* THE SEASONS — horizontal bands, one per season; the season word sits on the left at display size, entries flow beside it. */
export default function Archive2() {
  const groups = new Map<string, { name: string; y: string; note: string; list: Entry[] }>();
  for (const e of entries) {
    const s = seasonOf(e.date);
    if (!groups.has(s.key)) groups.set(s.key, { name: s.name, y: s.y, note: s.note, list: [] });
    groups.get(s.key)!.list.push(e);
  }
  const bands = Array.from(groups.entries());
  return (
    <Section className="bg-paper">
      <Container>
        <p className="wc-label text-muted">Journal · By season</p>
        <h1 className="wc-display mt-4 max-w-[18ch] text-[clamp(36px,5vw,64px)]">A cleaning year runs on the weather.</h1>
        <nav aria-label="Seasons" className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
          {bands.map(([k, g]) => (
            <a key={k} href={`#season-${k}`} className="wc-draw-host relative pb-3 text-[15px] font-medium text-muted transition-colors duration-[260ms] ease-care hover:text-ink">
              {g.name} {g.y}
              <span className="wc-draw absolute inset-x-0 -bottom-px" aria-hidden="true" />
            </a>
          ))}
        </nav>
        {bands.map(([k, g]) => (
          <section key={k} id={`season-${k}`} className="flex flex-col gap-8 border-b border-line py-14 lg:flex-row lg:gap-16">
            <div className="lg:w-[36%] lg:shrink-0">
              <h2 className="wc-display text-[clamp(56px,8vw,112px)] leading-[0.9] text-teal">{g.name}</h2>
              <p className="wc-label mt-4 text-muted">{g.y} · {g.list.length} {g.list.length === 1 ? "entry" : "entries"}</p>
              <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted">{g.note}</p>
            </div>
            <ul className="min-w-0 flex-1 lg:pt-4">
              {g.list.map((e) => (
                <li key={e.slug}>
                  <a href={`#${e.slug}`} className="wc-draw-host group relative block py-5">
                    <span className="wc-label text-muted">{fmtDate(e.date)} · {seriesName(e.series)} · {e.format}</span>
                    <span className="mt-1.5 block text-[20px] font-semibold leading-snug transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                    <span className="mt-1 block text-[15px] text-muted">{e.dek} {e.read} min.</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
                    <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </Section>
  );
}
