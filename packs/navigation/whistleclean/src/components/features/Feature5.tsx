{/* Echo: the active area on the plan tints teal with a hairline outline, 260ms; each note is a button whose top rule wipes teal when chosen or hovered, 300ms */}
import { useState } from "react";
import { Container, Section, SectionLabel } from "../../echo";

const notes = [
  { id: "touch", title: "Touchpoints", body: "Handles, switches, lift buttons and keypads, wiped every visit.", x: 18, y: 30, w: 22, h: 26 },
  { id: "desk", title: "Desks cleared, not moved", body: "We clean around your work and log anything we can't reach.", x: 46, y: 44, w: 26, h: 22 },
  { id: "edge", title: "Skirting and frames", body: "The edges nobody checks, on a rolling weekly rota.", x: 8, y: 74, w: 84, h: 10 },
  { id: "kitchen", title: "Kitchenette", body: "Sinks, benches and appliance fronts, finished with eucalyptus.", x: 76, y: 18, w: 18, h: 34 },
];

/* Annotated figure: an inline SVG floor plate on 7 columns, its notes on 4. */
export default function Feature5() {
  const [active, setActive] = useState(notes[0].id);
  return (
    <Section className="bg-ground">
      <Container className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="col-span-12 md:col-span-7">
          <SectionLabel>What a nightly clean covers</SectionLabel>
          <figure className="mt-10">
            <div className="wc-plate relative aspect-[4/3] w-full rounded-[6px]">
              <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <rect x="4" y="4" width="92" height="67" fill="none" stroke="var(--color-teal)" strokeWidth="0.4" />
                <rect x="44" y="30" width="30" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="0.3" />
                <rect x="74" y="12" width="20" height="26" fill="none" stroke="var(--color-teal)" strokeWidth="0.3" />
                <line x1="40" y1="4" x2="40" y2="28" stroke="var(--color-teal)" strokeWidth="0.3" />
              </svg>
              {notes.map((n) => (
                <div
                  key={n.id}
                  className={`absolute rounded-[3px] border transition-colors duration-[260ms] ease-care ${active === n.id ? "border-teal bg-teal/10" : "border-transparent"}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, width: `${n.w}%`, height: `${n.h}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <figcaption className="wc-label mt-4 text-muted">Typical floor, 40 people, Cremorne</figcaption>
          </figure>
        </div>
        <ol className="col-span-12 self-end md:col-span-4 md:col-start-9">
          {notes.map((n) => (
            <li key={n.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(n.id)}
                onFocus={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                aria-pressed={active === n.id}
                className="relative block w-full border-t border-line py-5 text-left"
              >
                <span className="wc-draw absolute inset-x-0 -top-px" data-active={active === n.id ? "true" : undefined} aria-hidden="true" />
                <span className={`wc-heading text-[18px] transition-colors duration-[260ms] ease-care ${active === n.id ? "text-teal" : ""}`}>{n.title}</span>
                <span className="mt-1.5 block text-[14px] leading-relaxed text-muted">{n.body}</span>
              </button>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
