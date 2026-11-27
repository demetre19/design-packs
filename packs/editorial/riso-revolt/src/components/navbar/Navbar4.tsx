import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Sparkles, Grid } from 'lucide-react';

export default function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#fffdf5] border-b-3 border-[#111111] relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#ffd92e] border-2 border-[#111111] shadow-hard-sm flex items-center justify-center font-grotesk font-black">
            RR
          </div>
          <span className="font-grotesk font-extrabold text-lg tracking-tight">RISO REVOLT</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase px-3 py-1.5 bg-white border-2 border-[#111111] shadow-hard-sm"
            >
              <span>DISCIPLINES</span>
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border-3 border-[#111111] shadow-hard-lg p-3 z-50">
                <div className="font-mono text-[10px] uppercase text-[#111111]/60 pb-2 border-b-2 border-[#111111] mb-2">
                  // CORE SERVICES
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs font-bold">
                  <a href="#riso" className="p-2 hover:bg-[#ffd92e] border border-transparent hover:border-[#111111] flex items-center justify-between">
                    <span>01. Riso Printmaking</span>
                    <ExternalLink size={12} />
                  </a>
                  <a href="#digital" className="p-2 hover:bg-[#ffd92e] border border-transparent hover:border-[#111111] flex items-center justify-between">
                    <span>02. Brutalist Web UX</span>
                    <ExternalLink size={12} />
                  </a>
                  <a href="#brand" className="p-2 hover:bg-[#ffd92e] border border-transparent hover:border-[#111111] flex items-center justify-between">
                    <span>03. Identity Systems</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#works" className="hidden sm:inline-block font-mono text-xs font-bold uppercase hover:underline">Works</a>
          <a href="#about" className="hidden sm:inline-block font-mono text-xs font-bold uppercase hover:underline">Studio</a>

          <button className="btn-brutal bg-[#ff6b5e] text-white font-grotesk font-black text-xs px-4 py-2">
            CLIENT LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}
