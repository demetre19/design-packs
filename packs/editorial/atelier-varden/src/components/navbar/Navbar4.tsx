import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] relative font-sans">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="font-medium text-lg tracking-tight text-[#16171a]">ATELIER VARDEN</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1.5 text-sm text-[#16171a] hover:text-[#b5482e] focus:outline-none"
            >
              <span>Selected Works</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-4 w-72 bg-[#f0efeb] border border-[#e2e0d8] p-4 shadow-none z-50">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3 pb-2 border-b border-[#e2e0d8]">
                  Portfolio Index 2026
                </div>
                <div className="space-y-2.5 text-xs font-mono">
                  <a href="#villas" className="block text-[#16171a] hover:text-[#b5482e] flex justify-between items-center">
                    <span>01. Coastal Villas</span>
                    <span className="text-stone-400">4 pd</span>
                  </a>
                  <a href="#pavilions" className="block text-[#16171a] hover:text-[#b5482e] flex justify-between items-center">
                    <span>02. Alpine Pavilions</span>
                    <span className="text-stone-400">2 pd</span>
                  </a>
                  <a href="#urban" className="block text-[#16171a] hover:text-[#b5482e] flex justify-between items-center">
                    <span>03. Urban Residences</span>
                    <span className="text-stone-400">6 pd</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#practice" className="text-sm text-[#16171a] hover:text-[#b5482e]">Practice</a>
          <a href="#journal" className="text-sm text-[#16171a] hover:text-[#b5482e]">Journal</a>
        </div>

        <div>
          <a href="#contact" className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-[#16171a] hover:text-[#b5482e]">
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#b5482e]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
