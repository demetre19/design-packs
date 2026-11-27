{/* Record type: a quarterly impact statement for one account | Echo: the quarter's trees are a field of eucalyptus leaves, one per tree | Hover: every leaf lowers and fills white in reading order, 12ms apart, 260ms each */}
import { TreeDeciduous } from "lucide-react";
import { Leaf } from "../../echo";

/* Inverted impact card on teal. Square, about 340 × 340. No image. SAMPLE count. */
export default function Card14({ trees = 39 }: { trees?: number }) {
  return (
    <article tabIndex={0} className="wc-leaf-host flex w-full max-w-[340px] flex-col rounded-[16px] bg-teal p-6 text-paper outline-none">
      <p className="wc-label flex items-center gap-1.5 text-mist"><TreeDeciduous size={13} strokeWidth={1.75} aria-hidden="true" />Quarter 3 · WC-0412</p>
      <p className="mt-4 flex items-baseline gap-2"><span className="wc-figure text-[56px]">{trees}</span><span className="text-[15px] text-mist">trees planted</span></p>
      <div className="mt-6 flex flex-wrap gap-x-1.5 gap-y-2" aria-hidden="true">
        {Array.from({ length: trees }, (_, n) => (
          <span key={n} className="relative block h-[14px] w-[34px]">
            <Leaf bg="var(--color-teal)" reverse className="left-0 top-0" style={{ transitionDelay: `${n * 12}ms` }} />
          </span>
        ))}
      </div>
    </article>
  );
}
