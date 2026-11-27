import React from 'react';
import { ArrowRight, Zap, DollarSign, Gauge, Shield } from 'lucide-react';

export function Hero4() {
  return (
    <section className="relative min-h-[85vh] bg-[#101114] flex flex-col justify-between border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4 pt-16 relative z-10 w-full text-center">
        <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">
          // SERIES 04 // LIMITED EDITION
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-8xl text-white tracking-tighter">
          TYPHOON<span className="text-[#ff5a1f]">ZERO</span>
        </h1>
        <p className="font-mono-spec text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto mt-4">
          The pinnacle of electric motorcycle engineering. Instantaneous torque vectoring across dual independent rear hub motors.
        </p>
      </div>

      <div className="max-w-4xl mx-auto my-8 px-4 w-full">
        <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg text-center relative">
          <div className="w-16 h-16 bg-[#ff5a1f]/10 border border-[#ff5a1f] clip-corner mx-auto flex items-center justify-center mb-4">
            <Zap size={32} className="text-[#ff5a1f]" />
          </div>
          <span className="font-mono-spec text-xs text-neutral-400 block">SIMULATED DYNO OUTPUT</span>
          <div className="font-display font-extrabold text-4xl md:text-6xl text-white mt-2">
            180 kW <span className="text-[#ff5a1f]">PEAK</span>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-3.5 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
              <span>CONFIGURE NOW</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar with Price/Power/Torque Cells */}
      <div className="bg-[#16181d] border-t border-[#272a33] grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-[#272a33]">
        <div className="p-6">
          <span className="font-mono-spec text-[10px] text-neutral-500 block">STARTING PRICE</span>
          <span className="font-mono-spec text-xl font-bold text-white mt-1 block">$48,500 <span className="text-[#ff5a1f] text-xs">USD</span></span>
        </div>
        <div className="p-6 bg-[#ff5a1f]/5">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] block">POWER-TO-WEIGHT</span>
          <span className="font-mono-spec text-xl font-bold text-white mt-1 block">0.98 <span className="text-[#ff5a1f] text-xs">kW/kg</span></span>
        </div>
        <div className="p-6">
          <span className="font-mono-spec text-[10px] text-neutral-500 block">MAX TORQUE</span>
          <span className="font-mono-spec text-xl font-bold text-white mt-1 block">16.5 <span className="text-[#ff5a1f] text-xs">kgm</span></span>
        </div>
      </div>
    </section>
  );
}
