import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-black text-white py-24 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-4 uppercase">// INVERSION BAND CTA</div>
        
        {/* Huge white type */}
        <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          OWN THE <span className="text-[#ff2e00]">APEX</span>
        </h2>

        <p className="font-mono text-xs text-neutral-400 max-w-xl mx-auto mb-10">
          Experience the absolute limit of electric acceleration. Direct factory allocations open for qualified track pilots.
        </p>

        <button className="bg-[#ff2e00] text-black font-black px-10 py-5 uppercase text-sm tracking-widest hover:bg-white transition-colors inline-flex items-center gap-3 cursor-pointer">
          <span>DISPATCH FACTORY BUILD</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
