import React from 'react';

export const Hero5: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-20 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block">
            MAISON VESPER — ARCHIVE 05
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1a1512] leading-tight">
            L'Architecture <br /><span className="italic">du Vêtement.</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
            Une silhouette sculpturale où chaque couture est pensée comme un hommage à l'art moderne parisien.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64]">
              Découvrir la monographie
            </a>
          </div>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="aspect-[16/9] bg-[#241d18] relative overflow-hidden border border-[#a68a64]/30">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200" 
              alt="Fashion plate tall"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-[#faf7f2] px-3 py-1 text-[9px] font-mono tracking-[0.2em] text-[#1a1512]">
              ÉDITION LIMITÉE — 1/50
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
