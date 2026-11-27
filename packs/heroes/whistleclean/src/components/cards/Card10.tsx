{/* Record type: a key or access card held for a site | Echo: the tag hangs on a cord and pivots about its hook | Hover: the tag swings square from -8deg, 260ms */}
import { KeyRound } from "lucide-react";


/* Landscape: the hanging tag on the left, the record on the right. About 420 × 160. */
export default function Card10({ tag = "K-0412-A", site = "Level 4, 80 Market St", held = "Rosa M.", kind = "Swipe card + alarm code" }: { tag?: string; site?: string; held?: string; kind?: string }) {
  return (
    <article tabIndex={0} className="wc-draw-host group flex w-full max-w-[420px] items-start gap-6 rounded-[14px] border border-line bg-paper p-5 outline-none">
      <div className="flex w-[64px] shrink-0 origin-top -rotate-[8deg] flex-col items-center transition-transform duration-[260ms] ease-care group-hover:rotate-0 group-focus:rotate-0">
        <span className="relative h-7 w-px bg-ink"></span>
        <span className="flex h-[88px] w-[56px] flex-col items-center justify-between rounded-t-[28px] rounded-b-[6px] border border-teal bg-mist py-2.5">
          <span className="h-2.5 w-2.5 rounded-full border border-ink/40" />
          <KeyRound size={16} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
          <span className="text-[8.5px] font-medium tracking-[0.1em] text-ink">{tag.slice(2)}</span>
        </span>
      </div>
      <div className="min-w-0 flex-1 pt-6">
        <p className="wc-label text-teal">{tag}</p>
        <p className="mt-2 truncate text-[16px] font-semibold">{site}</p>
        <p className="text-[13px] text-muted">{kind}</p>
        <div className="relative mt-4 border-t border-line pt-3">
          <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
          <p className="text-[13px]"><span className="text-muted">Held by</span> <span className="font-semibold">{held}</span></p>
        </div>
      </div>
    </article>
  );
}
