import React from 'react';

export function Hero4() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto">
      {/* Grid hero with one cell breaking across columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-white">
        <div className="p-6 flex flex-col justify-between bg-white text-black">
          <div className="font-mono-num text-[10px] uppercase border-b border-black pb-2">MANIFESTO 04</div>
          <div>
            <h2 className="font-display text-5xl tracking-tighter leading-tight">
              OGNI ATTO È UNA RIVOLTA SULLA SCENA.
            </h2>
            <p className="font-mono-num text-xs mt-4 uppercase">
              RESPINGHIAMO L'ILLUSIONE BORGHESE. IL TEATRO TORNA AD ESSERE ARENA POLITICA E CORPORALE.
            </p>
          </div>
          <div className="border-t border-black pt-4 font-mono-num text-xs">
            TEATRO DEL CAOS // MILANO-ROMA
          </div>
        </div>

        <div className="md:col-span-2 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative border border-white overflow-hidden sm:col-span-2 h-56">
            <img src="https://picsum.photos/seed/hero4wide/800/400" className="w-full h-full collage-img" alt="ensemble wide" />
            <div className="absolute bottom-2 left-2 bg-black px-2 py-1 text-[9px] font-mono-num uppercase">
              ENSEMBLE TEATRALE 2026 // PROVA GENERALE
            </div>
          </div>
          <div className="border border-white p-4 flex flex-col justify-between">
            <span className="font-mono-num text-[10px] text-zinc-400">PROSSIMA REPLICA</span>
            <div className="font-display text-3xl">02 APRILE</div>
            <span className="text-[10px] font-mono-num underline">INFORMAZIONI E PRENOTAZIONI</span>
          </div>
          <div className="border border-white p-4 flex flex-col justify-between bg-zinc-900">
            <span className="font-mono-num text-[10px] text-zinc-400">BIGLIETTERIA</span>
            <div className="font-display text-3xl">INGRESSO LIBERO</div>
            <span className="text-[10px] font-mono-num">FINO A ESAURIMENTO POSTI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
