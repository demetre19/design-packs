import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: 'MACH RATING LIMIT', tier1: 'MACH 2.5', tier2: 'MACH 4.5', tier3: 'MACH 6.0+' },
    { feature: 'WIND TUNNEL ACCESS', tier1: '4 HOURS', tier2: '24 HOURS', tier3: 'UNLIMITED' },
    { feature: 'SECURE DOWNLINK', tier1: 'STANDARD', tier2: 'ENCRYPTED', tier3: 'MIL-SPEC 409' },
    { feature: 'CHASE PLANE SUPPORT', tier1: false, tier2: true, tier3: true },
    { feature: 'DEDICATED BAY 4', tier1: false, tier2: false, tier3: true },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">PRICING // 04</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            COMPARISON TABLE <span className="text-[#ff3d00]">MATRIX</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] overflow-x-auto [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#3a3e4c] bg-[#16181d]">
                <th className="p-4 uppercase tracking-widest">SPECIFICATION</th>
                <th className="p-4 uppercase tracking-widest text-[#ff3d00]">SORTIE PASS</th>
                <th className="p-4 uppercase tracking-widest text-[#ff3d00]">X-99 FLAGSHIP</th>
                <th className="p-4 uppercase tracking-widest text-[#ff3d00]">DEFENSE CONTRACT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3a3e4c]">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#282c35]/50">
                  <td className="p-4 font-bold text-zinc-300">{r.feature}</td>
                  <td className="p-4 text-zinc-400">
                    {typeof r.tier1 === 'boolean' ? (
                      r.tier1 ? <Check className="w-4 h-4 text-[#ff3d00]" /> : <X className="w-4 h-4 text-zinc-600" />
                    ) : (
                      r.tier1
                    )}
                  </td>
                  <td className="p-4 text-zinc-200 font-bold">
                    {typeof r.tier2 === 'boolean' ? (
                      r.tier2 ? <Check className="w-4 h-4 text-[#ff3d00]" /> : <X className="w-4 h-4 text-zinc-600" />
                    ) : (
                      r.tier2
                    )}
                  </td>
                  <td className="p-4 text-[#ff3d00] font-extrabold">
                    {typeof r.tier3 === 'boolean' ? (
                      r.tier3 ? <Check className="w-4 h-4 text-[#ff3d00]" /> : <X className="w-4 h-4 text-zinc-600" />
                    ) : (
                      r.tier3
                    )}
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
