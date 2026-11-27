{/* Record type: a tree certificate stub, one per clean | Echo: the stub's dashed tear line carries a eucalyptus leaf | Hover: the leaf lowers and fills teal, 260ms */}
import { visits } from "../../records";
import { Leaf } from "../../echo";

/* One line of type on a perforated stub. Wide and short, about 640 × 56. No image. */
export default function Card5({ i = 0 }: { i?: number }) {
  const v = visits[i % visits.length];
  return (
    <article tabIndex={0} className="wc-leaf-host flex w-full max-w-[640px] items-stretch rounded-[10px] border border-line bg-paper outline-none">
      <p className="wc-label flex w-[92px] shrink-0 items-center justify-center text-teal">{v.tree}</p>
      <span className="relative w-px shrink-0" aria-hidden="true">
        <span className="absolute inset-y-2 left-0 border-l border-dashed border-line" />
        <Leaf bg="var(--color-paper)" className="-left-[3px] top-[calc(50%-7px)] z-10" />
      </span>
      <p className="min-w-0 flex-1 truncate px-6 py-4 text-[15px]">
        Planted for the clean of <span className="font-semibold">{v.date}</span> at {v.site}
      </p>
    </article>
  );
}
