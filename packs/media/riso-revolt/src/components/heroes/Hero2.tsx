import React from 'react';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

export default function Hero2() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Headline Area */}
        <div className="lg:col-span-7 bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-[#111111] text-[#fffdf5] font-mono text-xs font-bold px-3 py-1 mb-6 shadow-hard-sm">
              ENGINEERED SYSTEM 02
            </div>
            <h1 className="font-grotesk font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[1.05] mb-6">
              HIGH-IMPACT VISUAL ARCHITECTURE FOR BOLD VENTURES.
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs font-bold pt-6 border-t-2 border-[#111111]">
            <Terminal size={16} />
            <span>INITIALIZED AT BERLIN LABS // 52.5200° N, 13.4050° E</span>
          </div>
        </div>

        {/* Right Spec Panel */}
        <div className="lg:col-span-5 bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] mb-4">
              <span className="font-mono text-xs font-black uppercase">// SYSTEM SPECS</span>
              <Cpu size={18} className="text-[#ff6b5e]" />
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center p-2 bg-[#fffdf5] border border-[#111111]">
                <span className="font-bold">GRID TOLERANCE:</span>
                <span className="bg-[#ffd92e] px-2 py-0.5 font-bold border border-[#111111]">±0.01MM</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#fffdf5] border border-[#111111]">
                <span className="font-bold">INK PALETTE:</span>
                <span className="font-bold text-[#ff6b5e]">FLUO CORAL + ACID</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#fffdf5] border border-[#111111]">
                <span className="font-bold">CURRENT QUEUE:</span>
                <span className="font-bold">4 SLOTS OPEN</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full btn-brutal bg-[#ff6b5e] text-white font-grotesk font-black text-sm py-3 flex items-center justify-center gap-2">
            <span>INITIATE PROJECT</span>
            <ArrowUpRight size={16} strokeWidth={3} />
          </button>
        </div>

      </div>
    </section>
  );
}
