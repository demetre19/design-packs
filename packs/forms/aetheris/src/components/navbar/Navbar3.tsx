import React from 'react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#0b0d10] border-b border-white/10 py-4 px-6 flex flex-col items-center gap-3">
      <div className="text-center">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-1">MAISON DE HAUTE HORLOGERIE</span>
        <h1 className="font-serif text-2xl tracking-widest text-[#ece8e1]">AETHERIS & CO.</h1>
      </div>
      <div className="w-full max-w-2xl border-t border-white/10 pt-3 flex items-center justify-center gap-8 text-xs font-mono tracking-wider text-[#7a8494]">
        <a href="#timepieces" className="hover:text-[#d4b06a] transition-colors">TIMEPIECES</a>
        <span className="text-[#d4b06a]">◆</span>
        <a href="#vaults" className="hover:text-[#d4b06a] transition-colors">SECURE VAULTS</a>
        <span className="text-[#d4b06a]">◆</span>
        <a href="#provenance" className="hover:text-[#d4b06a] transition-colors">PROVENANCE</a>
        <span className="text-[#d4b06a]">◆</span>
        <a href="#journal" className="hover:text-[#d4b06a] transition-colors">JOURNAL</a>
      </div>
    </header>
  );
}
