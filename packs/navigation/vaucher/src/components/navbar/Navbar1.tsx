import React, { useState } from 'react';
import { Compass, Search, Menu, X } from 'lucide-react';

export function Navbar1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#f4f4f2] border-b border-[#d0d0cc] relative">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <div className="flex items-center space-x-3">
          <Compass className="w-5 h-5 text-[#2e5e8e]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-medium text-[#232a30]">
            Vaucher & Fils <span className="text-[#2e5e8e]">·</span> Genève
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Atelier', 'Calibres', 'Complications', 'Chronometry', 'Heritage'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.25em] text-[#232a30]/80 hover:text-[#2e5e8e] transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Blued-steel CTA & Ref */}
        <div className="hidden md:flex items-center space-x-6">
          <span className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.2em]">REF. 5711-A</span>
          <button className="bg-[#2e5e8e] text-white text-[11px] font-mono tracking-[0.2em] px-4 py-2 hover:bg-[#232a30] transition-colors rounded-none flex items-center space-x-2">
            <span>INQUIRE</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#232a30] p-1"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f4f4f2] border-b border-[#d0d0cc] px-6 py-4 space-y-3">
          {['Atelier', 'Calibres', 'Complications', 'Chronometry', 'Heritage'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-xs uppercase tracking-[0.25em] text-[#232a30] py-2 border-b border-[#d0d0cc]/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2 flex justify-between items-center">
            <span className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.2em]">REF. 5711-A</span>
            <button className="bg-[#2e5e8e] text-white text-[11px] font-mono tracking-[0.2em] px-4 py-2">
              INQUIRE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
