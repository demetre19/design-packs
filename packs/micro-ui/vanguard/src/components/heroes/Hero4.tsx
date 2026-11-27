import React from 'react';
import { Gauge, Activity, Zap } from 'lucide-react';

export function Hero4() {
  return (
    <section className="relative w-full bg-[#16181d] text-white font-mono overflow-hidden py-16 px-4 lg:px-8 border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">PROGRAM X-99 // TELEMETRY BAY</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans">
            SUSTAINED HYPERSONIC <span className="text-[#ff3d00]">PROPULSION</span>
          </h1>
          <p className="text-zinc-300 text-sm">
            Live instrument telemetry and flight-envelope diagnostics for atmospheric test vehicles.
          </p>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">MACH NUMBER</div>
            <div className="text-2xl font-black text-[#ff3d00]">M 4.12</div>
            <div className="text-[10px] text-zinc-500">PEAK RECORD: M 4.8</div>
          </div>
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">ALTITUDE (FL)</div>
            <div className="text-2xl font-black text-white">FL580</div>
            <div className="text-[10px] text-zinc-500">STRATOSPHERE</div>
          </div>
          <div className="border-r border-[#3a3e4c] pr-4">
            <div className="text-[10px] text-zinc-400">G-LOAD FACTOR</div>
            <div className="text-2xl font-black text-white">+6.2 G</div>
            <div className="text-[10px] text-zinc-500">MAX TOLERANCE: 9.0G</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-400">TRANSPONDER</div>
            <div className="text-2xl font-black text-[#ff3d00] flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#ff3d00] rounded-full animate-ping" />
              <span>ACTIVE</span>
            </div>
            <div className="text-[10px] text-zinc-500">SECURE FREQ 409.2</div>
          </div>
        </div>
      </div>
    </section>
  );
}
