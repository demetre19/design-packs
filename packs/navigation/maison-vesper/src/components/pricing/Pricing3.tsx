import React from 'react';

export const Pricing3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-3xl mx-auto border-2 border-[#a68a64]/40 p-10 md:p-16 relative bg-[#faf7f2] text-center space-y-8">
        <div className="absolute inset-2 border border-[#a68a64]/20 pointer-events-none"></div>
        <div className="absolute top-6 left-6 text-[#a68a64] font-mono text-xs">×</div>
        <div className="absolute top-6 right-6 text-[#a68a64] font-mono text-xs">×</div>

        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#a68a64] block">
          CARTE D'OFFRE GRAVÉE — EXCLUSIVITÉ
        </span>

        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1512]">
          L'Abonnement Annuel VIP
        </h2>

        <p className="font-serif italic text-xl text-[#1a1512]/80 max-w-xl mx-auto">
          "Accès illimité aux collections privées, avant-premières des défilés parisiens et service de conciergerie vestimentaire dédié."
        </p>

        <div className="font-serif text-5xl text-[#1a1512] py-2">
          18 500 € <span className="text-xs font-sans tracking-widest text-[#a68a64] uppercase font-normal">/ An</span>
        </div>

        <div className="pt-4">
          <a href="#" className="inline-block text-xs uppercase tracking-[0.25em] bg-[#1a1512] text-[#faf7f2] px-10 py-4 hover:bg-[#a68a64] transition-colors">
            Souscrire au Cercle Vesper
          </a>
        </div>
      </div>
    </section>
  );
};
