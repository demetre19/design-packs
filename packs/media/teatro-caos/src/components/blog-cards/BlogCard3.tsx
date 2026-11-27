import React from 'react';

export function BlogCard3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">MAGAZINE GRID // MISTED SCALE</h2>
        <span className="font-mono-num text-xs uppercase">EDIZIONE SPECIALE</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="md:col-span-2 border border-white p-6 flex flex-col justify-between bg-white text-black">
          <div className="font-mono-num text-[10px] uppercase border-b border-black pb-2">FEATURED ESSAY // 2026</div>
          <div className="my-6">
            <h3 className="font-display text-5xl tracking-tighter leading-none mb-3">
              IL MANIFESTO DEL CORPO SCENICO
            </h3>
            <p className="font-mono-num text-xs uppercase leading-relaxed">
              ANALISI PROFONDA DELLA PRATICA PERFORMATIVA DEL TEATRO DEL CAOS TRA MILANO E ROMA.
            </p>
          </div>
          <div className="border-t border-black pt-2 flex justify-between items-center text-xs font-mono-num">
            <span>AUTORE: MARCO VANELLI</span>
            <span className="underline">LEGGI INTEGRALE (12 MIN)</span>
          </div>
        </div>

        <div className="border border-white p-4 flex flex-col justify-between bg-zinc-950">
          <div className="overflow-hidden border border-white mb-3 h-40">
            <img src="https://picsum.photos/seed/mag3/400/400" className="w-full h-full collage-img" alt="magazine" />
          </div>
          <div>
            <span className="text-[10px] font-mono-num text-zinc-400">NOTE DI REGIA</span>
            <h4 className="font-display text-2xl mt-1">L'ABISSO COME SCENA</h4>
          </div>
          <button className="w-full mt-4 bg-white text-black font-display py-2 text-xs">
            APRI NOTIZIA
          </button>
        </div>
      </div>
    </section>
  );
}
