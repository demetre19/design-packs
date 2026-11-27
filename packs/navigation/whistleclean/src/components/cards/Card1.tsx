{/* Record type: a site on the books (id, address, type, headcount, cleaning days, team) | Echo: the day strip is a hairline with a ring per weekday, filled teal on the days we come | Hover: none; a static record slip */}
import { Users } from "lucide-react";
import { sites } from "../../records";


const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* Landscape data slip: a narrow id column, then the record body. About 560 × 150. */
export default function Card1({ i = 0 }: { i?: number }) {
  const s = sites[i % sites.length];
  return (
    <article tabIndex={0} className="wc-draw-host flex w-full max-w-[560px] overflow-hidden rounded-[12px] border border-line bg-paper outline-none">
      <div className="relative flex w-[104px] shrink-0 flex-col justify-between border-r border-line bg-ground p-4">
        <span className="wc-label text-teal">{s.id}</span>
        <span className="wc-label text-muted">{s.type}</span>
        
      </div>
      <div className="min-w-0 flex-1 p-5">
        <p className="truncate text-[16px] font-semibold">{s.name}</p>
        <p className="mt-0.5 flex items-center gap-3 text-[13px] text-muted">{s.suburb}<span className="flex items-center gap-1"><Users size={13} strokeWidth={1.75} aria-hidden="true" />{s.people}</span><span>Since {s.since}</span></p>
        <div className="relative mt-5">
          <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
          <span className="wc-draw absolute inset-x-0 top-0" aria-hidden="true" />
          <ol className="flex justify-between">
            {week.map((d) => {
              const on = s.days.includes(d);
              return (
                <li key={d} className="relative flex w-[26px] flex-col items-center pt-3">
                  <span className={`absolute -top-[4px] left-[8px] h-[9px] w-[9px] rounded-full border transition-colors duration-[260ms] ease-care ${on ? "border-teal bg-teal" : "border-line bg-paper"}`} aria-hidden="true" />
                  <span className={`wc-label mt-1 ${on ? "text-teal" : "text-muted"}`}>{d[0]}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </article>
  );
}
