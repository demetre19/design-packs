import React from 'react';

export function Navbar4() {
  return (
    <div className="w-full bg-black border-b-2 border-white text-white flex">
      {/* Rotated vertical company name strip */}
      <div className="w-12 bg-white text-black flex items-center justify-center border-r-2 border-white py-4 select-none">
        <span className="font-display text-xs tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
          TEATRO DEL CAOS // MILANO
        </span>
      </div>
      <nav className="flex-1 max-w-[calc(72rem-3rem)] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="font-display text-3xl tracking-tighter">COLLETTIVO 04</a>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono-num uppercase tracking-widest text-zinc-300">
            <span className="border border-white/40 px-2 py-0.5">SEDE CENTRALE</span>
            <span>STAGIONE SPERIMENTALE</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono-num uppercase">
          <a href="#" className="hover:underline hidden sm:inline">PROGRAMMA</a>
          <a href="#" className="hover:underline hidden sm:inline">BIGLIETTERIA</a>
          <button className="bg-white text-black font-display px-4 py-1 text-xs hover:bg-zinc-200">
            PRENOTA
          </button>
        </div>
      </nav>
    </div>
  );
}
