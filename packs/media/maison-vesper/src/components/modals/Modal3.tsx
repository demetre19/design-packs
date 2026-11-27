import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Modal3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 text-center">
        <button onClick={() => setIsOpen(true)} className="text-xs uppercase tracking-[0.25em] border border-[#1a1512] px-8 py-3 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all">
          Ouvrir Fiche Technique (Slide-over)
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 relative min-h-[450px]">
      <div className="absolute inset-0 bg-[#1a1512]/10 backdrop-blur-[2px] flex justify-end">
        <div className="w-full max-w-md bg-[#faf7f2] border-l border-[#a68a64]/40 p-8 h-full flex flex-col justify-between animate-fade-in">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-[#a68a64]/20 pb-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#a68a64]">FICHE DE SPÉCIFICATION</span>
              <button onClick={() => setIsOpen(false)} className="text-[#1a1512] hover:text-[#a68a64]">
                <X size={18} className="stroke-[1.5]" />
              </button>
            </div>
            <h3 className="font-serif text-3xl font-light text-[#1a1512]">Manteau Cachemire N° 04</h3>
            <ul className="space-y-3 text-xs uppercase tracking-[0.15em] text-[#1a1512]/80 font-light">
              <li>Composition : 100% Cachemire Vierge</li>
              <li>Origine : Biella, Italie</li>
              <li>Poids : 620g / mètre linéaire</li>
              <li>Entretien : Nettoyage à sec spécialisé</li>
            </ul>
          </div>
          <div className="pt-6 border-t border-[#a68a64]/20">
            <button onClick={() => setIsOpen(false)} className="w-full bg-[#1a1512] text-[#faf7f2] py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#a68a64] transition-colors">
              Fermer la Fiche
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
