import React from 'react';

export function Stat4() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">STATS // 04</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            TELEMETRY-BAR STAT <span className="text-[#ff3d00]">STRIP</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">MACH NUMBER</div>
            <div className="text-2xl font-black text-[#ff3d00]">M 3.84</div>
          </div>
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">ALTITUDE</div>
            <div className="text-2xl font-black text-white">FL580</div>
          </div>
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">CLIMB RATE</div>
            <div className="text-2xl font-black text-white">+12,400 FPM</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-400">G-LOAD</div>
            <div className="text-2xl font-black text-[#ff3d00]">+5.6 G</div>
          </div>
        </div>
      </div>
    </section>
  );
}
