import React from 'react';

export const Content10: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-28 md:py-36 px-6 border-b border-[#a68a64]/30 relative overflow-hidden">
      {/* Cornered quiet editorial classification */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.3em] uppercase text-[#a68a64] mb-10">
          <span>CONTENU N° 10 — HORS-TEXTE TYPOGRAPHIQUE</span>
          <span>SANS ILLUSTRATION</span>
        </div>

        {/* Enormous Full-Width Breaking Statement */}
        <div className="relative py-6">
          {/* Fine needle-line threading behind/between the monumental letterforms */}
          <div
            className="absolute left-0 right-12 top-1/2 h-px border-t border-dashed border-[#a68a64]/60 pointer-events-none"
            aria-hidden="true"
          />

          <h2 className="font-serif font-light text-[#1a1512] text-[clamp(3.2rem,8.2vw,7.4rem)] leading-[0.94] tracking-tight relative z-10 pr-8 md:pr-16">
            Rien de trop, <br />
            <span className="italic font-normal text-[#a68a64] pl-8 sm:pl-20 md:pl-36 inline-block">
              sinon la grâce
            </span>{' '}
            <br />
            <span className="pl-2 sm:pl-12 inline-block">du pli.</span>
          </h2>

          {/* Rotated tiny attribution tucked on the far right edge */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 origin-center rotate-90 text-[9px] font-mono tracking-[0.35em] uppercase text-[#1a1512]/60 whitespace-nowrap">
            MAXIME D’ATELIER — MAISON VESPER 1931
          </div>
        </div>

        {/* Unexpected bottom-right tucked annotation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-6 border-t border-[#a68a64]/25">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#1a1512]/60">
            × CORPS 118 PT · CORMORANT GARAMOND MAIGRE
          </div>
          <div className="max-w-xs text-right font-serif italic text-sm text-[#1a1512]/75">
            Note de bas de page : prononcé lors du premier essayage de la robe « Ombres d’Automne », salon du premier étage.
          </div>
        </div>
      </div>
    </section>
  );
};
