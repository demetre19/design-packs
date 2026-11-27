import React from 'react';
import { Compass, Shield } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#0b0d10] border-b border-white/10 px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#d4b06a]/50 flex items-center justify-center bg-[#13171c]">
            <span className="text-[#d4b06a] text-xs font-serif font-bold">◆</span>
          </div>
          <span className="font-serif text-lg tracking-wider text-[#ece8e1]">AETHERIS</span>
        </div>
        <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />
        <span className="text-[10px] font-mono tracking-widest text-[#7a8494] hidden sm:block">EST. MMXXIV — N 51°30'</span>
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-[#ece8e1]">
        <a href="#collections" className="hover:text-[#d4b06a] transition-colors">COLLECTIONS</a>
        <span className="text-[#d4b06a]/40">/</span>
        <a href="#complications" className="hover:text-[#d4b06a] transition-colors">COMPLICATIONS</a>
        <span className="text-[#d4b06a]/40">/</span>
        <a href="#custody" className="hover:text-[#d4b06a] transition-colors">CUSTODY</a>
        <span className="text-[#d4b06a]/40">/</span>
        <a href="#salon" className="hover:text-[#d4b06a] transition-colors">SALON</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-[11px] font-mono tracking-widest text-[#7a8494] hover:text-[#ece8e1] transition-colors">
          PORTAL
        </button>
        <button className="px-4 py-2 rounded-full border border-[#d4b06a] text-[#d4b06a] text-[11px] font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
          ACQUIRE
        </button>
      </div>
    </header>
  );
}
