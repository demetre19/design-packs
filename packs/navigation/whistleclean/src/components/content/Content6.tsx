{/* Artifact: the key and access-card register kept for every site | Echo: each tag's line in the handover log wipes teal when its tag is handled | Interactions: hovering or focusing a tag swings it square about its hook, 260ms, and wipes its log line, 300ms */}
import { useState } from "react";
import { KeyRound } from "lucide-react";
import { sites } from "../../records";
import { Container, Section } from "../../echo";

const keys = [
  { tag: "K-0412-A", site: sites[0], held: "Rosa M.", since: "12 Mar 2023", kind: "Swipe card + alarm code", tilt: -7 },
  { tag: "K-0388-A", site: sites[1], held: "Priya K.", since: "03 Aug 2022", kind: "Key + after-hours fob", tilt: 5 },
  { tag: "K-0451-B", site: sites[2], held: "Samir A.", since: "20 Jan 2024", kind: "Key safe, code rotated monthly", tilt: -4 },
  { tag: "K-0467-A", site: sites[3], held: "Rosa M.", since: "16 Jun 2025", kind: "Swipe card", tilt: 8 },
];

/* THE KEY REGISTER — tags hang from a rail on cords (absolute in a relative rail), the handover log sits beneath with a negative top margin tucking under the tags. */
export default function Content6() {
  const [hot, setHot] = useState<number | null>(null);
  return (
    <Section className="bg-paper">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="wc-label text-muted">Content 06 · The key register</p>
            <h2 className="wc-display mt-5 max-w-[17ch] text-[clamp(30px,3.4vw,44px)]">Your keys are logged, held and never labelled with your address.</h2>
          </div>
          <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted">Tags carry a code, not a name. The register below is the only place the code meets the site.</p>
        </div>
        <div className="relative mt-14 overflow-x-auto pb-2">
          <div className="relative flex min-w-[640px] justify-around border-t-2 border-ink pt-0">
            {keys.map((k, i) => (
              <button
                key={k.tag}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot(null)}
                onFocus={() => setHot(i)}
                onBlur={() => setHot(null)}
                className="relative flex w-[120px] flex-col items-center outline-none"
                aria-label={`${k.tag}, ${k.site.name}`}
              >
                <span
                  className="flex origin-top flex-col items-center transition-transform duration-[260ms] ease-care"
                  style={{ transform: `rotate(${hot === i ? 0 : k.tilt}deg)` }}
                >
                  <span className="relative h-10 w-px bg-ink">
                    
                  </span>
                  <span className={`flex h-[112px] w-[72px] flex-col items-center justify-between rounded-t-[36px] rounded-b-[8px] border py-3 transition-colors duration-[260ms] ease-care ${hot === i ? "border-teal bg-mist" : "border-line bg-ground"}`}>
                    <span className="h-3 w-3 rounded-full border border-ink/40" />
                    <KeyRound size={18} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
                    <span className="wc-label text-[9.5px] text-ink">{k.tag}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <ol className="mt-10">
          <li className="wc-label flex gap-4 pb-3 text-muted"><span className="w-28">Tag</span><span className="flex-1">Site</span><span className="hidden w-48 sm:block">Access</span><span className="w-28 text-right">Held by</span></li>
          {keys.map((k, i) => (
            <li key={k.tag} className="relative flex gap-4 border-t border-line py-3.5 text-[14px]">
              <span className="wc-draw absolute inset-x-0 -top-px" data-active={hot === i ? "true" : undefined} aria-hidden="true" />
              <span className="w-28 font-semibold tabular-nums text-teal">{k.tag}</span>
              <span className="min-w-0 flex-1 truncate">{k.site.name}</span>
              <span className="hidden w-48 text-muted sm:block">{k.kind}</span>
              <span className="w-28 text-right text-muted">{k.held}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
