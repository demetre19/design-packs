import React from 'react';
import { ArrowUpRight, Box, Compass, Cpu } from 'lucide-react';

export const FeatureGrid1: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'CANTILEVER DYNAMICS',
      desc: 'Advanced structural modeling enabling up to 18-meter overhangs without vertical perimeter supports.',
      icon: Box,
      meta: '1,420 m² // 2026',
    },
    {
      num: '02',
      title: 'DIAGONAL TECTONICS',
      desc: 'Angular façade systems designed to redirect solar radiation and seismic lateral loads efficiently.',
      icon: Compass,
      meta: '890 m² // 2025',
    },
    {
      num: '03',
      title: 'MATHEMATICAL FACADES',
      desc: 'Parametric stone and architectural concrete panels engineered to millimeter tolerances.',
      icon: Cpu,
      meta: '2,100 m² // 2026',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// CORE COMPETENCIES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              STRUCTURAL PILLARS & DISCIPLINES
            </h2>
          </div>
          <p className="text-sm text-[#14161a]/70 max-w-md font-sans">
            Every practice output is verified against extreme physical stress tests and spatial performance parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-[#14161a] text-[#f7f6f3] p-8 relative overflow-hidden group flex flex-col justify-between"
                style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}
              >
                <div className="absolute top-4 right-4 bg-[#ffc72c] text-[#14161a] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase transform skew-x-[-12deg]">
                  {card.num}
                </div>
                <div className="space-y-6 pt-4">
                  <div className="w-10 h-10 bg-[#ffc72c] text-[#14161a] flex items-center justify-center transform skew-x-[-12deg]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold uppercase">{card.title}</h3>
                  <p className="text-xs text-[#f7f6f3]/70 font-sans leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-8 border-t border-[#f7f6f3]/15 mt-8 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#ffc72c]">{card.meta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ffc72c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
