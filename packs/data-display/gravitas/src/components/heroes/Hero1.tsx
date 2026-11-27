import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export function Hero1() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 border-b border-neutral-800 overflow-hidden">
      <div className="absolute top-4 left-6 text-[10px] font-mono text-neutral-400">
        SPECIMEN // 01 — CASCADING WEIGHT SPECTRUM
      </div>
      <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 text-right">
        <div>200 → 900 SCALE</div>
        <div>12 MASTER CUTS</div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mt-12">
        <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase mb-4">Gravitas Type Foundry Presents</span>
        
        <div className="w-full flex flex-col items-center space-y-1 tracking-tighter leading-none my-8">
          <h1 className="font-extralight text-5xl sm:text-7xl md:text-9xl text-white">GRAVITAS</h1>
          <h1 className="font-light text-5xl sm:text-7xl md:text-9xl text-neutral-200">GRAVITAS</h1>
          <h1 className="font-normal text-5xl sm:text-7xl md:text-9xl text-neutral-400">GRAVITAS</h1>
          <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl text-neutral-600">GRAVITAS</h1>
          <h1 className="font-black text-5xl sm:text-7xl md:text-9xl text-neutral-800">GRAVITAS</h1>
        </div>

        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base font-light mt-6 leading-relaxed">
          Engineered for high-density editorial publishing and brutalist digital interfaces. Meticulously kerned optical masters designed in Zurich and distributed worldwide.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-white text-black px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center space-x-2">
            <span>Test Typography</span>
            <Terminal className="w-4 h-4" />
          </button>
          <button className="border border-neutral-700 text-white px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-900 transition-colors">
            Download Specimen PDF
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-6 border-t border-neutral-900 flex justify-between items-center text-[11px] font-mono text-neutral-400">
        <span>SCROLL FOR GLYPH MATRIX</span>
        <ArrowDown className="w-4 h-4 text-neutral-400 animate-bounce" />
        <span>ALL RIGHTS RESERVED © 2026</span>
      </div>
    </section>
  );
}
