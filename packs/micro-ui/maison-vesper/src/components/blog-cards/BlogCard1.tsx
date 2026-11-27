import React from 'react';

export const BlogCard1: React.FC = () => {
  const articles = [
    { num: "01", date: "14 OCT 2026", title: "L'Art du Fil de Soie à Lyon", excerpt: "Visite confidentielle dans les ateliers historiques où le ver à soie façonne l'avenir de la haute couture." },
    { num: "02", date: "02 NOV 2026", title: "L'Architecture des Épaulettes", excerpt: "Comment la structure interne d'une veste définit la prestance et la liberté de mouvement." },
    { num: "03", date: "19 NOV 2026", title: "Le Salon de la Rue Cambon", excerpt: "Récit d'un essayage sur-mesure au cœur du premier arrondissement parisien." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#a68a64]/20 pb-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">JOURNAL DE LA MAISON</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512] mt-1">Chroniques & Regards</h2>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a68a64]">Planches N° 01 — 03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((a, idx) => (
            <article key={idx} className="border border-[#a68a64]/30 p-6 bg-[#faf7f2] flex flex-col justify-between space-y-6 group hover:border-[#1a1512] transition-colors">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#a68a64] border-b border-[#a68a64]/20 pb-3">
                  <span>PL. N° {a.num}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-light text-[#1a1512] group-hover:text-[#a68a64] transition-colors">{a.title}</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                  {a.excerpt}
                </p>
              </div>
              <div>
                <a href="#" className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-1 hover:border-[#a68a64] hover:text-[#a68a64]">
                  Lire l'article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
