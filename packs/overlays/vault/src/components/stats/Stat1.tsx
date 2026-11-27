import React from 'react';

export function Stat1() {
  const stats = [
    { num: "500", label: "LIMITED PRINT RUN", sub: "Hardbound Copies" },
    { num: "09", label: "CURRENT VOLUME", sub: "Hors-Série Edition" },
    { num: "24", label: "GLOBAL STOCKISTS", sub: "Paris, Tokyo, New York" },
    { num: "100%", label: "ARCHIVAL PAPER", sub: "140gsm Munken Lynx" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>CIRCULATION STATS // NUMERALS</span>
          <span>EDITION METRICS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="border border-black p-6 text-center">
              <span className="text-6xl md:text-7xl font-black font-serif-editorial block mb-2">{s.num}</span>
              <span className="text-xs font-mono uppercase tracking-widest block font-bold mb-1">{s.label}</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
