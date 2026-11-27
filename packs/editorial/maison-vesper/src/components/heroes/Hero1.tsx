import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-20 px-6 border-b border-[#a68a64]/30 relative overflow-hidden">
      {/* Atelier cross-stitch marks */}
      <div className="absolute top-6 left-6 text-[#a68a64] font-mono text-xs select-none">×</div>
      <div className="absolute top-6 right-6 text-[#a68a64] font-mono text-xs select-none">×</div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column text */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
            <span>N° 04</span>
            <span>—</span>
            <span>ATELIER DE HAUTE COUTURE</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-light text-[#1a1512] leading-[1.05] tracking-tight">
            L’art de la <span className="italic font-normal">silence</span> et de la précision pure.
          </h1>

          <p className="font-serif italic text-xl text-[#1a1512]/85 max-w-xl leading-relaxed">
            "Chaque pièce naît d’une tension délicate entre la rigueur de l’architecture parisienne et la fluidité absolue de la soie brute."
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.2em]">
            <a href="#" className="inline-flex items-center space-x-2 text-[#1a1512] border-b border-[#1a1512] pb-1 hover:border-[#a68a64] hover:text-[#a68a64] transition-colors">
              <span>Découvrir la collection</span>
              <ArrowRight size={14} className="stroke-[1.5]" />
            </a>
            <a href="#" className="text-[#1a1512]/60 hover:text-[#1a1512] transition-colors pb-1">
              Prendre rendez-vous au salon
            </a>
          </div>
        </div>

        {/* Right column: Full-bleed editorial plate */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 border border-[#a68a64]/30 pointer-events-none"></div>
          <div className="aspect-[3/4] bg-[#241d18] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
              alt="Maison Vesper Lookbook Plate" 
              className="w-full h-full object-cover opacity-90 contrast-[1.05] hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-4 left-4 bg-[#faf7f2]/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-mono tracking-[0.2em] text-[#1a1512]">
              PLANCHE N° 09 — SOIE & OMBRE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
