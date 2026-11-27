import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Specimen 04 // Split Cascade</span>
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-8xl font-extralight tracking-tighter text-white">KINETIC</h1>
            <h1 className="text-6xl sm:text-8xl font-normal tracking-tighter text-neutral-300">KINETIC</h1>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-neutral-600">KINETIC</h1>
          </div>
        </div>
        <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-8 space-y-6">
          <div className="flex items-center space-x-3 text-white">
            <Layers className="w-5 h-5 text-neutral-400" />
            <span className="font-mono text-sm tracking-wider uppercase">Foundry Specification</span>
          </div>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Gravitas Kinetic is built with variable optical masters. Each stem is mathematically calibrated to maintain absolute rhythm across 12 discrete weights.
          </p>
          <div className="space-y-2 font-mono text-xs text-neutral-400 border-t border-neutral-900 pt-4">
            <div className="flex justify-between"><span>DESIGNER:</span> <span className="text-white">L. V. HAGEN</span></div>
            <div className="flex justify-between"><span>RELEASE:</span> <span className="text-white">OCTOBER 2026</span></div>
            <div className="flex justify-between"><span>LICENSE:</span> <span className="text-white">DESKTOP & WEB</span></div>
          </div>
          <button className="w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            License Family ($180)
          </button>
        </div>
      </div>
    </section>
  );
}
