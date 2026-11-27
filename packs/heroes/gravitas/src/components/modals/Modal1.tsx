import React from 'react';
import { X, Check } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-xl mx-auto border border-neutral-700 bg-neutral-950 p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute -right-10 -bottom-10 text-[16rem] font-black text-neutral-900 select-none pointer-events-none">
          Ω
        </div>
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Modal 01 // Weight Detail Specimen</span>
            <button className="text-neutral-400 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-extralight tracking-tight text-white">Gravitas Hairline [200]</h3>
            <p className="text-xs font-mono text-neutral-400">UNICODE BLOCK: U+03A0 — U+03AF</p>
          </div>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Engineered specifically for extreme display sizes above 48pt. Features ultra-fine stem weights with optical overshoot compensation.
          </p>
          <div className="pt-4 border-t border-neutral-900 flex justify-between items-center">
            <span className="text-xs font-mono text-neutral-400">STATUS: READY FOR DEPLOY</span>
            <button className="bg-white text-black px-4 py-2 text-xs font-mono uppercase hover:bg-neutral-200">
              Select Cut ($49)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
