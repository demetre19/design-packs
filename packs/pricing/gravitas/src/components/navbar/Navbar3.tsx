import React from 'react';
import { ArrowUpRight, Sliders, Disc } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="border-b border-neutral-900 bg-neutral-950 px-6 py-1.5 text-[11px] font-mono text-neutral-400 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <span>LAT: 47.3769° N</span>
          <span>LON: 8.5417° E (ZURICH)</span>
          <span className="hidden sm:inline">NEW RELEASE: GRAVITAS CONDENSED V2.4</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>EN</span>
          <span>/</span>
          <span className="text-white font-bold">DE</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-lg font-black tracking-widest uppercase">Gravitas Type</div>
        <div className="hidden md:flex items-center space-x-6 text-xs font-mono uppercase tracking-wider text-neutral-300">
          <a href="#specimens" className="hover:text-white">Specimens</a>
          <span className="text-neutral-700">/</span>
          <a href="#licensing" className="hover:text-white">Licensing</a>
          <span className="text-neutral-700">/</span>
          <a href="#foundry" className="hover:text-white">Foundry</a>
          <span className="text-neutral-700">/</span>
          <a href="#custom" className="hover:text-white">Custom Glyphs</a>
        </div>
        <div>
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-3 py-1.5 text-xs font-mono border border-neutral-700 flex items-center space-x-2">
            <Sliders className="w-3 h-3 text-neutral-400" />
            <span>Parameters</span>
          </button>
        </div>
      </div>
    </header>
  );
}
