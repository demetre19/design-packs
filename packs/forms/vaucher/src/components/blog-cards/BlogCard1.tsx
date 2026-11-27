import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    { ref: "REF. ART-01", date: "24.10.2026", title: "The Evolution of Silicon Escape Wheels", excerpt: "How microscopic material science transformed modern chronometry without compromising traditional finishing." },
    { ref: "REF. ART-02", date: "12.09.2026", title: "Hand-Chamfering Internal Angles", excerpt: "A masterclass in gentian wood shaping and diamond paste application for 45-degree bevel brilliance." },
    { ref: "REF. ART-03", date: "03.08.2026", title: "Isochronism Across Isometric Positions", excerpt: "Testing mechanical tolerances in six strict orientations to eliminate gravitational drift." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">BLOG CARD 01 · 3-COLUMN ARTICLES WITH MONO REFERENCES</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Journal & Publications</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <div key={idx} className="bg-white border border-[#d0d0cc] p-6 space-y-6 flex flex-col justify-between hover:border-[#2e5e8e] transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#232a30]/60">
                <span className="text-[#2e5e8e]">{art.ref}</span>
                <span>{art.date}</span>
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#232a30]">{art.title}</h3>
              <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
                {art.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-[#d0d0cc]/40">
              <a href="#read" className="font-mono text-xs text-[#2e5e8e] tracking-[0.2em] flex items-center space-x-2 hover:text-[#232a30]">
                <span>READ DOSSIER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
