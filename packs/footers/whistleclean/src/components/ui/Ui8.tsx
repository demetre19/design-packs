{/* Mechanism: index tabs on a cleaner's binder, one per site type | Interaction: the selected tab's segment of the rail is wiped teal; hovering another tab wipes its segment in; the panel beneath swaps and its rule wipes in | Duration: 300ms */}
import { useState } from "react";

const tabs = [
  { k: "office", t: "Offices", b: "After-hours cleans for offices of 5 to 250 people, to a signed 42-line checklist." },
  { k: "medical", t: "Medical", b: "Treatment rooms, waiting areas and touchpoints, disinfected to your infection-control plan." },
  { k: "childcare", t: "Childcare", b: "Low-tox daily cleans for rooms, cots and play surfaces, with safety data sheets on file." },
];

/* Tab group: the binder index. Tabs sit on the left of the rail. */
export default function Ui8() {
  const [cur, setCur] = useState(0);
  return (
    <div className="w-full max-w-[560px]">
      <div role="tablist" aria-label="Site type" className="flex gap-8 border-b border-line">
        {tabs.map((t, i) => (
          <button
            key={t.k}
            role="tab"
            id={`ui8-tab-${t.k}`}
            aria-selected={cur === i}
            aria-controls={`ui8-panel-${t.k}`}
            tabIndex={cur === i ? 0 : -1}
            onClick={() => setCur(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setCur((cur + 1) % tabs.length);
              if (e.key === "ArrowLeft") setCur((cur + tabs.length - 1) % tabs.length);
            }}
            className={`wc-draw-host relative pb-3.5 text-[15px] font-medium transition-colors duration-[260ms] ease-care ${cur === i ? "text-teal" : "text-muted hover:text-ink"}`}
          >
            {t.t}
            <span className="wc-draw absolute inset-x-0 -bottom-px" data-active={cur === i ? "true" : undefined} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div key={cur} role="tabpanel" id={`ui8-panel-${tabs[cur].k}`} aria-labelledby={`ui8-tab-${tabs[cur].k}`} className="pt-5">
        <p className="text-[15px] leading-relaxed">{tabs[cur].b}</p>
        <span className="wc-draw mt-5 animate-[wc-draw-in_300ms_var(--ease-care)_both]" data-active="true" aria-hidden="true" />
      </div>
      <style>{"@keyframes wc-draw-in { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }"}</style>
    </div>
  );
}
