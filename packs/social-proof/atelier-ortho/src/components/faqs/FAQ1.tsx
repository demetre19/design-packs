import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';

export function FAQ1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What is the standard drawing scale for preliminary architectural schematics?", a: "Preliminary schematics are drafted at 1:100 or 1:200 depending on overall building footprint and site coordinates." },
    { q: "Are all engineering calculations stamped and verified by licensed professionals?", a: "Yes. Every structural package carries professional engineering stamps compliant with state seismic and wind load regulations." },
    { q: "How are BIM coordination models delivered to general contractors?", a: "Deliverables include fully coordinated IFC files, Revit models, and permit-ready PDF drawing registers." },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">FAQ SECTION // 01</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Ruled Detail FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/30 bg-[#142d48]">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-4 text-left flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors text-xs md:text-sm font-bold uppercase"
              >
                <span>[{idx + 1}] {faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-cyan-300 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="p-4 border-t border-white/20 text-xs text-cyan-100 leading-relaxed bg-[#11263d]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
