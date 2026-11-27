import React from 'react';
import { ChevronRight, Gauge, Radio, Shield } from 'lucide-react';

export function Hero1() {
  return (
    <section className="relative w-full bg-[#16181d] text-white font-mono overflow-hidden py-16 px-4 lg:px-8 border-b border-[#2a2d35]">
      {/* Background Watermark Designation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-white/[0.04] tracking-tighter uppercase font-sans">
          X-99
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HUD Bracket Corners */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff3d00]" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#ff3d00]" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#ff3d00]" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff3d00]" />

        {/* Top telemetry tag */}
        <div className="flex items-center justify-between mb-8 border-b border-[#2a2d35] pb-4">
          <div className="flex items-center space-x-3 text-xs">
            <span className="bg-[#ff3d00] text-black font-extrabold px-2 py-0.5 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
              SORTIE S-01
            </span>
            <span className="text-zinc-400 tracking-widest">FLIGHT ENVELOPE: MACH 4.5 UNLOCKED</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#ff3d00]">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>TELEMETRY LIVE // STREAM OK</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans leading-none">
              HYPERSONIC <br />
              <span className="text-[#ff3d00]">FLIGHT DYNAMICS</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Pushing the boundaries of atmospheric thermal limits. Vanguard X-99 Spectre integrates scramjet propulsion with titanium-matrix skin plating for sustained Mach 3+ cruise operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-extrabold text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2">
                <span>INITIATE FLIGHT TEST</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-[#20232a] hover:bg-[#282c35] text-zinc-200 border border-[#3a3e4c] font-bold text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
                DOWNLOAD SPECS (PDF)
              </button>
            </div>
          </div>

          {/* Aircraft Stage Graphic Panel */}
          <div className="lg:col-span-5 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative">
            <div className="absolute top-3 right-3 flex items-center space-x-1.5 text-[10px] text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#ff3d00]" />
              <span>SYS.OK</span>
            </div>
            <div className="h-48 bg-gradient-to-b from-[#16181d] to-[#252932] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden mb-4">
              <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="text-center">
                <Gauge className="w-12 h-12 text-[#ff3d00] mx-auto mb-2 animate-pulse" />
                <span className="text-xs tracking-widest font-bold text-zinc-300">X-99 SPECTRE AIRFRAME</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-[#16181d] p-2 border border-[#2a2d35]">
                <div className="text-[10px] text-zinc-400">MACH</div>
                <div className="font-extrabold text-[#ff3d00]">M 3.84</div>
              </div>
              <div className="bg-[#16181d] p-2 border border-[#2a2d35]">
                <div className="text-[10px] text-zinc-400">ALTITUDE</div>
                <div className="font-extrabold text-white">FL620</div>
              </div>
              <div className="bg-[#16181d] p-2 border border-[#2a2d35]">
                <div className="text-[10px] text-zinc-400">G-LOAD</div>
                <div className="font-extrabold text-white">+5.6 G</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Instrument Readout Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#2a2d35] pt-6 text-xs">
          <div className="flex items-center space-x-3">
            <span className="text-[#ff3d00] font-black">01 //</span>
            <div>
              <div className="text-zinc-400 text-[10px]">RAMJET STATUS</div>
              <div className="font-bold">OPTIMAL IGNITION</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#ff3d00] font-black">02 //</span>
            <div>
              <div className="text-zinc-400 text-[10px]">THERMAL SHIELD</div>
              <div className="font-bold">1,420°C PEAK</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#ff3d00] font-black">03 //</span>
            <div>
              <div className="text-zinc-400 text-[10px]">AVIONICS BUS</div>
              <div className="font-bold">REDUNDANT TRIPLE</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#ff3d00] font-black">04 //</span>
            <div>
              <div className="text-zinc-400 text-[10px]">SORTIE INDEX</div>
              <div className="font-bold text-[#ff3d00]">S-01 / S-12</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
