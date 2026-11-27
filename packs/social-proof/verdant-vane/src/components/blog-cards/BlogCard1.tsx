import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    {
      tag: "Spatial Design",
      date: "October 14, 2026",
      title: "The Neurobiology of Waiting Rooms: Why Warm Wood Lowers Cortisol",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      tag: "Clinical Strategy",
      date: "November 02, 2026",
      title: "Translating Epigenetic Data Into Compassionate Patient Dialogue",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      tag: "Brand Architecture",
      date: "November 18, 2026",
      title: "Calm Luxury: Rejecting Corporate Coldness in Modern Healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
              The Journal
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
              Reflections on care & design.
            </h2>
          </div>
          <a href="#all" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4f47] hover:text-[#2a7a6d]">
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="bg-[#e8f0ec] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#faf6f0]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold mb-3">
                    <span>{p.tag}</span>
                    <span className="text-[#122420]/60">{p.date}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#122420] group-hover:text-[#2a7a6d] transition-colors leading-snug">
                    {p.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center text-xs font-semibold uppercase tracking-wider text-[#1d4f47]">
                <span>Read Article</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
