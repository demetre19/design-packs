import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE TYPICAL TIMELINE FOR A BRAND IDENTITY COMMISSION?', a: 'Commissions typically span 6 to 12 weeks depending on the complexity of the bespoke type development and spatial application requirements.' },
    { q: 'DO YOU ACCEPT INTERNATIONAL INSTITUTIONAL CLIENTS?', a: 'Yes. Studio Sterling operates dual headquarters in London and Zurich, servicing cultural and architectural clients across Europe and North America.' },
    { q: 'WHAT FORMAT ARE FINAL DESIGN DELIVERABLES PROVIDED IN?', a: 'All brand manuals, typeface files (OTF/WOFF), and publication grid specifications are delivered in both physical archival boxes and secure digital repositories.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">FREQUENTLY ASKED QUESTIONS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">FAQ 01</span>
        </div>
        <div className="border border-black divide-y divide-black">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 flex justify-between items-center text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-black text-xs uppercase tracking-tight">0{idx + 1} // {faq.q}</span>
                {openIndex === idx ? <Minus className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0" />}
              </button>
              {openIndex === idx && (
                <div className="p-5 pt-0 text-[11px] uppercase tracking-wider text-neutral-700 leading-relaxed border-t border-black bg-neutral-50">
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
