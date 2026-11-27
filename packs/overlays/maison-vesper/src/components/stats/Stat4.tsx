import React from 'react';

export const Stat4: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-4xl mx-auto border-y border-[#a68a64]/30 py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf7f2] px-4 font-mono text-[10px] text-[#a68a64] tracking-[0.3em]">
          INDEX STATISTIQUE N° 04
        </div>

        <div className="space-y-3">
          <div className="font-serif text-5xl font-light text-[#1a1512]">100%</div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#1a1512]/70 font-mono">Fait Main à Paris</div>
        </div>

        <div className="space-y-3">
          <div className="font-serif text-5xl font-light text-[#1a1512]">50</div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#1a1512]/70 font-mono">Pièces par Collection</div>
        </div>

        <div className="space-y-3">
          <div className="font-serif text-5xl font-light text-[#1a1512]">1924</div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#1a1512]/70 font-mono">Héritage Artisanal</div>
        </div>
      </div>
    </section>
  );
};
