import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export function Hero5() {
  return (
    <section className="bg-[#f5f4f0] text-black border-b-4 border-black pt-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-6 font-mono text-xs uppercase">
          <span className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#f25c05]" />
            <span>TITAN FORGE // HERO 05</span>
          </span>
          <span className="text-neutral-500">GLOBAL MESH ID: #889-TF</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
          AUTONOMOUS ORE <span className="text-[#f25c05]">EXTRACTION</span> & REFINING.
        </h1>

        <p className="font-mono text-xs md:text-sm text-neutral-700 max-w-3xl uppercase tracking-wide leading-relaxed mb-8">
          Heavy machinery fleets integrated with real-time neural command centers. Delivering maximum throughput with zero operational latency.
        </p>

        <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs font-mono hover:bg-[#f25c05] hover:text-black transition-colors flex items-center space-x-2">
          <span>Request Specifications</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom heavy stat band */}
      <div className="bg-black text-white border-t-4 border-[#f25c05]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 font-mono">
          <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-800">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">01 // ACTIVE PROJECTS</div>
            <div className="text-4xl font-black font-sans tracking-tight text-white">1,420+</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Global Extraction Sites</div>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-800">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">02 // YEARS OF OPERATION</div>
            <div className="text-4xl font-black font-sans tracking-tight text-white">34 YEARS</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Uninterrupted Service</div>
          </div>
          <div className="p-8">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">03 // HEAVY EQUIPMENT</div>
            <div className="text-4xl font-black font-sans tracking-tight text-white">8,500 UNITS</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Fully Automated Fleet</div>
          </div>
        </div>
      </div>
    </section>
  );
}
