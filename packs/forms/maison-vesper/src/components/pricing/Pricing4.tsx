import React from 'react';

export const Pricing4: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">LIVRE DE COMPTE — COMPARATIF</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Spécifications des Prestations</h2>
        </div>

        <div className="border border-[#a68a64]/30 overflow-x-auto bg-[#faf7f2]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#a68a64]/30 text-[10px] font-mono tracking-[0.2em] text-[#a68a64]">
                <th className="p-4">Prestation</th>
                <th className="p-4">Standard</th>
                <th className="p-4">Atelier VIP</th>
                <th className="p-4">Haute Couture</th>
              </tr>
            </thead>
            <tbody className="text-xs uppercase tracking-[0.1em] text-[#1a1512]/80">
              <tr className="border-b border-[#a68a64]/15">
                <td className="p-4 font-serif text-base italic text-[#1a1512]">Lieu de confection</td>
                <td className="p-4">Atelier Parisien</td>
                <td className="p-4">Salon Privé</td>
                <td className="p-4">Studio Principal</td>
              </tr>
              <tr className="border-b border-[#a68a64]/15">
                <td className="p-4 font-serif text-base italic text-[#1a1512]">Essayages</td>
                <td className="p-4">1 Essayage</td>
                <td className="p-4">3 Essayages</td>
                <td className="p-4">Illimités (Domicile)</td>
              </tr>
              <tr className="border-b border-[#a68a64]/15">
                <td className="p-4 font-serif text-base italic text-[#1a1512]">Étoffe incluse</td>
                <td className="p-4">Soie Standard</td>
                <td className="p-4">Cachemire / Soie</td>
                <td className="p-4">Matières Rares & Exclusives</td>
              </tr>
              <tr>
                <td className="p-4 font-serif text-base italic text-[#1a1512]">Tarif indicatif</td>
                <td className="p-4 font-mono text-[#a68a64]">2 400 €</td>
                <td className="p-4 font-mono text-[#a68a64]">4 800 €</td>
                <td className="p-4 font-mono text-[#a68a64]">12 500 €+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
