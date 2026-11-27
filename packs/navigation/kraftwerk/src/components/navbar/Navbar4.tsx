import React, { useState } from 'react';
import { ChevronDown, Grid, X, ExternalLink } from 'lucide-react';

export function Navbar4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none relative">
      <div className="flex items-center justify-between px-4 py-3 text-[10px] uppercase tracking-widest">
        <div className="flex items-center space-x-3">
          <span className="font-black text-xs">[KRAFTWERK.SYS]</span>
          <span className="text-[#666] hidden sm:inline">HOMOLOGATION INDEX 2026</span>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 px-3 py-1 bg-[#111111] text-[#e8e8e6] hover:bg-[#333] transition-colors cursor-pointer"
          >
            <Grid className="w-3 h-3" />
            <span>{isOpen ? 'CLOSE INDEX' : 'OPEN INDEX PANEL'}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Full data-compartment panel dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#e8e8e6] border-b-2 border-[#111111] p-6 z-50 shadow-none">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-[10px]">
            <div className="border border-[#111111] p-3 bg-white">
              <div className="font-bold border-b border-[#111111] pb-1 mb-2 flex justify-between">
                <span>[01] AERODYNAMICS</span>
                <span>A1</span>
              </div>
              <ul className="space-y-1 text-[#444]">
                <li><a href="#" className="hover:underline flex justify-between"><span>Downforce coefficient</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Venturi tunnels</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Active rear wing</span><span>→</span></a></li>
              </ul>
            </div>

            <div className="border border-[#111111] p-3 bg-white">
              <div className="font-bold border-b border-[#111111] pb-1 mb-2 flex justify-between">
                <span>[02] CHASSIS</span>
                <span>B2</span>
              </div>
              <ul className="space-y-1 text-[#444]">
                <li><a href="#" className="hover:underline flex justify-between"><span>Tubular spaceframe</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Carbon-titanium monocoque</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Pushrod suspension</span><span>→</span></a></li>
              </ul>
            </div>

            <div className="border border-[#111111] p-3 bg-white">
              <div className="font-bold border-b border-[#111111] pb-1 mb-2 flex justify-between">
                <span>[03] POWERTRAIN</span>
                <span>C3</span>
              </div>
              <ul className="space-y-1 text-[#444]">
                <li><a href="#" className="hover:underline flex justify-between"><span>4.0L Quad-Turbo V8</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Sequential 7-speed</span><span>→</span></a></li>
                <li><a href="#" className="hover:underline flex justify-between"><span>Dry sump lubrication</span><span>→</span></a></li>
              </ul>
            </div>

            <div className="border border-[#111111] p-3 bg-[#111111] text-[#e8e8e6]">
              <div className="font-bold border-b border-[#e8e8e6] pb-1 mb-2 flex justify-between">
                <span>[04] SYSTEM STATUS</span>
                <span>SYS</span>
              </div>
              <p className="text-[9px] text-[#ccc] mb-3">All homologation certificates verified against FIA Annex J standards.</p>
              <button 
                onClick={() => { alert('Exporting index data...'); setIsOpen(false); }}
                className="w-full py-2 bg-[#e8e8e6] text-[#111111] font-bold text-center hover:bg-white transition-colors cursor-pointer"
              >
                EXPORT MANIFEST
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
