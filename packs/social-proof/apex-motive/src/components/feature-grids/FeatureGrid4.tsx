import React from 'react';
import { Crosshair, Zap, Cpu, Shield, Activity } from 'lucide-react';

export function FeatureGrid4() {
  const grid = [
    { icon: Zap, title: '800V ARCHITECTURE', spec: 'ULTRA FAST CHARGE', desc: '0 to 80% state of charge in precisely 12 minutes via 350kW DC fast chargers.' },
    { icon: Cpu, title: 'AI TORQUE MAPPING', spec: '1,000 HZ SENSING', desc: 'Neural net predictive traction control managing rear wheel slip across hairpin exits.' },
    { icon: Shield, title: 'TITANIUM SUBFRAME', spec: 'GRADE 5 ALLOY', desc: 'Aerospace-welded tubular space frame providing extreme torsional rigidity.' },
    { icon: Activity, title: 'TELEMETRY SUITE', spec: 'LIVE CLOUD SYNC', desc: 'Real-time telemetry stream logged to secure encrypted servers for race engineering.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CROSSHAIR MATRIX</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">SPECIFICATION SQUARES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#272a33] border border-[#272a33]">
          {grid.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#16181d] p-10 relative group hover:bg-[#1c1f26] transition-colors">
                <div className="absolute top-4 right-4 text-neutral-600 group-hover:text-[#ff5a1f] transition-colors">
                  <Crosshair size={18} />
                </div>
                <div className="w-12 h-12 bg-[#ff5a1f]/10 border border-[#ff5a1f] clip-corner flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#ff5a1f]" />
                </div>
                <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block mb-2">{item.spec}</span>
                <h3 className="font-display font-extrabold text-2xl text-white mb-3">{item.title}</h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
