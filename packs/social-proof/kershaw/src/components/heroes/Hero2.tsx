import React from 'react';
import { ArrowRight, Activity, Cpu } from 'lucide-react';

export function Hero2() {
  return (
    <section className="bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs text-[#ffd500] mb-4">
            <Cpu className="w-4 h-4" />
            <span>CELL 04 // FORCED INDUCTION LAB</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6 leading-none">
            ENGINEERING <span className="text-[#ffd500]">RAW KINETIC</span> ENERGY.
          </h1>
          <p className="text-zinc-400 font-sans text-sm md:text-base mb-8 max-w-xl">
            Extreme tolerance engine architecture built for endurance motorsport. Real-time multi-channel telemetry streaming direct from dyno rotors.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3.5 uppercase tracking-wider clip-corner hover:bg-[#ffdf33] transition-colors flex items-center gap-2">
              <span>EXPLORE SPECIFICATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-zinc-500">REF: KD-998-V8</span>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#14161a] border border-[#262c36] p-6 relative">
          <div className="absolute top-0 right-0 bg-[#ffd500] text-black text-[10px] font-bold px-2 py-0.5">
            LIVE FEED
          </div>
          <h3 className="text-xs text-zinc-400 mb-4">// CHANNEL DIAGNOSTICS</h3>
          <div className="space-y-4 text-xs font-mono">
            <div className="flex justify-between border-b border-[#22262f] pb-3">
              <span className="text-zinc-400">TURBO SPOOL</span>
              <span className="text-white font-bold">142,000 RPM</span>
            </div>
            <div className="flex justify-between border-b border-[#22262f] pb-3">
              <span className="text-zinc-400">MANIFOLD PRESSURE</span>
              <span className="text-[#ffd500] font-bold">2.84 BAR</span>
            </div>
            <div className="flex justify-between border-b border-[#22262f] pb-3">
              <span className="text-zinc-400">EXHAUST GAS TEMP</span>
              <span className="text-white font-bold">890.4°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">VIBRATION SENSOR</span>
              <span className="text-[#ffd500] font-bold">0.04 G (NOMINAL)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
