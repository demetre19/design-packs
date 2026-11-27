/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BlogCard2 = () => {
  const posts = [
    { num: "01", date: "NOV 2026", title: "Typographic Order in Responsive Layouts", desc: "How to maintain strict column alignments across variable device dimensions." },
    { num: "02", date: "OCT 2026", title: "The Basel School and Digital Spatiality", desc: "Translating print raster mechanics into modern component architecture." },
    { num: "03", date: "SEP 2026", title: "Zero Radius & Hairline Aesthetics", desc: "Why sharp corners and 1px boundaries convey uncompromising professional authority." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">BLOG 02 // 3-COLUMN TEXT-ONLY GRID</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#0a0a0a] pt-12">
          {posts.map((p, idx) => (
            <div key={idx} className="border border-[#0a0a0a] p-6 flex flex-col justify-between space-y-6 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors group">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[9px] font-mono uppercase">
                  <span className="text-[#e30613] font-bold">{p.num}. ESSAY</span>
                  <span className="text-[#0a0a0a]/60 group-hover:text-[#ffffff]/60">{p.date}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{p.title}</h3>
                <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 group-hover:text-[#ffffff]/80">{p.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#0a0a0a]/20 group-hover:border-[#ffffff]/20 flex items-center justify-between text-xs font-mono uppercase">
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3 text-[#e30613]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
