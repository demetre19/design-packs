import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero4() {
  return (
    <section className="relative bg-black text-white py-24 border-b-4 border-[#f25c05] font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=1600&q=80" 
          alt="Heavy Industrial Site" 
          className="w-full h-full object-cover grayscale contrast-150 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 border border-neutral-700 px-3 py-1 text-[10px] font-mono uppercase mb-6 bg-neutral-900 text-neutral-300">
          <span className="w-2 h-2 bg-[#f25c05] inline-block"></span>
          <span>FULL-BLEED PLATE // HERO 04</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl mb-8">
          INDUSTRIAL <span className="text-[#f25c05]">DOMINANCE</span> THROUGH RAW MASS.
        </h1>

        <p className="font-mono text-xs md:text-sm text-neutral-400 max-w-2xl mb-8 uppercase tracking-wide">
          Engineered for extreme environments. Titan Forge automated infrastructure delivers unyielding structural integrity across global extraction grids.
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-xs">
          <button className="bg-[#f25c05] text-black px-6 py-3 font-black uppercase hover:bg-white transition-colors flex items-center space-x-2">
            <span>Deploy Systems</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="border-2 border-white text-white px-6 py-3 font-black uppercase hover:bg-white hover:text-black transition-colors">
            Telemetry Feed
          </button>
        </div>
      </div>
    </section>
  );
}
