import React from 'react';
import { Compass, Ruler, Grid, Layers, ArrowUpRight } from 'lucide-react';

export function Navbar1() {
  return (
    <nav className="w-full bg-[#1b3a5c] text-white border-b border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-wider relative select-none">
      {/* Grid reference ticks */}
      <div className="absolute top-0 left-4 text-[9px] text-cyan-300 opacity-60">A1</div>
      <div className="absolute top-0 right-4 text-[9px] text-cyan-300 opacity-60">Z1</div>

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Title Block Logo */}
        <div className="flex items-center gap-4 border border-white/30 px-3 py-1.5 bg-[#142d48]">
          <Compass className="w-4 h-4 text-cyan-300 animate-pulse" />
          <div className="flex flex-col">
            <span className="font-bold tracking-widest text-sm">AO-SYS // 01</span>
            <span className="text-[9px] text-cyan-200">DWG: NB-001 | SCALE 1:100</span>
          </div>
        </div>

        {/* Grid-referenced links */}
        <div className="hidden md:flex items-center gap-8 text-[11px]">
          <a href="#structural" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-400">[01]</span> Systems
          </a>
          <a href="#elevation" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-400">[02]</span> Elevation
          </a>
          <a href="#specifications" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-400">[03]</span> Specs
          </a>
          <a href="#archive" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-400">[04]</span> Archive
          </a>
        </div>

        {/* Technical CTA */}
        <button className="border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-400 hover:text-[#1b3a5c] transition-all flex items-center gap-2 font-mono text-xs cursor-pointer">
          <span>REQ SPEC // 2400MM</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
}
