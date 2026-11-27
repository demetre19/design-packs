{/* Record type: a single signed checklist line | Echo: the line sits on a hairline with its initials in teal | Hover: none; a static line meant to stack in lists */}
import { Check } from "lucide-react";


/* One line of type, wide and very short. About 560 × 48. No image. */
export default function Card11({ time = "20:02", zone = "Kitchenette", item = "Sink and taps descaled", by = "TN" }: { time?: string; zone?: string; item?: string; by?: string }) {
  return (
    <article tabIndex={0} className="wc-draw-host relative flex w-full max-w-[560px] items-center gap-4 py-3 outline-none">
      <span className="wc-label w-11 text-muted">{time}</span>
      <Check size={15} strokeWidth={2} className="text-teal" aria-hidden="true" />
      <span className="wc-label hidden w-24 text-muted sm:block">{zone}</span>
      <span className="min-w-0 flex-1 truncate text-[15px]">{item}</span>
      <span className="wc-label text-teal">{by}</span>
      <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
      <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
      
    </article>
  );
}
