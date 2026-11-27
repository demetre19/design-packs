import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#111111] bg-white">
        {/* Top Data-Compartment Band */}
        <div className="border-b border-[#111111] grid grid-cols-2 sm:grid-cols-4 text-[9px] uppercase tracking-widest divide-x divide-[#111111] bg-[#f0f0ee]">
          <div className="p-3 flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#111]" />
            <span>SUB: HOMOLOGATION-02</span>
          </div>
          <div className="p-3">DATE: 2026.11.25</div>
          <div className="p-3">REF: VGH-99-B</div>
          <div className="p-3 font-bold bg-[#111] text-[#e8e8e6]">CLASSIFIED ARCHIVE</div>
        </div>

        {/* Giant Headline & Subtitle */}
        <div className="p-8 md:p-16 border-b border-[#111111] text-center bg-[#e8e8e6]">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#666] block mb-4">[TECHNICAL SPECIFICATION DATASHEET]</span>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            AERODYNAMICS
          </h1>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase mt-6 max-w-2xl mx-auto text-[#333]">
            Computational fluid dynamics verified across 4,200 hours of wind tunnel testing in Stuttgart facility.
          </p>
        </div>

        {/* Bottom Actions and Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111111]">
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] text-[#666] block mb-1">01 / DRAG COEFFICIENT</span>
              <span className="text-3xl font-black">Cd 0.284</span>
            </div>
            <p className="text-[10px] text-[#555] mt-4">Optimized boundary layer laminar flow across rear carbon diffuser.</p>
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] text-[#666] block mb-1">02 / DOWNFORCE RATIO</span>
              <span className="text-3xl font-black">2.41 : 1</span>
            </div>
            <p className="text-[10px] text-[#555] mt-4">Balanced front-to-rear aerodynamic loading at high velocities.</p>
          </div>
          <div className="p-6 bg-[#111] text-[#e8e8e6] flex flex-col justify-between">
            <div>
              <span className="text-[9px] text-[#aaa] block mb-1">03 / ACTION</span>
              <span className="text-xl font-bold">ACCESS TELEMETRY</span>
            </div>
            <button 
              onClick={() => alert('Accessing encrypted telemetry stream...')}
              className="mt-6 w-full py-3 bg-[#e8e8e6] text-[#111111] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-white transition-colors cursor-pointer"
            >
              <span>CONNECT STREAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
