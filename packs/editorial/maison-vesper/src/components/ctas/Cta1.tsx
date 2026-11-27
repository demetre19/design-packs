import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-28 px-6 border-b border-[#a68a64]/30 text-center relative">
      <div className="absolute top-6 left-6 text-[#a68a64] font-mono text-xs">×</div>
      <div className="absolute top-6 right-6 text-[#a68a64] font-mono text-xs">×</div>

      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block">
          APPEL À L'ACTION — ÉDITION
        </span>

        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#1a1512] leading-tight">
          Entrez dans l'intimité de nos salons parisiens.
        </h2>

        <div className="pt-4">
          <a href="#" className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64] transition-colors">
            <span>Réserver votre consultation privée</span>
            <ArrowRight size={14} className="stroke-[1.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
