{/* Echo: founder portrait and story beside a hairline roster; the closing line is set in teal */}
import { brand, team } from "../../brand";
import { Container, Section } from "../../echo";

/* Founder plus roster: portrait on 4 columns, story on 4, the wider team as a ledger on 3. */
export default function Team2() {
  const [founder, ...rest] = team;
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <img src={`https://picsum.photos/seed/${founder.seed}/700/900?grayscale`} alt={`Portrait of ${founder.name}`} className="aspect-[7/9] w-full rounded-[6px] object-cover" />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <p className="wc-label text-muted">{founder.role}</p>
          <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,42px)]">{founder.name}</h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            {founder.name.split(" ")[0]} started {brand.short} in {brand.founded} believing cleaners are among the hardest-working people anywhere, and that their work deserves to be done, and seen, with care.
          </p>
          <p className="wc-draw-host relative mt-8 inline-block text-[18px] font-semibold text-teal">
            Let love be our legacy.
            
          </p>
        </div>
        <ul className="col-span-12 md:col-span-3 md:col-start-10">
          {rest.map((p) => (
            <li key={p.name} className="wc-draw-host relative border-t border-line py-4 last:border-b">
              <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
              <p className="text-[15px] font-semibold">{p.name}</p>
              <p className="text-[13px] text-muted">{p.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
