import React from 'react';
import { Compass, Shield, Watch, Sliders } from 'lucide-react';

export function FeatureGrid4() {
  const grid = [
    { code: "01 // CHRONOMETRY", title: "Isochronism", desc: "Precision rate stability maintained under varying mainspring torque tension." },
    { code: "02 // THERMAL", title: "Invar Balance", desc: "Temperature compensating balance staff resisting expansion during extreme shifts." },
    { code: "03 // SHOCK", title: "Incabloc System", desc: "Spring-loaded jewel mountings protecting delicate balance pivots from impact." },
    { code: "04 // POLISHING", title: "Anglage Main", desc: "45-degree chamfered edges polished to mirror finish reflecting natural light." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FEATURE GRID 04 · DOUBLE-HAIRLINE INNER RULES</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Mechanical Tolerance Matrix</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[#d0d0cc] border border-[#d0d0cc]">
        {grid.map((item, idx) => (
          <div key={idx} className="bg-white p-8 space-y-4 relative">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.25em]">{item.code}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2e5e8e]" />
            </div>
            <h3 className="text-xl font-light tracking-wide text-[#232a30]">{item.title}</h3>
            <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
