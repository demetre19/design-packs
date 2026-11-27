import React from 'react';

export function Stat1() {
  const stats = [
    { num: "04", label: "STAGIONI TEATRALI" },
    { num: "28", label: "PRODUZIONI ORIGINALI" },
    { num: "14K", label: "SPETTATORI IN SALA" },
    { num: "100%", label: "INDEPENDENTI" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">NUMERI DELLA STAGIONE // MONUMENTI</h2>
        <span className="font-mono-num text-xs uppercase">STATISTICHE</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="border border-white p-6 text-center bg-zinc-950 flex flex-col justify-between">
            <span className="font-mono-num text-[10px] text-zinc-500 uppercase">STAT 0{i+1}</span>
            <div className="font-display text-7xl sm:text-8xl tracking-tighter my-4 text-white">
              {s.num}
            </div>
            <span className="font-mono-num text-xs uppercase tracking-widest text-zinc-300 border-t border-white/20 pt-3">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
