/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BlogCard1: React.FC = () => {
  const articles = [
    { title: 'THE DEATH OF ORNAMENT IN 2026', date: 'OCT 12', author: 'H. K.' },
    { title: 'NEGATIVE SPACE AS STRUCTURAL ANCHOR', date: 'OCT 14', author: 'M. V.' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[01 // BLEED HEADLINES]</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((a, i) => (
          <div key={i} className="border border-white/20 p-6 flex flex-col justify-between min-h-[280px] overflow-hidden relative">
            <div className="flex justify-between items-center text-xs font-mono tracking-widest opacity-60">
              <span>{a.date}</span>
              <span>{a.author}</span>
            </div>
            <div className="my-6 overflow-hidden">
              <h4 className="text-4xl font-black tracking-tighter uppercase leading-[0.9] whitespace-nowrap">
                {a.title}
              </h4>
            </div>
            <div className="flex justify-between items-center border-t border-white/20 pt-4 text-xs font-mono">
              <span className="opacity-70">READ ESSAY</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
