import React from 'react';
import { Terminal } from 'lucide-react';

export function Stat4() {
  const stats = [
    { label: 'TOP SPEED', val: '350 KM/H' },
    { label: '0-100 KM/H', val: '2.6 SEC' },
    { label: 'LATERAL G', val: '2.4 G' },
    { label: 'STOPPING 200-0', val: '98 METERS' },
  ];

  return (
    <section className="w-full bg-[#111111] text-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#e8e8e6]">
        <div className="p-4 border-b border-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between bg-[#222]">
          <span>[BLACK-BAND STAT STRIP // STAT-04]</span>
          <span>REVERSED MONOCHROME</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#333]">
          {stats.map((s, i) => (
            <div key={i} className="p-6">
              <span className="text-[9px] text-[#aaa] block mb-1 uppercase">{s.label}</span>
              <div className="text-3xl font-black uppercase tracking-tighter text-[#e8e8e6]">{s.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
