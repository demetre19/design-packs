import React from 'react';

export const Testimonial1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-28 px-6 border-b border-[#a68a64]/30 text-center relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.4em] text-[#a68a64]">
        TÉMOIGNAGE — ÉDITION CRITIQUE
      </div>

      <div className="max-w-4xl mx-auto space-y-8 mt-4">
        <span className="font-serif text-6xl text-[#a68a64] leading-none block">“</span>

        <p className="font-serif italic text-3xl md:text-5xl font-light text-[#1a1512] leading-tight">
          "Le travail des ateliers Vesper redéfinit la notion même du luxe contemporain : une discrétion absolue alliée à une perfection de coupe inégalée à Paris."
        </p>

        <div className="w-12 h-[1px] bg-[#a68a64] mx-auto"></div>

        <div className="text-xs uppercase tracking-[0.25em] text-[#1a1512]/70">
          — Hélène de Montmirail <span className="text-[#a68a64] mx-2">/</span> Critique de Mode, Paris
        </div>
      </div>
    </section>
  );
};
