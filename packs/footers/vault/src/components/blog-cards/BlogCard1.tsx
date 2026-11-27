import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    { title: "THE ARCHITECTURE OF SILENCE", cat: "ESSAY 01", date: "24.11.2026", author: "M. Vance" },
    { title: "BRUTALIST WOOL & CONCRETE", cat: "ESSAY 02", date: "22.11.2026", author: "K. Sterling" },
    { title: "MONOCHROME THEORY IN TOKYO", cat: "ESSAY 03", date: "19.11.2026", author: "S. Lords" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>BLOG CARDS // EDITORIAL</span>
          <span>DISPATCHES</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="border border-black p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono uppercase mb-4 text-zinc-500 border-b border-black pb-2">
                  <span>{a.cat}</span>
                  <span>{a.date}</span>
                </div>
                <div className="border border-black p-1 bg-black mb-4">
                  <img src={`https://picsum.photos/seed/blog${i}/400/300.webp`} alt={a.title} className="w-full h-40 object-cover grayscale" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 font-serif-editorial">{a.title}</h3>
                <p className="text-[11px] font-mono uppercase text-zinc-600 mb-6">By {a.author}</p>
              </div>
              <a href="#" className="flex items-center justify-between text-xs font-mono uppercase tracking-widest border-t border-black pt-4 hover:opacity-60">
                Read Dispatch <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
