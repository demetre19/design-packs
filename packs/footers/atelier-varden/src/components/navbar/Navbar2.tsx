import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Navbar2() {
  return (
    <div className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] font-sans">
      <div className="px-6 py-3 flex items-center justify-between border-b border-[#e2e0d8]/65 text-[10px] font-mono tracking-widest text-stone-500 uppercase">
        <div className="flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span>EST. 2012 — ZÜRICH / TOKYO</span>
        </div>
        <div>ARCHITECTURAL RECORD NO. 44</div>
      </div>
      <nav className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="text-xl font-medium tracking-tight text-[#16171a]">ATELIER VARDEN</span>
        </div>
        <div className="hidden lg:flex items-center space-x-10 text-sm text-[#16171a]">
          <a href="#residential" className="flex items-center space-x-1 hover:text-[#b5482e]">
            <span>Residential</span>
            <span className="text-[10px] font-mono text-stone-400">01</span>
          </a>
          <a href="#cultural" className="flex items-center space-x-1 hover:text-[#b5482e]">
            <span>Cultural</span>
            <span className="text-[10px] font-mono text-stone-400">02</span>
          </a>
          <a href="#urban" className="flex items-center space-x-1 hover:text-[#b5482e]">
            <span>Urbanism</span>
            <span className="text-[10px] font-mono text-stone-400">03</span>
          </a>
          <a href="#archive" className="flex items-center space-x-1 hover:text-[#b5482e]">
            <span>Archive</span>
            <span className="text-[10px] font-mono text-stone-400">04</span>
          </a>
        </div>
        <div>
          <a href="#contact" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#16171a] border-b border-[#16171a] pb-0.5 hover:text-[#b5482e] hover:border-[#b5482e] transition-colors">
            <span>Direct Commission</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </nav>
    </div>
  );
}
