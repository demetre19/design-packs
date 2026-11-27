import React from 'react';
import { Play } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">VIDEO PLATE // COLLAGE GRID</h2>
        <span className="font-mono-num text-xs uppercase">TRAILER UFFICIALE</span>
      </div>
      <div className="border border-white p-4 bg-zinc-950">
        <div className="relative border border-white h-80 sm:h-96 overflow-hidden group cursor-pointer">
          <img src="https://picsum.photos/seed/media1/1200/600" className="w-full h-full collage-img group-hover:scale-105 transition-transform duration-500" alt="video thumbnail" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-16 h-16 bg-white text-black rounded-none flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-black ml-1" />
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[10px] font-mono-num border border-white">
            TRAILER // 01 (02:45)
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-num uppercase">
          <div className="border border-white/40 p-2">
            <span className="text-zinc-400 block text-[9px]">REGIA VIDEO</span>
            <b>MARCO VANELLI</b>
          </div>
          <div className="border border-white/40 p-2">
            <span className="text-zinc-400 block text-[9px]">RIPRESE</span>
            <b>MILANO 2026</b>
          </div>
          <div className="border border-white/40 p-2 flex items-center justify-between">
            <span className="text-zinc-400 text-[9px]">FORMATO</span>
            <b>4K SPERIMENTALE</b>
          </div>
        </div>
      </div>
    </section>
  );
}
