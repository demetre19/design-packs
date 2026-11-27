import React from 'react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#0b0d10] border-t border-white/10 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono tracking-[0.4em] text-[#d4b06a] uppercase block mb-3">MAISON DE HAUTE HORLOGERIE</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#ece8e1] tracking-widest mb-6">AETHERIS & CO.</h1>
        <div className="w-32 h-[1px] bg-[#d4b06a] mb-6" />
        <p className="font-mono text-xs text-[#7a8494] tracking-wider">
          COORDINATES: N 51°30' W 0°05' — GENEVA ATELIER & LONDON VAULTS
        </p>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#7a8494]">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#privacy" className="hover:text-[#ece8e1] transition-colors">PRIVACY DOSSIER</a>
          <a href="#terms" className="hover:text-[#ece8e1] transition-colors">PATRONAGE TERMS</a>
          <a href="#security" className="hover:text-[#ece8e1] transition-colors">VAULT SECURITY</a>
        </div>
        <span>© MMXXIV AETHERIS & CO. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
