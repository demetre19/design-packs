import React from 'react';
import { ArrowRight, Activity, Zap } from 'lucide-react';

export function Hero1() {
  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 overflow-hidden border-b border-[#22262f] font-mono">
      {/* Oversized watermark engine code */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-zinc-900/40 tracking-tighter uppercase">KD-998</span>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#14161a] border border-[#262c36] px-3 py-1 text-xs text-[#ffd500] mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>DYNO TEST CELL 04 // PROTOCOL ACTIVE</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 max-w-4xl mx-auto leading-none">
          UNCOMPROMISING POWER. <span className="text-[#ffd500]">MEASURED TO THE BAR.</span>
        </h1>

        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-sans">
          Kershaw Dynamics designs and validates forced-induction propulsion systems for elite motorsport competition. Precision measurement at 8,400 RPM.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center justify-center gap-3">
            <span>START TEST SEQUENCE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-[#14161a] border border-[#262c36] text-white font-bold text-xs px-8 py-4 uppercase tracking-widest hover:border-[#ffd500] transition-colors">
            DOWNLOAD TELEMETRY SPEC
          </button>
        </div>

        {/* Bottom channel readout strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#14161a] border border-[#262c36] p-4 text-left">
          <div>
            <span className="text-[10px] text-zinc-500 block">PEAK RPM</span>
            <span className="text-lg font-bold font-mono text-white">8,400 RPM</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 block">TORQUE OUTPUT</span>
            <span className="text-lg font-bold font-mono text-[#ffd500]">612 NM</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 block">OIL TEMP</span>
            <span className="text-lg font-bold font-mono text-white">94.2°C</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-zinc-500 block">RUN INDEX</span>
              <span className="text-lg font-bold font-mono text-[#ffd500]">RUN 07/40</span>
            </div>
            <Activity className="w-5 h-5 text-[#ffd500] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
