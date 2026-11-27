import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export function Cta1() {
  return (
    <section className="py-24 bg-[#101114] border-b border-[#272a33] text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-extrabold text-[20vw] text-white/[0.02] uppercase tracking-tighter">
          APEX
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">// ALLOCATION WINDOW OPEN</span>
        <h2 className="font-display font-extrabold text-4xl md:text-7xl text-white tracking-tight leading-none mb-8">
          EXPERIENCE <span className="text-[#ff5a1f]">ABSOLUTE POWER</span>
        </h2>
        <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-10 py-5 clip-corner hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2 shadow-2xl">
          <span>INITIALIZE BUILD CONFIGURATOR</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
