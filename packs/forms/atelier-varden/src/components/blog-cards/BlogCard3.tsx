import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard3() {
  const articles = [
    { num: "01", date: "OCT 2026", title: "Monolithic Concrete as Geological Form", author: "M. Varden", readTime: "6 MIN" },
    { num: "02", date: "SEP 2026", title: "Sugi Timber Weathering Resistance", author: "K. Sato", readTime: "4 MIN" },
    { num: "03", date: "AUG 2026", title: "Daylight Calibration in Narrow Urban Sites", author: "E. Lindqvist", readTime: "8 MIN" },
    { num: "04", date: "JUL 2026", title: "The Ethics of Tectonic Restraint", author: "M. Varden", readTime: "5 MIN" }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">ARCHIVE REGISTER TABLE</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Index of Published Monographs</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {articles.map((a, i) => (
            <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#fafaf8] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-6">
                <span className="text-xs font-mono text-stone-400">{a.num}</span>
                <span className="text-lg font-medium text-[#16171a] group-hover:text-[#b5482e] transition-colors">{a.title}</span>
              </div>
              <div className="flex items-center space-x-8 text-xs font-mono text-stone-600">
                <span>{a.date}</span>
                <span className="hidden sm:inline">BY {a.author}</span>
                <span className="hidden sm:inline text-stone-400">{a.readTime}</span>
                <ArrowRight className="w-4 h-4 text-[#b5482e] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
