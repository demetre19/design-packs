import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs text-[#1b3a5c]/70 border border-[#1b3a5c] px-3 py-1 bg-white">CTA SECTION // 02</span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
            Comprehensive Engineering & Architectural Documentation
          </h2>
          <p className="text-xs md:text-sm text-[#1b3a5c]/80 leading-relaxed">
            Partner with licensed structural engineers and visionary architects to bring millimeter-perfect precision to your development portfolio.
          </p>
          <button className="bg-[#1b3a5c] text-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#254e7a] transition-colors flex items-center gap-2 cursor-pointer border border-[#1b3a5c]">
            <span>START CONSULTATION</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </button>
        </div>

        {/* Framed plate right */}
        <div className="lg:col-span-5 border-2 border-[#1b3a5c] p-6 bg-white shadow-xl relative">
          <div className="absolute -top-3 left-6 bg-[#1b3a5c] text-white px-3 py-0.5 text-[10px]">
            DWG REF: CTA-02-PLATE
          </div>
          <div className="aspect-[4/3] border border-[#1b3a5c]/40 p-4 flex flex-col justify-center items-center text-center space-y-3">
            <FileText className="w-12 h-12 text-[#1b3a5c]" />
            <h3 className="text-sm font-bold uppercase">Master Specification Set</h3>
            <p className="text-[10px] text-[#1b3a5c]/70">Scale 1:50 | All dimensions verified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
