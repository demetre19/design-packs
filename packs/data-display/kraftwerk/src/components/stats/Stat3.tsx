import React from 'react';
import { Terminal } from 'lucide-react';

export function Stat3() {
  const rows = [
    { param: '01 / DISPLACEMENT', spec: '3,998 CC', tolerance: '+/- 0.1 CC' },
    { param: '02 / COMPRESSION RATIO', spec: '10.5 : 1', tolerance: 'FORGED PISTONS' },
    { param: '03 / BOOST PRESSURE', spec: '2.4 BAR', tolerance: 'CERAMIC TURBINES' },
    { param: '04 / OIL CAPACITY', spec: '14.2 LITERS', tolerance: 'DRY SUMP TANK' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[DOCUMENTATION TABLE STATS]</span>
          <span>REF: STAT-03</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] divide-y divide-[#111]">
            <thead>
              <tr className="bg-[#f4f4f0] divide-x divide-[#111] uppercase">
                <th className="p-4 font-bold">Parameter</th>
                <th className="p-4 font-bold">Specification Value</th>
                <th className="p-4 font-bold">Engineering Tolerance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#111]">
              {rows.map((r, i) => (
                <tr key={i} className="divide-x divide-[#111] hover:bg-[#fafaf8] transition-colors">
                  <td className="p-4 font-bold text-[#333]">{r.param}</td>
                  <td className="p-4 font-black">{r.spec}</td>
                  <td className="p-4 text-[#666]">{r.tolerance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
