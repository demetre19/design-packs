import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard2() {
  const smallArticles = [
    { tag: "Clinical Practice", date: "Nov 12, 2026", title: "Integrating Biomarker Dashboards into Patient Portals" },
    { tag: "Spatial Psychology", date: "Nov 05, 2026", title: "Acoustic Warmth: Soundproofing Consultation Suites" },
    { tag: "Brand Ethics", date: "Oct 28, 2026", title: "Transparency as a Pillar of Modern Longevity Practice" }
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Featured Editorial
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Curated insights and research.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Large Article */}
          <div className="lg:col-span-7 bg-[#faf6f0] rounded-[28px] overflow-hidden shadow-sm flex flex-col justify-between group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden bg-[#e8f0ec]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold mb-3">
                <span>Lead Essay — Issue 12</span>
                <span>November 20, 2026</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#122420] mb-4 leading-tight group-hover:text-[#2a7a6d] transition-colors">
                The Architecture of Trust: How Warm Spatial Design Heals Before Consultation Begins.
              </h3>
              <p className="text-[#122420]/80 font-light text-sm leading-relaxed mb-6">
                An exploration into the somatic impact of architectural lighting, tactile wood finishes, and unhurried patient intake rituals in high-end longevity clinics.
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1d4f47]">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* List of small rows */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {smallArticles.map((sa, i) => (
              <div key={i} className="bg-[#faf6f0] rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold mb-2">
                  <span>{sa.tag}</span>
                  <span className="text-[#122420]/60">{sa.date}</span>
                </div>
                <h4 className="font-serif text-lg text-[#122420] group-hover:text-[#2a7a6d] transition-colors leading-snug">
                  {sa.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
