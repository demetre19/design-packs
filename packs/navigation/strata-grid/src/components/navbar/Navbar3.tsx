import React from 'react';
import { Layers } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-white border-b border-[#0d0e10]/15 py-6 px-6 text-center font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#2743f0]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">INDUSTRIAL OS</span>
        </div>
        <h1 className="text-xl font-semibold tracking-tight uppercase">STRATA GRID SYSTEMS</h1>
        <nav className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-[#0d0e10]/70 pt-2">
          <a href="#platform" className="hover:text-[#2743f0] transition-colors">Platform</a>
          <a href="#topology" className="hover:text-[#2743f0] transition-colors">Topology</a>
          <a href="#metrics" className="hover:text-[#2743f0] transition-colors">Metrics</a>
          <a href="#contact" className="hover:text-[#2743f0] transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
