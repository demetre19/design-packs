import React from 'react';
import { Compass } from 'lucide-react';

export function Stat2() {
  const stats = [
    { label: "Power Reserve", val: "48 Hours" },
    { label: "Jewel Count", val: "29 Rubies" },
    { label: "Vibration Rate", val: "28,800 VPH" },
    { label: "Water Resistance", val: "30 Meters" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">STAT 02 · SPECIFICATION-SHEET STATS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Technical Specifications</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white border-y-2 border-[#232a30] p-6 space-y-2">
            <div className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.25em]">{s.label}</div>
            <div className="font-mono text-xl font-medium text-[#2e5e8e]">{s.val}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
