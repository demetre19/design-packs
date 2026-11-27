import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    {
      date: "OCTOBER 14, 2026",
      category: "THEORY",
      title: "Monolithic Concrete as Geological Form",
      excerpt: "Examining how board-formed concrete acts as synthetic stone in alpine and coastal topographies.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "SEPTEMBER 28, 2026",
      category: "MATERIALITY",
      title: "Sugi Timber: Weathering Without Varnish",
      excerpt: "The traditional Japanese charring technique that ensures maintenance-free timber facades for decades.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "AUGUST 12, 2026",
      category: "SPATIAL RHYTHM",
      title: "Daylight Calibration in Narrow Sites",
      excerpt: "Utilizing internal light courts and clerestory windows to flood urban residences with calm illumination.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">JOURNAL & ESSAYS</span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Architectural Discourse</h2>
          </div>
          <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            [ ARCHIVE 2026 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="bg-[#f0efeb] border border-[#e2e0d8] p-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border border-[#e2e0d8] p-1 bg-[#fafaf8]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover filter saturate-[0.85]" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono uppercase text-stone-500">
                  <span>{p.date}</span>
                  <span className="text-[#b5482e]">{p.category}</span>
                </div>
                <h3 className="text-lg font-medium text-[#16171a] leading-snug">{p.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{p.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-[#e2e0d8] flex items-center justify-between text-xs font-mono text-[#16171a] hover:text-[#b5482e] cursor-pointer">
                <span className="uppercase tracking-wider">Read Full Essay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
