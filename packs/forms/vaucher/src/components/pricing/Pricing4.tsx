import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: "Power Reserve", standard: "48 Hours", master: "72 Hours", grand: "240 Hours" },
    { feature: "Case Material", standard: "Stainless Steel", master: "Platinum 950", grand: "18k Rose Gold" },
    { feature: "Geneva Seal", standard: true, master: true, grand: true },
    { feature: "Tourbillon Escapement", standard: false, master: false, grand: true },
    { feature: "Bespoke Engraving", standard: false, master: true, grand: true }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">PRICING 04 · COMPARISON LEDGER TABLE</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Specification Ledger Matrix</h2>
      </div>

      <div className="overflow-x-auto border border-[#d0d0cc] bg-white">
        <table className="w-full text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-[#d0d0cc] bg-[#1c2128] text-white">
              <th className="p-4 tracking-widest uppercase font-light">Feature Specification</th>
              <th className="p-4 tracking-widest uppercase font-light">Standard Cal.</th>
              <th className="p-4 tracking-widest uppercase font-light">Master Edition</th>
              <th className="p-4 tracking-widest uppercase font-light">Grand Complication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d0d0cc]/60">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#f4f4f2]/50">
                <td className="p-4 text-[#232a30] font-medium">{row.feature}</td>
                <td className="p-4 text-[#232a30]/80">
                  {typeof row.standard === 'boolean' ? (
                    row.standard ? <Check className="w-4 h-4 text-[#2e5e8e]" /> : <X className="w-4 h-4 text-stone-300" />
                  ) : (
                    row.standard
                  )}
                </td>
                <td className="p-4 text-[#232a30]/80">
                  {typeof row.master === 'boolean' ? (
                    row.master ? <Check className="w-4 h-4 text-[#2e5e8e]" /> : <X className="w-4 h-4 text-stone-300" />
                  ) : (
                    row.master
                  )}
                </td>
                <td className="p-4 text-[#232a30]/80">
                  {typeof row.grand === 'boolean' ? (
                    row.grand ? <Check className="w-4 h-4 text-[#2e5e8e]" /> : <X className="w-4 h-4 text-stone-300" />
                  ) : (
                    row.grand
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
