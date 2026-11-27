{/* Mechanism: the morning-after feedback card left at reception | Interaction: five segments on one line; hovering a segment wipes every segment up to it teal from the left; choosing keeps them; the word for the score slides in beneath | Duration: 300ms */}
import { useState } from "react";

const words = ["Missed things", "Below standard", "Fine", "Good", "Spotless"];

/* Wildcard: the morning rating. A radio group under the hood. */
export default function Ui14() {
  const [val, setVal] = useState(0);
  const [hover, setHover] = useState(0);
  const show = hover || val;
  return (
    <fieldset className="w-full max-w-[360px]">
      <legend className="wc-label text-muted">How was last night's clean?</legend>
      <div className="mt-6 flex gap-2" onMouseLeave={() => setHover(0)}>
        {words.map((w, n) => (
          <label key={w} className="group relative block flex-1 cursor-pointer py-3" onMouseEnter={() => setHover(n + 1)}>
            <input type="radio" name="ui14" value={n + 1} checked={val === n + 1} onChange={() => setVal(n + 1)} className="peer sr-only" />
            <span className="relative block h-[3px] bg-line peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-teal">
              <span className="wc-draw absolute inset-0 !h-[3px]" data-active={n < show ? "true" : undefined} style={{ transitionDelay: `${n * 30}ms` }} />
            </span>
            <span className="sr-only">{w}</span>
          </label>
        ))}
      </div>
      <p key={show} className="mt-3 h-5 text-[14px] text-teal animate-[wc-slide_260ms_var(--ease-care)_both]" aria-live="polite">{show ? words[show - 1] : ""}</p>
      <style>{"@keyframes wc-slide { from { opacity: 0; translate: -8px 0; } to { opacity: 1; translate: 0 0; } }"}</style>
    </fieldset>
  );
}
