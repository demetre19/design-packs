/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Navbar4 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between border-x border-[#0a0a0a]">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-[#e30613]"></div>
          <span className="font-bold text-base tracking-tight uppercase">HAUS DER FORM</span>
        </div>

        <div className="flex items-center space-x-6 text-xs font-mono uppercase tracking-widest">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex items-center space-x-2 py-2 px-3 border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-[#e30613] inline-block"></span>
              <span>Index Catalog</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-64 bg-[#ffffff] border border-[#0a0a0a] shadow-none z-50">
                <div className="p-3 border-b border-[#0a0a0a] text-[9px] text-[#e30613] font-mono uppercase tracking-[0.2em]">
                  Select Specimen Category
                </div>
                <a href="#cat-1" className="block p-3 border-b border-[#0a0a0a]/20 hover:bg-[#0a0a0a] hover:text-[#ffffff] text-xs">
                  <span className="text-[#e30613] mr-2">01.</span> Grotesque Typefaces
                </a>
                <a href="#cat-2" className="block p-3 border-b border-[#0a0a0a]/20 hover:bg-[#0a0a0a] hover:text-[#ffffff] text-xs">
                  <span className="text-[#e30613] mr-2">02.</span> Grid Structures
                </a>
                <a href="#cat-3" className="block p-3 hover:bg-[#0a0a0a] hover:text-[#ffffff] text-xs">
                  <span className="text-[#e30613] mr-2">03.</span> Poster Archives
                </a>
              </div>
            )}
          </div>

          <a href="#docs" className="hidden md:inline-block hover:text-[#e30613] transition-colors">Documentation</a>
          <a href="#system" className="px-4 py-2 bg-[#0a0a0a] text-[#ffffff] hover:bg-[#e30613] transition-colors">System v4</a>
        </div>
      </div>
    </header>
  );
};
