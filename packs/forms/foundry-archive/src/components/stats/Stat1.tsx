import React from 'react';

export function Stat1() {
  const stats = [
    { num: "1957", label: "Founding Epoch Year" },
    { num: "3,142", label: "Cataloged Lead Punches" },
    { num: "21", label: "Optical Master Weights" },
    { num: "12", label: "Cabinet Vaults in Basel" }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. COLLECTION COUNTS AS ARCHIVE MONUMENTS</h2>
          <span className="text-xs text-neutral-500">VAULT STATISTICS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
