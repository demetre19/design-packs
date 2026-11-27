import React from 'react';
import { ChevronRight, Activity, ShieldCheck, Compass } from 'lucide-react';

export function Hero2() {
  return (
    <section className="relative w-full bg-[#16181d] text-white font-mono overflow-hidden py-16 px-4 lg:px-8 border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left-aligned condensed headline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-2 h-2 bg-[#ff3d00]" />
            <span className="text-[#ff3d00] font-extrabold tracking-widest">EXPERIMENTAL FLIGHT PROGRAM // V-99</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans leading-none">
            MACH 4.2 <br />
            <span className="text-zinc-500">SUPERCRITICAL</span> <br />
            <span className="text-[#ff3d00]">TEST BED</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Advanced aerodynamics wind-tunnel verification paired with live flight data telemetry. Engineered for uncompromising structural integrity at extreme boundary layer friction.
          </p>
          <div className="pt-2">
            <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-extrabold text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2">
              <span>ACCESS TELEMETRY BAY</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Docked Envelope Panel */}
        <div className="lg:col-span-5 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
          <div className="flex items-center justify-between border-b border-[#2a2d35] pb-3 mb-4">
            <span className="text-xs font-bold text-[#ff3d00] tracking-widest">FLIGHT ENVELOPE DIAGRAM</span>
            <Compass className="w-4 h-4 text-zinc-400 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
          <div className="space-y-4 text-xs font-mono">
            <div className="bg-[#16181d] p-3 border border-[#2a2d35] flex justify-between items-center">
              <span className="text-zinc-400">DYNAMIC PRESSURE (Q):</span>
              <span className="font-extrabold text-[#ff3d00]">1,250 PSF</span>
            </div>
            <div className="bg-[#16181d] p-3 border border-[#2a2d35] flex justify-between items-center">
              <span className="text-zinc-400">SKIN TEMPERATURE:</span>
              <span className="font-extrabold text-white">1,180 °C</span>
            </div>
            <div className="bg-[#16181d] p-3 border border-[#2a2d35] flex justify-between items-center">
              <span className="text-zinc-400">ANGLE OF ATTACK:</span>
              <span className="font-extrabold text-white">+3.4°</span>
            </div>
            <div className="bg-[#16181d] p-3 border border-[#2a2d35] flex justify-between items-center">
              <span className="text-zinc-400">FLIGHT RECORDER:</span>
              <span className="font-extrabold text-emerald-400">SECURE [100%]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
