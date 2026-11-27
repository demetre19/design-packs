import React from 'react';

export const Hero3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-28 px-6 text-center border-b border-[#a68a64]/30 relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.4em] text-[#a68a64] uppercase">
        PLANCHE HÉROÏQUE — N° III / XXIV
      </div>

      <div className="max-w-4xl mx-auto space-y-8 mt-4">
        <h1 className="font-serif italic text-5xl md:text-8xl font-light text-[#1a1512] leading-[1.1] tracking-tight">
          "La beauté réside dans l’épure absolue de la coupe."
        </h1>

        <div className="w-24 h-[1px] bg-[#a68a64] mx-auto"></div>

        <p className="text-xs uppercase tracking-[0.3em] text-[#1a1512]/70 max-w-lg mx-auto font-medium">
          Maison Vesper — Recueil d'hiver 2026. Édition numérotée pour collectionneurs d'art vestimentaire.
        </p>

        <div className="pt-6">
          <a 
            href="#" 
            className="inline-block text-xs uppercase tracking-[0.25em] border border-[#1a1512] px-8 py-3 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all"
          >
            Commander l'Édition Limitée
          </a>
        </div>
      </div>
    </section>
  );
};
