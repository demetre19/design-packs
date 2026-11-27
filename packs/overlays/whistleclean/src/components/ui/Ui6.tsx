{/* Mechanism: lifting the flap of a zone on a clipboard checklist to read its lines | Interaction: the zone's top rule wipes teal on hover and stays teal while open; the body opens downward along the rule by animating row height; the plus turns 45deg to a close mark | Duration: 300ms open and wipe, 260ms plus */}
import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export function Disclosure({ title, meta, children, defaultOpen = false }: { title: string; meta?: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button aria-expanded={open} onClick={() => setOpen(!open)} className="wc-draw-host relative flex w-full items-center gap-4 border-t border-line py-4 text-left">
        <span className="wc-draw absolute inset-x-0 -top-px" data-active={open ? "true" : undefined} aria-hidden="true" />
        <span className={`flex-1 text-[16px] font-semibold transition-colors duration-[260ms] ease-care ${open ? "text-teal" : ""}`}>{title}</span>
        {meta && <span className="wc-label text-muted">{meta}</span>}
        <Plus size={17} strokeWidth={1.75} className={`text-muted transition-transform duration-[260ms] ease-care ${open ? "rotate-45 text-teal" : ""}`} aria-hidden="true" />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-[300ms] ease-care ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden"><div className="pb-5 text-[14px] leading-relaxed text-muted">{children}</div></div>
      </div>
    </div>
  );
}

/* Accordion: the clipboard flap. */
export default function Ui6() {
  return (
    <div className="w-full max-w-[520px]">
      <Disclosure title="Kitchenette" meta="20:02" defaultOpen>Sink and taps descaled. Benches and splashback. Appliance fronts and handles.</Disclosure>
      <Disclosure title="Bathrooms" meta="20:38">Basins, mirrors and fittings. Toilets disinfected inside and out. Consumables restocked.</Disclosure>
      <Disclosure title="Touchpoints" meta="21:05">Door handles and push plates. Light switches and lift buttons. Keypads and shared phones.</Disclosure>
    </div>
  );
}
