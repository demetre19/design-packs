import React from 'react';

export function FeatureGrid4() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4 flex">
      {/* Rotated edge text */}
      <div className="w-10 bg-white text-black flex items-center justify-center border border-black py-4 select-none mr-2">
        <span className="font-display text-xs tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
          ARCHIVIO SPERIMENTALE // 2026
        </span>
      </div>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="border border-white p-4 flex flex-col justify-between">
          <span className="font-mono-num text-[10px] text-zinc-400">01 // INSTALLAZIONE</span>
          <div>
            <h3 className="font-display text-3xl mb-2">SPAZIO VUOTO</h3>
            <p className="text-xs font-mono-num text-zinc-300">INDAGINE SULL'ACUSTICA DEL SILENZIO NEGLI SPAZI INDUSTRIALI DISMESSI.</p>
          </div>
          <span className="text-[10px] font-mono-num underline mt-4">ESPLORA ARCHIVIO</span>
        </div>

        <div className="border border-white relative h-64 overflow-hidden">
          <img src="https://picsum.photos/seed/fg4rot/500/500" className="w-full h-full collage-img" alt="asymmetric grid" />
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-[9px] font-mono-num border border-white">
            MILANO 01
          </div>
        </div>

        <div className="border border-white p-4 flex flex-col justify-between bg-white text-black">
          <span className="font-mono-num text-[10px] uppercase border-b border-black pb-1">02 // RESIDENZA</span>
          <div>
            <h3 className="font-display text-3xl mb-2">CORPO POLITICO</h3>
            <p className="text-xs font-mono-num uppercase">SEMINARI INTENSIVI APERTI AI PERFORMER E ARTISTI VISIVI.</p>
          </div>
          <div className="border-t border-black pt-2 text-[10px] font-mono-num">
            ISCRIZIONI APERTE
          </div>
        </div>
      </div>
    </section>
  );
}
