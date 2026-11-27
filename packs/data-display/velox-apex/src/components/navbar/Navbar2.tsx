import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-white text-black border-b-2 border-black py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Logo Hard Left */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff2e00]" />
          <span className="font-black text-2xl tracking-tighter uppercase">VELOX APEX</span>
          <span className="font-mono text-[10px] text-neutral-500 border border-black px-1">SYS.02</span>
        </div>

        {/* Links Clustered Far Right */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-widest text-black">
          <a href="#series" className="hover:text-[#ff2e00] transition-colors">01 // SERIES</a>
          <a href="#specs" className="hover:text-[#ff2e00] transition-colors">02 // SPECS</a>
          <a href="#dyno" className="hover:text-[#ff2e00] transition-colors">03 // DYNO</a>
          <a href="#order" className="text-[#ff2e00] font-bold flex items-center gap-1">
            04 // RESERVE <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
