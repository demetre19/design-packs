import React, { useState } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE HOMOLOGATION ALLOCATION PROCESS?', a: 'Allocation is strictly vetted through our Stuttgart engineering desk, verifying collector credentials against FIA Annex J standards.' },
    { q: 'CAN THE VEHICLE BE REGISTERED FOR ROAD USE?', a: 'Yes, each K-99 chassis includes complete street-legal homologation kits for international jurisdictions.' },
    { q: 'WHAT IS THE PRODUCTION LEAD TIME?', a: 'Every chassis requires 180 working days of autoclaved carbon curing and precision assembly in Stuttgart.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[FREQUENTLY ASKED QUESTIONS // FAQ-01]</span>
          <span>DOCUMENTATION FAQ</span>
        </div>

        <div className="divide-y divide-[#111]">
          {faqs.map((f, i) => (
            <div key={i} className="divide-y divide-[#111]">
              <div 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="p-4 flex items-center justify-between hover:bg-[#f8f8f6] transition-colors cursor-pointer text-[10px]"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-[#666]">[{String(i + 1).padStart(2, '0')}]</span>
                  <span className="font-bold uppercase text-xs">{f.q}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </div>
              {openIdx === i && (
                <div className="p-6 bg-[#f4f4f0] text-[10px] text-[#555] uppercase leading-relaxed">
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
