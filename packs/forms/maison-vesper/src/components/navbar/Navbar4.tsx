import React, { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';

export const Navbar4: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#faf7f2] border-b border-[#a68a64]/30 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <a href="#" className="font-serif text-2xl tracking-[0.2em] font-light text-[#1a1512]">
            VESPER
          </a>
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em]">
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 hover:text-[#a68a64] transition-colors py-1"
              >
                <span>Collections Édition</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#faf7f2] border border-[#a68a64]/40 p-6 shadow-none z-50 animate-fade-in">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#a68a64] mb-3 pb-1 border-b border-[#a68a64]/20">
                    Saison en cours
                  </div>
                  <ul className="space-y-3 text-xs uppercase tracking-[0.15em] font-light">
                    <li><a href="#" className="block hover:text-[#a68a64]">Automne / Hiver N° 04</a></li>
                    <li><a href="#" className="block hover:text-[#a68a64]">Haute Soie & Cachemire</a></li>
                    <li><a href="#" className="block hover:text-[#a68a64]">Accessoires & Joaillerie</a></li>
                    <li><a href="#" className="block hover:text-[#a68a64] text-[#a68a64]">Archive Rétrospective</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-[#a68a64] transition-colors">L'Atelier</a>
            <a href="#" className="hover:text-[#a68a64] transition-colors">Maison</a>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs uppercase tracking-[0.15em]">
          <span className="text-[10px] text-[#a68a64] font-mono hidden sm:inline">ÉDITION LIMITÉE</span>
          <a href="#" className="hover:text-[#a68a64]"><ShoppingBag size={18} className="stroke-[1.5]" /></a>
        </div>
      </div>
    </header>
  );
};
