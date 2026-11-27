import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: "Schematic Floor Plans", tier1: true, tier2: true, tier3: true },
    { feature: "Zoning Compliance Report", tier1: true, tier2: true, tier3: true },
    { feature: "Structural Engineering Stamp", tier1: false, tier2: true, tier3: true },
    { feature: "MEP Routing Documents", tier1: false, tier2: false, tier3: true },
    { feature: "Weekly Site Supervision", tier1: false, tier2: false, tier3: true },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs text-[#1b3a5c]/70">PRICING MATRIX // 04</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Specification Comparison Table</h2>
        </div>

        <div className="border-2 border-[#1b3a5c] bg-white overflow-x-auto shadow-lg">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-[#1b3a5c] bg-[#1b3a5c] text-white">
                <th className="p-4 uppercase tracking-widest">Specification Parameter</th>
                <th className="p-4 uppercase tracking-widest text-center">Tier 01: Schematic</th>
                <th className="p-4 uppercase tracking-widest text-center">Tier 02: Development</th>
                <th className="p-4 uppercase tracking-widest text-center">Tier 03: Master Doc</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b3a5c]/20">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1b3a5c]/5">
                  <td className="p-4 font-bold">{row.feature}</td>
                  <td className="p-4 text-center">
                    {row.tier1 ? <Check className="w-4 h-4 text-[#1b3a5c] mx-auto" /> : <X className="w-4 h-4 text-[#1b3a5c]/30 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {row.tier2 ? <Check className="w-4 h-4 text-[#1b3a5c] mx-auto" /> : <X className="w-4 h-4 text-[#1b3a5c]/30 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {row.tier3 ? <Check className="w-4 h-4 text-[#1b3a5c] mx-auto" /> : <X className="w-4 h-4 text-[#1b3a5c]/30 mx-auto" />}
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
