import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// SCALE-STAGGERED EDITORIAL WALL</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          JOURNAL <span className="text-[#ff2e00]">COLLISION</span>
        </h2>

        {/* Editorial wall with scale-staggered entries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 border-2 border-black p-8 bg-black text-white space-y-4">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold">// ENTRY 01 // LEAD FEATURE</div>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              THE ARCHITECTURE OF ELECTRIC SPEED
            </h3>
            <p className="font-mono text-xs text-neutral-400 leading-relaxed">
              An exhaustive look into how high-voltage solid state accumulators changed the fundamental geometry of racing frames.
            </p>
            <div className="pt-4 border-t border-neutral-800 flex justify-between items-center font-mono text-xs">
              <span>AUTHOR: K. SATO</span>
              <span className="text-[#ff2e00] font-bold">READ FULL →</span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6 md:translate-y-12">
            <div className="border-2 border-black p-6 bg-white space-y-3">
              <div className="font-mono text-[10px] text-neutral-500 font-bold">// ENTRY 02</div>
              <h4 className="text-xl font-black uppercase">TELEMETRY RIGOR</h4>
              <p className="font-mono text-xs text-neutral-600">5kHz sampling rates across all 64 channels during track sessions.</p>
              <div className="text-[#ff2e00] font-mono text-xs font-bold">EXPLORE</div>
            </div>

            <div className="border-2 border-black p-6 bg-white space-y-3">
              <div className="font-mono text-[10px] text-neutral-500 font-bold">// ENTRY 03</div>
              <h4 className="text-xl font-black uppercase">SUZUKA DOCK REPORT</h4>
              <p className="font-mono text-xs text-neutral-600">Breaking lap records in sub-zero ambient morning conditions.</p>
              <div className="text-[#ff2e00] font-mono text-xs font-bold">EXPLORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
