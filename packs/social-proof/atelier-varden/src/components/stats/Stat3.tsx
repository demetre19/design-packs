import React from 'react';

export function Stat3() {
  const stats = [
    { label: "Gross Realized Area", value: "18,500 M²" },
    { label: "Completed Residences", value: "44 Estates" },
    { label: "Average Project Scale", value: "420 M²" },
    { label: "Global Locations", value: "Zürich, Tokyo, Stockholm" },
    { label: "Structural Guarantee", value: "Lifetime Certified" },
    { label: "Practice Longevity", value: "14 Years" }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">SPECIFICATION TABLE STATS</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Performance & Output Register</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {stats.map((s, i) => (
            <div key={i} className="p-6 flex justify-between items-center font-mono text-xs hover:bg-[#fafaf8] transition-colors">
              <span className="text-stone-500 uppercase">{s.label}</span>
              <span className="text-[#16171a] font-medium text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
