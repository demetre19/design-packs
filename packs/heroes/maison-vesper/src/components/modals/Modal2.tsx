import React, { useState } from 'react';

export const Modal2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 text-center">
        <button onClick={() => setIsOpen(true)} className="text-xs uppercase tracking-[0.25em] border border-[#1a1512] px-8 py-3 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all">
          Ouvrir Modale Confirmation N° 02
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-md mx-auto border-2 border-[#a68a64]/40 bg-[#faf7f2] p-8 text-center space-y-6 relative animate-fade-in">
        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">VALIDATION D'ACHAT</div>
        <h3 className="font-serif text-2xl font-light text-[#1a1512]">Confirmer la Commande</h3>
        <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 font-light">
          Voulez-vous procéder à la validation de la pièce sur-mesure N° 04 ?
        </p>
        <div className="flex justify-center space-x-6 pt-4 text-xs uppercase tracking-[0.2em]">
          <a href="#" onClick={() => setIsOpen(false)} className="border-b border-[#1a1512] pb-1 hover:text-[#a68a64]">
            Confirmer
          </a>
          <button onClick={() => setIsOpen(false)} className="text-[#1a1512]/60 hover:text-[#1a1512]">
            Annuler
          </button>
        </div>
      </div>
    </section>
  );
};
