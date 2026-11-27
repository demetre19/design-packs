import React from 'react';

export function Navbar3() {
  return (
    <nav className="w-full bg-black border-b-2 border-white text-white">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs font-mono-num uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <a href="#" className="font-display text-2xl tracking-tighter">TEATRO DEL CAOS</a>
          <span className="hidden sm:inline border-l border-white/40 pl-4 text-[9px] text-zinc-400">MANIFESTO COLLAGE NAV</span>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-[10px]">
          <a href="#" className="hover:underline">01 // SPETTACOLI</a>
          <a href="#" className="hover:underline">02 // LABORATORI</a>
          <a href="#" className="hover:underline">03 // MANIFESTO</a>
          <a href="#" className="hover:underline">04 // CONTATTI</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="border border-white px-3 py-1 font-display text-xs hover:bg-white hover:text-black transition-colors">ACCEDI</a>
          <a href="#" className="bg-white text-black px-3 py-1 font-display text-xs hover:bg-zinc-200 transition-colors">BIGLIETTI</a>
        </div>
      </div>
    </nav>
  );
}
