import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: "Brand Identity Architecture", audit: true, clinical: true, master: true },
    { feature: "Patient Journey Mapping", audit: true, clinical: true, master: true },
    { feature: "Spatial & Acoustic Design", audit: false, clinical: true, master: true },
    { feature: "Biomarker Protocol Integration", audit: false, clinical: true, master: true },
    { feature: "Dedicated Senior Strategist", audit: false, clinical: false, master: true },
    { feature: "Executive Retreat Curation", audit: false, clinical: false, master: true },
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Detailed Comparison
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Compare our engagement tiers.
          </h2>
        </div>

        <div className="bg-[#faf6f0] rounded-[28px] p-8 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#122420]/15">
                <th className="py-4 font-serif text-xl text-[#122420] w-1/2">Capabilities</th>
                <th className="py-4 text-center font-serif text-base text-[#122420]">Audit</th>
                <th className="py-4 text-center font-serif text-base text-[#122420]">Clinical</th>
                <th className="py-4 text-center font-serif text-base text-[#1d4f47]">Master</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#122420]/10 text-sm">
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="py-4 text-[#122420]/90 font-medium">{r.feature}</td>
                  <td className="py-4 text-center">
                    {r.audit ? <Check className="w-4 h-4 text-[#2a7a6d] mx-auto" /> : <X className="w-4 h-4 text-[#122420]/30 mx-auto" />}
                  </td>
                  <td className="py-4 text-center">
                    {r.clinical ? <Check className="w-4 h-4 text-[#2a7a6d] mx-auto" /> : <X className="w-4 h-4 text-[#122420]/30 mx-auto" />}
                  </td>
                  <td className="py-4 text-center">
                    {r.master ? <Check className="w-4 h-4 text-[#1d4f47] mx-auto" /> : <X className="w-4 h-4 text-[#122420]/30 mx-auto" />}
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
