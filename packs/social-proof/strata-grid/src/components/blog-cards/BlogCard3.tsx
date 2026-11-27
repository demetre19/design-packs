import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard3() {
  const archive = [
    { date: "2026.11.24", category: "Architecture", title: "Sub-Millisecond Phasor Measurement in Decentralized Grids", index: "01" },
    { date: "2026.11.18", category: "Security", title: "Post-Quantum Lattice Cryptography for Industrial SCADA", index: "02" },
    { date: "2026.11.12", category: "Telemetry", title: "High-Frequency Sampling Protocols at Substation Edge", index: "03" },
    { date: "2026.11.05", category: "Dispatch", title: "Autonomous Failover Benchmarks Across 1,420 Nodes", index: "04" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TECHNICAL ARCHIVE TABLE</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Complete research paper index.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[BLG-03 // INDEXED TABLE]</span>
        </div>

        <div className="bg-[#f2f3f5] border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px] overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60 bg-white">
            <span className="col-span-1">Index</span>
            <span className="col-span-2">Date</span>
            <span className="col-span-3">Category</span>
            <span className="col-span-5">Research Paper Title</span>
            <span className="col-span-1 text-right">Access</span>
          </div>
          {archive.map((item, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-4 items-center font-mono text-xs hover:bg-white transition-colors cursor-pointer group">
              <span className="col-span-1 text-[#2743f0] font-bold">[{item.index}]</span>
              <span className="col-span-2 text-[#0d0e10]/60">{item.date}</span>
              <span className="col-span-3 text-[#2743f0] uppercase">{item.category}</span>
              <span className="col-span-5 font-sans font-semibold uppercase text-xs group-hover:text-[#2743f0] transition-colors">{item.title}</span>
              <span className="col-span-1 text-right text-[#2743f0] font-bold">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
