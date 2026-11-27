import React from 'react';

export const Testimonial2: React.FC = () => {
  const reviews = [
    { quote: "Une précision chirurgicale dans les essayages. Chaque vêtement devient une seconde peau.", author: "Comtesse de Valençay" },
    { quote: "Le summum du chic parisien. Rien n'est superflu, tout est d'une élégance fulgurante.", author: "Marc D., Collectionneur" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">REVUE DE PRESSE & CLIENTS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Paroles d'Exception</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((r, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 p-10 bg-[#faf7f2] relative space-y-6">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-[#a68a64]">N° 0{idx + 1}</div>
              <p className="font-serif italic text-xl md:text-2xl text-[#1a1512] leading-relaxed">
                "{r.quote}"
              </p>
              <div className="pt-4 border-t border-[#a68a64]/20 text-xs uppercase tracking-[0.2em] text-[#a68a64]">
                — {r.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
