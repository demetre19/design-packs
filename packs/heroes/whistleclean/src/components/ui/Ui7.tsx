{/* Mechanism: turning the pages of a site logbook, each page a night | Interaction: page numbers sit under one hairline; the line is wiped teal up to the current page, and hovering a page pre-wipes the line to it | Duration: 300ms */}
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function LogbookPager({ pages = 7, initial = 3 }: { pages?: number; initial?: number }) {
  const [page, setPage] = useState(initial);
  const [hover, setHover] = useState<number | null>(null);
  const reach = hover ?? page;
  return (
    <nav aria-label="Logbook pages" className="flex items-center gap-4">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} aria-label="Previous page" className="text-muted hover:text-teal disabled:opacity-40"><ChevronLeft size={18} strokeWidth={1.75} /></button>
      <div className="relative" onMouseLeave={() => setHover(null)}>
        <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
        <span className="absolute left-0 top-0 h-px bg-teal transition-[width] duration-[300ms] ease-care" style={{ width: `${(reach / pages) * 100}%` }} aria-hidden="true" />
        <ol className="flex">
          {Array.from({ length: pages }, (_, n) => n + 1).map((n) => (
            <li key={n} className="w-9">
              <button
                onClick={() => setPage(n)}
                onMouseEnter={() => setHover(n)}
                onFocus={() => setHover(n)}
                onBlur={() => setHover(null)}
                aria-current={n === page ? "page" : undefined}
                className={`block w-full pt-3 text-center text-[13px] font-semibold tabular-nums transition-colors duration-[260ms] ease-care ${n === page ? "text-teal" : "text-muted hover:text-ink"}`}
              >
                {n}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages} aria-label="Next page" className="text-muted hover:text-teal disabled:opacity-40"><ChevronRight size={18} strokeWidth={1.75} /></button>
    </nav>
  );
}

/* Pagination: the logbook. */
export default function Ui7() {
  return <LogbookPager />;
}
