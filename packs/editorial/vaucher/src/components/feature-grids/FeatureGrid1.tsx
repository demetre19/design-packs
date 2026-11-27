import React from 'react';
import { Compass, Shield, Sliders, Watch } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    {
      ref: "REF. 01",
      title: "Hand-Beveled Bridges",
      desc: "Internal angles polished entirely by hand using gentian wood and diamond paste for mirror luster.",
      icon: Watch
    },
    {
      ref: "REF. 02",
      title: "Silicon Escapement",
      desc: "Advanced frictionless geometry offering total immunity to magnetic fields and thermal drift.",
      icon: Sliders
    },
    {
      ref: "REF. 03",
      title: "Isochronous Tolerance",
      desc: "Rigorous 720-hour testing regime guaranteeing absolute stability across six spatial positions.",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FEATURE GRID 01 · APPLIED INDEX BULLETS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Engineering Standards</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="screw-corner border border-[#d0d0cc] bg-white p-8 space-y-6 relative hover:border-[#2e5e8e] transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.25em]">{feat.ref}</span>
                <Icon className="w-5 h-5 text-[#2e5e8e]" />
              </div>
              <div className="space-y-2">
                {/* Tiny applied index marker as bullet */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-1 bg-[#2e5e8e]" />
                  <h3 className="text-lg font-light tracking-wide text-[#232a30]">{feat.title}</h3>
                </div>
                <p className="text-xs font-mono text-[#232a30]/70 tracking-wider leading-relaxed pt-2">
                  {feat.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#d0d0cc]/40 flex justify-between items-center font-mono text-[10px] text-[#232a30]/50">
                <span>TOLERANCE: ±0.5s</span>
                <span className="text-[#2e5e8e]">VERIFIED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
