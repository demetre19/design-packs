{/* Artifact: the note left on the desk after a clean | Echo: each note is signed on a short rule | Interactions: hovering or focusing the stack squares the top note, 300ms; the next button slides the top note aside along the desk, 300ms */}
import { useState } from "react";
import { ArrowRight, StickyNote } from "lucide-react";
import { Container, Section } from "../../echo";

const notes = [
  { to: "Ops team, Level 4", body: "Two monitors were left on in the east bay. We switched them off at the wall and left the laptops as they were.", by: "Rosa", when: "Mon 24 Nov, 21:08" },
  { to: "Kitchen", body: "The fridge clean-out is Friday. Anything without a name on it by Thursday night goes to compost.", by: "Tuan", when: "Wed 26 Nov, 20:51" },
  { to: "Meeting room 2", body: "There's a coffee ring in the timber table. We lifted most of it with a damp cloth and left it to dry. No product used.", by: "Rosa", when: "Fri 28 Nov, 20:12" },
];
const tilt = [-2.5, 1.8, -1.2];

/* THE DESK NOTE — three notes layered with z-index and rotation inside a relative desk; a narrow aside explains the habit. */
export default function Content9() {
  const [top, setTop] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const next = () => {
    setLeaving(true);
    window.setTimeout(() => { setTop((t) => (t + 1) % notes.length); setLeaving(false); }, 300);
  };
  return (
    <Section className="overflow-x-clip bg-ground">
      <Container className="flex flex-col gap-14 md:flex-row md:items-center">
        <div className="md:w-[34%]">
          <p className="wc-label text-muted">Content 09 · The desk note</p>
          <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,42px)]">If we notice something, we write it down.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">Anything we didn't touch, couldn't finish or think you should know gets a note where you'll see it first.</p>
          <button onClick={next} className="mt-8 inline-flex items-center gap-2 border-b border-line pb-1.5 text-[15px] font-semibold hover:border-teal hover:text-teal">
            Next note <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
        <div className="group relative mx-auto h-[360px] w-full max-w-[420px] md:flex-1" tabIndex={0} aria-live="polite">
          {[2, 1, 0].map((depth) => {
            const idx = (top + depth) % notes.length;
            const n = notes[idx];
            const isTop = depth === 0;
            return (
              <article
                key={idx}
                className={`wc-draw-host absolute inset-x-0 top-0 mx-auto w-full max-w-[380px] rounded-[4px] border border-line bg-paper p-7 transition-[transform,opacity] duration-[300ms] ease-care ${isTop ? "group-hover:!rotate-0 group-focus:!rotate-0" : ""}`}
                style={{
                  zIndex: 10 - depth,
                  transform: `translate(${isTop && leaving ? 110 : depth * 10}px, ${depth * 12}px) rotate(${tilt[idx]}deg)`,
                  opacity: isTop && leaving ? 0 : 1,
                }}
              >
                <p className="flex items-center gap-2 wc-label text-teal"><StickyNote size={14} strokeWidth={1.75} aria-hidden="true" />For: {n.to}</p>
                <p className="mt-5 text-[17px] leading-relaxed">{n.body}</p>
                <div className="relative mt-8 h-px bg-line"><span className="wc-draw absolute inset-0" /></div>
                <p className="mt-3 text-[13px] text-muted">{n.by}, Whistle Clean · {n.when}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
