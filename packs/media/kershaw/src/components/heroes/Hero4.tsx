import React from 'react';
import { ArrowRight, Activity, Zap, Gauge, Thermometer, Shield } from 'lucide-react';

export function Hero4() {
  return (
    <section className="bg-[#0c0d0f] text-white pt-24 pb-12 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="inline-block bg-[#14161a] border border-[#262c36] px-3 py-1 text-xs text-[#ffd500] mb-4">
          KERSHAW DYNAMICS // TEST RUN 07
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6 max-w-4xl">
          PRECISION DYNAMOMETER <span className="text-[#ffd500]">VALIDATION SUITE.</span>
        </h1>
        <p className="text-zinc-400 font-sans max-w-2xl text-base mb-8">
          Continuous multi-axis telemetry recording for high-output internal combustion and hybrid powertrain assemblies.
        </p>
        <button className="bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center gap-2">
          <span>RUN FULL DIAGNOSTIC</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#14161a] border border-[#262c36] p-6">
        <div className="flex items-center gap-4 border-r border-[#22262f] pr-6 last:border-0">
          <Gauge className="w-8 h-8 text-[#ffd500]" />
          <div>
            <span className="text-[10px] text-zinc-500 block">ROTATIONAL VELOCITY</span>
            <span className="text-2xl font-black text-white">8,400 RPM</span>
          </div>
        </div>
        <div className="flex items-center gap-4 border-r border-[#22262f] pr-6 last:border-0">
          <Zap className="w-8 h-8 text-[#ffd500]" />
          <div>
            <span className="text-[10px] text-zinc-500 block">BRAKE TORQUE</span>
            <span className="text-2xl font-black text-[#ffd500]">612 NM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Thermometer className="w-8 h-8 text-[#ffd500]" />
          <div>
            <span className="text-[10px] text-zinc-500 block">CORE TEMPERATURE</span>
            <span className="text-2xl font-black text-white">94.2°C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
