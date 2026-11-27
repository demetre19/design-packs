import React from 'react';
import { ArrowUpRight, Sliders, Disc } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full border-b border-neutral-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-2xl tracking-tighter text-white">GRAVITAS</span>
          <span className="text-neutral-500 text-xs font-mono tracking-widest uppercase hidden sm:inline">Type Foundry / Est. 1924</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#specimens" className="font-extralight text-white hover:text-neutral-400 transition-colors">Specimen (200)</a>
          <a href="#foundry" className="font-light text-neutral-200 hover:text-white transition-colors">Foundry (300)</a>
          <a href="#licensing" className="font-normal text-neutral-400 hover:text-white transition-colors">Licensing (400)</a>
          <a href="#glyphs" className="font-semibold text-neutral-300 hover:text-white transition-colors">Glyphs (600)</a>
          <a href="#archive" className="font-extrabold text-neutral-500 hover:text-white transition-colors">Archive (800)</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="text-[10px] font-mono text-neutral-500 text-right hidden lg:block leading-tight">
            <div>WEIGHT: 12 STYLES</div>
            <div>FORMAT: OTF / TTF / WOFF2</div>
          </div>
          <button className="bg-white text-black px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center space-x-1">
            <span>Acquire Specimen</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="border-t border-neutral-900 bg-neutral-950 px-6 py-1 text-[10px] font-mono text-neutral-400 flex justify-between max-w-6xl mx-auto">
        <span>GRID: 12-COLUMN BASE</span>
        <span>SPECIMEN NO. 048-G</span>
        <span>OPTICAL SIZE: 8PT – 72PT</span>
      </div>
    </header>
  );
}
