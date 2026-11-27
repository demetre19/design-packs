import React from 'react';
import { Compass, ArrowRight, Download, Eye } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/20 font-mono relative overflow-hidden blueprint-grid-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Drawing Reference Label */}
        <div className="flex items-center justify-between text-xs text-cyan-300 border-b border-white/20 pb-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="border border-cyan-300 px-1.5 py-0.5 text-[10px]">DWG 01</span>
            <span>SHEET TITLE: PRINCIPAL STRUCTURAL ELEVATION</span>
          </div>
          <div className="hidden sm:block">GRID REF: A1 — C4</div>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block border border-white/30 px-2.5 py-1 text-[10px] text-cyan-300 bg-[#142d48]">
              APPROVED ARCHITECTURAL SYSTEM
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
              Rigorous Geometry & Structural Precision
            </h1>
            <p className="text-xs md:text-sm text-cyan-100 max-w-xl leading-relaxed">
              Atelier Orthogonal engineers spatial masterworks with uncompromising tectonic discipline. Every millimeter verified against seismic load matrices, thermal efficiency standards, and timeless orthogonal proportions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
                <span>VIEW SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/40 px-6 py-3 text-xs uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer">
                <Download className="w-4 h-4 text-cyan-300" />
                <span>DOWNLOAD DWG SET</span>
              </button>
            </div>
          </div>

          {/* Large Framed Plate with Dimension Annotations */}
          <div className="lg:col-span-5 relative">
            <div className="border-2 border-white/40 p-4 bg-[#142d48]/80 relative">
              {/* Dimension lines top */}
              <div className="absolute -top-3 left-4 right-4 flex justify-between text-[9px] text-cyan-300">
                <span>|&lt;-- 2400MM --&gt;|</span>
                <span>|&lt;-- 4800MM --&gt;|</span>
              </div>
              
              <div className="aspect-[4/3] border border-dashed border-white/30 flex flex-col items-center justify-center p-6 relative blueprint-hatch">
                <Compass className="w-16 h-16 text-cyan-300 mb-4 animate-spin-slow" />
                <span className="text-xs uppercase tracking-widest font-bold">AXIS 04-B ELEVATION</span>
                <span className="text-[10px] text-cyan-200 mt-1">SCALE 1:50 | SEC A-A</span>
              </div>

              {/* Corner tick marks */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-300" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyan-300" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-300" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
