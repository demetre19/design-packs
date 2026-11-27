import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#0b0d10] border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 pb-12 border-b border-white/10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-2">PRIVATE DISPATCHES</span>
          <h3 className="font-serif text-2xl text-[#ece8e1]">Receive Quarterly Horological Monographs</h3>
        </div>
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="bg-[#13171c] border border-white/20 px-4 py-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a] w-full sm:w-80"
          />
          <button className="px-6 py-3 bg-[#d4b06a] text-[#0b0d10] text-xs font-mono tracking-widest hover:bg-[#ece8e1] transition-all flex items-center justify-center gap-2">
            SUBSCRIBE <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#7a8494]">
        <span>AETHERIS & CO. — EST. MMXXIV</span>
        <span>GENEVA ATELIER · SUBTERRANEAN VAULTS</span>
      </div>
    </footer>
  );
}
