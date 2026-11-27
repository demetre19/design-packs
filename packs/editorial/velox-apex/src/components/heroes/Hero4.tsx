import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero4() {
  return (
    <section className="relative w-full bg-white text-black py-24 border-b-2 border-black overflow-hidden">
      {/* Oversized numeral as background object */}
      <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[18rem] md:text-[28rem] font-black text-neutral-100 select-none pointer-events-none z-0">
        01
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-3 uppercase">
            // FLAGSHIP ARCHITECTURE
          </div>
          <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            THE APEX PREDATOR
          </h1>
          <p className="font-mono text-sm text-neutral-700 leading-relaxed mb-8">
            Forged in the wind tunnels of Suzuka. Zero compromise on battery density or lean angle limits.
          </p>
        </div>

        {/* Small content block anchored bottom-left */}
        <div className="mt-16 inline-flex flex-col sm:flex-row items-start sm:items-center gap-6 border-2 border-black bg-black text-white p-6">
          <div>
            <div className="font-mono text-[10px] text-[#ff2e00] uppercase">// BATCH 2026.01</div>
            <div className="font-bold text-xl uppercase">LIMITED ALLOCATION // 50 UNITS</div>
          </div>
          <button className="bg-[#ff2e00] text-black font-black px-6 py-3 uppercase text-xs tracking-wider hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
            <span>SECURE ALLOCATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
