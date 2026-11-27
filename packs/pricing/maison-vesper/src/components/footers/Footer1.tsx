import React from 'react';

export const Footer1: React.FC = () => {
  return (
    <footer className="w-full bg-[#241d18] text-[#faf7f2] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#faf7f2]/15">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl tracking-[0.2em] font-light">MAISON VESPER</h3>
          <p className="text-xs uppercase tracking-[0.15em] text-[#faf7f2]/70 leading-relaxed font-light">
            Haute couture parisienne et atelier de création sur-mesure depuis 1924.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#a68a64]">Atelier</h4>
          <ul className="space-y-2 text-xs uppercase tracking-[0.15em] text-[#faf7f2]/70">
            <li><a href="#" className="hover:text-[#faf7f2]">Sur-Mesure</a></li>
            <li><a href="#" className="hover:text-[#faf7f2]">Collections</a></li>
            <li><a href="#" className="hover:text-[#faf7f2]">Savoir-Faire</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#a68a64]">Salon</h4>
          <ul className="space-y-2 text-xs uppercase tracking-[0.15em] text-[#faf7f2]/70">
            <li>32 Rue Cambon</li>
            <li>75001 Paris, France</li>
            <li>+33 1 42 68 00 00</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#a68a64]">Légal</h4>
          <ul className="space-y-2 text-xs uppercase tracking-[0.15em] text-[#faf7f2]/70">
            <li><a href="#" className="hover:text-[#faf7f2]">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-[#faf7f2]">Confidentialité</a></li>
            <li><a href="#" className="hover:text-[#faf7f2]">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#faf7f2]/50">
        <span>© 2026 MAISON VESPER. TOUS DROITS RÉSERVÉS.</span>
        <span>PARIS • MILAN • TOKYO</span>
      </div>
    </footer>
  );
};
