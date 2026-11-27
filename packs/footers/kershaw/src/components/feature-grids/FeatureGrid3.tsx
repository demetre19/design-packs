import React from 'react';
import { Activity } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 03. CELL BENCHMARKS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            INSTRUMENTATION <span className="text-[#ffd500]">PERFORMANCE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#14161a] border border-[#262c36] p-8">
          <div>
            <span className="text-xs text-[#ffd500] font-bold">CHANNEL A // TURBOCHARGER INTAKE</span>
            <h3 className="text-2xl font-extrabold uppercase tracking-wider mt-2 mb-4">VARIABLE GEOMETRY COMPRESSOR MAPPING</h3>
            <p className="text-zinc-400 font-sans text-xs mb-6">
              Real-time map analysis plotting pressure ratio against corrected mass flow at 142,000 RPM rotor speed.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#0c0d0f] border border-[#262c36] p-3">
                <span className="text-zinc-500 block text-[10px]">PRESSURE RATIO</span>
                <span className="text-white font-bold text-base">3.4 : 1</span>
              </div>
              <div className="bg-[#0c0d0f] border border-[#262c36] p-3">
                <span className="text-zinc-500 block text-[10px]">EFFICIENCY</span>
                <span className="text-[#ffd500] font-bold text-base">78.4%</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0d0f] border border-[#262c36] p-6 flex flex-col justify-center items-center h-64 relative overflow-hidden">
            <Activity className="w-16 h-16 text-[#ffd500] mb-4 opacity-80 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400">OSCILLOSCOPE FEED: CH-01</span>
            <span className="text-[10px] text-[#ffd500] mt-1">FREQUENCY: 1.2 KHZ STABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
