import React from 'react';
import { ArrowDownRight, Ticket } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto">
      {/* Giant condensed production title across top */}
      <div className="border-b-2 border-white p-4 text-center bg-white text-black">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-tighter leading-none">
          TRAGEDIA DEL SILENZIO
        </h1>
      </div>

      {/* Interlocked photo plates and dense caption cells */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-white">
        <div className="p-4 flex flex-col justify-between">
          <div className="text-[10px] font-mono-num uppercase tracking-widest border-b border-white pb-2 mb-4">
            PLATE 01 // ATTO PRIMO
          </div>
          <div className="relative overflow-hidden border border-white">
            <img src="https://picsum.photos/seed/hero1a/600/700" className="w-full h-64 collage-img" alt="performance" />
            <div className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 text-[9px] font-mono-num uppercase">
              PH. MARCO VANELLI
            </div>
          </div>
          <p className="mt-4 text-xs font-mono-num leading-tight text-zinc-300 uppercase">
            IL CORPO COME SPAZIO POLITICO DI RESISTENZA E MANIFESTAZIONE DEL CAOS CONTEMPORANEO.
          </p>
        </div>

        <div className="p-4 flex flex-col justify-between bg-zinc-950">
          <div className="text-[10px] font-mono-num uppercase tracking-widest border-b border-white pb-2 mb-4 flex justify-between">
            <span>PREMIER ABSOLUTE</span>
            <span className="text-white">24.03.2026</span>
          </div>
          <div className="my-auto py-8 text-center">
            <div className="font-display text-4xl sm:text-5xl tracking-tighter mb-2">TEATRO DEL CAOS</div>
            <p className="text-[11px] font-mono-num uppercase tracking-widest text-zinc-400">REGIA DI ELENA ROSSI</p>
          </div>
          <div className="border-t border-white pt-4 flex gap-2">
            <button className="flex-1 bg-white text-black font-display py-2 text-sm hover:bg-zinc-200 flex items-center justify-center gap-1">
              <Ticket className="w-4 h-4" /> ACQUISTA BIGLIETTO
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-between">
          <div className="text-[10px] font-mono-num uppercase tracking-widest border-b border-white pb-2 mb-4">
            PLATE 02 // ATTO SECONDO
          </div>
          <div className="relative overflow-hidden border border-white">
            <img src="https://picsum.photos/seed/hero1b/600/700" className="w-full h-64 collage-img" alt="performance" />
            <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 text-[9px] font-mono-num uppercase">
              ROMA 01
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] font-mono-num border-t border-white pt-2">
            <span>DURATA: 110 MIN</span>
            <span className="flex items-center gap-1">SCORRI <ArrowDownRight className="w-3 h-3" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
