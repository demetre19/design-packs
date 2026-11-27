import React from 'react';
import { Cpu, Shield, Activity, Database, Wrench, Zap } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { id: "01", icon: Cpu, title: "NEURAL MESH CONTROL", desc: "Decentralized edge compute clusters controlling heavy hydraulic excavators in real-time." },
    { id: "02", icon: Shield, title: "ARMORED HOUSING", desc: "Titanium-reinforced alloy shielding designed for extreme 1,450°C smelting environments." },
    { id: "03", icon: Activity, title: "PREDICTIVE STRESS", desc: "Continuous acoustic emission monitoring prevents structural fatigue before failure." },
    { id: "04", icon: Database, title: "ORE TELEMETRY", desc: "Instant spectroscopic analysis of extracted mineral veins at drill-head velocity." },
    { id: "05", icon: Wrench, title: "MODULAR REPLACEMENT", desc: "Hot-swappable hydraulic manifolds and power pods minimizing downtime to zero." },
    { id: "06", icon: Zap, title: "HIGH-VOLT GRID", desc: "Direct megawatt-class power distribution across remote desert and sub-zero sites." },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          FEATURE GRID // SYSTEM 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          CORE CAPABILITIES & <span className="text-[#f25c05]">HARDWARE</span> SPECIFICATIONS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.id} className="border-2 border-black bg-white p-6 flex flex-col justify-between group hover:border-[#f25c05] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-mono">
                      <Icon className="w-6 h-6 text-[#f25c05]" />
                    </div>
                    <span className="font-mono text-xs text-neutral-400 font-bold">{f.id} // SYS</span>
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-tight mb-3">{f.title}</h3>
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 font-mono text-[10px] text-neutral-500 flex justify-between items-center">
                  <span>SPEC OK</span>
                  <span className="text-[#f25c05] font-bold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
