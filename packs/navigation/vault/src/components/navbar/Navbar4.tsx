import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Navbar4() {
  return (
    <header className="w-full bg-white text-black border-b border-black">
      <div className="flex justify-between items-center px-4 py-1.5 text-[9px] uppercase tracking-widest bg-black text-white font-mono">
        <span>NEW RELEASE*</span>
        <span>FREE WORLDWIDE SHIPPING OVER €300</span>
        <span>EST. 2024</span>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-mono">
          <a href="#" className="hover:opacity-60 transition-opacity">Index</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Editorial</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Stores</a>
        </div>
        <div className="text-center">
          <span className="text-3xl font-black tracking-tight uppercase font-serif-editorial">
            VAULT*
          </span>
        </div>
        <div className="flex items-center justify-end gap-6 text-xs uppercase tracking-widest font-mono">
          <a href="#" className="hover:opacity-60 transition-opacity">Account</a>
          <a href="#" className="flex items-center gap-1 hover:opacity-60 transition-opacity">
            <ShoppingBag className="w-4 h-4" /> Cart (2)
          </a>
        </div>
      </div>
    </header>
  );
}
