import React, { useState } from 'react';
import { ArrowRight, Sliders } from 'lucide-react';

export function Pricing2() {
  const [runs, setRuns] = useState(20);
  const [channels, setChannels] = useState(8);

  const baseRate = 250;
  const totalPrice = runs * baseRate + channels * 400;

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto bg-[#14161a] border border-[#262c36] p-8 md:p-12">
        <div className="flex items-center gap-2 text-xs text-[#ffd500] mb-3">
          <Sliders className="w-4 h-4" />
          <span>// 02. CONFIGURATOR PROTOCOL</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-8">
          CUSTOM TEST <span className="text-[#ffd500]">PROGRAM CONFIGURATOR.</span>
        </h2>

        <div className="space-y-8 mb-10">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-zinc-400">TEST RUN ALLOCATION:</span>
              <span className="text-[#ffd500] font-bold">{runs} RUNS (MAX 40)</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              value={runs}
              onChange={(e) => setRuns(Number(e.target.value))}
              className="w-full accent-[#ffd500] bg-[#0c0d0f] h-2"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-zinc-400">TELEMETRY CHANNELS:</span>
              <span className="text-[#ffd500] font-bold">{channels} CHANNELS</span>
            </div>
            <input
              type="range"
              min="2"
              max="16"
              value={channels}
              onChange={(e) => setChannels(Number(e.target.value))}
              className="w-full accent-[#ffd500] bg-[#0c0d0f] h-2"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#262c36] gap-6">
          <div>
            <span className="text-xs text-zinc-500 block">ESTIMATED PROGRAM COST</span>
            <span className="text-4xl font-black text-[#ffd500]">${totalPrice.toLocaleString()} USD</span>
          </div>
          <button className="w-full md:w-auto bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center justify-center gap-2">
            <span>LOCK IN CONFIGURATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
