{/* Artifact: the crew roster board, read as who wrote what | Echo: each writer owns a hairline across the board; their entries sit on it as links whose lines wipe teal | Interactions: hovering or focusing an entry wipes its line, 300ms, and turns it teal; the writer's row tints mist while one of their entries is in focus */}
import { authors, entries, fmtDate, seriesName } from "../../journal";
import { Container, Section } from "../../echo";

/* THE ROSTER — one row per writer, entries laid along it in date order like shifts on a board. */
export default function Archive9() {
  return (
    <Section className="bg-ground">
      <Container>
        <p className="wc-label text-muted">Journal · Roster of writers</p>
        <h1 className="wc-display mt-4 max-w-[20ch] text-[clamp(36px,5vw,60px)]">The people who write it are the people who do it.</h1>
        <div className="mt-12 border-t border-ink">
          {authors.map((a) => {
            const list = entries.filter((e) => e.author === a.id).sort((x, y) => y.date.localeCompare(x.date));
            return (
              <section key={a.id} className="flex flex-col gap-4 border-b border-line py-7 transition-colors duration-[260ms] ease-care focus-within:bg-mist/40 md:flex-row md:gap-10">
                <div className="md:w-[220px] md:shrink-0">
                  <p className="text-[17px] font-semibold">{a.name}</p>
                  <p className="text-[13px] text-muted">{a.role}</p>
                  <p className="wc-label mt-3 text-teal">{list.length} entries</p>
                </div>
                <ol className="flex min-w-0 flex-1 gap-4 overflow-x-auto pb-2">
                  {list.map((e) => (
                    <li key={e.slug} className="w-[240px] shrink-0">
                      <a href={`#${e.slug}`} className="wc-draw-host group relative block h-full rounded-[10px] bg-paper p-4">
                        <span className="wc-label block text-muted">{fmtDate(e.date, "short")} · {seriesName(e.series)}</span>
                        <span className="mt-2 block text-[15px] font-semibold leading-snug transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                        <span className="mt-2 block text-[12.5px] text-muted">{e.format} · {e.read} min</span>
                        <span className="wc-draw absolute bottom-0 left-4 right-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
