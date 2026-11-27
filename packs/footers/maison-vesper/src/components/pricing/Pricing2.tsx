import React from 'react';

export const Pricing2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#a68a64]/20 pb-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">COLLECTION HIVER — TARIF SAISONNIER</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512] mt-1">L'Offre Automnale</h2>
          </div>
          <span className="font-mono text-xs text-[#1a1512]/60 mt-2 md:mt-0">VALIDITÉ: 31 DÉCEMBRE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-[#a68a64]/30 p-8 bg-[#faf7f2] space-y-6">
            <div className="flex justify-between items-baseline border-b border-[#a68a64]/20 pb-4">
              <span className="font-serif text-2xl font-light text-[#1a1512]">Le Manteau Cachemire</span>
              <span className="font-serif text-3xl text-[#1a1512]">3 800 €</span>
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
              Cachemire double face non doublé, cousu main selon la technique traditionnelle de Biella. Boutons en corne véritable.
            </p>
            <div className="pt-2">
              <a href="#" className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64]">
                Commander cette pièce →
              </a>
            </div>
          </div>

          <div className="border border-[#a68a64]/30 p-8 bg-[#faf7f2] space-y-6">
            <div className="flex justify-between items-baseline border-b border-[#a68a64]/20 pb-4">
              <span className="font-serif text-2xl font-light text-[#1a1512]">Le Costume Tailleur</span>
              <span className="font-serif text-3xl text-[#1a1512]">4 200 €</span>
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
              Laine vierge Super 160s, veste structurée à épaulettes souples et pantalon taille haute à pinces anglaises.
            </p>
            <div className="pt-2">
              <a href="#" className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64]">
                Commander cette pièce →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
