{/* Mechanism: a margin note pinned beside a term on a worksheet | Interaction: an annotated term carries a dotted underline; on hover or focus its underline wipes solid teal and a note slides in sideways beneath it along the baseline | Duration: 300ms wipe, 280ms note */}
import { useEffect, useId, useRef, useState, type ReactNode } from "react";


export function Annotation({ term, children }: { term: ReactNode; children: ReactNode }) {
  const id = useId();
  const tip = useRef<HTMLSpanElement>(null);
  const [shift, setShift] = useState(0);
  /* Keep the label inside the viewport: measure on open and shift it left along its line if needed. */
  const place = () => {
    const el = tip.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const over = r.right - shift - (window.innerWidth - 16);
    setShift(over > 0 ? -over : 0);
  };
  useEffect(() => {
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <span className="wc-draw-host group relative inline-block" onMouseEnter={place} onFocus={place}>
      <button type="button" aria-describedby={id} className="relative border-b border-dotted border-teal pb-px font-semibold text-ink outline-none focus-visible:outline-2 focus-visible:outline-teal">
        {term}
        <span className="wc-draw absolute inset-x-0 -bottom-px" aria-hidden="true" />
      </button>
      <span
        id={id}
        ref={tip}
        role="tooltip"
        style={{ marginLeft: shift }}
        className="pointer-events-none absolute left-0 top-[calc(100%+10px)] z-20 w-[min(260px,calc(100vw-32px))] rounded-[0_8px_8px_8px] border border-line bg-paper p-4 text-[13px] font-normal leading-relaxed text-ink opacity-0 transition-[opacity,translate] duration-[280ms] ease-care [translate:-10px_0] group-hover:opacity-100 group-hover:[translate:0_0] group-focus-within:opacity-100 group-focus-within:[translate:0_0]"
      >
        <span className="block">{children}</span>
      </span>
    </span>
  );
}

/* Tooltip: the margin note. Inline within running text. */
export default function Ui9() {
  return (
    <p className="max-w-[52ch] text-[16px] leading-[1.9]">
      Every product we bring on site comes with an{" "}
      <Annotation term="SDS">Safety data sheet: the 16-section document listing ingredients, hazards, first aid and storage for one product.</Annotation>{" "}
      and is mixed at a measured{" "}
      <Annotation term="dilution">The ratio of concentrate to water. 1:40 means 25 mL of concentrate in a 1 L bottle.</Annotation>.
    </p>
  );
}
