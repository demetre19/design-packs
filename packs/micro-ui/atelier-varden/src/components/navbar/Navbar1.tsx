import React from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';

export function Navbar1() {
  return (
    <nav className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] px-6 py-4 flex items-center justify-between font-sans">
      <div className="flex items-center space-x-3">
        <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block"></span>
        <span className="font-medium text-lg tracking-tight text-[#16171a]">ATELIER VARDEN</span>
        <span className="text-stone-400 text-xs font-mono tracking-widest pl-2">RES. 01</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm text-[#16171a]">
        <a href="#works" className="hover:text-[#b5482e] transition-colors">Works</a>
        <a href="#practice" className="hover:text-[#b5482e] transition-colors">Practice</a>
        <a href="#monographs" className="hover:text-[#b5482e] transition-colors">Monographs</a>
        <a href="#journal" className="hover:text-[#b5482e] transition-colors">Journal</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#inquiry" className="hidden sm:inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
          <span>Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <button className="md:hidden p-2 text-[#16171a]">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
