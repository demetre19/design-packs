import React from 'react';
import { Terminal } from 'lucide-react';

export function Stat1() {
  const stats = [
    { label: 'HORSEPOWER', val: '840 HP', ref: 'S-01' },
    { label: 'MAX TORQUE', val: '820 NM', ref: 'S-02' },
    { label: 'DRY WEIGHT', val: '1,120 KG', ref: 'S-03' },
    { label: 'DOWNFORCE', val: '650 KG', ref: 'S-04' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[STATISTICS COMPARTMENTED GRID // STATS-01]</span>
          <span>REF: STAT-01</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#111]">
          {stats.map((s, i) => (
            <div key={i} className="p-6">
              <div className="flex justify-between items-center text-[9px] text-[#666] mb-2">
                <span>{s.ref}</span>
                <span>VERIFIED</span>
              </div>
              <div className="text-3xl font-black uppercase tracking-tighter mb-1">{s.val}</div>
              <span className="text-[9px] text-[#666] block uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
