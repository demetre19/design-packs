import React from 'react';

export function Stat1() {
  const stats = [
    { num: "04", label: "years of quiet practice" },
    { num: "42", label: "curated digital monographs" },
    { num: "02", label: "european design studios" },
    { num: "100%", label: "uncompromising restraint" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-16">studio metrics</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, idx) => (
          <div key={idx} className="space-y-2">
            <div className="font-light text-5xl md:text-6xl tracking-tighter">{s.num}</div>
            <div className="text-[10px] uppercase tracking-wider text-black/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
