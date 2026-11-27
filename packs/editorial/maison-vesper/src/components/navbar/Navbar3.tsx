import React from 'react';
import { Menu, Globe } from 'lucide-react';

export const Navbar3: React.FC = () => {
  return (
    <header className="w-full bg-[#faf7f2] border-b border-[#a68a64]/30 px-6 lg:px-12 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <a href="#" className="font-serif text-xl tracking-[0.2em] uppercase font-light text-[#1a1512]">
          Maison Vesper
        </a>
        <div className="hidden lg:flex items-center space-x-6 text-[11px] uppercase tracking-[0.2em] text-[#1a1512]/80 border-l border-[#a68a64]/30 pl-8">
          <a href="#" className="hover:text-[#a68a64] transition-colors">Collection</a>
          <a href="#" className="hover:text-[#a68a64] transition-colors">Atelier</a>
          <a href="#" className="hover:text-[#a68a64] transition-colors">Maison</a>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-xs uppercase tracking-[0.2em]">
        <button className="hidden sm:flex items-center space-x-1.5 text-[11px] text-[#1a1512]/70 hover:text-[#1a1512]">
          <Globe size={14} className="stroke-[1.5]" />
          <span>FR / EN</span>
        </button>
        <a href="#" className="text-[11px] border border-[#1a1512] px-4 py-1.5 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all">
          Client Privé
        </a>
      </div>
    </header>
  );
};
