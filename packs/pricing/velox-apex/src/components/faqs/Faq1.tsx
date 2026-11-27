import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { num: '01', q: 'WHAT IS THE RANGE OF THE VELOX APEX TRACK PREDATOR?', a: 'Under continuous track load, the solid-state accumulator delivers 250km of aggressive circuit riding. Street touring yields up to 450km.' },
    { num: '02', q: 'HOW FAST DOES THE RAPID-CHARGE SYSTEM OPERATE?', a: 'Using our proprietary 998V DC high-voltage dock, the solid-state cells recharge from 10% to 80% in exactly 8 minutes.' },
    { num: '03', q: 'IS THE CARBON MONOCOQUE STREET LEGAL?', a: 'Yes. Every allocation includes switchable ECU maps for both homologated street riding and unrestricted track mode.' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// FAQ ACCORDION REGISTER</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          TECHNICAL <span className="text-[#ff2e00]">INQUIRIES</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-black bg-white">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl sm:text-5xl font-black text-neutral-300">
                    {faq.num}
                  </span>
                  <span className="font-bold text-lg sm:text-xl uppercase">{faq.q}</span>
                </div>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-[#ff2e00]" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {openIdx === idx && (
                <div className="p-6 pt-0 font-mono text-xs text-neutral-600 border-t border-black bg-neutral-50 leading-relaxed">
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
