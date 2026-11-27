import React from 'react';
import { Compass, Box, Cpu, Layers } from 'lucide-react';

export const FeatureGrid4: React.FC = () => {
  const grid = [
    { title: 'PARAMETRIC GEOMETRY', desc: 'Algorithmic generation of load-bearing diagonal grids.', icon: Compass, spec: 'SPEC 01' },
    { title: 'BRUTALIST CONCRETE', desc: 'Custom formwork casting for flawless architectural finish.', icon: Box, spec: 'SPEC 02' },
    { title: 'TENSION CABLES', desc: 'Post-tensioned steel cables anchoring cantilevered terraces.', icon: Cpu, spec: 'SPEC 03' },
    { title: 'SPATIAL FLOW', desc: 'Uninterrupted sightlines and diagonal spatial zoning.', icon: Layers, spec: 'SPEC 04' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// 2X2 DIAGONAL MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            SYSTEMATIC ARCHITECTURAL FRAMEWORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#14161a]/15 border border-[#14161a]/15">
          {grid.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-[#f7f6f3] p-10 space-y-6 hover:bg-[#14161a] hover:text-[#f7f6f3] transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#ffc72c] text-[#14161a] flex items-center justify-center transform skew-x-[-12deg]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#14161a]/40 group-hover:text-[#ffc72c]">{item.spec}</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase">{item.title}</h3>
                <p className="text-sm text-[#14161a]/70 group-hover:text-[#f7f6f3]/80 font-sans leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-4 border-t border-[#14161a]/15 group-hover:border-[#f7f6f3]/15 flex items-center justify-between font-mono text-xs">
                  <span>PARAMETERS VERIFIED</span>
                  <span className="text-[#ffc72c]">OK // 2026</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
