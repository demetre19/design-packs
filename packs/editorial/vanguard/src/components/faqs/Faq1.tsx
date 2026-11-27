import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE MAXIMUM MACH RATING FOR THE X-99 SPECTRE?', a: 'The X-99 Spectre is rated for sustained cruise operations up to Mach 4.8 in stratospheric conditions (FL650).' },
    { q: 'HOW IS THERMAL PROTECTION MANAGED AT HIGH ENTHALPY?', a: 'Active internal coolant channels circulating through titanium ribs paired with carbon-silicon composite skin tiles.' },
    { q: 'WHAT TELEMETRY FREQUENCIES ARE USED FOR SORTIES?', a: 'Encrypted MIL-STD-1553 bus transmissions routed over secure 409.2 MHz microwave downlinks.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FAQ // 01</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            TECHNICAL <span className="text-[#ff3d00]">ACCORDION</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#20232a] border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between font-bold text-xs uppercase tracking-wider hover:bg-[#282c35] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#ff3d00] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-xs text-zinc-300 border-t border-[#3a3e4c] pt-4 leading-relaxed">
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
