import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto relative overflow-hidden">
      {/* Single face close-cropped full-bleed with title overlapping */}
      <div className="relative h-[480px] w-full border-b-2 border-white">
        <img src="https://picsum.photos/seed/hero3face/1200/800" className="w-full h-full collage-img" alt="close-cropped face" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start text-xs font-mono-num uppercase">
            <span className="bg-white text-black px-2 py-1 font-display">TEATRO DEL CAOS // 2026</span>
            <span className="border border-white px-2 py-1 bg-black text-white">ATTO UNICO</span>
          </div>
          <div>
            <h1 className="font-display text-7xl sm:text-9xl tracking-tighter leading-none text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)]">
              IL CORPO MECCANICO
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x-2 divide-white p-4 text-xs font-mono-num uppercase">
        <div className="p-2">
          <span className="text-zinc-500 block">REGIA:</span>
          <span className="font-bold">MARCO VANELLI</span>
        </div>
        <div className="p-2">
          <span className="text-zinc-500 block">SPAZIO:</span>
          <span className="font-bold">EX-CHIESA SAN CARLO</span>
        </div>
        <div className="p-2 flex items-center justify-between">
          <div>
            <span className="text-zinc-500 block">BIGLIETTI:</span>
            <span className="font-bold">DISPONIBILI ORA</span>
          </div>
          <a href="#" className="bg-white text-black p-2 hover:bg-zinc-200">
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
