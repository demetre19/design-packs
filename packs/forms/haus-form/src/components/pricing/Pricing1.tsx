/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Pricing1 = () => {
  const tiers = [
    { num: "01", name: "INDIVIDUAL LICENSE", price: "CHF 150", access: "Single User", updates: "1 Year" },
    { num: "02", name: "STUDIO LICENSE", price: "CHF 450", access: "Up to 10 Users", updates: "Lifetime" },
    { num: "03", name: "INSTITUTIONAL LICENSE", price: "CHF 1,200", access: "Unlimited Enterprise", updates: "Priority Support" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">PRICING 01 // TABULAR PRICING TABLE</span>
        </div>

        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">EDITION LICENSING & ACCESS</h2>

        <div className="border border-[#0a0a0a] overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase">
                <th className="p-4 border-r border-[#ffffff]/20">Index / Tier</th>
                <th className="p-4 border-r border-[#ffffff]/20">Access Level</th>
                <th className="p-4 border-r border-[#ffffff]/20">Updates</th>
                <th className="p-4 border-r border-[#ffffff]/20">Investment</th>
                <th className="p-4 text-center">Acquire</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0a0a0a] font-mono text-xs uppercase">
              {tiers.map((t, idx) => (
                <tr key={idx} className="hover:bg-[#0a0a0a]/5 transition-colors">
                  <td className="p-4 border-r border-[#0a0a0a] font-bold">
                    <span className="text-[#e30613] mr-2">{t.num}.</span> {t.name}
                  </td>
                  <td className="p-4 border-r border-[#0a0a0a]">{t.access}</td>
                  <td className="p-4 border-r border-[#0a0a0a]">{t.updates}</td>
                  <td className="p-4 border-r border-[#0a0a0a] font-bold text-[#e30613]">{t.price}</td>
                  <td className="p-4 text-center">
                    <button className="px-3 py-1 bg-[#0a0a0a] text-[#ffffff] hover:bg-[#e30613] transition-colors text-[10px]">
                      Acquire →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
