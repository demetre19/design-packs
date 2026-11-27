import React from 'react';
import { Zap, Cpu, Shield, Activity, ArrowRight } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { icon: Zap, title: 'AXIAL FLUX MOTOR', spec: '117 kW / 18,500 RPM', desc: 'Direct-drive stator architecture with titanium sleeve reinforcement.' },
    { icon: Cpu, title: 'SILICON CARBIDE INVERTER', spec: '99.4% EFFICIENCY', desc: 'Ultra-fast switching frequencies for instantaneous throttle response.' },
    { icon: Shield, title: 'CARBON MONOCOQUE', spec: '7.2 kg TOTAL WEIGHT', desc: 'Autoclaved aerospace T1000 carbon fiber with honeycomb core.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CORE ARCHITECTURE</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">ENGINEERED FOR EXTREME PERFORMANCE</h2>
          </div>
          <div className="hidden md:block font-mono-spec text-xs text-neutral-400">
            [GRID // 01]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner hover:border-[#ff5a1f] transition-all group">
                {/* Hexagonal-style icon chip */}
                <div className="w-12 h-12 bg-[#ff5a1f]/10 border border-[#ff5a1f] clip-corner flex items-center justify-center mb-6 group-hover:bg-[#ff5a1f] group-hover:text-black transition-colors">
                  <Icon size={24} className="text-[#ff5a1f] group-hover:text-black transition-colors" />
                </div>
                <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block mb-1">{item.spec}</span>
                <h3 className="font-display font-extrabold text-xl text-white mb-3">{item.title}</h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                <div className="mt-6 pt-4 border-t border-[#272a33] flex items-center justify-between text-xs font-mono-spec text-neutral-300 group-hover:text-[#ff5a1f] transition-colors">
                  <span>SPECIFICATION READOUT</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
