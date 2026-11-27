import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is Atelier Varden's architectural philosophy?", a: "We design enduring residential spaces where precise geometry meets raw elemental texture, establishing a dialogue between topography and shelter with absolute tectonic restraint." },
    { q: "How are commission fees structured?", a: "We operate on a transparent percentage model (12% of total construction value) or fixed-scale packages for preliminary studies and standardized designs." },
    { q: "What regions do you accept commissions in?", a: "Our primary studios are located in Zürich, Tokyo, and Stockholm, with active commissions across Switzerland, Japan, Scandinavia, and North America." },
    { q: "How long does a typical residential design take?", a: "Preliminary studies take 2 to 3 months, while complete architectural construction packages range from 6 to 12 months depending on scale." }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PRACTICE INQUIRIES</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Frequently Addressed Questions</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-[#16171a]">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#b5482e] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="mt-4 pt-4 border-t border-[#e2e0d8] text-stone-600 text-sm leading-relaxed">
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
