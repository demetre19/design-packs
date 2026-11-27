import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FeatureGrid2: React.FC = () => {
  const projects = [
    { num: '01', title: 'The Zermatt Glass Monolith', location: 'Swiss Alps', spec: '1,120 m² // 4 Levels // 2026' },
    { num: '02', title: 'Kyoto Angular Pavilion', location: 'Kyoto, Japan', spec: '640 m² // 2 Levels // 2025' },
    { num: '03', title: 'Reykjavik Fjord Cantilever', location: 'Iceland', spec: '2,300 m² // 5 Levels // 2026' },
    { num: '04', title: 'Berlin Brutalist Archive', location: 'Germany', spec: '4,100 m² // 7 Levels // 2024' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// INDEXED PORTFOLIO REGSTER</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            SELECTED ARCHITECTURAL WORKS
          </h2>
        </div>

        <div className="divide-y divide-[#14161a]/15 border-t border-b border-[#14161a]/15">
          {projects.map((proj, i) => (
            <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#14161a]/5 transition-colors px-4">
              <div className="md:col-span-2 font-mono text-2xl font-extrabold text-[#14161a]/40 group-hover:text-[#ffc72c]">
                {proj.num}
              </div>
              <div className="md:col-span-5">
                <h3 className="text-xl font-extrabold uppercase">{proj.title}</h3>
                <span className="text-xs font-mono text-[#14161a]/60 uppercase">{proj.location}</span>
              </div>
              <div className="md:col-span-3 font-mono text-xs text-[#14161a]/80">
                {proj.spec}
              </div>
              <div className="md:col-span-2 flex justify-end">
                <a
                  href="#project"
                  className="w-10 h-10 bg-[#14161a] text-[#f7f6f3] flex items-center justify-center group-hover:bg-[#ffc72c] group-hover:text-[#14161a] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
