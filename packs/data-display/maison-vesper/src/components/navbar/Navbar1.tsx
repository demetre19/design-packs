import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar1: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#faf7f2] border-b border-[#a68a64]/30 relative">
      {/* Top micro-bar */}
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-[#1a1512]/70 border-b border-[#a68a64]/15">
        <span>N° 01 — COLLECTION AUTOMNE / HIVER</span>
        <span>PARIS • 32 RUE CAMBON</span>
        <span>EUR (€)</span>
      </div>

      {/* Center serif wordmark */}
      <div className="max-w-6xl mx-auto px-6 py-6 text-center relative">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute left-6 top-1/2 -translate-y-1/2 md:hidden text-[#1a1512]"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <a href="#" className="inline-block font-serif text-3xl md:text-4xl tracking-widest text-[#1a1512] font-light">
          MAISON VESPER
        </a>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-6 text-[#1a1512]">
          <button className="hidden sm:flex items-center space-x-1 text-xs tracking-wider hover:text-[#a68a64] transition-colors">
            <Search size={15} className="stroke-[1.5]" />
            <span className="text-[10px] uppercase tracking-[0.15em]">Recherche</span>
          </button>
          <a href="#" className="relative flex items-center space-x-1 text-xs tracking-wider hover:text-[#a68a64] transition-colors">
            <ShoppingBag size={17} className="stroke-[1.5]" />
            <span className="absolute -top-1 -right-2 text-[9px] font-mono bg-[#a68a64] text-white px-1 rounded-full">0</span>
          </a>
        </div>
      </div>

      {/* Wide-tracked link row with fine rule */}
      <nav className="hidden md:block border-t border-[#a68a64]/20 py-3">
        <ul className="max-w-4xl mx-auto flex justify-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1a1512]">
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5">Atelier</a></li>
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5">Collections</a></li>
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5">Savoir-Faire</a></li>
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5">Sur-Mesure</a></li>
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5">Journal</a></li>
          <li><a href="#" className="hover:text-[#a68a64] transition-colors border-b border-transparent hover:border-[#a68a64] pb-0.5 text-[#a68a64]">Archive</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-t border-[#a68a64]/20 px-6 py-6 animate-fade-in">
          <ul className="space-y-4 text-xs uppercase tracking-[0.2em] font-medium text-center">
            <li><a href="#" className="block py-1 hover:text-[#a68a64]">Atelier</a></li>
            <li><a href="#" className="block py-1 hover:text-[#a68a64]">Collections</a></li>
            <li><a href="#" className="block py-1 hover:text-[#a68a64]">Savoir-Faire</a></li>
            <li><a href="#" className="block py-1 hover:text-[#a68a64]">Sur-Mesure</a></li>
            <li><a href="#" className="block py-1 hover:text-[#a68a64]">Journal</a></li>
            <li><a href="#" className="block py-1 text-[#a68a64]">Archive</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};
