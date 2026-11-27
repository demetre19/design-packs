import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Pricing4() {
  const dates = [
    { date: "28 MAR", title: "ATTO I", price: "€20", status: "DISPONIBILE" },
    { date: "04 APR", title: "ATTO II", price: "€22", status: "DISPONIBILE" },
    { date: "11 APR", title: "SPECIALE", price: "€35", status: "ULTIMI POSTI" },
    { date: "18 APR", title: "ATTO III", price: "€18", status: "DISPONIBILE" },
    { date: "25 APR", title: "NOTTE", price: "€40", status: "VIP" },
    { date: "02 MAG", title: "FINALE", price: "€25", status: "ESAURITO" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">CALENDARIO REPLICHE // SCROLL</h2>
        <span className="font-mono-num text-xs uppercase flex items-center gap-1">SCORRI <ArrowRight className="w-3 h-3" /></span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {dates.map((d, i) => (
          <div key={i} className="min-w-[200px] border border-white p-4 flex flex-col justify-between bg-zinc-950 hover:bg-white hover:text-black transition-colors group flex-shrink-0">
            <div>
              <span className="text-[9px] font-mono-num text-zinc-400 group-hover:text-zinc-700 uppercase">REPLICA 0{i+1}</span>
              <div className="font-display text-4xl mt-2">{d.date}</div>
              <h3 className="font-display text-xl tracking-tight mt-1">{d.title}</h3>
            </div>
            <div className="border-t border-white/30 group-hover:border-black/30 pt-3 mt-4 flex items-center justify-between">
              <span className="font-display text-2xl">{d.price}</span>
              <span className="text-[9px] font-mono-num uppercase border border-current px-1.5 py-0.5">{d.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
