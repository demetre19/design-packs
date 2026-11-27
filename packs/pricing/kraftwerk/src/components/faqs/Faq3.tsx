import React from 'react';
import { Terminal } from 'lucide-react';

export function Faq3() {
  const items = [
    { cell: 'F1', q: 'WHAT IS THE MAXIMUM TURBOBOOST PRESSURE?', a: 'Configured at 2.4 bar with overboost capability up to 2.8 bar under sustained track load.' },
    { cell: 'F2', q: 'ARE CUSTOM LIVERY DESIGNS SUPPORTED?', a: 'Yes, factory paint and vinyl livery wraps are applied prior to final clear-coat curing in Stuttgart.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[NUMBERED FAQ CELL REGISTER // FAQ-03]</span>
          <span>REF: FAQ-03</span>
        </div>

        <div className="divide-y divide-[#111]">
          {items.map((item, i) => (
            <div key={i} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-2">
                <span className="text-xs font-bold bg-[#111] text-[#e8e8e6] px-2 py-1">CELL {item.cell}</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-base font-black uppercase mb-1">{item.q}</h3>
                <p className="text-[10px] text-[#555] uppercase leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
