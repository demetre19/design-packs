import React from 'react';
import { Crosshair, ArrowRight, Zap, Shield } from 'lucide-react';

export function Hero3() {
  return (
    <section className="relative min-h-[85vh] bg-[#101114] bg-carbon flex flex-col justify-between border-b border-[#272a33] p-6 md:p-12">
      {/* Corner Data Readouts */}
      <div className="absolute top-6 left-6 font-mono-spec text-[10px] text-neutral-400 space-y-1">
        <div className="text-[#ff5a1f] flex items-center gap-1"><Crosshair size={12} /> SEC // 03 STAGE</div>
        <div>LAT: 35.6762° N</div>
        <div>LON: 139.6503° E</div>
      </div>

      <div className="absolute top-6 right-6 font-mono-spec text-[10px] text-right text-neutral-400 space-y-1">
        <div className="text-[#ff5a1f]">SYSTEM STATUS: NOMINAL</div>
        <div>TEMP: 42.1°C STATOR</div>
        <div>VOLT: 824V DC</div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono-spec text-[10px] text-neutral-500">
        APEX MOTIVE // FULL-BLEED ARCHITECTURE
      </div>

      <div className="absolute bottom-6 right-6 font-mono-spec text-[10px] text-[#ff5a1f]">
        [03 / 05] SERIES
      </div>

      {/* Center Hero Content */}
      <div className="max-w-4xl mx-auto my-auto text-center relative z-10 py-12">
        <div className="inline-block bg-[#ff5a1f] text-black font-mono-spec text-[10px] font-extrabold px-4 py-1 clip-corner mb-4">
          TRACK PROTOTYPE X
        </div>
        <h1 className="font-display font-extrabold text-5xl md:text-8xl text-white tracking-tighter">
          VORTEX <span className="text-[#ff5a1f]">GT-9</span>
        </h1>
        <p className="font-mono-spec text-xs md:text-sm text-neutral-300 max-w-xl mx-auto mt-6">
          Designed for absolute lap time supremacy. Carbon-fiber monocoque chassis tuned on the Suzuka test loop.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-4 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
            <span>REQUEST INVITATION</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
