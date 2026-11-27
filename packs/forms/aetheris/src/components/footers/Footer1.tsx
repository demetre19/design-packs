import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#0b0d10] border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="font-serif text-lg text-[#ece8e1] tracking-wider block mb-4">AETHERIS & CO.</span>
          <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-4">
            Master watchmakers and subterranean vault custodians serving elite collectors worldwide.
          </p>
          <span className="text-[10px] font-mono text-[#d4b06a]">EST. MMXXIV</span>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-4">HOROLOGY</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#7a8494]">
            <li><a href="#grand" className="hover:text-[#ece8e1] transition-colors">Grand Complications</a></li>
            <li><a href="#tourbillon" className="hover:text-[#ece8e1] transition-colors">Tourbillon Souverain</a></li>
            <li><a href="#chronometre" className="hover:text-[#ece8e1] transition-colors">Chronomètre</a></li>
            <li><a href="#bespoke" className="hover:text-[#ece8e1] transition-colors">Bespoke Commissions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-4">VAULTS</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#7a8494]">
            <li><a href="#subterranean" className="hover:text-[#ece8e1] transition-colors">Subterranean Strongrooms</a></li>
            <li><a href="#quantum" className="hover:text-[#ece8e1] transition-colors">Quantum Security</a></li>
            <li><a href="#escort" className="hover:text-[#ece8e1] transition-colors">Armed Transit</a></li>
            <li><a href="#ledger" className="hover:text-[#ece8e1] transition-colors">Ledger Passport</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-4">SALONS</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#7a8494]">
            <li><span>Geneva Atelier</span></li>
            <li><span>London Vaults</span></li>
            <li><span>Tokyo Salon</span></li>
            <li><span>Zurich Strongroom</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#7a8494]">
        <span>© MMXXIV AETHERIS & CO. ALL RIGHTS RESERVED.</span>
        <span>COORDINATES: N 51°30' W 0°05'</span>
      </div>
    </footer>
  );
}
