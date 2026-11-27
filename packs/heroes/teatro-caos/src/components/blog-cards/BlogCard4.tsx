import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">FEATURED ESSAY // HEADLINE BLEED</h2>
        <span className="font-mono-num text-xs uppercase">SAGGISTICA</span>
      </div>
      <div className="border border-white p-6 relative overflow-hidden bg-zinc-950">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none overflow-hidden">
          <img src="https://picsum.photos/seed/bleed/600/600" className="w-full h-full collage-img" alt="bleed background" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="bg-white text-black font-mono-num text-[10px] uppercase px-2 py-0.5 inline-block mb-3">
            SAGGIO CRITICO // N. 04
          </span>
          <h3 className="font-display text-6xl sm:text-7xl tracking-tighter leading-none mb-4">
            LA RIVOLTA DEI CORPI CONTRO LA SCENA VIRTUALE
          </h3>
          <p className="font-mono-num text-xs uppercase text-zinc-300 leading-relaxed mb-6">
            NEL TEMPO DELLA DIGITALIZZAZIONE TOTALE, IL TEATRO DEL CAOS RIVENDICA LA CARNALITÀ BRUTA, IL SUDORE, IL FIATO E LA PRESENZA FISICA SENZA FILTRI.
          </p>
          <button className="bg-white text-black font-display px-6 py-2 text-sm hover:bg-zinc-200">
            SCARICA SAGGIO (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
