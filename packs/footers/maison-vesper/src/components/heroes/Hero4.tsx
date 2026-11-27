import React from 'react';

export const Hero4: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] border-b border-[#a68a64]/30 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
        <div className="p-12 lg:p-20 flex flex-col justify-center space-y-8 bg-[#faf7f2]">
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
            <span>FRANCE — PARIS VII</span>
            <span>—</span>
            <span>ÉDITION SPÉCIALE</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-light text-[#1a1512] leading-tight">
            Le geste parfait <br /><span className="italic font-normal">sans compromis.</span>
          </h1>

          <p className="text-xs uppercase tracking-[0.2em] text-[#1a1512]/70 leading-relaxed font-light max-w-md">
            Une exploration de la silhouette contemporaine à travers des étoffes d'exception tissées exclusivement pour la Maison Vesper en Lombardie et à Lyon.
          </p>

          <div className="pt-4">
            <a href="#" className="inline-block text-xs uppercase tracking-[0.25em] bg-[#1a1512] text-[#faf7f2] px-8 py-3.5 hover:bg-[#a68a64] transition-colors">
              Acquérir la pièce
            </a>
          </div>
        </div>

        <div className="relative bg-[#241d18] min-h-[400px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
            alt="Edge bled editorial"
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute top-6 right-6 bg-[#faf7f2]/90 backdrop-blur-sm px-3 py-1 text-[9px] font-mono tracking-[0.2em] text-[#1a1512]">
            N° 04 — PLATEAU D'ATELIER
          </div>
        </div>
      </div>
    </section>
  );
};
