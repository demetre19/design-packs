import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export function Hero3() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-4">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Specimen 03 // Alphabet Matrix</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Full Character Spectrum</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">A–Z // 0–9 SPECIMEN GRID</span>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 space-y-4 font-mono">
          <div className="text-xs text-neutral-400 flex justify-between border-b border-neutral-900 pb-2">
            <span>WEIGHT: 200 (HAIRLINE)</span>
            <span>ABCDEFGHIJKLM</span>
          </div>
          <div className="text-xl font-extralight tracking-widest text-neutral-200 overflow-x-auto whitespace-nowrap">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </div>
          <div className="text-xs text-neutral-400 flex justify-between border-b border-neutral-900 pt-4 pb-2">
            <span>WEIGHT: 500 (MEDIUM)</span>
            <span>NOPQRSTUVWXYZ</span>
          </div>
          <div className="text-2xl font-medium tracking-widest text-neutral-300 overflow-x-auto whitespace-nowrap">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </div>
          <div className="text-xs text-neutral-400 flex justify-between border-b border-neutral-900 pt-4 pb-2">
            <span>WEIGHT: 900 (EXTRA BOLD)</span>
            <span>0123456789</span>
          </div>
          <div className="text-3xl font-black tracking-widest text-white overflow-x-auto whitespace-nowrap">
            0 1 2 3 4 5 6 7 8 9 // SYMBOLS & LIGATURES
          </div>
        </div>
      </div>
    </section>
  );
}
