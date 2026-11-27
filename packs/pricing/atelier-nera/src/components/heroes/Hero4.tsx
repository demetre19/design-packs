import React from 'react';

export function Hero4() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-36 text-center">
      <div className="text-[9px] tracking-widest uppercase text-black/40 mb-8">atelier nera studio</div>
      <h1 className="font-light text-5xl md:text-7xl tracking-tighter lowercase max-w-3xl mx-auto mb-8 leading-[1.1]">
        quiet confidence in every pixel.
      </h1>
      <p className="font-light text-black/60 text-sm md:text-base max-w-md mx-auto mb-12">
        A boutique design consultancy crafting singular digital identities for luxury houses and independent publishers.
      </p>
      <div className="flex justify-center gap-6">
        <a href="#work" className="px-6 py-2.5 bg-black text-white text-xs font-light tracking-wide lowercase hover:bg-black/80 transition-colors">
          view projects
        </a>
        <a href="#about" className="px-6 py-2.5 border border-black/20 text-xs font-light tracking-wide lowercase hover:border-black transition-colors">
          our ethos
        </a>
      </div>
    </section>
  );
}
