import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TELEMETRY & DISPATCH OS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1]">
              Real-time energy intelligence at planetary scale.
            </h1>
          </div>
          <a 
            href="#connect" 
            className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 self-start rounded-[2px]"
          >
            <span>Request Access</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 border border-[#0d0e10]/10 flex flex-col justify-between gap-8 rounded-[2px]">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] uppercase text-[#0d0e10]/60 tracking-wider">Grid Stability Index</span>
              <span className="font-mono text-[10px] text-[#2743f0] font-bold">+0.4%</span>
            </div>
            <div>
              <div className="text-3xl font-semibold font-mono tracking-tight">99.98%</div>
              <div className="h-8 mt-4 flex items-end gap-1">
                {[40, 60, 55, 70, 85, 90, 88, 95, 99].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#2743f0]/20 hover:bg-[#2743f0] transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[#0d0e10]/10 flex flex-col justify-between gap-8 rounded-[2px]">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] uppercase text-[#0d0e10]/60 tracking-wider">Total Power Dispatched</span>
              <span className="font-mono text-[10px] text-[#2743f0] font-bold">14.2 TW/h</span>
            </div>
            <div>
              <div className="text-3xl font-semibold font-mono tracking-tight">1,420 GW</div>
              <div className="h-8 mt-4 flex items-end gap-1">
                {[60, 50, 65, 75, 70, 85, 92, 88, 94].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#2743f0]/20 hover:bg-[#2743f0] transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-[#0d0e10]/10 flex flex-col justify-between gap-8 rounded-[2px]">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] uppercase text-[#0d0e10]/60 tracking-wider">Autonomous Actions</span>
              <span className="font-mono text-[10px] text-[#2743f0] font-bold">ZERO ERR</span>
            </div>
            <div>
              <div className="text-3xl font-semibold font-mono tracking-tight">4.2M/sec</div>
              <div className="h-8 mt-4 flex items-end gap-1">
                {[50, 70, 80, 85, 90, 95, 92, 98, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#2743f0]/20 hover:bg-[#2743f0] transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
