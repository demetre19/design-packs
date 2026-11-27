import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-extrabold text-[15vw] text-white/[0.03] uppercase tracking-tighter">
          APEX-LOG
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-block bg-[#ff5a1f] text-black font-mono-spec text-[10px] font-bold px-3 py-1 clip-corner mb-4">
          TECHNICAL MONOGRAPH
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-tight">
          THE FUTURE OF HIGH-PERFORMANCE ELECTRIC PROPULSION
        </h1>
        <p className="font-mono-spec text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          An in-depth analysis of high-voltage inverter switching speeds, thermal fluid dynamics, and carbon monocoque structural integrity in championship racing environments.
        </p>

        <div className="mt-8 flex justify-center gap-6 font-mono-spec text-xs text-neutral-400">
          <div><span className="text-[#ff5a1f]">AUTHOR:</span> CHIEF ARCHITECT</div>
          <div><span className="text-[#ff5a1f]">DATE:</span> 2026.11.25</div>
          <div><span className="text-[#ff5a1f]">READ TIME:</span> 12 MIN</div>
        </div>
      </div>
    </section>
  );
}
