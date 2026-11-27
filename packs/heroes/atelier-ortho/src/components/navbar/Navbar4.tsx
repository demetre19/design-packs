import React, { useState } from 'react';
import { ChevronDown, Layers, FileCode, CheckCircle2, Sliders } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1b3a5c] text-white font-mono text-xs uppercase tracking-wider relative border-b border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="border border-white/40 p-1 bg-[#142d48]">
            <Layers className="w-4 h-4 text-cyan-300" />
          </div>
          <div>
            <span className="font-bold tracking-widest text-sm">ATELIER ORTHOGONAL</span>
            <div className="text-[9px] text-cyan-300">DWG: DETAIL PANEL NAVBAR</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border border-white/30 px-3.5 py-1.5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-300" />
              <span>Detail Index [04]</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-[#142d48] border border-white/30 shadow-2xl z-50 p-3 text-[11px]">
                <div className="text-[9px] text-cyan-300 border-b border-white/20 pb-1 mb-2 flex justify-between">
                  <span>SUBSYSTEM SELECTOR</span>
                  <span>REV 3.2</span>
                </div>
                <div className="space-y-1.5">
                  <a href="#sub1" className="block p-1.5 hover:bg-white/10 flex items-center justify-between">
                    <span>01. Foundation Grid</span>
                    <span className="text-[9px] text-cyan-300">A-101</span>
                  </a>
                  <a href="#sub2" className="block p-1.5 hover:bg-white/10 flex items-center justify-between">
                    <span>02. Steel Framing Matrix</span>
                    <span className="text-[9px] text-cyan-300">B-202</span>
                  </a>
                  <a href="#sub3" className="block p-1.5 hover:bg-white/10 flex items-center justify-between">
                    <span>03. Facade Glazing Details</span>
                    <span className="text-[9px] text-cyan-300">C-303</span>
                  </a>
                  <a href="#sub4" className="block p-1.5 hover:bg-white/10 flex items-center justify-between">
                    <span>04. HVAC & Duct Routing</span>
                    <span className="text-[9px] text-cyan-300">D-404</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <button className="border border-cyan-300 bg-cyan-400 text-[#1b3a5c] px-4 py-1.5 font-bold hover:bg-white transition-colors cursor-pointer">
            APPROVE DWG
          </button>
        </div>
      </div>
    </nav>
  );
}
