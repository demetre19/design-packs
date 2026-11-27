import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero5() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="text-xs text-[#ffd500] mb-3 tracking-widest">// ARCHITECTURE 01</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6 leading-none">
            THE ANODIZED <span className="text-[#ffd500]">POWER CELL</span> STANDARD.
          </h1>
          <p className="text-zinc-400 font-sans text-base mb-8 max-w-xl">
            Uncompromising engineering standards built for championship endurance teams worldwide.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3.5 uppercase tracking-wider hover:bg-[#ffdf33] transition-colors flex items-center gap-2">
              <span>INITIALIZE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-zinc-500">RUN INDEX 07/40</span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#14161a] border border-[#262c36] p-6 text-center">
          <Terminal className="w-12 h-12 text-[#ffd500] mx-auto mb-4" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">LIVE TELEMETRY STREAM</h3>
          <p className="text-xs text-zinc-400 font-sans mb-6">Real-time sensor logs streaming from Cell 04 dynamometer bays.</p>
          <span className="text-xs font-mono text-[#ffd500] bg-[#0c0d0f] border border-[#262c36] px-4 py-2 block">
            STATUS: NOMINAL // 8,400 RPM
          </span>
        </div>
      </div>
    </section>
  );
}
