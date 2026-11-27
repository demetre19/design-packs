{/* Echo: portraits with names on hairlines; deliberately still */}
import { team } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Team grid: three columns of portraits at 4:5, names and roles beneath. Names and roles as published. */
export default function Team1() {
  return (
    <Section className="bg-paper">
      <Container>
        <SectionLabel>The people you'll meet</SectionLabel>
        <ul className="mt-12 grid grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <li key={p.name}>
              <div className="wc-draw-host bg-paper">
                <div>
                  <img src={`https://picsum.photos/seed/${p.seed}/640/800?grayscale`} alt={`Portrait of ${p.name}`} className="aspect-[4/5] w-full rounded-[6px] object-cover" />
                </div>
                <div className="relative mt-6 h-px bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
                <p className="mt-4 text-[18px] font-semibold">{p.name}</p>
                <p className="text-[14px] text-muted">{p.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
