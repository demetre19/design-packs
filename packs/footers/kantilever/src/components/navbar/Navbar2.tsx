import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar2: React.FC = () => {
  return (
    <header className="w-full bg-[#14161a] text-[#f7f6f3] border-b border-[#f7f6f3]/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#ffc72c] transform rotate-45" />
          <span className="font-extrabold tracking-tight text-xl uppercase font-sans">
            KANTILEVER<span className="text-[#ffc72c] ml-1">_SYS</span>
          </span>
        </div>

        {/* Navigation with Diagonal Dash Active Indicators */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
          <a href="#works" className="relative text-[#ffc72c] pb-1 flex items-center gap-1.5">
            / Works
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffc72c] transform skew-x-[-12deg]" />
          </a>
          <a href="#studio" className="hover:text-[#ffc72c] transition-colors pb-1 flex items-center gap-1.5 opacity-80 hover:opacity-100">
            / Studio
          </a>
          <a href="#tectonics" className="hover:text-[#ffc72c] transition-colors pb-1 flex items-center gap-1.5 opacity-80 hover:opacity-100">
            / Tectonics
          </a>
          <a href="#archives" className="hover:text-[#ffc72c] transition-colors pb-1 flex items-center gap-1.5 opacity-80 hover:opacity-100">
            / Archives
          </a>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-[#f7f6f3]/55 hidden lg:inline">LOC // ZURICH & TOKYO</span>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center gap-1.5"
          >
            Connect <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
