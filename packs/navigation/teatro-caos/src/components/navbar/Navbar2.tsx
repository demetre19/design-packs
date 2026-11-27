import React from 'react';
import { Ticket } from 'lucide-react';

export function Navbar2() {
  return (
    <nav className="w-full bg-black border-b-2 border-white text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white border-b border-white">
        {/* Brand cell */}
        <div className="p-3 flex items-center justify-between">
          <a href="#" className="font-display text-3xl tracking-tighter">TEATRO.CAOS</a>
          <span className="text-[9px] font-mono-num border border-white px-1">SYS.02</span>
        </div>
        
        {/* Photo fragment strip cell */}
        <div className="hidden md:flex items-center gap-1 px-2 overflow-hidden bg-white/5">
          <img src="https://picsum.photos/seed/nav1/100/40" className="w-12 h-8 collage-img" alt="fragment" />
          <img src="https://picsum.photos/seed/nav2/100/40" className="w-12 h-8 collage-img" alt="fragment" />
          <img src="https://picsum.photos/seed/nav3/100/40" className="w-12 h-8 collage-img" alt="fragment" />
          <span className="text-[9px] font-mono-num tracking-tighter ml-auto">EST.2024</span>
        </div>

        {/* Links cell */}
        <div className="p-3 flex items-center justify-around text-[10px] font-mono-num tracking-widest uppercase">
          <a href="#" className="hover:underline">STAGE</a>
          <a href="#" className="hover:underline">CAST</a>
          <a href="#" className="hover:underline">PRESS</a>
        </div>

        {/* Action cell */}
        <div className="p-2 flex items-center bg-white text-black justify-between">
          <span className="font-display text-xs px-2">STAGIONE IV</span>
          <button className="bg-black text-white px-3 py-1 font-display text-xs tracking-wider flex items-center gap-1 hover:bg-zinc-800">
            <Ticket className="w-3 h-3" /> BOOK
          </button>
        </div>
      </div>
    </nav>
  );
}
