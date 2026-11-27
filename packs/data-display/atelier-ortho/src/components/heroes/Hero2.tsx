import React from 'react';
import { FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono relative paper-grid-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#1b3a5c]/70">
            <span className="border border-[#1b3a5c] px-2 py-0.5 text-[10px] font-bold bg-white">PAPER SHEET 02</span>
            <span>INVERTED BLUEPRINT MODE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
            Architectural Engineering Mastered in Millimeters
          </h1>
          <p className="text-xs md:text-sm text-[#1b3a5c]/80 max-w-2xl leading-relaxed">
            Delivering structural integrity and exquisite spatial hierarchy across civic, commercial, and high-performance residential portfolios. Every connection detail specified to absolute perfection.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#1b3a5c] text-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#254e7a] transition-colors flex items-center gap-2 cursor-pointer border border-[#1b3a5c]">
              <span>EXPLORE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-300" />
            </button>
            <button className="border border-[#1b3a5c] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#1b3a5c]/10 transition-colors flex items-center gap-2 cursor-pointer">
              <span>VIEW DWG REGISTER</span>
            </button>
          </div>
        </div>

        {/* Specification Title Block */}
        <div className="lg:col-span-4 border-2 border-[#1b3a5c] bg-white p-5 shadow-lg">
          <div className="border-b-2 border-[#1b3a5c] pb-3 mb-4 flex justify-between items-center">
            <span className="font-bold tracking-widest text-sm">TITLE BLOCK</span>
            <span className="text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">APPROVED</span>
          </div>
          <div className="space-y-3 text-[11px]">
            <div className="flex justify-between border-b border-[#1b3a5c]/20 pb-2">
              <span className="text-[#1b3a5c]/60">PROJECT:</span>
              <span className="font-bold">METROPOLITAN TOWER</span>
            </div>
            <div className="flex justify-between border-b border-[#1b3a5c]/20 pb-2">
              <span className="text-[#1b3a5c]/60">DWG NUMBER:</span>
              <span className="font-bold">AO-2026-X04</span>
            </div>
            <div className="flex justify-between border-b border-[#1b3a5c]/20 pb-2">
              <span className="text-[#1b3a5c]/60">DATE ISSUED:</span>
              <span className="font-bold">2026.11.25</span>
            </div>
            <div className="flex justify-between border-b border-[#1b3a5c]/20 pb-2">
              <span className="text-[#1b3a5c]/60">SCALE FACTOR:</span>
              <span className="font-bold">1:100</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#1b3a5c]/60">CHECKED BY:</span>
              <span className="font-bold">DR. K. VANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
