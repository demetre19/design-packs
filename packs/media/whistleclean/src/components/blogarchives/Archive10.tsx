{/* Artifact: the reading list kept like a cleaning checklist, zone by zone | Echo: each line ends in a eucalyptus leaf that lies flat and fills once the entry is marked read, the way a checklist line is signed off | Interactions: the tick button marks an entry read and lowers its leaf, 260ms; the zone counter updates; titles are links whose lines wipe teal, 300ms; a toggle hides read entries */}
import { useState } from "react";
import { Check } from "lucide-react";
import { entries, series } from "../../journal";
import { Container, Leaf, Section } from "../../echo";

/* THE READING CHECKLIST — series as zones down a paper sheet, entries as checklist lines with a sign-off leaf. */
export default function Archive10() {
  const [read, setRead] = useState<string[]>(["bond-back", "no-lock-in"]);
  const [hide, setHide] = useState(false);
  const toggle = (s: string) => setRead((r) => (r.includes(s) ? r.filter((x) => x !== s) : [...r, s]));
  return (
    <Section className="bg-ground">
      <Container className="flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-[30%]">
          <p className="wc-label text-muted">Journal · Reading checklist</p>
          <h1 className="wc-display mt-4 text-[clamp(34px,4.4vw,52px)]">Work through it zone by zone.</h1>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">Tick entries off as you read them. {read.length} of {entries.length} signed off.</p>
          <label className="mt-6 flex cursor-pointer items-center gap-3 text-[14px]">
            <input type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} className="h-4 w-4 accent-[var(--color-teal)]" />
            Hide entries I've read
          </label>
        </div>
        <div className="flex-1 rounded-[4px] border border-line bg-paper px-5 py-6 sm:px-10">
          {series.map((s) => {
            const list = entries.filter((e) => e.series === s.id && (!hide || !read.includes(e.slug)));
            const done = entries.filter((e) => e.series === s.id && read.includes(e.slug)).length;
            const total = entries.filter((e) => e.series === s.id).length;
            if (!list.length && hide) return null;
            return (
              <section key={s.id} className="border-b border-line py-5 last:border-b-0">
                <h2 className="flex items-baseline justify-between">
                  <span className="wc-heading text-[17px]">{s.name}</span>
                  <span className="wc-label text-muted">{done} / {total}</span>
                </h2>
                <ul className="mt-2">
                  {list.map((e) => {
                    const isRead = read.includes(e.slug);
                    return (
                      <li key={e.slug} className="relative flex items-center gap-3 py-2.5 pr-12">
                        <button onClick={() => toggle(e.slug)} aria-pressed={isRead} aria-label={isRead ? `Mark ${e.title} unread` : `Mark ${e.title} read`} className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-[260ms] ease-care ${isRead ? "border-teal bg-teal text-paper" : "border-line hover:border-teal"}`}>
                          {isRead && <Check size={13} strokeWidth={2.5} />}
                        </button>
                        <a href={`#${e.slug}`} className={`wc-draw-host relative min-w-0 flex-1 truncate pb-0.5 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal ${isRead ? "text-muted" : ""}`}>
                          {e.title} <span className="text-[13px] text-muted">· {e.read} min</span>
                          <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                        </a>
                        <span className="absolute inset-x-0 bottom-0 h-px bg-line/70" aria-hidden="true" />
                        <Leaf bg="var(--color-paper)" active={isRead} className="-bottom-[7px] right-0" />
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
