import React from 'react';

export const Testimonial3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-4xl mx-auto border-y border-[#a68a64]/30 py-16 px-8 text-center space-y-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf7f2] px-4 font-mono text-[10px] text-[#a68a64] tracking-[0.3em]">
          CITATION UNIQUE
        </div>

        <p className="font-serif italic text-3xl md:text-4xl text-[#1a1512] leading-relaxed">
          "Vesper ne habille pas le corps; la maison habille l'esprit de ceux qui comprennent que le vrai luxe murmure."
        </p>

        <div className="text-xs uppercase tracking-[0.3em] text-[#a68a64]">
          — Journal du Luxe Parisien
        </div>
      </div>
    </section>
  );
};
