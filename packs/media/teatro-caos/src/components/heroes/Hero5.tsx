import React from 'react';

export function Hero5() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x-2 divide-white">
      {/* Manifesto dense uppercase text block beside photo column */}
      <div className="p-8 flex flex-col justify-between">
        <div className="font-mono-num text-xs uppercase border-b border-white pb-2 flex justify-between">
          <span>DOCUMENTO 05 // MANIFESTO</span>
          <span>EST. 2024</span>
        </div>
        <div className="py-6 space-y-4">
          <h1 className="font-display text-6xl tracking-tighter leading-none">
            IL TEATRO NON È RAPPRESENTAZIONE. È PRESENZA BRUTA.
          </h1>
          <p className="font-mono-num text-xs uppercase text-zinc-300 leading-relaxed">
            RIFIUTIAMO IL TESTO LETTERARIO COME GABBIA. IL PALCOSCENICO DIVENTA IL LUOGO DEL CONFLITTO TRA CORPI, VOCE E SILENZIO ASSOLUTO. NESSUN COMPROMESSO CON IL PUBBLICO.
          </p>
        </div>
        <div className="border-t border-white pt-4 flex items-center justify-between font-mono-num text-xs">
          <span>DIRETTORE: MARCO VANELLI</span>
          <span className="bg-white text-black px-3 py-1 font-display">MANIFESTO</span>
        </div>
      </div>

      <div className="p-4 grid grid-rows-2 gap-4">
        <div className="relative border border-white overflow-hidden h-48">
          <img src="https://picsum.photos/seed/hero5a/600/300" className="w-full h-full collage-img" alt="manifesto photo 1" />
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 text-[9px] font-mono-num uppercase border border-white">
            STUDIO SUL SILENZIO
          </div>
        </div>
        <div className="relative border border-white overflow-hidden h-48">
          <img src="https://picsum.photos/seed/hero5b/600/300" className="w-full h-full collage-img" alt="manifesto photo 2" />
          <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-[9px] font-mono-num uppercase">
            PROVA APERTA
          </div>
        </div>
      </div>
    </section>
  );
}
