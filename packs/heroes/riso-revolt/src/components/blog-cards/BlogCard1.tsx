import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogCard1() {
  const articles = [
    { date: "03.24.2026", cat: "RISO LAB", title: "Fluorescent Ink Separation Secrets for 2026", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
    { date: "03.18.2026", cat: "FRONTEND", title: "Why Brutalism Beats Minimalist Boredom in SaaS", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },
    { date: "03.10.2026", cat: "STUDIO", title: "Berlin & Tokyo Design Exchange Recap", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            EDITORIAL LOG
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            DISPATCHES & ESSAYS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <article key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative aspect-[16/10] bg-[#ffd92e] border-b-3 border-[#111111] overflow-hidden">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-[#ff6b5e] text-white font-mono text-[10px] font-black px-2 py-1 border-2 border-[#111111] shadow-hard-sm">
                    {art.cat}
                  </span>
                </div>
                <div className="p-6">
                  <div className="font-mono text-xs font-bold text-[#111111]/60 mb-2">{art.date}</div>
                  <h3 className="font-grotesk font-black text-xl uppercase leading-snug mb-4 group-hover:text-[#ff6b5e] transition-colors">
                    {art.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between font-mono text-xs font-bold border-t-2 border-[#111111] bg-[#fffdf5]">
                <span>READ DISPATCH</span>
                <ArrowRight size={16} strokeWidth={3} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
