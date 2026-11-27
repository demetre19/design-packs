import React from 'react';

export function Testimonial2() {
  const reviews = [
    { quote: "A tour de force of minimalist publishing. Every page feels like an architectural blueprint.", author: "LE MONDE DES ARTS", date: "Q1 2026" },
    { quote: "Stark, fearless, and impeccably curated. VAULT sets the gold standard for editorial design.", author: "TOKYO DESIGN QUARTERLY", date: "ISSUE 08" },
    { quote: "The absolute pinnacle of print-native aesthetics. An instant collector's item.", author: "PARIS FASHION REVIEW", date: "SPECIAL EDITION" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>PRESS WALL // CRITICAL REVIEWS</span>
          <span>GLOBAL RECEPTION</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="border border-black p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono uppercase mb-4 text-zinc-500">
                  <span>REVIEW 0{i+1}</span>
                  <span>{r.date}</span>
                </div>
                <p className="text-xs font-mono leading-relaxed text-zinc-800 mb-6 italic">
                  "{r.quote}"
                </p>
              </div>
              <div className="border-t border-black pt-4">
                <span className="text-xs font-mono uppercase tracking-widest block font-bold">{r.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
