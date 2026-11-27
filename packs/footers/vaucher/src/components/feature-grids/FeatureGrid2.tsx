import React from 'react';
import { Compass, Clock, Award, CheckCircle } from 'lucide-react';

export function FeatureGrid2() {
  const items = [
    { code: "CAL. 240-01", name: "Ultra-Thin Rotor", desc: "22K gold off-center micro-rotor integrated directly into the movement plate." },
    { code: "CAL. 240-02", name: "Gyromax Balance", desc: "Variable inertia balance with adjustable mass C-shaped blocks for precision regulation." },
    { code: "CAL. 240-03", name: "Spiromax Spring", desc: "Proprietary geometric terminal curve ensuring concentric " },
    { code: "CAL. 240-04", name: "Geneva Seal", desc: "Poinçon de Genève certification stamped on bridge and balance cock." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FEATURE GRID 02 · MONO REFERENCE STYLE</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Caliber Architecture Breakdown</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="border border-[#d0d0cc] bg-white p-6 space-y-4 hover:border-[#2e5e8e] transition-colors">
            <div className="flex justify-between items-center border-b border-[#d0d0cc]/60 pb-3">
              <span className="font-mono text-xs font-semibold text-[#2e5e8e] tracking-[0.25em]">{item.code}</span>
              <span className="font-mono text-[10px] text-[#232a30]/40 tracking-widest">SPEC. VERIFIED</span>
            </div>
            <h3 className="text-xl font-light tracking-wide text-[#232a30]">{item.name}</h3>
            <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
