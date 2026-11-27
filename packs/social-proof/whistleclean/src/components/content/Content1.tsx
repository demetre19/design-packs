{/* Artifact: the signed nightly cleaning checklist | Echo: every checklist line ends in a eucalyptus leaf resting on its hairline, like a signed-off item | Interactions: hovering a line lowers its leaf and fills it teal, 260ms */}
import { Check } from "lucide-react";
import { checklist, sites } from "../../records";
import { Container, Leaf, Section } from "../../echo";

/* THE NIGHT CHECKLIST — a paper sheet set 0.4deg off square on the ground, with a time margin, an item body and a sign-off stamp in the gutter. */
export default function Content1() {
  const site = sites[0];
  return (
    <Section className="bg-ground">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-[28%] lg:pt-10">
            <p className="wc-label text-muted">Content 01 · The night checklist</p>
            <h2 className="wc-display mt-5 text-[clamp(30px,3.4vw,44px)]">Forty-two lines, signed every night.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Each zone is timed and initialled before the team moves on. You can read last night's sheet in the client portal by 7am.
            </p>
          </div>
          <article className="relative flex-1 -rotate-[0.4deg] rounded-[4px] border border-line bg-paper px-5 py-8 sm:px-10 sm:py-10">
            <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink pb-4">
              <p className="text-[16px] font-semibold">{site.name}, {site.suburb}</p>
              <p className="wc-label text-muted">Form WC-CL-07 · rev 3 · Site {site.id}</p>
            </header>
            <ol className="mt-2">
              {checklist.map((z, zi) => (
                <li key={z.zone} className="flex gap-4 border-b border-line py-5 sm:gap-8">
                  <span className="wc-label w-12 shrink-0 pt-1 text-muted">{z.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="wc-heading text-[17px]">{String(zi + 1).padStart(2, "0")} · {z.zone}</p>
                    <ul className="mt-3">
                      {z.items.map((item) => (
                        <li key={item} className="wc-leaf-host relative py-2 pr-10">
                          <span className="flex items-center gap-3 text-[15px]">
                            <Check size={15} strokeWidth={2} className="shrink-0 text-teal" aria-hidden="true" />
                            {item}
                          </span>
                          <span className="absolute inset-x-0 bottom-0 h-px bg-line/70" aria-hidden="true" />
                          <Leaf bg="var(--color-paper)" className="-bottom-[7px] right-0" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
            <footer className="mt-6 flex items-end justify-between gap-6">
              <p className="text-[13px] text-muted">15 of 42 lines shown. Full sheet in the portal.</p>
              <div className="rotate-[-3deg] rounded-[6px] border border-teal px-3 py-2 text-teal">
                <p className="wc-label">Signed RM · 21:12</p>
              </div>
            </footer>
          </article>
        </div>
      </Container>
    </Section>
  );
}
