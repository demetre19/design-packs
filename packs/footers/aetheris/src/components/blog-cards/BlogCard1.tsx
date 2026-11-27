import React from 'react';

export function BlogCard1() {
  const articles = [
    { tag: 'HOROLOGY', date: 'OCTOBER 2026', title: 'The Evolution of the Free-Sprung Balance Wheel', excerpt: 'Examining thermal stability and isobaric oscillations in high-frequency escapements.' },
    { tag: 'VAULTS', date: 'NOVEMBER 2026', title: 'Subterranean Physics: Designing Seismic Strongrooms', excerpt: 'How deep-earth isolation protects physical assets against micro-vibrations and electromagnetic pulses.' },
    { tag: 'ATELIER', date: 'NOVEMBER 2026', title: 'Hand-Engraving the Guilloché Dial: A Masterclass', excerpt: 'An intimate look at rose-engine turning and antique burin cutting in our Geneva workshop.' }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">THE JOURNAL</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Dispatches from the Atelier</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article key={i} className="bg-[#13171c] border border-white/10 flex flex-col justify-between group cursor-pointer">
              <div className="h-48 bg-[#0b0d10] border-b border-white/10 relative p-4 flex items-center justify-center">
                <span className="text-[10px] font-mono text-[#d4b06a]">PLATE // 0{i + 1}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#7a8494] mb-3">
                  <span className="text-[#d4b06a]">{a.tag}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#ece8e1] mb-3 group-hover:text-[#d4b06a] transition-colors">{a.title}</h3>
                <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{a.excerpt}</p>
              </div>
              <div className="px-6 pb-6 pt-0 text-[11px] font-mono text-[#d4b06a]">
                READ ARTICLE →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
