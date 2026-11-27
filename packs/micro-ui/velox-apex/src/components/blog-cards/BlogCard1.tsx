import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    { num: '01', title: 'DECONSTRUCTING THE 340KG DOWNFORCE WINGLET GEOMETRY', date: 'NOV 2026', read: '4 MIN' },
    { num: '02', title: 'SOLID-STATE THERMAL DYNAMICS UNDER 45-MINUTE TRACK STRESS', date: 'OCT 2026', read: '6 MIN' },
    { num: '03', title: 'SUZUKA TEST DOCK TELEMETRY DEEP DIVE WITH HIROSHI TANAKA', date: 'SEP 2026', read: '5 MIN' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// EDITORIAL INDEX</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          ENGINEERING <span className="text-[#ff2e00]">DISPATCHES</span>
        </h2>

        {/* Article index with massive cropped titles and tiny mono metadata */}
        <div className="space-y-6">
          {articles.map((art, idx) => (
            <div key={idx} className="border-2 border-black p-8 bg-white hover:bg-black hover:text-white transition-all group cursor-pointer">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="font-mono text-xs text-[#ff2e00] font-bold">
                  // DISPATCH {art.num}
                </div>
                <div className="font-mono text-[10px] text-neutral-500 group-hover:text-neutral-400 flex items-center gap-4">
                  <span>DATE: {art.date}</span>
                  <span>READ: {art.read}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff2e00]" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none group-hover:text-white">
                {art.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
