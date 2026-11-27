import React from 'react';
import { Shield, Cpu, Zap, Layers } from 'lucide-react';

export function FeatureGrid4() {
  const items = [
    { icon: Cpu, title: 'ENGINE MANAGEMENT', code: 'C-01', desc: 'Triple redundant ECU architecture with motorsport-grade encrypted telemetry link.' },
    { icon: Shield, title: 'CRASH STRUCTURE', code: 'C-02', desc: 'Autoclaved carbon-fiber impact attenuator tested to FIA crash standards.' },
    { icon: Zap, title: 'ELECTRICAL HARNESS', code: 'C-03', desc: 'Mil-spec lightweight wiring loom with Deutsch Autosport connectors throughout.' },
    { icon: Layers, title: 'AERODYNAMIC FLOOR', code: 'C-04', desc: 'Full carbon undertray generating extreme ground effect suction coefficients.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white relative">
        <span className="absolute -top-2 -left-2 font-bold">+</span>
        <span className="absolute -top-2 -right-2 font-bold">+</span>
        <span className="absolute -bottom-2 -left-2 font-bold">+</span>
        <span className="absolute -bottom-2 -right-2 font-bold">+</span>

        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>[2X2 COMPARTMENT MATRIX]</span>
          <span>REF: M-2X2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`p-8 flex flex-col justify-between ${i < 2 ? 'border-b md:border-b border-[#111]' : ''} hover:bg-[#fafaf8] transition-colors`}>
                <div>
                  <div className="flex justify-between items-center mb-4 text-[9px] text-[#666]">
                    <span className="flex items-center space-x-1">
                      <Icon className="w-4 h-4 text-[#111]" />
                      <span>{item.code}</span>
                    </span>
                    <span className="border border-[#111] px-1 py-0.5">VERIFIED</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[10px] text-[#555] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
