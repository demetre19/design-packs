import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function Hero5() {
  return (
    <section className="w-full bg-[#fffdf5] pt-16 pb-8 border-b-3 border-[#111111] relative">
      <div className="max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-[#111111] text-[#ffd92e] font-mono text-xs font-bold px-3 py-1 mb-6 shadow-hard-sm">
            [SYS.05 // SPLIT HERO]
          </div>
          <h1 className="font-grotesk font-black text-5xl sm:text-7xl uppercase tracking-tighter leading-none mb-6">
            ENGINEERED JOY IN EVERY PIXEL.
          </h1>
          <p className="font-mono text-base text-[#111111]/80 mb-8 leading-relaxed">
            We bridge the gap between uncompromising print aesthetics and lightning-fast digital interactions. Zero templates. Pure bespoke creation.
          </p>
          <div className="flex items-center gap-4">
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm px-6 py-3.5 flex items-center gap-2">
              <span>EXPLORE STUDIO</span>
              <ArrowRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-6">
          <div className="bg-white border-2 border-[#111111] p-6 shadow-hard-sm">
            <div className="font-mono text-xs font-bold text-[#ff6b5e] mb-2">// LIVE SYSTEM METRICS</div>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between pb-2 border-b border-[#111111]/20">
                <span>ACTIVE CLIENTS:</span>
                <span className="font-black">12 BRANDS</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#111111]/20">
                <span>PRINT RUNS COMPLETED:</span>
                <span className="font-black">1,420 EDITIONS</span>
              </div>
              <div className="flex justify-between">
                <span>BUILD PERFORMANCE:</span>
                <span className="font-black bg-[#ffd92e] px-1">100 / 100</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag divider bottom */}
      <div className="w-full h-4 bg-[#111111] mt-8 flex">
        <div className="w-full h-full bg-halftone opacity-50"></div>
      </div>
    </section>
  );
}
