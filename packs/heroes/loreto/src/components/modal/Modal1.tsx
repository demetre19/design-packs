{/* Echo: modal step marker uses cropped type and a travelling baseline notch */}
import { X, Calendar } from 'lucide-react';
import { useState } from 'react';
import { EchoMeasure } from '../../system/echo';

export default function Modal1() {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-ink/70 p-5">
      <button onClick={() => setOpen(true)} className="focus-ring mb-4 border border-white px-4 py-3 text-white">Open tour modal</button>
      {open ? (
        <div className="group relative mx-auto max-w-2xl overflow-hidden border border-line bg-paper p-7 text-ink shadow-hairline">
          <EchoMeasure index="01" size="md" surface="bg-paper" />
          <button aria-label="Close" onClick={() => setOpen(false)} className="focus-ring absolute right-4 top-4 z-20 p-2"><X className="h-5 w-5" /></button>
          <div className="type-micro text-accent">Tour booking</div>
          <h2 className="type-editorial mt-4 max-w-md text-5xl">Reserve a Saturday tour.</h2>
          <p className="type-body mt-4 max-w-md text-secondary">Tours include time with the Principal, a walk through learning spaces and a boarding conversation where relevant.</p>
          <button className="focus-ring group/btn mt-8 inline-flex items-center gap-3 border border-ink px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent"><Calendar className="h-4 w-4" />Choose a date</button>
        </div>
      ) : null}
    </div>
  );
}
