import React from 'react';
import { ArrowRight, Compass, Shield } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/20 font-mono relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block border border-cyan-300 px-3 py-1 text-[10px] text-cyan-300">
            LAYER 01 — STRUCTURAL FRAMEWORK
          </div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
            Advanced Material Matrix & Assembly
          </h1>
          <p className="text-xs md:text-sm text-cyan-100 leading-relaxed">
            Integrating high-tensile structural steel, architectural concrete, and dynamic curtain wall systems with absolute dimensional precision.
          </p>
          <div className="flex gap-4">
            <button className="border border-cyan-300 bg-cyan-300 text-[#1b3a5c] px-5 py-2.5 font-bold text-xs uppercase hover:bg-white transition-colors cursor-pointer">
              VIEW SPECIFICATION
            </button>
            <button className="border border-white/40 px-5 py-2.5 text-xs uppercase hover:bg-white/10 transition-colors cursor-pointer">
              LOAD DWG DATA
            </button>
          </div>
        </div>

        {/* Hatched panel composition with leader line annotations */}
        <div className="lg:col-span-6 border-2 border-white/40 p-6 bg-[#142d48] relative">
          <div className="absolute top-2 left-2 text-[9px] text-cyan-300">DETAIL 04 // HATCH COMPOSITION</div>
          <div className="aspect-[16/10] border border-white/30 blueprint-hatch p-6 flex flex-col justify-between relative mt-6">
            {/* Leader line annotation 1 */}
            <div className="absolute top-8 left-6 flex items-center gap-2 text-[10px] text-cyan-200">
              <div className="w-8 h-px bg-cyan-300 relative">
                <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-cyan-300" />
              </div>
              <span>[01] MOMENT CONNECTION WELD</span>
            </div>

            {/* Center mark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-12 h-12 border border-dashed border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            {/* Leader line annotation 2 */}
            <div className="absolute bottom-8 right-6 flex items-center gap-2 text-[10px] text-cyan-200 text-right">
              <span>[02] SEISMIC ISOLATION PAD</span>
              <div className="w-8 h-px bg-cyan-300 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
