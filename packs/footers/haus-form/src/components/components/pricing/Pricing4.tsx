/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Pricing4 = () => {
  const rows = [
    { num: "01", feature: "Component Architecture", basic: "Standard", studio: "Complete", archive: "Master Source" },
    { num: "02", feature: "Grid Systems", basic: "Basic 12-Col", studio: "Advanced Asymmetric", archive: "Custom Builder" },
    { num: "03", feature: "Type Specimens", basic: "Grotesque Regular", studio: "All Weights", archive: "Variable Font" },
    { num: "04", feature: "Support & Updates", basic: "1 Year", studio: "Lifetime", archive: "Priority Direct" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">PRICING 04 // COMPARISON ROWS WITH INDEX NUMBERS</span>
        </div>

        <div className="border border-[#0a0a0a] overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs uppercase">
            <thead>
              <tr className="border-b border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff]">
                <th className="p-4 border-r border-[#ffffff]/20">Index / Specification</th>
                <th className="p-4 border-r border-[#ffffff]/20">Basic (CHF 120)</th>
                <th className="p-4 border-r border-[#ffffff]/20 text-[#e30613]">Studio (CHF 350)</th>
                <th className="p-4">Archive (CHF 980)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0a0a0a]">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#0a0a0a]/5 transition-colors">
                  <td className="p-4 border-r border-[#0a0a0a]">
                    <span className="text-[#e30613] font-bold mr-2">{r.num}.</span> {r.feature}
                  </td>
                  <td className="p-4 border-r border-[#0a0a0a] text-[#0a0a0a]/70">{r.basic}</td>
                  <td className="p-4 border-r border-[#0a0a0a] font-bold">{r.studio}</td>
                  <td className="p-4 font-bold text-[#e30613]">{r.archive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
