import React from 'react';
import { Cpu, ArrowUpRight } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">INFRASTRUCTURE VISUAL PLATE</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Substation telemetry cluster overview.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[MED-01 // PLATE]</span>
        </div>

        <div className="bg-white border border-[#0d0e10]/15 p-6 md:p-8 relative rounded-[2px]">
          <div className="flex justify-between items-center pb-4 border-b border-[#0d0e10]/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-[#2743f0]" />
              <span className="font-semibold uppercase">Substation Node Alpha-1 // Live Feed</span>
            </div>
            <span className="text-[#2743f0] font-bold">10,000 HZ STREAM</span>
          </div>
          
          <div className="my-8 bg-[#0d0e10] text-white p-12 md:p-20 flex flex-col items-center justify-center gap-6 rounded-[2px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2743f0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 flex flex-col items-center text-center gap-3">
              <div className="w-3 h-3 bg-[#2743f0] animate-pulse" />
              <div className="font-mono text-xl md:text-2xl font-semibold uppercase tracking-tight">STRATA MICROKERNEL 4.08</div>
              <p className="font-mono text-xs text-white/60 max-w-md">Real-time phasor synchronization across decentralized regional power grids.</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[#0d0e10]/10 font-mono text-[10px] text-[#0d0e10]/50">
            <span>ISO-27001 SECURED</span>
            <span>[01]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
