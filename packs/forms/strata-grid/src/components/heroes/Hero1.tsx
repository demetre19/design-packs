import React from 'react';
import { ArrowUpRight, Activity, Zap, Server } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">NEXT-GEN INDUSTRIAL INFRASTRUCTURE OS</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] uppercase">
            Autonomous power routing for decentralized grids.
          </h1>
          <p className="text-[#0d0e10]/70 text-sm leading-relaxed max-w-xl font-normal">
            Strata Grid orchestrates multi-megawatt industrial microgrids with deterministic latency, high-frequency telemetry, and autonomous load balancing across distributed nodes.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#deploy" 
              className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
            >
              <span>Initialize System</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="#specs" 
              className="border border-[#0d0e10]/20 bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-[#2743f0] hover:text-[#2743f0] transition-colors rounded-[2px]"
            >
              View Specifications
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          <div className="bg-white p-6 border border-[#0d0e10]/10 flex flex-col justify-between gap-6 relative rounded-[2px]">
            <div className="flex justify-between items-start">
              <Zap className="w-5 h-5 text-[#2743f0]" />
              <span className="font-mono text-[10px] text-[#0d0e10]/40">[01]</span>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60 tracking-wider">Active Output</div>
              <div className="text-2xl font-semibold font-mono tracking-tight mt-1">4.82 GW</div>
            </div>
          </div>
          <div className="bg-white p-6 border border-[#0d0e10]/10 flex flex-col justify-between gap-6 relative rounded-[2px]">
            <div className="flex justify-between items-start">
              <Activity className="w-5 h-5 text-[#2743f0]" />
              <span className="font-mono text-[10px] text-[#0d0e10]/40">[02]</span>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60 tracking-wider">Telemetry Latency</div>
              <div className="text-2xl font-semibold font-mono tracking-tight mt-1">0.42 ms</div>
            </div>
          </div>
          <div className="col-span-2 bg-[#0d0e10] text-white p-6 border border-[#0d0e10]/10 flex items-center justify-between relative rounded-[2px]">
            <div className="flex items-center gap-4">
              <Server className="w-6 h-6 text-[#2743f0]" />
              <div>
                <div className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Cluster Alpha</div>
                <div className="font-mono text-[10px] text-white/60 mt-0.5">All 1,420 nodes synchronized</div>
              </div>
            </div>
            <span className="font-mono text-xs text-[#2743f0] font-bold">LIVE ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
