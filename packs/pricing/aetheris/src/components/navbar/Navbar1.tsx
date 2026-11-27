import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b0d10] border-b border-white/10 px-6 py-4 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-[#d4b06a] flex items-center justify-center text-[10px] text-[#d4b06a] font-serif">A</span>
        <span className="font-serif tracking-widest text-[#ece8e1] text-sm uppercase">Aetheris & Co.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[#7a8494]">
        <a href="#horology" className="hover:text-[#ece8e1] transition-colors">HOROLOGY</a>
        <a href="#vaults" className="hover:text-[#ece8e1] transition-colors">VAULTS</a>
        <a href="#heritage" className="hover:text-[#ece8e1] transition-colors">HERITAGE</a>
        <a href="#ateliers" className="hover:text-[#ece8e1] transition-colors">ATELIERS</a>
      </nav>

      <div className="hidden md:flex items-center">
        <a
          href="#inquire"
          className="px-5 py-2 rounded-full border border-[#d4b06a]/40 text-[#d4b06a] text-xs font-mono tracking-wider hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all flex items-center gap-2"
        >
          PRIVATE CLIENT <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#ece8e1]">
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#13171c] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#horology" className="text-xs font-mono text-[#ece8e1]">HOROLOGY</a>
          <a href="#vaults" className="text-xs font-mono text-[#ece8e1]">VAULTS</a>
          <a href="#heritage" className="text-xs font-mono text-[#ece8e1]">HERITAGE</a>
          <a href="#ateliers" className="text-xs font-mono text-[#ece8e1]">ATELIERS</a>
          <a href="#inquire" className="px-4 py-2 text-center border border-[#d4b06a] text-[#d4b06a] text-xs font-mono">PRIVATE CLIENT</a>
        </div>
      )}
    </header>
  );
}
