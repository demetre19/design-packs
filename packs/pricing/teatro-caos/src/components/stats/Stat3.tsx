import React from 'react';

export function Stat3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">SPOTLIGHT STAT // NUMERO GIGANTE</h2>
        <span className="font-mono-num text-xs uppercase">METRICHE</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white">
        <div className="lg:col-span-5 relative overflow-hidden min-h-[260px]">
          <img src="https://picsum.photos/seed/stat3/600/500" className="w-full h-full collage-img" alt="stat photo" />
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[9px] font-mono-num border border-white">
            PLATE 03
          </div>
        </div>
        <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-zinc-950">
          <div className="font-mono-num text-xs uppercase text-zinc-400 border-b border-white pb-2 flex justify-between">
            <span>INDICATORE DI PRESENZA</span>
            <span>2026</span>
          </div>
          <div className="py-4 flex items-baseline gap-4">
            <span className="font-display text-8xl sm:text-9xl tracking-tighter leading-none">98%</span>
            <span className="font-mono-num text-xs uppercase text-zinc-300">MEDIA RIEMPIMENTO SALE NELLE REPLICHE DI MILANO E ROMA</span>
          </div>
          <div className="border-t border-white/30 pt-4 flex justify-between text-xs font-mono-num uppercase">
            <span>TEATRO DEL CAOS</span>
            <span>BILANCIO STAGIONALE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
