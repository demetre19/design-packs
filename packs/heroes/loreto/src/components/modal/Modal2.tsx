{/* Echo: confirmation modal uses the cropped measure as a quiet completion state */}
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import { EchoMeasure } from '../../system/echo';

export default function Modal2() {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-ground p-5">
      <button onClick={() => setOpen(true)} className="focus-ring mb-4 border border-ink px-4 py-3 text-ink">Open confirmation</button>
      {open ? (
        <div className="group relative mx-auto max-w-xl overflow-hidden border border-line bg-white p-7 text-ink">
          <EchoMeasure index="02" size="md" surface="bg-white" />
          <button aria-label="Close" onClick={() => setOpen(false)} className="focus-ring absolute right-4 top-4 z-20 p-2"><X className="h-5 w-5" /></button>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent"><Check className="h-6 w-6" /></div>
          <h2 className="type-editorial mt-7 text-5xl">Application received.</h2>
          <p className="type-body mt-4 max-w-md text-secondary">You will receive email confirmation shortly. The admissions team will contact you as the relevant entry window approaches.</p>
        </div>
      ) : null}
    </div>
  );
}
