{/* Artifact: the founder's reading shelf, one essay opened and the rest stacked by series | Echo: the open essay's read link wipes teal; shelved titles are links whose lines wipe as they are scanned | Interactions: hovering a shelved title wipes its line, 300ms; choosing a series heading opens that shelf below, 300ms */}
import { useState } from "react";
import { authorOf, bySlug, entries, fmtDate, series } from "../../journal";
import { Container, LineLink, Section } from "../../echo";

/* EDITOR'S SHELF — an asymmetric lead: one long excerpt with its pull quote on 7 columns, a stacked shelf of series on 4. */
export default function Archive6() {
  const lead = bySlug("hardest-working");
  const [open, setOpen] = useState("field");
  return (
    <Section className="bg-paper">
      <Container className="flex flex-col gap-14 lg:flex-row lg:gap-20">
        <article className="lg:flex-[1.7]">
          <p className="wc-label text-muted">Editor's pick · chosen by {authorOf("ivan").name}</p>
          <h1 className="wc-display mt-5 text-[clamp(34px,4.6vw,58px)]">{lead.title}</h1>
          <p className="mt-4 text-[14px] text-muted">{authorOf(lead.author).name} · {fmtDate(lead.date)} · {lead.read} min</p>
          <div className="mt-8 max-w-[60ch] space-y-5 text-[17px] leading-[1.75]">
            <p>
              The first thing a new cleaner learns at Whistle Clean is not how to dilute a concentrate or which cloth goes where. It is that nobody will see the work, and that the work still matters. Our cleaners arrive after the last person leaves and finish before the first one returns. The office looks the way it should, and that is the whole point.
            </p>
            <p>
              That invisibility makes it easy to treat cleaning as a cost to be squeezed. We think it should be treated as a trade. So we pay above award, roster the same people to the same sites, and introduce every team to the client before day one.
            </p>
          </div>
          <blockquote className="wc-display mt-10 max-w-[22ch] border-l-2 border-teal pl-6 text-[clamp(24px,2.8vw,32px)]">
            If nobody notices the clean, it was done properly. That is not the same as nobody caring.
          </blockquote>
          <div className="mt-10"><LineLink href={`#${lead.slug}`}>Read the essay</LineLink></div>
        </article>
        <aside className="lg:flex-1">
          <p className="wc-label border-b border-ink pb-3 text-ink">On the shelf</p>
          {series.map((s) => {
            const list = entries.filter((e) => e.series === s.id && e.slug !== lead.slug);
            const isOpen = open === s.id;
            return (
              <div key={s.id} className="border-b border-line">
                <button onClick={() => setOpen(isOpen ? "" : s.id)} aria-expanded={isOpen} className="wc-draw-host relative flex w-full items-baseline justify-between py-4 text-left">
                  <span className={`text-[16px] font-semibold transition-colors duration-[260ms] ease-care ${isOpen ? "text-teal" : ""}`}>{s.name}</span>
                  <span className="wc-label text-muted">{list.length}</span>
                  <span className="wc-draw absolute inset-x-0 -bottom-px" data-active={isOpen ? "true" : undefined} aria-hidden="true" />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-[300ms] ease-care ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <ul className="overflow-hidden">
                    <li className="pb-2 text-[13px] text-muted">{s.line}</li>
                    {list.map((e) => (
                      <li key={e.slug}>
                        <a href={`#${e.slug}`} className="wc-draw-host relative block py-2.5 text-[14.5px] transition-colors duration-[260ms] ease-care hover:text-teal">
                          {e.title} <span className="text-muted">· {e.read} min</span>
                          <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                    {list.length === 0 && <li className="pb-4 text-[14px] text-muted">Nothing else in this series yet.</li>}
                  </ul>
                </div>
              </div>
            );
          })}
        </aside>
      </Container>
    </Section>
  );
}
