import React from 'react';
import { Check, X } from 'lucide-react';

export default function Pricing4() {
  const rows = [
    { feature: "Risograph Color Separations", starter: "2 Colors", pro: "4 Colors", enterprise: "Unlimited" },
    { feature: "Physical Print Edition", starter: "100 Qty", pro: "500 Qty", enterprise: "Custom Run" },
    { feature: "React Web Frontend", starter: "Landing Page", pro: "Full App", enterprise: "Multi-App Suite" },
    { feature: "Turnaround Time", starter: "5 Days", pro: "48 Hours", enterprise: "Dedicated" },
    { feature: "Direct Slack Access", starter: false, pro: true, enterprise: true }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#111111] text-[#ffd92e] font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            SPECIFICATION MATRIX
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            COMPARE TIERS.
          </h2>
        </div>

        <div className="bg-white border-3 border-[#111111] shadow-hard-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#ffd92e] border-b-3 border-[#111111] font-grotesk font-black text-sm uppercase">
                <th className="p-4 border-r-2 border-[#111111]">Feature Spec</th>
                <th className="p-4 border-r-2 border-[#111111]">Starter ($1,250)</th>
                <th className="p-4 border-r-2 border-[#111111]">Complete ($3,800)</th>
                <th className="p-4">Retainer ($7,500)</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs font-bold">
              {rows.map((r, i) => (
                <tr key={i} className="border-b-2 border-[#111111] hover:bg-[#fffdf5]">
                  <td className="p-4 border-r-2 border-[#111111] font-bold">{r.feature}</td>
                  <td className="p-4 border-r-2 border-[#111111]">
                    {typeof r.starter === 'boolean' ? (r.starter ? <Check size={16} className="text-[#ff6b5e]" /> : <X size={16} />) : r.starter}
                  </td>
                  <td className="p-4 border-r-2 border-[#111111] bg-[#ffd92e]/10">
                    {typeof r.pro === 'boolean' ? (r.pro ? <Check size={16} className="text-[#ff6b5e]" /> : <X size={16} />) : r.pro}
                  </td>
                  <td className="p-4">
                    {typeof r.enterprise === 'boolean' ? (r.enterprise ? <Check size={16} className="text-[#ff6b5e]" /> : <X size={16} />) : r.enterprise}
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
