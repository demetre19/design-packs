import React, { useState } from 'react';
import { Layers, ChevronDown, Clock } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#f4f4f2] border-b border-[#d0d0cc]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Exhibition caseback style bordered frame with screw-head dots */}
        <div className="flex items-center space-x-3 screw-corner px-3 py-1.5 border border-[#232a30]/25 bg-[#1c2128]/5">
          <Clock className="w-4 h-4 text-[#2e5e8e]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#232a30] font-semibold">
            VAUCHER ATELIER
          </span>
        </div>

        <div className="flex items-center space-x-8">
          {/* Dropdown in screw-corner panel */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#232a30] hover:text-[#2e5e8e] transition-colors py-1 px-3 border border-[#d0d0cc] bg-white/50"
            >
              <span>Collections</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1c2128] text-white border border-[#2e5e8e] p-2 shadow-xl z-50">
                {['Perpetual Calendar', 'Split-Seconds Chronograph', 'Tourbillon Souverain', 'Grand Sport Officer'].map((sub) => (
                  <a
                    key={sub}
                    href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 text-[11px] font-mono tracking-[0.2em] hover:bg-[#2e5e8e]/30 transition-colors text-white/90"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#heritage" className="text-xs uppercase tracking-[0.25em] text-[#232a30]/80 hover:text-[#2e5e8e]">
            Heritage
          </a>
          <a href="#spec" className="text-xs uppercase tracking-[0.25em] text-[#232a30]/80 hover:text-[#2e5e8e]">
            Specification
          </a>

          <button className="bg-[#2e5e8e] text-white text-[11px] font-mono tracking-[0.2em] px-4 py-2 hover:bg-[#232a30] transition-colors">
            ACQUIRE
          </button>
        </div>
      </div>
    </header>
  );
}
