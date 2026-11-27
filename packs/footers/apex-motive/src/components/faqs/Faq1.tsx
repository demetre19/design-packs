import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE CHARGING TIME ON DC FAST CHARGERS?', a: 'Using 350kW 800V DC fast chargers, the APEX-V12 charges from 0% to 80% state of charge in precisely 12 minutes.' },
    { q: 'HOW DOES THE DIRECT OIL COOLING SYSTEM FUNCTION?', a: 'Dielectric synthetic fluid circulates continuously around copper stator coils, maintaining optimal operating temperature during extreme track loads.' },
    { q: 'WHAT IS THE WARRANTY COVERAGE FOR THE CARBON MONOCOQUE?', a: 'All structural carbon monocoque frames carry a lifetime factory replacement warranty for track and street utilization.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// FREQUENTLY ASKED</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL INQUIRIES</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#16181d] border border-[#272a33] clip-corner">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center font-mono-spec text-xs md:text-sm text-white hover:text-[#ff5a1f] transition-colors cursor-pointer"
              >
                <span className="font-bold">// {faq.q}</span>
                <ChevronDown size={18} className={`text-[#ff5a1f] transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 font-mono-spec text-xs text-neutral-400 border-t border-[#272a33] pt-4 leading-relaxed">
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
