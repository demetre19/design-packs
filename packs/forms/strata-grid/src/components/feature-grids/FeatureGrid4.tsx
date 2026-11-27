import React from 'react';
import { Cpu, Zap, Shield, Activity, ArrowUpRight } from 'lucide-react';

export function FeatureGrid4() {
  const grid = [
    {
      icon: Cpu,
      title: "Autonomous Failover",
      desc: "Substations isolate faults and reroute power within 120 microseconds of detection.",
      index: "01"
    },
    {
      icon: Zap,
      title: "Dynamic Load Balancing",
      desc: "Real-time AI dispatch matches decentralized generation with industrial demand surges.",
      index: "02"
    },
    {
      icon: Shield,
      title: "Zero-Trust Mesh",
      desc: "Hardware-enforced security boundaries prevent lateral movement during cyber attacks.",
      index: "03"
    },
    {
      icon: Activity,
      title: "Sub-Millisecond Sync",
      desc: "Atomic clock synchronization across all regional nodes ensures precise phasor measurement.",
      index: "04"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">QUADRANT MATRIX</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">High-performance grid subsystems.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FG-04 // 2X2 GRID]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#0d0e10]/15 bg-[#0d0e10]/10 gap-[1px] rounded-[2px] overflow-hidden">
          {grid.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white p-8 flex flex-col justify-between gap-8 relative group hover:bg-[#f2f3f5] transition-colors">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#f2f3f5] border border-[#0d0e10]/10">
                    <Icon className="w-5 h-5 text-[#2743f0]" />
                  </div>
                  <span className="font-mono text-xs text-[#0d0e10]/40">[{item.index}]</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold uppercase">{item.title}</h3>
                  <p className="text-[#0d0e10]/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#0d0e10]/10 flex items-center justify-between font-mono text-[10px] text-[#2743f0] uppercase tracking-wider">
                  <span>Subsystem Protocol</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
