import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard2() {
  const list = [
    { date: "2026.11.22", title: "Decentralized Frequency Regulation in Multi-Megawatt Microgrids", index: "01" },
    { date: "2026.11.15", title: "Zero-Trust SCADA Hardening Standards for 2027", index: "02" },
    { date: "2026.11.08", title: "Autonomous Substation Failover Benchmark Results", index: "03" }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">FEATURED RESEARCH & ARCHIVE</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Infrastructure engineering insights.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[BLG-02 // REGISTER]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-8 border border-[#0d0e10]/15 flex flex-col justify-between gap-8 rounded-[2px]">
            <div className="flex justify-between items-center font-mono text-xs text-[#0d0e10]/60">
              <span className="text-[#2743f0] font-bold uppercase tracking-wider">FEATURED PAPER // 2026.11.24</span>
              <span>[01]</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold uppercase leading-tight">Sub-Millisecond Phasor Measurement in Decentralized Grids</h3>
              <p className="text-[#0d0e10]/70 text-xs leading-relaxed">
                An in-depth analysis of microkernel synchronization protocols operating across 1,420 distributed substation nodes without central orchestration.
              </p>
            </div>
            <div className="pt-6 border-t border-[#0d0e10]/10 flex items-center justify-between font-mono text-xs text-[#2743f0] font-semibold">
              <span>Read Full Research Paper</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px] flex flex-col justify-between">
            <div className="p-4 bg-[#f2f3f5] font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Recent Dispatch Papers</div>
            <div className="divide-y divide-[#0d0e10]/10 flex-1">
              {list.map((item, i) => (
                <div key={i} className="p-4 flex flex-col gap-2 hover:bg-[#f2f3f5] transition-colors cursor-pointer">
                  <div className="flex justify-between items-center font-mono text-[10px] text-[#0d0e10]/50">
                    <span>{item.date}</span>
                    <span className="text-[#2743f0]">[{item.index}]</span>
                  </div>
                  <div className="font-sans font-semibold uppercase text-xs leading-snug">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#f2f3f5] font-mono text-[10px] text-[#2743f0] font-bold uppercase flex justify-between items-center">
              <span>View Full Archive</span>
              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
