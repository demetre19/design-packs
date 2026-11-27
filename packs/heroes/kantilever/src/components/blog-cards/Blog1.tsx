import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Blog1: React.FC = () => {
  const articles = [
    {
      date: '24.03.2026',
      title: 'THE MECHANICS OF 18-METER CANTILEVERS',
      excerpt: 'An in-depth structural analysis of post-tensioned concrete in alpine environments.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      date: '12.02.2026',
      title: 'DIAGONAL LOUVERS IN SOLAR ARCHITECTURE',
      excerpt: 'How 14-degree angular sunshades optimize interior thermal regulation naturally.',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    },
    {
      date: '05.01.2026',
      title: 'BRUTALIST REFINEMENT IN TOKYO',
      excerpt: 'Balancing raw architectural concrete with delicate interior timber joinery.',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// JOURNAL & MONOGRAPHS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              ARCHITECTURAL ESSAYS
            </h2>
          </div>
          <a
            href="#all"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold hover:text-[#ffc72c]"
          >
            View All Essays <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="space-y-6 group">
              <div
                className="relative w-full h-[240px] bg-[#14161a] overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }}
              >
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover filter saturate-[0.8] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#ffc72c] bg-[#14161a] px-2.5 py-0.5 inline-block uppercase">
                  {art.date}
                </span>
                <h3 className="text-xl font-extrabold uppercase group-hover:text-[#ffc72c] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-[#14161a]/70 font-sans leading-relaxed">{art.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
