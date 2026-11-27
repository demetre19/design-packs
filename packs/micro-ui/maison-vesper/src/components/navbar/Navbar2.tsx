import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Navbar2: React.FC = () => {
  return (
    <header className="w-full bg-[#faf7f2] border-b border-[#1a1512]/15">
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Left: N° labels */}
        <div className="flex items-center space-x-4 text-[10px] tracking-[0.2em] font-mono text-[#a68a64]">
          <span>N° 02</span>
          <span className="text-[#1a1512]/30">—</span>
          <span className="hidden sm:inline uppercase text-[#1a1512]/70">Division Haute Couture</span>
        </div>

        {/* Center: Split Masthead Wordmark */}
        <div className="text-center">
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-normal text-[#1a1512]">
            VESPER
          </a>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#a68a64] mt-0.5">Paris — Milan</p>
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center space-x-6 text-xs uppercase tracking-[0.15em]">
          <a href="#" className="hidden md:inline hover:text-[#a68a64] transition-colors">Rendez-vous</a>
          <a href="#" className="relative flex items-center space-x-1 text-[#1a1512] hover:text-[#a68a64]">
            <ShoppingBag size={16} className="stroke-[1.5]" />
            <span className="text-[10px] font-mono">([2])</span>
          </a>
        </div>
      </div>
    </header>
  );
};
