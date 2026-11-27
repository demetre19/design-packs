import React from 'react';

export function Navbar3() {
  return (
    <header className="w-full bg-white text-black border-b border-black">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black uppercase tracking-tighter">VAULT*</span>
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-mono">
            <a href="#" className="hover:underline">Works</a>
            <a href="#" className="hover:underline">Objects</a>
            <a href="#" className="hover:underline">Journal</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[9px] uppercase tracking-widest block font-mono text-zinc-500">Volume Index</span>
            <span className="text-3xl font-black font-serif-editorial leading-none">09+</span>
          </div>
        </div>
      </div>
    </header>
  );
}
