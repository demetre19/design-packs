import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: 'DYNO CELL ACCESS', t1: 'Single Run', t2: '40 Runs', t3: 'Unlimited' },
    { feature: 'MAX RPM TOLERANCE', t1: '8,000 RPM', t2: '9,200 RPM', t3: '11,000 RPM' },
    { feature: 'TELEMETRY CHANNELS', t1: '4 Channels', t2: '12 Channels', t3: '32 Channels' },
    { feature: 'RESIDENT ENGINEER', t1: false, t2: 'Shared', t3: 'Dedicated' },
    { feature: 'CUSTOM MAP OPTIMIZATION', t1: false, t2: true, t3: true },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 04. SPEC COMPARISON</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            PROGRAM <span className="text-[#ffd500]">MATRIX COMPARISON.</span>
          </h2>
        </div>

        <div className="bg-[#14161a] border border-[#262c36] overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#22262f] text-zinc-400">
                <th className="p-4 uppercase">FEATURE / PARAMETER</th>
                <th className="p-4 uppercase">TIER 01</th>
                <th className="p-4 uppercase text-[#ffd500]">TIER 02 (FLAGSHIP)</th>
                <th className="p-4 uppercase">TIER 03</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22262f] font-sans">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#0c0d0f]/50">
                  <td className="p-4 font-mono font-bold text-white">{r.feature}</td>
                  <td className="p-4 text-zinc-300">{typeof r.t1 === 'boolean' ? (r.t1 ? <Check className="w-4 h-4 text-[#ffd500]" /> : <X className="w-4 h-4 text-zinc-600" />) : r.t1}</td>
                  <td className="p-4 text-[#ffd500] font-bold">{typeof r.t2 === 'boolean' ? (r.t2 ? <Check className="w-4 h-4 text-[#ffd500]" /> : <X className="w-4 h-4 text-zinc-600" />) : r.t2}</td>
                  <td className="p-4 text-zinc-300">{typeof r.t3 === 'boolean' ? (r.t3 ? <Check className="w-4 h-4 text-[#ffd500]" /> : <X className="w-4 h-4 text-zinc-600" />) : r.t3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
