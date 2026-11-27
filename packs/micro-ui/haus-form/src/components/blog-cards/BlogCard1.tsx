/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BlogCard1 = () => {
  const articles = [
    { date: "24.11.2026", index: "01", title: "The Evolution of Swiss Grotesque Typography in Digital Interfaces", cat: "Theory" },
    { date: "18.10.2026", index: "02", title: "Mathematical Grid Systems as Uncompromising Design Law", cat: "Architecture" },
    { date: "05.09.2026", index: "03", title: "Surgical Restraint: The Strategic Deployment of Signal Red", cat: "Color Theory" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">BLOG 01 // RULED ARTICLE INDEX</span>
        </div>

        <div className="border border-[#0a0a0a] divide-y divide-[#0a0a0a]">
          {articles.map((art, idx) => (
            <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors group">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-xs font-mono text-[#e30613] font-bold">{art.index}.</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0a0a0a]/60 group-hover:text-[#ffffff]/70">{art.date}</span>
                <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-[#0a0a0a] group-hover:border-[#ffffff]">{art.cat}</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tight flex-1 md:mx-8">{art.title}</h4>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase">
                <span>Read</span>
                <ArrowRight className="w-3 h-3 text-[#e30613]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
