import React from 'react';

export function FeatureGrid2() {
  const cast = [
    { name: "MARCO VANELLI", role: "ATTORE PRINCIPALE", img: "https://picsum.photos/seed/cast1/400/500" },
    { name: "ELENA ROSSI", role: "VOCE & DANZA", img: "https://picsum.photos/seed/cast2/400/500" },
    { name: "GIOVANNA BRENTA", role: "PERFORMER", img: "https://picsum.photos/seed/cast3/400/500" },
    { name: "LUCA VERRI", role: "SUONO & RUMORE", img: "https://picsum.photos/seed/cast4/400/500" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">CAST & ENSEMBLE // FACE PLATES</h2>
        <span className="font-mono-num text-xs uppercase bg-white text-black px-2 py-0.5">COMPAGNIA 2026</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {cast.map((c, i) => (
          <div key={i} className="border border-white p-3 flex flex-col justify-between">
            <div className="overflow-hidden border border-white mb-3 h-52 relative">
              <img src={c.img} className="w-full h-full collage-img" alt={c.name} />
              <span className="absolute top-1 left-1 bg-black text-white text-[9px] font-mono-num px-1 border border-white">
                0{i+1}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-tight">{c.name}</h3>
              <p className="text-[10px] font-mono-num text-zinc-400 uppercase tracking-widest">{c.role}</p>
            </div>
            <div className="border-t border-white/20 pt-2 mt-3 text-[9px] font-mono-num text-zinc-500 uppercase">
              TEATRO DEL CAOS RESIDENT
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
