import React from 'react';
import { ArrowUpRight, Sliders, Disc } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full border-b border-neutral-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Disc className="w-5 h-5 text-white animate-spin-slow" />
          <span className="font-black text-xl tracking-tight text-white uppercase">Gravitas</span>
        </div>
        <nav className="flex items-center space-x-6 text-sm">
          <a href="#specimen" className="font-extralight text-white hover:underline">Catalogue</a>
          <a href="#specimen" className="font-light text-neutral-200 hover:underline">Catalogue</a>
          <a href="#specimen" className="font-normal text-neutral-400 hover:underline">Catalogue</a>
          <a href="#specimen" className="font-bold text-neutral-400 hover:underline">Catalogue</a>
          <a href="#specimen" className="font-black text-neutral-300 hover:underline">Catalogue</a>
        </nav>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SYS.02</span>
          <button className="border border-neutral-700 px-4 py-2 text-xs font-mono text-white hover:bg-neutral-900 transition-colors">
            Tester
          </button>
        </div>
      </div>
    </header>
  );
}
