import React from 'react';
import { Cpu, Zap, Activity, Shield } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { icon: Cpu, title: 'FORGED ROTOR DYNAMICS', spec: 'CH-01 // 8,400 RPM', desc: 'High-inertia billet steel turbine assemblies balanced to optical precision tolerances.' },
    { icon: Zap, title: 'HIGH-PRESSURE INDUCTION', spec: 'CH-02 // 2.84 BAR', desc: 'Twin-scroll turbochargers engineered for immediate spool response and peak volumetric efficiency.' },
    { icon: Activity, title: 'THERMAL FLUID CONTROL', spec: 'CH-03 // 94.2°C', desc: 'Multi-stage oil cooling circuits maintaining optimal viscosity under maximum thermal load.' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. CAPABILITY MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            PRECISION <span className="text-[#ffd500]">ENGINEERING CHANNELS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-[#14161a] border border-[#262c36] p-6 flex flex-col justify-between hover:border-[#ffd500] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-6 h-6 text-[#ffd500]" />
                    <span className="text-[10px] bg-[#0c0d0f] border border-[#262c36] px-2 py-1 text-zinc-400">{f.spec}</span>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider mb-3 text-white">{f.title}</h3>
                  <p className="text-zinc-400 text-xs font-sans leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#22262f] flex items-center justify-between text-[10px] text-zinc-500">
                  <span>STATUS: NOMINAL</span>
                  <span className="text-[#ffd500]">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
