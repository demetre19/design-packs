{/* Echo: the floating pill is the edge glint, lapping once on hover, 900ms */}
import { brand } from "../../brand";
import { Glint } from "../../echo";

/* Floating pill: sits 16px below the top edge, centred, max 880px. */
export default function Navbar3() {
  return (
    <div className="bg-ground px-4 py-4">
      <Glint radius={999} className="mx-auto max-w-[880px]" faceClassName="flex h-14 items-center gap-6 px-6">
        <a href="#" className="wc-heading text-[17px]">{brand.short}</a>
        <nav aria-label="Primary" className="hidden gap-6 text-[14px] font-medium text-muted sm:flex">
          <a href="#" className="hover:text-teal">Services</a>
          <a href="#" className="hover:text-teal">Pricing</a>
          <a href="#" className="hover:text-teal">Team</a>
        </nav>
        <a href="#" className="wc-draw-host relative ml-auto rounded-full bg-teal px-5 py-2 text-[14px] font-semibold text-paper transition-colors duration-[260ms] ease-care hover:bg-paper hover:text-teal hover:ring-[1.5px] hover:ring-teal">
          Quote
          
        </a>
      </Glint>
    </div>
  );
}
