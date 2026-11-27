import React from 'react';
import { Compass, FileText, ArrowRight } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block border border-[#1b3a5c] px-3 py-1 text-[10px] bg-white">
            MASTER ARCHITECTURAL INDEX // 05
          </div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
            Precision Design Standards & Built Reality
          </h1>
          <p className="text-xs md:text-sm text-[#1b3a5c]/80 leading-relaxed">
            Every structure designed by Atelier Orthogonal stands as a testament to rigorous engineering calculation, material purity, and timeless spatial proportion.
          </p>
          <button className="bg-[#1b3a5c] text-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#254e7a] transition-colors flex items-center gap-2 cursor-pointer border border-[#1b3a5c]">
            <span>REQUEST SYSTEM DOSSIER</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </button>
        </div>

        {/* Tall framed plate right with grid references */}
        <div className="lg:col-span-6 border-2 border-[#1b3a5c] p-6 bg-white shadow-xl relative">
          <div className="absolute -top-3 left-6 bg-[#1b3a5c] text-white px-3 py-0.5 text-[10px]">
            DWG REF: PLATE-05-SEC
          </div>
          <div className="aspect-[3/4] border border-[#1b3a5c]/40 p-4 flex flex-col justify-between paper-hatch relative">
            <div className="flex justify-between text-[9px] text-[#1b3a5c]/70 border-b border-[#1b3a5c]/30 pb-2">
              <span>GRID A1</span>
              <span>SCALE 1:100</span>
              <span>GRID Z4</span>
            </div>
            <div className="text-center space-y-2">
              <Compass className="w-12 h-12 text-[#1b3a5c] mx-auto animate-pulse" />
              <div className="text-xs font-bold">ELEVATION SECTION A-A</div>
              <div className="text-[10px] text-[#1b3a5c]/60">ALL DIMENSIONS IN MILLIMETERS UNLESS NOTED</div>
            </div>
            <div className="flex justify-between text-[9px] text-[#1b3a5c]/70 border-t border-[#1b3a5c]/30 pt-2">
              <span>STATUS: APPROVED</span>
              <span>REV: 02</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
