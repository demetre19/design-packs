{/* Mechanism: the four-wheel combination on a site key safe | Interaction: each wheel steps its digit in sideways; once the full code matches, the hairline under every wheel wipes teal in turn and the safe reads Open | Duration: 240ms digit, 300ms wipe */}
import { useState } from "react";
import { ChevronDown, ChevronUp, LockKeyhole, LockKeyholeOpen } from "lucide-react";


const CODE = [4, 1, 2, 7]; // SAMPLE code for the demo only.

/* Wildcard: the key-safe dial. Arrow keys step a focused wheel. */
export default function Ui15() {
  const [d, setD] = useState([0, 0, 0, 0]);
  const open = d.every((v, i) => v === CODE[i]);
  const step = (i: number, by: number) => setD((x) => x.map((v, n) => (n === i ? (v + by + 10) % 10 : v)));
  return (
    <div className="flex flex-col items-start gap-5">
      <p className="wc-label flex items-center gap-2 text-muted">
        {open ? <LockKeyholeOpen size={14} strokeWidth={1.75} className="text-teal" aria-hidden="true" /> : <LockKeyhole size={14} strokeWidth={1.75} aria-hidden="true" />}
        Key safe · {open ? <span className="text-teal">Open</span> : "Locked"} · try 4127
      </p>
      <div className="flex gap-4">
        {d.map((v, i) => (
          <div key={i} className="flex flex-col items-center">
            <button onClick={() => step(i, 1)} aria-label={`Wheel ${i + 1} up`} className="text-muted hover:text-teal"><ChevronUp size={18} strokeWidth={1.75} /></button>
            <div
              tabIndex={0}
              role="spinbutton"
              aria-label={`Wheel ${i + 1}`}
              aria-valuemin={0}
              aria-valuemax={9}
              aria-valuenow={v}
              onKeyDown={(e) => { if (e.key === "ArrowUp") { e.preventDefault(); step(i, 1); } if (e.key === "ArrowDown") { e.preventDefault(); step(i, -1); } }}
              className="relative my-1 h-14 w-12 overflow-hidden rounded-[6px] border border-line bg-paper"
            >
              <span key={v} className="wc-figure absolute inset-0 flex items-center justify-center text-[26px] animate-[wc-digit_240ms_var(--ease-care)_both]">{v}</span>
            </div>
            <span className="relative mt-2 block h-px w-12 bg-line"><span className="wc-draw absolute inset-0" data-active={open ? "true" : undefined} style={{ transitionDelay: `${i * 60}ms` }} /></span>
            <button onClick={() => step(i, -1)} aria-label={`Wheel ${i + 1} down`} className="mt-3 text-muted hover:text-teal"><ChevronDown size={18} strokeWidth={1.75} /></button>
          </div>
        ))}
      </div>
      <style>{"@keyframes wc-digit { from { opacity: 0; translate: -8px 0; } to { opacity: 1; translate: 0 0; } }"}</style>
    </div>
  );
}
