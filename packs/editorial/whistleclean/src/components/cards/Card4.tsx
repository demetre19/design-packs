{/* Record type: a cleaner on the team (name, years with us, languages, sites) | Echo: the name sits on a hairline under the portrait | Hover: a strip slides in along the portrait's lower edge from the left, 280ms, listing languages and sites */}
import { ShieldCheck } from "lucide-react";
import { cleaners } from "../../records";


/* Tall, narrow portrait card. About 240 × 420. */
export default function Card4({ i = 0 }: { i?: number }) {
  const c = cleaners[i % cleaners.length];
  return (
    <article tabIndex={0} className="wc-draw-host group w-full max-w-[240px] outline-none">
      <div className="block">
        <div className="relative overflow-hidden rounded-[6px]">
          <img src={`https://picsum.photos/seed/${c.seed}/480/600?grayscale`} alt={`Portrait of ${c.name}`} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-paper/95 px-4 py-3 transition-transform duration-[280ms] ease-care [transform:translateX(-101%)] group-hover:[transform:none] group-focus:[transform:none]">
            <p className="wc-label text-teal">{c.languages.join(" · ")}</p>
            <p className="mt-1 text-[13px] text-muted">{c.sites} regular sites</p>
          </div>
        </div>
      </div>
      <div className="relative mt-6 h-px bg-line"><span className="wc-draw absolute inset-0" /></div>
      <p className="mt-4 text-[18px] font-semibold">{c.name}</p>
      <p className="text-[14px] text-muted">With Whistle Clean since {c.since}</p>
      <p className="wc-label mt-3 flex items-center gap-1.5 text-teal"><ShieldCheck size={13} strokeWidth={1.75} aria-hidden="true" />Police-checked</p>
    </article>
  );
}
