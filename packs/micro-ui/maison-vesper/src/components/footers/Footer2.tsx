import React from 'react';

export const Footer2: React.FC = () => {
  return (
    <footer className="w-full bg-[#faf7f2] py-20 px-6 border-t border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#a68a64]/30 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-3xl font-light text-[#1a1512]">MAISON VESPER</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 mt-2">Colophon de l'Édition</p>
          </div>
          <div className="font-mono text-xs text-[#1a1512]/70 space-y-1">
            <div>32 Rue Cambon, 75001 Paris</div>
            <div>Salon d'essayage sur rendez-vous</div>
          </div>
          <div className="text-right font-mono text-xs text-[#a68a64]">
            <div>N° 04 — COLOPHON</div>
            <div>IMPRIMÉ EN FRANCE</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] text-[#1a1512]/60">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#1a1512]">Instagram</a>
            <a href="#" className="hover:text-[#1a1512]">Journal</a>
            <a href="#" className="hover:text-[#1a1512]">Contact Privé</a>
          </div>
          <span>© 2026 MAISON VESPER — TOUS DROITS RÉSERVÉS</span>
        </div>
      </div>
    </footer>
  );
};
