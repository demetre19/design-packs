import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#0b0d10] border-t border-white/10 py-16 px-6 text-center flex flex-col items-center">
      <span className="font-serif text-xl text-[#ece8e1] tracking-widest mb-4">AETHERIS & CO.</span>
      
      <div className="flex items-center gap-3 text-[#d4b06a] mb-6">
        <span>◆</span>
        <span className="text-xs font-mono tracking-widest text-[#7a8494]">GENEVA · LONDON · TOKYO · ZURICH</span>
        <span>◆</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-xs font-mono text-[#7a8494] mb-8">
        <a href="#horology" className="hover:text-[#ece8e1] transition-colors">HOROLOGY</a>
        <a href="#vaults" className="hover:text-[#ece8e1] transition-colors">VAULTS</a>
        <a href="#provenance" className="hover:text-[#ece8e1] transition-colors">PROVENANCE</a>
        <a href="#salon" className="hover:text-[#ece8e1] transition-colors">SALON</a>
        <a href="#inquire" className="hover:text-[#ece8e1] transition-colors">INQUIRE</a>
      </div>

      <span className="text-[10px] font-mono text-[#7a8494]">© MMXXIV AETHERIS & CO. ALL RIGHTS RESERVED.</span>
    </footer>
  );
}
