{/* Record type: a service, shown mostly as its photograph | Echo: the plate's lower edge is an ink hairline | Hover: the caption slides in from the left along the lower edge, 280ms; the arrow turns teal, 260ms */}
import { ArrowUpRight } from "lucide-react";
import { services } from "../../brand";


/* Image-dominant: a 3:4 plate with a single line of type beneath. About 300 × 460. */
export default function Card7({ i = 5 }: { i?: number }) {
  const s = services[i % services.length];
  return (
    <a href="#" className="wc-draw-host group block w-full max-w-[300px]">
      <div className="relative overflow-hidden rounded-t-[10px]">
        <img src={`https://picsum.photos/seed/wc-plate-${s.slug}/600/800`} alt="" className="aspect-[3/4] w-full object-cover" />
        <p className="absolute inset-x-0 bottom-0 bg-teal px-4 py-3 text-[13px] leading-relaxed text-paper transition-transform duration-[280ms] ease-care [transform:translateX(-101%)] group-hover:[transform:none] group-focus-visible:[transform:none]">
          {s.line}
        </p>
      </div>
      <div className="relative h-px bg-ink"><span className="wc-draw absolute inset-0" /></div>
      <p className="mt-4 flex items-center justify-between text-[16px] font-semibold">{s.name}<ArrowUpRight size={16} strokeWidth={1.75} className="text-muted transition-colors duration-[260ms] ease-care group-hover:text-teal" aria-hidden="true" /></p>
    </a>
  );
}
