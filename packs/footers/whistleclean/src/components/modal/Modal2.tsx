{/* Echo: the trigger is a button whose underline wipes teal on hover, 300ms */}
import { useEffect, useRef, useState } from "react";
import { FileText, X } from "lucide-react";
import { brand } from "../../brand";


/* SAMPLE product names for layout; replace with the client's actual product list and safety data sheets. */
const products = [
  { name: "Surface cleaner", base: "Eucalyptus oil" },
  { name: "Glass and mirror", base: "Eucalyptus oil" },
  { name: "Washroom descaler", base: "Citric acid" },
  { name: "Floor concentrate", base: "Eucalyptus oil" },
  { name: "Hand-contact disinfectant", base: "Hospital grade" },
];

/* Side sheet: native <dialog> anchored right, 440px wide, full height. */
export default function Modal2({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(defaultOpen);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <div className="bg-ground p-8">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="wc-draw-host relative inline-flex items-center gap-1.5 border-b border-line pb-1.5 font-semibold text-ink transition-colors duration-[260ms] ease-care hover:border-teal hover:text-teal"
      >
        View products used on site
        
      </button>
      <dialog
        ref={ref}
        onClose={() => setOpen(false)}
        aria-labelledby="modal2-title"
        className="m-0 ml-auto h-full max-h-none w-[min(440px,100vw)] bg-paper p-0 backdrop:bg-ink/30"
      >
        <div className="flex h-full flex-col border-l border-line p-8">
          <div className="flex items-start justify-between gap-6">
            <h2 id="modal2-title" className="wc-heading text-[24px]">Products on your site</h2>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted hover:text-teal"><X size={20} strokeWidth={1.75} /></button>
          </div>
          <div className="mt-6 mr-14 rounded-[10px] bg-mist p-4">
            <p className="text-[14px] leading-relaxed text-ink">Most of what we use is eucalyptus oil-based. A safety data sheet comes with every product.</p>
          </div>
          <ul className="mt-8">
            {products.map((p) => (
              <li key={p.name} className="wc-draw-host relative flex items-center justify-between gap-4 border-t border-line py-4 last:border-b">
                <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
                <span>
                  <span className="block text-[15px] font-semibold">{p.name}</span>
                  <span className="wc-label text-muted">{p.base}</span>
                </span>
                <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium text-teal"><FileText size={14} strokeWidth={1.75} aria-hidden="true" />MSDS</a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </div>
  );
}
