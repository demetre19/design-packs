import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    { num: "01", date: "24.03.2026", title: "IL CORPO COME ARCHIVIO POLITICO", author: "MARCO VANELLI", img: "https://picsum.photos/seed/blog1/400/400" },
    { num: "02", date: "18.03.2026", title: "NOTE SULL'ACUSTICA DEL SILENZIO", author: "ELENA ROSSI", img: "https://picsum.photos/seed/blog2/400/400" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">DIARIO DI SCENA // JOURNAL</h2>
        <span className="font-mono-num text-xs uppercase">ARTICOLI E MANIFESTI</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((p, i) => (
          <div key={i} className="border border-white p-4 flex flex-col justify-between bg-zinc-950 group hover:bg-white hover:text-black transition-colors">
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono-num border-b border-white/40 group-hover:border-black/40 pb-2 mb-3">
                <span>{p.num} // {p.date}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="overflow-hidden border border-white mb-3 h-48">
                <img src={p.img} className="w-full h-full collage-img" alt={p.title} />
              </div>
              <h3 className="font-display text-3xl tracking-tight mb-2">{p.title}</h3>
              <p className="text-[10px] font-mono-num text-zinc-400 group-hover:text-zinc-800 uppercase">AUTORE: {p.author}</p>
            </div>
            <div className="border-t border-white/30 group-hover:border-black/30 pt-3 mt-4 flex items-center justify-between text-xs font-mono-num">
              <span>LEGGI ARTICOLO</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
