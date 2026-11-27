import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function BlogCard2() {
  const rowArticles = [
    { date: "03.22.2026", title: "Typeface Design: Constructing Condensed Grotesque", time: "6 MIN" },
    { date: "03.15.2026", title: "Archival Paper Stocks: What 300GSM Feels Like", time: "4 MIN" },
    { date: "03.02.2026", title: "Scaling React Apps Without Losing Brutalist Edge", time: "8 MIN" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Featured article left */}
        <div className="lg:col-span-7 bg-white border-3 border-[#111111] shadow-hard-lg overflow-hidden">
          <div className="relative aspect-[16/9] bg-[#ffd92e] border-b-3 border-[#111111]">
            <img src="https://images.unsplash.com/photo-1542744094-3a31246264d0?auto=format&fit=crop&w=800&q=80" alt="Featured" className="w-full h-full object-cover contrast-125 mix-blend-multiply" />
            <span className="absolute top-3 left-3 bg-[#111111] text-[#ffd92e] font-mono text-xs font-black px-2.5 py-1 border-2 border-[#111111]">
              ★ FEATURED ESSAY
            </span>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 font-mono text-xs text-[#111111]/70 mb-3">
              <span>03.24.2026</span>
              <span>•</span>
              <span>7 MIN READ</span>
            </div>
            <h3 className="font-grotesk font-black text-2xl sm:text-3xl uppercase mb-4 leading-tight">
              THE MANIFESTO OF ENGINEERED JOY IN MODERN DESIGN.
            </h3>
            <p className="font-mono text-xs text-[#111111]/80 mb-6 leading-relaxed">
              How rejecting sterile corporate minimalism and embracing tactile risograph principles unleashes authentic brand devotion.
            </p>
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-xs px-5 py-2.5 flex items-center gap-2">
              <span>READ FULL ESSAY</span>
              <ArrowRight size={14} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Small row list right */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111111] text-[#fffdf5] font-mono text-xs font-bold px-4 py-2 shadow-hard-sm">
            // RECENT DISPATCHES
          </div>
          {rowArticles.map((art, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-sm p-5 hover:bg-[#ffd92e]/10 transition-colors cursor-pointer">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#111111]/60 mb-2">
                <span>{art.date}</span>
                <span className="flex items-center gap-1"><Clock size={10} />{art.time}</span>
              </div>
              <h4 className="font-grotesk font-black text-lg uppercase leading-snug">{art.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
