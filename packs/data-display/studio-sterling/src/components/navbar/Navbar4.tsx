import React from 'react';

export function Navbar4() {
  return (
    <header className="w-full bg-white text-black border-b border-black font-mono">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 border border-black rounded-full text-[10px] font-bold">A</span>
          <span className="uppercase tracking-widest font-bold">INDEX / NAVIGATOR</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
          <a href="#sec-a" className="hover:underline">[A] INDEX</a>
          <a href="#sec-b" className="hover:underline">[B] WORKS</a>
          <a href="#sec-c" className="hover:underline">[C] INDEX-03</a>
        </div>
      </div>
    </header>
  );
}
