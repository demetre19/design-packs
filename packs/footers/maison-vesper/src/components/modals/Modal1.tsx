import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Modal1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 text-center">
        <button onClick={() => setIsOpen(true)} className="text-xs uppercase tracking-[0.25em] border border-[#1a1512] px-8 py-3 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all">
          Ouvrir la Fenêtre Modale N° 01
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-xl mx-auto border border-[#a68a64]/40 bg-[#faf7f2] p-8 md:p-12 relative shadow-none animate-fade-in">
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#1a1512] hover:text-[#a68a64]">
          <X size={20} className="stroke-[1.5]" />
        </button>

        <div className="text-center space-y-4 mb-8">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">DIALOGUE ATELIER — N° 01</span>
          <h3 className="font-serif text-3xl font-light text-[#1a1512]">Confirmation de Salon</h3>
          <div className="w-10 h-[1px] bg-[#a68a64] mx-auto"></div>
        </div>

        <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/80 text-center leading-relaxed mb-8 font-light">
          Votre demande de rendez-vous pour la collection Automne / Hiver a bien été enregistrée dans notre registre. Un maître tailleur vous contactera sous 24 heures.
        </p>

        <div className="flex justify-center space-x-4">
          <button onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.2em] bg-[#1a1512] text-[#faf7f2] px-8 py-3 hover:bg-[#a68a64] transition-colors">
            Fermer le Registre
          </button>
        </div>
      </div>
    </section>
  );
};
