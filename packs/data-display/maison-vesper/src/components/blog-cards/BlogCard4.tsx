import React from 'react';

export const BlogCard4: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 border-b border-[#a68a64]/30 pb-10">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
            JOURNAL DE BORD — ÉDITION N° 04
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-[#1a1512] leading-tight">
            L'Art de la Retouche Invisible
          </h1>
          <div className="flex justify-center items-center space-x-6 text-xs uppercase tracking-[0.2em] text-[#1a1512]/70 pt-2">
            <span>Par Maître Laurent</span>
            <span>—</span>
            <span className="font-mono text-[#a68a64]">12 MIN DE LECTURE</span>
          </div>
        </div>

        <p className="font-serif italic text-xl text-[#1a1512]/85 leading-relaxed">
          "Lorsqu'une couture est exécutée selon les règles de l'art, elle disparaît dans le pli de l'étoffe pour ne laisser place qu'à la pureté de la ligne."
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
          Dans notre atelier parisien, la retouche n'est pas une correction, c'est un acte de parachèvement. Chaque point est calculé pour épouser les mouvements naturels du corps sans jamais contraindre l'architecture du vêtement.
        </p>
      </div>
    </section>
  );
};
