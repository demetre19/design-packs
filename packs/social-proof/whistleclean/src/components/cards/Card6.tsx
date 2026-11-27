{/* Record type: a suburb in the service area | Echo: the suburb name, set large, sits on a hairline | Hover: a "Same-week start" line slides in from the left, 280ms */}
import { MapPin } from "lucide-react";


/* Pure typography: the suburb name set large. About 320 × 200. No image. SAMPLE counts. */
export default function Card6({ suburb = "Cremorne", sites = 6, minutes = 12 }: { suburb?: string; sites?: number; minutes?: number }) {
  return (
    <div className="w-full max-w-[320px]">
      <article tabIndex={0} className="wc-draw-host group rounded-[10px] border border-line bg-paper p-6 outline-none">
        <p className="wc-label flex items-center gap-1.5 text-muted"><MapPin size={13} strokeWidth={1.75} aria-hidden="true" />Service area</p>
        <h3 className="wc-display mt-4 text-[40px]">{suburb}</h3>
        <div className="relative mt-3 h-px bg-line"><span className="wc-draw absolute inset-0" /></div>
        <div className="mt-4 flex items-baseline justify-between gap-4 text-[14px]">
          <span><span className="font-semibold tabular-nums">{sites}</span> <span className="text-muted">sites</span></span>
          <span className="overflow-hidden">
            <span className="block text-teal transition-[translate,opacity] duration-[280ms] ease-care [translate:-12px_0] opacity-0 group-hover:[translate:0_0] group-hover:opacity-100 group-focus:[translate:0_0] group-focus:opacity-100">Same-week start</span>
          </span>
          <span className="tabular-nums text-muted">{minutes} min away</span>
        </div>
      </article>
    </div>
  );
}
