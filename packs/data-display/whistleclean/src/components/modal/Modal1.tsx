{/* Echo: a single white dialog panel; the confirm pill inverts on hover, 260ms */}
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { brand } from "../../brand";
import { PillButton, Rule } from "../../echo";

/* Confirmation dialog: native <dialog> for focus trapping and Escape; the trigger button is the page's resting state. */
export default function Modal1({ defaultOpen = false }: { defaultOpen?: boolean }) {
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
      <PillButton onClick={() => setOpen(true)}>Book a site walk</PillButton>
      <dialog
        ref={ref}
        onClose={() => setOpen(false)}
        className="m-auto w-[min(520px,calc(100vw-32px))] overflow-visible bg-transparent p-0 backdrop:bg-ink/40"
        aria-labelledby="modal1-title"
      >
        <div>
          <div className="wc-surface p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="wc-label text-muted">Site walk</p>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted hover:text-teal"><X size={20} strokeWidth={1.75} /></button>
            </div>
            <h2 id="modal1-title" className="wc-display mt-4 text-[30px]">Thursday 4 December, 3:30pm</h2>
            <div className="wc-draw-host my-6"><Rule /></div>
            <p className="text-[15px] leading-relaxed text-muted">
              Katrina will meet you on site for about 20 minutes. Your fixed quote follows within 24 hours. Need to change it? Call {brand.phone}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PillButton tone="solid" onClick={() => setOpen(false)}>Confirm walk</PillButton>
              <button onClick={() => setOpen(false)} className="text-[15px] font-medium text-muted hover:text-ink">Pick another time</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
