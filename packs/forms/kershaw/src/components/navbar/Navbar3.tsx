import React from 'react';
import { Sliders, Zap } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="bg-[#0c0d0f] border-b border-[#22262f] px-6 py-4 flex items-center justify-between text-white font-mono">
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-6 bg-[#ffd500]" />
        <div>
          <h1 className="text-xs tracking-widest font-extrabold text-[#ffd500]">CELL 04 TELEMETRY</h1>
          <p className="text-[10px] text-zinc-400">KERSHAW DYNAMICS // REF: 998-KD</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs">
        <span className="text-zinc-400">RPM: <strong className="text-white">8,400</strong></span>
        <span className="text-zinc-400">TORQUE: <strong className="text-[#ffd500]">612 NM</strong></span>
        <span className="text-zinc-400">BOOST: <strong className="text-white">2.4 BAR</strong></span>
      </div>
      <button className="border border-[#ffd500] text-[#ffd500] px-3 py-1.5 text-xs font-bold hover:bg-[#ffd500] hover:text-black transition-colors flex items-center gap-2">
        <Sliders className="w-3.5 h-3.5" />
        <span>CALIBRATE</span>
      </button>
    </header>
  );
}
