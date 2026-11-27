import React from 'react';

export const BlogCard2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Featured Cover Style */}
        <div className="lg:col-span-7 border border-[#a68a64]/40 p-8 bg-[#faf7f2] relative space-y-6">
          <div className="absolute top-4 left-4 text-[10px] font-mono tracking-[0.3em] text-[#a68a64]">
            DOSSIER SPÉCIAL — COUVERTURE N° 01
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-[#1a1512] text-[#faf7f2] px-2.5 py-1 inline-block mt-4">
            ÉDITION D'AUTOMNE
          </span>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1a1512] leading-tight">
            Le Silence des Étoffes : Manifeste pour une Mode Lente.
          </h3>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
            Une réflexion profonde sur l'urgence de ralentir la cadence de production et de rendre au vêtement son statut d'œuvre d'art pérenne.
          </p>
          <div className="pt-2">
            <a href="#" className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64]">
              Lire le manifeste intégral →
            </a>
          </div>
        </div>

        {/* Index Rows Right */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] pb-2 border-b border-[#a68a64]/20">
            INDEX DES ARCHIVES
          </div>
          <div className="space-y-6">
            <div className="border-b border-[#a68a64]/15 pb-4">
              <span className="text-[10px] font-mono text-[#a68a64]">01 — ESSAI</span>
              <h4 className="font-serif text-xl font-light text-[#1a1512] mt-1"><a href="#" className="hover:text-[#a68a64]">La Teinte Indigo Naturel</a></h4>
            </div>
            <div className="border-b border-[#a68a64]/15 pb-4">
              <span className="text-[10px] font-mono text-[#a68a64]">02 — HISTOIRE</span>
              <h4 className="font-serif text-xl font-light text-[#1a1512] mt-1"><a href="#" className="hover:text-[#a68a64]">Les Salons de 1924</a></h4>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#a68a64]">03 — TECHNIQUE</span>
              <h4 className="font-serif text-xl font-light text-[#1a1512] mt-1"><a href="#" className="hover:text-[#a68a64]">L'Art du Bouton Gainé</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
