import React from 'react';
import { Ruler, ArrowRight, Layers } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-20 px-6 border-b border-white/20 font-mono relative overflow-hidden">
      {/* Measurement lines grid overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 opacity-40">
        <div className="w-full border-b border-dashed border-cyan-400/40 flex justify-between text-[9px] text-cyan-300">
          <span>+00.00 FINISHED FLOOR</span>
          <span>AXIS A</span>
          <span>AXIS B</span>
          <span>AXIS C</span>
          <span>+12000.00 ROOF</span>
        </div>
        <div className="w-full border-b border-dashed border-cyan-400/40 flex justify-between text-[9px] text-cyan-300">
          <span>SEC A-A ELEVATION DATUM</span>
          <span>SCALE 1:200</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 border border-cyan-300 px-3 py-1 text-xs text-cyan-300 bg-[#142d48]">
          <Ruler className="w-3.5 h-3.5" />
          <span>SECTION-EVALUATION MASTER SYSTEM // 03</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight max-w-4xl mx-auto leading-tight">
          Structural Engineering & Tectonic Form
        </h1>
        <p className="text-xs md:text-sm text-cyan-100 max-w-2xl mx-auto leading-relaxed">
          From foundation caissons to cantilevered steel trusses, Atelier Orthogonal provides complete engineering documentation and meticulous design oversight.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">
            INITIATE CONSULTATION
          </button>
          <button className="border border-white/40 px-6 py-3 text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer">
            VIEW ALL 44 MODULES
          </button>
        </div>
      </div>
    </section>
  );
}
