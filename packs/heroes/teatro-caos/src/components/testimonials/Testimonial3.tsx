import React from 'react';

export function Testimonial3() {
  const quotes = [
    { text: "INCONCEPIBILE LA POTENZA VISIVA DI QUESTO SPETTACOLO.", source: "TEATRO & CRITICA" },
    { text: "UN VERO MANIFESTO CONTRO LA MEDIOCRITÀ DEL PALCO.", source: "SCENA CONTEMPORANEA" },
    { text: "IL PUBBLICO NON È SPETTATORE, È COMPLICE.", source: "RIVISTA ARTE & POLITICA" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex items-center justify-between">
        <h2 className="font-display text-4xl tracking-tighter">CRITICS // STACKED CAPTIONS</h2>
        <span className="font-mono-num text-[10px] border border-white px-2 py-0.5">PRESS ARCHIVE</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {quotes.map((q, i) => (
          <div key={i} className="border border-white p-4 flex flex-col justify-between bg-zinc-950">
            <div className="font-mono-num text-[10px] text-zinc-500 mb-2">0{i+1} // RECENSIONE</div>
            <p className="font-display text-2xl tracking-tight my-2">"{q.text}"</p>
            <div className="border-t border-white/20 pt-2 mt-4 text-[10px] font-mono-num uppercase tracking-widest text-zinc-400">
              {q.source}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
