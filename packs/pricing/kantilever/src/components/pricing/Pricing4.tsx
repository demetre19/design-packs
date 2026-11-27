import React from 'react';
import { Check, X } from 'lucide-react';

export const Pricing4: React.FC = () => {
  const rows = [
    { feature: 'Preliminary Massing Study', t1: true, t2: true, t3: true },
    { feature: 'Structural Cantilever Analysis', t1: false, t2: true, t3: true },
    { feature: 'Diagonal Façade Engineering', t1: false, t2: true, t3: true },
    { feature: 'Permit-Ready Documentation', t1: false, t2: false, t3: true },
    { feature: 'On-Site Construction Oversight', t1: false, t2: false, t3: true },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// COMPARISON MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            SERVICE TIER COMPARISON
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#14161a]">
                <th className="py-4 px-6 font-extrabold uppercase text-sm">Specification Feature</th>
                <th className="py-4 px-6 font-extrabold uppercase text-sm text-center">Tier 01 // Brief</th>
                <th className="py-4 px-6 font-extrabold uppercase text-sm text-center bg-[#ffc72c]/20">
                  / Tier 02 // Flagship
                </th>
                <th className="py-4 px-6 font-extrabold uppercase text-sm text-center">Tier 03 // Urban</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#14161a]/15 font-mono text-xs">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#14161a]/5">
                  <td className="py-4 px-6 font-sans font-bold text-sm">{r.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {r.t1 ? <Check className="w-4 h-4 text-[#14161a] mx-auto" /> : <X className="w-4 h-4 text-[#14161a]/30 mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center bg-[#ffc72c]/10">
                    {r.t2 ? <Check className="w-4 h-4 text-[#14161a] mx-auto font-bold" /> : <X className="w-4 h-4 text-[#14161a]/30 mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {r.t3 ? <Check className="w-4 h-4 text-[#14161a] mx-auto" /> : <X className="w-4 h-4 text-[#14161a]/30 mx-auto" />}
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
