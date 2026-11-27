import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export function Hero5() {
  return (
    <section className="relative w-full bg-black text-white py-28 px-6 border-b border-neutral-800 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
        <span className="text-[18rem] sm:text-[28rem] font-black tracking-tighter text-neutral-700 uppercase">
          BOLD
        </span>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
        <div className="inline-block border border-neutral-800 bg-neutral-950 px-3 py-1 text-[11px] font-mono text-neutral-400">
          SPECIMEN 05 // OVERLAY GRADIENT
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase">
          Typographic Supremacy
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-400 text-base font-light">
          A definitive study in extreme weight contrast. Hand-crafted glyph tables optimized for high-resolution displays and editorial print.
        </p>
        <div className="pt-4 flex justify-center space-x-6 text-xs font-mono text-neutral-400">
          <span>// 12 CUTS</span>
          <span>// TRUE ITALICS</span>
          <span>// VARIABLE OTF</span>
        </div>
      </div>
    </section>
  );
}
