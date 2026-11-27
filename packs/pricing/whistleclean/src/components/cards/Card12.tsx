{/* Record type: a client request ticket | Echo: a status rule on ink | Hover: the resolution note slides in from the right, 280ms, replacing the open status */}
import { MessageSquare } from "lucide-react";


/* Inverted ticket on ink with mist type. About 340 × 220. No image. SAMPLE request. */
export default function Card12() {
  return (
    <article tabIndex={0} className="wc-draw-host group w-full max-w-[340px] rounded-[14px] bg-ink p-6 text-paper outline-none">
      <div className="flex items-center justify-between">
        <p className="wc-label flex items-center gap-1.5 text-mist"><MessageSquare size={13} strokeWidth={1.75} aria-hidden="true" />Request #218</p>
        <p className="wc-label text-mist">Tue 25 Nov, 09:14</p>
      </div>
      <h3 className="wc-heading mt-4 text-[20px]">Restock hand towels in the Level 4 bathrooms</h3>
      <div className="relative mt-6 h-px bg-paper/25"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
      <div className="relative mt-4 h-[44px] overflow-hidden text-[14px]">
        <p className="absolute inset-0 text-mist transition-[translate,opacity] duration-[280ms] ease-care group-hover:opacity-0 group-hover:[translate:-12px_0] group-focus:opacity-0 group-focus:[translate:-12px_0]">Open · assigned to tonight's team</p>
        <p className="absolute inset-0 opacity-0 [translate:12px_0] transition-[translate,opacity] duration-[280ms] ease-care group-hover:opacity-100 group-hover:[translate:0_0] group-focus:opacity-100 group-focus:[translate:0_0]">Resolved 20:41 · 12 cartons stocked, par level raised</p>
      </div>
    </article>
  );
}
