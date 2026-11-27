import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "HOW ARE THE PRINT VOLUMES PRODUCED?", a: "Each quarterly volume is printed on 140gsm Munken Lynx Raw archival paper using specialized monochrome offset presses in Paris and Tokyo." },
    { q: "WHAT IS THE POLICY ON BESPOKE GARMENT COMMISSIONS?", a: "Bespoke commissions require a private consultation at our Paris or Tokyo studios. Production lead time is strictly 6 to 8 weeks." },
    { q: "ARE DIGITAL ARCHIVES INCLUDED WITH PRINT SUBSCRIPTIONS?", a: "Yes. All annual and quarterly print subscribers receive immediate companion access to the complete digital archive via secure portal." }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>FREQUENTLY ASKED QUESTIONS // ACCORDION</span>
          <span>EDITORIAL PROTOCOL</span>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-black">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-xl font-black uppercase tracking-tight font-serif-editorial">0{i+1}. {f.q}</span>
                {open === i ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-2 border-t border-black text-xs font-mono leading-relaxed text-zinc-700 bg-zinc-50">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
