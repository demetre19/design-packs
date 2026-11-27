import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Blog3: React.FC = () => {
  const archives = [
    { idx: '44', title: 'PARAMETRIC CONCRETE FORM-WORK', date: '2026.03', author: 'M. VANCE' },
    { idx: '43', title: 'ALPINE CANTILEVER DYNAMICS', date: '2026.01', author: 'H. BAUER' },
    { idx: '42', title: 'TOKYO BRUTALIST INTERIORS', date: '2025.11', author: 'K. SATO' },
    { idx: '41', title: 'ZURICH RAIL OVERPASS MONOLITH', date: '2025.09', author: 'E. MERZ' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// ARCHIVE REGISTER</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            RESEARCH PUBLICATIONS
          </h2>
        </div>

        <div className="divide-y divide-[#14161a]/15 border-t border-b border-[#14161a]/15 font-mono">
          {archives.map((item, i) => (
            <div key={i} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#14161a]/5 px-4 transition-colors">
              <div className="flex items-center gap-6">
                <span className="text-xl font-extrabold text-[#14161a]/40 group-hover:text-[#ffc72c]">
                  // {item.idx}
                </span>
                <span className="text-lg font-extrabold uppercase font-sans group-hover:text-[#ffc72c] transition-colors">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-8 text-xs text-[#14161a]/60">
                <span>DATE: {item.date}</span>
                <span>AUTHOR: {item.author}</span>
                <a href="#read" className="w-9 h-9 bg-[#14161a] text-[#f7f6f3] flex items-center justify-center group-hover:bg-[#ffc72c] group-hover:text-[#14161a] transition-colors">
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
