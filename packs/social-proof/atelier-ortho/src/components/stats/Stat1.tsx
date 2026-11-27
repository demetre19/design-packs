import React from 'react';
import { Ruler } from 'lucide-react';

export function Stat1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">STATS SECTION // 01</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Measurement-Style Statistics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-white/40 p-6 bg-[#142d48] relative">
            <div className="absolute top-2 right-2 text-[9px] text-cyan-300">|&lt;-- DIMENSION --&gt;|</div>
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 my-4">4,500+</div>
            <div className="text-xs uppercase font-bold tracking-wide">Drawings Registered</div>
            <div className="text-[10px] text-cyan-100 mt-2">Certified across global portfolios</div>
          </div>
          <div className="border-2 border-white/40 p-6 bg-[#142d48] relative">
            <div className="absolute top-2 right-2 text-[9px] text-cyan-300">|&lt;-- TOLERANCE --&gt;|</div>
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 my-4">±0.5mm</div>
            <div className="text-xs uppercase font-bold tracking-wide">Structural Tolerance</div>
            <div className="text-[10px] text-cyan-100 mt-2">Uncompromising tectonic precision</div>
          </div>
          <div className="border-2 border-white/40 p-6 bg-[#142d48] relative">
            <div className="absolute top-2 right-2 text-[9px] text-cyan-300">|&lt;-- LOAD RATING --&gt;|</div>
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 my-4">100%</div>
            <div className="text-xs uppercase font-bold tracking-wide">Permit Approval Rate</div>
            <div className="text-[10px] text-cyan-100 mt-2">Full zoning & seismic compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
