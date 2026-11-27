import React from 'react';

export function Media3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">FEATURE PLATE // CREDITI</h2>
        <span className="font-mono-num text-xs uppercase">DOCUMENTAZIONE</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white bg-zinc-950">
        <div className="lg:col-span-8 relative overflow-hidden h-72 lg:h-auto border-b lg:border-b-0 lg:border-r border-white">
          <img src="https://picsum.photos/seed/media3/800/500" className="w-full h-full collage-img" alt="feature plate" />
          <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-[10px] font-mono-num border border-white">
            ARCHIVIO FOTOGRAFICO 2026 // MILANO
          </div>
        </div>
        <div className="lg:col-span-4 p-6 flex flex-col justify-between font-mono-num text-xs uppercase space-y-4">
          <div>
            <span className="text-zinc-500 block text-[10px] mb-1">PRODUZIONE</span>
            <h3 className="font-display text-3xl mb-3">IL CORPO POLITICO</h3>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              SCATTO UFFICIALE REALIZZATO DURANTE LA PROVA GENERALE DEL 22 MARZO 2026.
            </p>
          </div>
          <div className="border-t border-white/30 pt-4 space-y-2 text-[10px]">
            <div className="flex justify-between"><span>FOTOGRAFO:</span> <b>MARCO VANELLI</b></div>
            <div className="flex justify-between"><span>STAMPA:</span> <b>GELATINA ARGENTO</b></div>
            <div className="flex justify-between"><span>FORMATO:</span> <b>120MM</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}
