{/* Artifact: the back-of-book topic index | Echo: every entry number is a link whose underline wipes teal; the letter rail's current letter keeps its line wiped | Interactions: the letter rail jumps to a letter and marks it; entry numbers wipe on hover or focus, 300ms, and their title slides in beside the topic, 280ms */}
import { useState } from "react";
import { entries } from "../../journal";
import { Container, Section } from "../../echo";

/* A TO Z INDEX — type only. Topics in CSS columns, each followed by the numbers of the entries that discuss it. */
export default function Archive4() {
  const topics = Array.from(new Set(entries.flatMap((e) => e.topics))).sort((a, b) => a.localeCompare(b));
  const letters = Array.from(new Set(topics.map((t) => t[0].toUpperCase())));
  const [cur, setCur] = useState(letters[0]);
  const [peek, setPeek] = useState<{ topic: string; title: string } | null>(null);
  return (
    <Section className="bg-paper">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Journal · Index</p>
            <h1 className="wc-display mt-4 text-[clamp(36px,5vw,60px)]">Index of topics</h1>
          </div>
          <p className="max-w-[40ch] text-[14px] text-muted">Numbers refer to entries in the register. {topics.length} topics across {entries.length} entries.</p>
        </div>
        <nav aria-label="Letters" className="mt-8 flex flex-wrap gap-1 border-b border-line">
          {letters.map((l) => (
            <a key={l} href={`#index-${l}`} onClick={() => setCur(l)} aria-current={cur === l ? "true" : undefined} className={`wc-draw-host relative w-9 pb-2 text-center text-[15px] font-semibold transition-colors duration-[260ms] ease-care ${cur === l ? "text-teal" : "text-muted hover:text-ink"}`}>
              {l}
              <span className="wc-draw absolute inset-x-1 -bottom-px" data-active={cur === l ? "true" : undefined} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="mt-10 gap-12 sm:columns-2 lg:columns-3">
          {letters.map((l) => (
            <div key={l} id={`index-${l}`} className="mb-8 break-inside-avoid">
              <p className="wc-display mb-3 text-[32px] text-teal">{l}</p>
              <ul className="grid gap-2.5">
                {topics.filter((t) => t[0].toUpperCase() === l).map((t) => {
                  const refs = entries.filter((e) => e.topics.includes(t)).sort((a, b) => a.no - b.no);
                  return (
                    <li key={t} className="text-[15px] leading-relaxed">
                      <span className="font-medium">{t}</span>
                      <span className="text-muted">, </span>
                      {refs.map((e, i) => (
                        <span key={e.slug}>
                          <a
                            href={`#${e.slug}`}
                            onMouseEnter={() => setPeek({ topic: t, title: e.title })}
                            onMouseLeave={() => setPeek(null)}
                            onFocus={() => setPeek({ topic: t, title: e.title })}
                            onBlur={() => setPeek(null)}
                            className="wc-draw-host relative tabular-nums text-teal"
                          >
                            {e.no}
                            <span className="wc-draw absolute inset-x-0 -bottom-px" aria-hidden="true" />
                          </a>
                          {i < refs.length - 1 && <span className="text-muted">, </span>}
                        </span>
                      ))}
                      {peek?.topic === t && (
                        <span className="block text-[13px] text-muted animate-[wc-peek_280ms_var(--ease-care)_both]">{peek.title}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <style>{"@keyframes wc-peek { from { opacity: 0; translate: -8px 0; } to { opacity: 1; translate: 0 0; } }"}</style>
      </Container>
    </Section>
  );
}
