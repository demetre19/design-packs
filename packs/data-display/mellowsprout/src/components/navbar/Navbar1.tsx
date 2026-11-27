import React, { useState } from 'react';
import { Sparkles, Menu, X, ShoppingBag } from 'lucide-react';

export function Navbar1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fdf3e7]/90 backdrop-blur-md border-b-4 border-[#3d2530]/10 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-[#ff8c42] flex items-center justify-center text-white shadow-md shadow-[#ff8c42]/40 transform group-hover:rotate-6 transition-transform">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <span className="text-2xl font-black text-[#3d2530] tracking-tight">MellowSprout</span>
            <div className="text-xs text-[#f975a3] font-bold uppercase tracking-wider">Play & Grow Lab</div>
          </div>
        </div>

        {/* Pill Nav Links */}
        <nav className="hidden md:flex items-center gap-2 bg-white/60 p-2 rounded-full border-2 border-[#3d2530]/10 shadow-inner">
          <a href="#workshops" className="px-5 py-2 rounded-full text-sm font-bold text-[#3d2530] bg-[#5ba8e8]/20 hover:bg-[#5ba8e8] hover:text-white transition-colors">Workshops</a>
          <a href="#kits" className="px-5 py-2 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#ff8c42] hover:text-white transition-colors">Play Kits</a>
          <a href="#community" className="px-5 py-2 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#f975a3] hover:text-white transition-colors">Community</a>
          <a href="#about" className="px-5 py-2 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#6dbf67] hover:text-white transition-colors">Our Story</a>
        </nav>

        {/* Candy CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 text-[#3d2530] font-bold hover:text-[#ff8c42] transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f975a3] text-white text-xs rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button className="px-6 py-3 rounded-full bg-[#ff8c42] text-white font-extrabold shadow-lg shadow-[#ff8c42]/40 hover:bg-[#ff7a28] active:translate-y-0.5 transition-all border-b-4 border-[#d66a20]">
            Join The Club ✨
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded-2xl bg-white text-[#3d2530] shadow-md border-2 border-[#3d2530]/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fdf3e7] border-b-4 border-[#3d2530]/10 p-6 flex flex-col gap-3 shadow-xl">
          <a href="#workshops" className="p-3 rounded-2xl bg-[#5ba8e8]/20 font-bold text-[#3d2530] text-center">Workshops</a>
          <a href="#kits" className="p-3 rounded-2xl bg-[#ff8c42]/20 font-bold text-[#3d2530] text-center">Play Kits</a>
          <a href="#community" className="p-3 rounded-2xl bg-[#f975a3]/20 font-bold text-[#3d2530] text-center">Community</a>
          <button className="w-full py-3 rounded-full bg-[#ff8c42] text-white font-extrabold shadow-md">
            Join The Club ✨
          </button>
        </div>
      )}
    </header>
  );
}
