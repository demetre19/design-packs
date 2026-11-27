import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const table = [
    { feature: "Active Substation Nodes", tier1: "Up to 10", tier2: "Unlimited", tier3: "Unlimited Sovereign" },
    { feature: "Telemetry Sampling Rate", tier2: "10,000 Hz", tier1: "1,000 Hz", tier3: "50,000 Hz Dedicated" },
    { feature: "Autonomous Dispatch", tier1: "Standard", tier2: "Advanced AI", tier3: "Custom Neural" },
    { feature: "Encryption Standard", tier1: "AES-256", tier2: "Post-Quantum PQC", tier3: "Sovereign Lattice" },
    { feature: "SLA Uptime Guarantee", tier1: "99.9%", tier2: "99.999%", tier3: "99.9999% Dedicated" },
    { feature: "Dedicated Site Engineers", tier1: false, tier2: false, tier3: true }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">SPECIFICATION COMPARISON</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Detailed feature matrix.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[PRC-04 // MATRIX]</span>
        </div>

        <div className="bg-[#f2f3f5] border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px] overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60 bg-white">
            <span className="col-span-5">Feature Specification</span>
            <span className="col-span-2 text-center">Substation Node</span>
            <span className="col-span-2 text-center text-[#2743f0] font-bold">Enterprise OS</span>
            <span className="col-span-3 text-right">Planetary Fleet</span>
          </div>
          {table.map((row, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-4 items-center font-mono text-xs hover:bg-white transition-colors">
              <span className="col-span-5 font-sans font-semibold uppercase text-xs">{row.feature}</span>
              <span className="col-span-2 text-center text-[#0d0e10]/70">
                {typeof row.tier1 === 'boolean' ? (row.tier1 ? <Check className="w-4 h-4 text-[#2743f0] mx-auto" /> : <X className="w-4 h-4 text-[#0d0e10]/30 mx-auto" />) : row.tier1}
              </span>
              <span className="col-span-2 text-center text-[#2743f0] font-semibold">
                {typeof row.tier2 === 'boolean' ? (row.tier2 ? <Check className="w-4 h-4 text-[#2743f0] mx-auto" /> : <X className="w-4 h-4 text-[#0d0e10]/30 mx-auto" />) : row.tier2}
              </span>
              <span className="col-span-3 text-right font-semibold text-[#0d0e10]">
                {typeof row.tier3 === 'boolean' ? (row.tier3 ? <Check className="w-4 h-4 text-[#2743f0] ml-auto" /> : <X className="w-4 h-4 text-[#0d0e10]/30 ml-auto" />) : row.tier3}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
