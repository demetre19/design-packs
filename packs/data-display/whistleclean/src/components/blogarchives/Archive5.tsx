{/* Artifact: the morning bulletin pinned by reception, one lead story and the rest in brief | Echo: the lead story sits on a teal plate with the eucalyptus line drawing; it is a link, so its rule wipes white; the briefs are links whose lines wipe teal | Interactions: hovering the lead wipes its rule, 300ms; hovering a brief wipes its line and turns its title teal, 260 to 300ms */}
import { ArrowRight } from "lucide-react";
import { authorOf, entries, fmtDate, seriesName } from "../../journal";
import { Container, Gumlines, Section } from "../../echo";

/* THE FRONT PAGE — a dominant lead on 8 columns of teal; a narrow column of briefs recedes beside it. */
export default function Archive5() {
  const [lead, ...rest] = entries;
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex items-baseline justify-between border-b border-ink pb-4">
          <p className="wc-label text-ink">The Whistle Clean journal</p>
          <p className="wc-label text-muted">Updated {fmtDate(lead.date)}</p>
        </div>
        <div className="mt-8 flex flex-col gap-10 lg:flex-row">
          <a href={`#${lead.slug}`} className="wc-draw-host relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[16px] bg-teal p-8 text-paper sm:p-12 lg:flex-[2.2]">
            <Gumlines className="absolute -right-6 top-0 -z-10 h-full w-[300px]" />
            <p className="wc-label text-mist">Lead · {seriesName(lead.series)} · {lead.format}</p>
            <h1 className="wc-display mt-5 max-w-[16ch] text-[clamp(34px,4.6vw,60px)]">{lead.title}</h1>
            <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-mist">{lead.dek}</p>
            <div className="relative mt-10 h-px bg-paper/30"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
            <p className="mt-4 flex items-center gap-2 text-[14px] text-mist">{authorOf(lead.author).name} · {lead.read} min read <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" /></p>
          </a>
          <ol className="lg:flex-1">
            <li className="wc-label pb-3 text-muted">In brief</li>
            {rest.slice(0, 7).map((e) => (
              <li key={e.slug}>
                <a href={`#${e.slug}`} className="wc-draw-host group relative block py-4">
                  <span className="wc-label text-muted">{seriesName(e.series)} · {fmtDate(e.date, "short")}</span>
                  <span className="mt-1 block text-[16px] font-semibold leading-snug transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
                  <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
                  <span className="wc-draw absolute inset-x-0 top-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
