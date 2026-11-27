import React from 'react';

export function BlogCard2() {
  const items = [
    { num: "01", title: "IL RIFIUTO DELLA DRAMMATURGIA BORGHESE", date: "MARZO 2026" },
    { num: "02", title: "SPAZIO SCENICO E GEOMETRIA DEL CONFLITTO", date: "FEBBRAIO 2026" },
    { num: "03", title: "LA VOCE COME ARMA POLITICA", date: "GENNAIO 2026" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">INDICE DIARIO // NUMERALI</h2>
        <span className="font-mono-num text-xs uppercase">ARCHIVIO TESTI</span>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-950 hover:bg-white hover:text-black transition-colors group">
            <div className="flex items-center gap-6">
              <span className="font-display text-5xl tracking-tighter text-zinc-600 group-hover:text-black">{item.num}</span>
              <div>
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <span className="text-[10px] font-mono-num text-zinc-400 group-hover:text-zinc-700 uppercase">PUBBLICATO: {item.date}</span>
              </div>
            </div>
            <button className="border border-current px-4 py-2 font-display text-xs tracking-wider">
              LEGGI TESTO
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
