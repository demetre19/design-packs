import React from 'react';
import { Terminal, Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: 'Chassis Material', t1: 'Steel Spaceframe', t2: 'Carbon Monocoque', t3: 'Full Titanium Carbon' },
    { feature: 'Power Output', t1: '650 HP', t2: '780 HP', t3: '840 HP' },
    { feature: 'Active Aerodynamics', t1: false, t2: true, t3: true },
    { feature: 'Telemetry Cloud Link', t1: false, t2: true, t3: true },
    { feature: 'Dedicated Engineer', t1: false, t2: false, t3: true },
    { feature: 'Price Allocation', t1: '$245,000', t2: '$385,000', t3: '$590,000' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[DOCUMENTATION COMPARISON TABLE]</span>
          <span>REF: COMP-04</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] divide-y divide-[#111]">
            <thead>
              <tr className="bg-[#f4f4f0] divide-x divide-[#111] uppercase">
                <th className="p-4 font-bold">Specification Parameter</th>
                <th className="p-4 font-bold">Tier 01 (Base)</th>
                <th className="p-4 font-bold">Tier 02 (Club)</th>
                <th className="p-4 font-bold">Tier 03 (Works)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#111]">
              {rows.map((r, i) => (
                <tr key={i} className="divide-x divide-[#111] hover:bg-[#fafaf8] transition-colors">
                  <td className="p-4 font-bold text-[#333]">{r.feature}</td>
                  <td className="p-4 text-[#555]">
                    {typeof r.t1 === 'boolean' ? (r.t1 ? <Check className="w-4 h-4" /> : <X className="w-4 h-4 text-[#888]" />) : r.t1}
                  </td>
                  <td className="p-4 text-[#555]">
                    {typeof r.t2 === 'boolean' ? (r.t2 ? <Check className="w-4 h-4" /> : <X className="w-4 h-4 text-[#888]" />) : r.t2}
                  </td>
                  <td className="p-4 text-[#555] font-bold">
                    {typeof r.t3 === 'boolean' ? (r.t3 ? <Check className="w-4 h-4" /> : <X className="w-4 h-4 text-[#888]" />) : r.t3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
