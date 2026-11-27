import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b0d10] border-b border-white/10 px-8 py-4 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-widest text-[#ece8e1] text-base">AETHERIS</span>
          <span className="text-[10px] font-mono text-[#7a8494]">SYS-04</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-[#ece8e1]">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#d4b06a] transition-colors"
            >
              COLLECTIONS <ChevronDown className="w-3.5 h-3.5 text-[#d4b06a]" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-[#13171c] border border-white/10 p-4 shadow-xl z-50 flex flex-col gap-3">
                <a href="#grand-complications" className="text-xs font-mono text-[#7a8494] hover:text-[#ece8e1] transition-colors">01. Grand Complications</a>
                <a href="#tourbillon-series" className="text-xs font-mono text-[#7a8494] hover:text-[#ece8e1] transition-colors">02. Tourbillon Souverain</a>
                <a href="#chronometre" className="text-xs font-mono text-[#7a8494] hover:text-[#ece8e1] transition-colors">03. Chronomètre Souverain</a>
                <a href="#vault-editions" className="text-xs font-mono text-[#7a8494] hover:text-[#ece8e1] transition-colors">04. Vault Editions</a>
              </div>
            )}
          </div>
          <a href="#bespoke" className="hover:text-[#d4b06a] transition-colors">BESPOKE</a>
          <a href="#private-vaults" className="hover:text-[#d4b06a] transition-colors">PRIVATE VAULTS</a>
          <a href="#salon" className="hover:text-[#d4b06a] transition-colors">SALON</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
}
