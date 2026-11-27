import React from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-white text-black border-b border-black font-mono">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold border border-black px-1.5 py-0.5">REF. 01</span>
          <span className="font-black tracking-tighter uppercase text-lg">MARCUS STERLING</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest font-bold">
          <a href="#work" className="hover:underline">01 / Works</a>
          <a href="#experience" className="hover:underline">02 / Exp</a>
          <a href="#archive" className="hover:underline">03 / Archive</a>
          <a href="#contact" className="hover:underline flex items-center gap-1">
            Inquire <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>
        <button className="md:hidden p-1 border border-black">
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
