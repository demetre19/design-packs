import React from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-white text-black border-b border-black">
      {/* Tiny meta row */}
      <div className="flex justify-between items-center px-4 py-1 text-[9px] uppercase tracking-widest border-b border-black font-mono">
        <span>VAULT* EDITORIAL</span>
        <span>ISSUE NO. 09 // HORS-SÉRIE</span>
        <span>PARIS // TOKYO</span>
      </div>
      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-black hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-xs uppercase tracking-wider font-mono">Index [01]</span>
        </div>
        <div className="text-center">
          <a href="#" className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-serif-editorial">
            VAULT*
          </a>
          <p className="text-[10px] tracking-widest uppercase mt-0.5">The Monochromatic Review</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-xs uppercase tracking-wider font-mono hover:underline">
            <Search className="w-4 h-4" /> Search
          </button>
          <button className="flex items-center gap-1 text-xs uppercase tracking-wider font-mono bg-black text-white px-3 py-1.5 hover:bg-zinc-800 transition-colors">
            <ShoppingBag className="w-4 h-4" /> Bag [0]
          </button>
        </div>
      </div>
      {/* Nav links */}
      <nav className="border-t border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-8 py-2.5 text-xs uppercase tracking-widest font-mono">
          <a href="#" className="hover:bg-black hover:text-white px-2 py-0.5 transition-colors">Collections</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-0.5 transition-colors">Lookbook</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-0.5 transition-colors">Exhibits</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-0.5 transition-colors">Archives</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-0.5 transition-colors">Stockists</a>
        </div>
      </nav>
    </header>
  );
}
