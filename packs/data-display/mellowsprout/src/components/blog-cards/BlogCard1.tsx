import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    { title: "5 Sensory Play Ideas for Rainy Afternoons", tag: "Creativity", color: "bg-[#ff8c42]" },
    { title: "Why Open-Ended Toys Build Resilience", tag: "Child Dev", color: "bg-[#5ba8e8]" },
    { title: "Nature Scavenger Hunt Checklist for Toddlers", tag: "Outdoor", color: "bg-[#6dbf67]" },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] font-black text-sm uppercase tracking-wider">
            📚 carnival stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3d2530]">From our play journal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] shadow-xl border-4 border-[#3d2530] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl bg-[#ff8c42]/20 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80" alt="Article" className="w-full h-full object-cover" />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-white font-black text-xs ${art.color}`}>
                  {art.tag}
                </span>
                <h3 className="text-2xl font-black text-[#3d2530] leading-snug">{art.title}</h3>
              </div>
              <button className="flex items-center gap-2 font-black text-[#ff8c42] hover:underline">
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
