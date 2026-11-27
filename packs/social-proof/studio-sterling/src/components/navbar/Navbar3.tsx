import React from 'react';
import { Layers } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-black text-white border-b border-white font-mono">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-white text-black font-bold flex items-center justify-center text-[10px]">S</span>
          <span className="uppercase tracking-widest font-black">BLACK_BAND // CURRICULUM ARCHIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase tracking-widest">
          <span className="text-neutral-400">STATUS: ACTIVE PRACTICE</span>
          <span className="border border-white px-2 py-0.5 flex items-center gap-1">
            <Layers className="w-3 h-3" /> v4.2
          </span>
        </div>
      </div>
    </header>
  );
}
