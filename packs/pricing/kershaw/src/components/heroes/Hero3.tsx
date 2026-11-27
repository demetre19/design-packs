import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export function Hero3() {
  return (
    <section className="relative bg-[#0c0d0f] text-white py-28 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      {/* Corner sensor brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ffd500]" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#ffd500]" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ffd500]" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ffd500]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-4">
          [ CELL 04 // CONCRETE TEST STAGE ]
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 leading-none">
          THE ULTIMATE <span className="text-[#ffd500]">DYNO CELL</span> ENVIRONMENT.
        </h1>
        <p className="text-zinc-400 font-sans text-sm md:text-base max-w-2xl mx-auto mb-10">
          Engineered for punishing endurance testing. Heavy reinforced concrete stage mounts coupled with high-frequency laser interferometers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors">
            ACCESS LIVE TELEMETRY
          </button>
          <button className="bg-[#14161a] border border-[#262c36] text-white font-bold text-xs px-8 py-4 uppercase tracking-widest hover:border-[#ffd500] transition-colors">
            VIEW CELL SPECS
          </button>
        </div>
      </div>
    </section>
  );
}
