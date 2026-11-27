{/* Record type: one visit (date, times in and out, checklist score, cleaner, tree) | Echo: the score sits on a hairline; a complete score is set in teal | Hover: a drawer opens beneath the slip, 300ms, showing the visit's exception note */}
import { Clock } from "lucide-react";
import { visits } from "../../records";


/* Landscape visit slip with a hidden drawer. About 520 × 120 at rest. */
export default function Card2({ i = 1 }: { i?: number }) {
  const v = visits[i % visits.length];
  const complete = v.done === v.of;
  return (
    <article tabIndex={0} className="wc-draw-host group w-full max-w-[520px] rounded-[12px] border border-line bg-paper outline-none">
      <div className="flex items-center gap-5 p-5">
        <div className="w-[88px] shrink-0">
          <p className="wc-label text-muted">{v.site}</p>
          <p className="mt-1 text-[15px] font-semibold">{v.date}</p>
        </div>
        <p className="flex items-center gap-1.5 text-[14px] tabular-nums text-muted"><Clock size={14} strokeWidth={1.75} aria-hidden="true" />{v.in} to {v.out}</p>
        <p className="ml-auto text-right">
          <span className={`wc-figure text-[26px] ${complete ? "text-teal" : "text-ink"}`}>{v.done}</span>
          <span className="text-[14px] text-muted">/{v.of}</span>
        </p>
      </div>
      <div className="relative mx-5 h-px bg-line">
        <span className="wc-draw absolute inset-0" aria-hidden="true" />
        
      </div>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms] ease-care group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="px-5 pt-4 text-[14px] leading-relaxed">{v.note ?? "No exceptions. Every line signed."}</p>
          <p className="wc-label px-5 pb-5 pt-2 text-muted">Signed {v.by} · Tree {v.tree}</p>
        </div>
      </div>
      <p className="wc-label px-5 pb-4 pt-3 text-muted group-hover:hidden group-focus:hidden">Signed {v.by}</p>
    </article>
  );
}
