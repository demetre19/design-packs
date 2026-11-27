import React from 'react';

export const Cta3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="font-mono text-xs text-[#a68a64]">N° 03 — APPEL MINIMAL</span>
        <h2 className="font-serif text-3xl font-light text-[#1a1512]">Découvrez notre salon de la rue Cambon.</h2>
        <div className="pt-2">
          <a href="#" className="text-xs uppercase tracking-[0.25em] border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64]">
            Consulter le calendrier →
          </a>
        </div>
      </div>
    </section>
  );
};
