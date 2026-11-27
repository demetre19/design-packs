{/* Mechanism: circling the cleaning days on a wall planner | Interaction: chosen day chips fill mist and turn teal; the summary line works out the headcount the week suits | Duration: 240ms */}
import { useState } from "react";


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* Wildcard: the cleaning-day planner. A real checkbox group. */
export default function Ui13() {
  const [sel, setSel] = useState<string[]>(["Mon", "Wed", "Fri"]);
  const toggle = (d: string) => setSel((s) => (s.includes(d) ? s.filter((x) => x !== d) : [...s, d]));
  return (
    <fieldset className="w-full max-w-[460px]">
      <legend className="wc-label text-muted">Cleaning days</legend>
      <div className="mt-5 flex flex-wrap gap-4">
        {days.map((d) => {
          const on = sel.includes(d);
          return (
            <label key={d} className="cursor-pointer">
              <input type="checkbox" checked={on} onChange={() => toggle(d)} className="peer sr-only" />
              <span className={`flex h-11 w-12 items-center justify-center rounded-[6px] text-[14px] font-semibold transition-colors duration-[240ms] ease-care peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-teal ${on ? "bg-mist text-teal" : "text-muted"}`}>{d}</span>
            </label>
          );
        })}
      </div>
      <p className="mt-5 text-[14px]" aria-live="polite">
        <span className="font-semibold">{sel.length} {sel.length === 1 ? "day" : "days"} a week</span>
        <span className="text-muted"> suits about {sel.length * 7} people</span>
      </p>
    </fieldset>
  );
}
