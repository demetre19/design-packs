import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 relative overflow-hidden border-b border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#d4b06a]">◆</span>
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4b06a] uppercase">EST. MMXXIV — N 51°30' W 0°05'</span>
          <span className="text-[#d4b06a]">◆</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-wide text-[#ece8e1] max-w-4xl leading-tight mb-8">
          The Mastery of Absolute Time & Secure Custody
        </h1>

        <p className="font-sans text-[#7a8494] text-base max-w-xl mb-10 leading-relaxed">
          Crafting singular mechanical complications and impenetrable private vaults for discerning collectors across the globe.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#explore"
            className="px-8 py-3.5 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all flex items-center gap-2"
          >
            EXPLORE COLLECTIONS <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#inquire"
            className="px-8 py-3.5 rounded-full border border-white/20 text-[#ece8e1] text-xs font-mono tracking-widest hover:border-white/60 transition-all"
          >
            REQUEST CONSULTATION
          </a>
        </div>

        {/* Dark Media Plate with Gold Corner Marks */}
        <div className="w-full max-w-4xl h-96 bg-[#13171c] border border-white/10 relative p-4 flex items-center justify-center">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4b06a]" />
          
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-widest text-[#7a8494] block mb-2">PLATE 01 // TOURBILLON CHRONOMETER REF. 884</span>
            <div className="w-48 h-[1px] bg-[#d4b06a]/40 mx-auto my-4" />
            <span className="font-serif text-[#ece8e1] italic tracking-wider text-lg">Aetheris Grand Tourbillon Souverain</span>
          </div>
        </div>
      </div>
    </section>
  );
}
