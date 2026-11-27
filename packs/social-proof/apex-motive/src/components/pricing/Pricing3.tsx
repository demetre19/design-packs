import React from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// DIRECT FACTORY PRICING</span>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">LIMITED PRODUCTION BATCH</h2>

        <div className="bg-[#16181d] border border-[#272a33] p-12 clip-corner-lg mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#ff5a1f] text-black font-mono-spec text-[10px] font-bold px-4 py-1 clip-corner">
            BATCH 04 // 50 UNITS ONLY
          </div>

          <span className="font-mono-spec text-xs text-neutral-400 block mb-2">COMPLETE VEHICLE PARITY</span>
          <div className="font-display font-extrabold text-6xl md:text-8xl text-white my-4">
            $48,500 <span className="text-sm text-[#ff5a1f]">USD</span>
          </div>

          <p className="font-mono-spec text-xs text-neutral-400 max-w-lg mx-auto mb-8">
            Includes white-glove delivery, track calibration session with factory test pilot, and lifetime over-the-air firmware upgrades.
          </p>

          <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-10 py-4 clip-corner hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2">
            <span>RESERVE WITH $1,000 DEPOSIT</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
