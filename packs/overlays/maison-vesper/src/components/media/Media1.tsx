import React from 'react';

export const Media1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-[#a68a64] border-b border-[#a68a64]/20 pb-3">
          <span>PLANCHE ÉDITORIALE N° 01</span>
          <span>PARIS — RUE CAMBON</span>
        </div>

        <div className="aspect-[16/9] bg-[#241d18] relative overflow-hidden border border-[#a68a64]/30">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
            alt="Editorial plate full bleed"
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>

        <div className="flex justify-between items-baseline pt-2">
          <p className="font-serif italic text-lg text-[#1a1512]">
            "L'ombre et la lumière sur la soie duchesse brute lors de la répétition générale."
          </p>
          <span className="font-mono text-xs text-[#a68a64]">FIG. 01</span>
        </div>
      </div>
    </section>
  );
};
