{/* Record type: a cleaning product (code, name, base, dilution, safety sheet) | Echo: a teal plate with a white rule between name and dilution | Hover: a mist flap slides in from the right edge, 280ms, revealing the SDS reference and intended use */}
import { FileText } from "lucide-react";
import { products } from "../../records";


/* Inverted product slip: teal ground, white type. Squarish, about 300 × 260. */
export default function Card3({ i = 0 }: { i?: number }) {
  const p = products[i % products.length];
  return (
    <article tabIndex={0} className="wc-draw-host group relative w-full max-w-[300px] overflow-hidden rounded-[14px] bg-teal p-6 text-paper outline-none">
      <p className="wc-label text-mist">{p.code}</p>
      <h3 className="wc-heading mt-3 text-[22px]">{p.name}</h3>
      <p className="mt-1 text-[14px] text-mist">{p.base}</p>
      <div className="relative my-6 h-px bg-paper/30"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
      <p className="wc-figure text-[44px]">{p.dilution}</p>
      <p className="wc-label mt-1 text-mist">Dilution, concentrate to water</p>
      <div className="absolute inset-y-0 right-0 flex w-[62%] flex-col justify-end gap-2 bg-mist p-5 text-ink transition-transform duration-[280ms] ease-care [transform:translateX(100%)] group-hover:[transform:none] group-focus:[transform:none]" aria-hidden="true">
        <FileText size={18} strokeWidth={1.5} className="text-teal" />
        <p className="text-[13px] font-semibold tabular-nums">{p.sds}</p>
        <p className="text-[13px] leading-relaxed text-muted">{p.use}</p>
      </div>
    </article>
  );
}
