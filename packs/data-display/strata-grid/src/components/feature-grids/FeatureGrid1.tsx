import React from 'react';
import { Cpu, Shield, Zap, ArrowUpRight } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    {
      icon: Cpu,
      title: "Neural Substation Dispatch",
      desc: "Distributed micro-controllers analyze localized load and reroute power in sub-milliseconds without central coordination.",
      index: "01"
    },
    {
      icon: Shield,
      title: "Zero-Trust Mesh Security",
      desc: "Post-quantum cryptographic verification secures every telemetry packet travelling between substations and control nodes.",
      index: "02"
    },
    {
      icon: Zap,
      title: "High-Frequency Telemetry",
      desc: "Capture 10,000 voltage and frequency samples per second with timestamped precision for root-cause telemetry.",
      index: "03"
    }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Architected for absolute grid reliability.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FG-01 // MODULES]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white p-8 border border-[#0d0e10]/10 flex flex-col justify-between gap-8 relative rounded-[2px] group hover:border-[#2743f0] transition-colors">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#f2f3f5] border border-[#0d0e10]/10 group-hover:border-[#2743f0] transition-colors">
                    <Icon className="w-5 h-5 text-[#2743f0]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#2743f0]" />
                    <span className="font-mono text-xs text-[#0d0e10]/50">[{f.index}]</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold uppercase">{f.title}</h3>
                  <p className="text-[#0d0e10]/70 text-xs leading-relaxed">{f.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#0d0e10]/10 flex items-center justify-between font-mono text-[10px] text-[#2743f0] uppercase tracking-wider">
                  <span>Specification Sheet</span>
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
