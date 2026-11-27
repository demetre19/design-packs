import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    {
      date: "2026.11.24",
      category: "Microkernel Architecture",
      title: "Sub-Millisecond Phasor Measurement in Decentralized Grids",
      readTime: "4 min read",
      index: "01"
    },
    {
      date: "2026.11.18",
      category: "Security",
      title: "Post-Quantum Lattice Cryptography for Industrial SCADA",
      readTime: "6 min read",
      index: "02"
    },
    {
      date: "2026.11.12",
      category: "Telemetry",
      title: "High-Frequency Sampling Protocols at Substation Edge",
      readTime: "5 min read",
      index: "03"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">EDITORIAL & RESEARCH</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Technical papers & dispatch logs.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[BLG-01 // ARTICLES]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="bg-[#f2f3f5] p-8 border border-[#0d0e10]/15 flex flex-col justify-between gap-8 rounded-[2px] group hover:border-[#2743f0] transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center font-mono text-[10px] text-[#0d0e10]/60">
                  <span>{p.date}</span>
                  <span className="text-[#2743f0] font-bold">[{p.index}]</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#2743f0]">{p.category}</div>
                <h3 className="text-lg font-semibold uppercase leading-snug group-hover:text-[#2743f0] transition-colors">{p.title}</h3>
              </div>
              <div className="pt-6 border-t border-[#0d0e10]/10 flex items-center justify-between font-mono text-[10px] text-[#0d0e10]/70 uppercase">
                <span>{p.readTime}</span>
                <span className="text-[#2743f0] flex items-center gap-1 font-bold">Read Paper ↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
