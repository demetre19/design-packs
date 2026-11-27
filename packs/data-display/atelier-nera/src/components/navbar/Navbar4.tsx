import React from 'react';

export function Navbar4() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-10">
      <div className="text-center">
        <div className="text-[9px] tracking-widest uppercase text-black/40 mb-2">curated design practice</div>
        <a href="#" className="font-light text-3xl tracking-tighter lowercase inline-block mb-6">atelier nera</a>
        <div className="flex justify-center items-center gap-8 text-xs font-light lowercase text-black/60">
          <a href="#" className="hover:text-black transition-colors">projects</a>
          <a href="#" className="hover:text-black transition-colors">objects</a>
          <a href="#" className="hover:text-black transition-colors">practice</a>
          <a href="#" className="hover:text-black transition-colors">contact</a>
        </div>
      </div>
    </header>
  );
}
