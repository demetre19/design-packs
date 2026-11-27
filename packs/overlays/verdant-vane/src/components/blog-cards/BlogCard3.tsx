import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard3() {
  const articles = [
    { title: "Redefining Patient Onboarding in Boutique Longevity Clinics", category: "Strategy", date: "Nov 18, 2026", thumb: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=200&q=80" },
    { title: "The Power of Negative Space in Clinical Web Design", category: "Digital", date: "Nov 10, 2026", thumb: "https://images.unsplash.com/photo-1512290900672-8cd3afeb447f?auto=format&fit=crop&w=200&q=80" },
    { title: "Somatic Lighting: Calming the Nervous System in Practice Suites", category: "Spatial", date: "Oct 29, 2026", thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80" },
    { title: "Translating Epigenetic Research into Accessible Patient Narratives", category: "Editorial", date: "Oct 15, 2026", thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Archive Index
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Chronological journal entries.
          </h2>
        </div>

        <div className="space-y-4">
          {articles.map((art, i) => (
            <div key={i} className="bg-[#e8f0ec] rounded-[20px] p-4 flex items-center justify-between gap-6 hover:bg-[#e8f0ec]/80 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <img src={art.thumb} alt={art.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold mb-1">
                    <span>{art.category}</span>
                    <span>•</span>
                    <span className="text-[#122420]/60">{art.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#122420] group-hover:text-[#2a7a6d] transition-colors">
                    {art.title}
                  </h3>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47] group-hover:bg-[#1d4f47] group-hover:text-[#faf6f0] transition-colors flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
