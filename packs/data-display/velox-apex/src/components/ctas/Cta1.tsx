import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-white text-black py-20 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Single gigantic cropped command word */}
        <div className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          INITIALIZE <br />
          <span className="text-[#ff2e00]">DISPATCH</span>
        </div>

        {/* Tiny supporting line */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-black pt-6">
          <p className="font-mono text-xs text-neutral-600 uppercase">
            // ALLOCATIONS FOR BATCH 2026.01 ARE CURRENTLY OPEN AT TOKYO TEST DOCK.
          </p>
          <button className="bg-[#ff2e00] text-black font-black px-8 py-5 uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
            <span>SECURE YOUR ALLOCATION NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
