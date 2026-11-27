import React, { useState } from 'react';
import { Menu, X, Compass, Radio } from 'lucide-react';

export function Navbar4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#16181d] border-b border-[#2a2d35] text-white font-mono px-4 lg:px-8 py-3 flex items-center justify-between select-none relative">
      <div className="flex items-center space-x-3">
        <Compass className="w-5 h-5 text-[#ff3d00]" />
        <div>
          <span className="text-[10px] text-zinc-400 tracking-widest">AERO-X LABS</span>
          <h2 className="text-sm font-black tracking-tighter uppercase font-sans">SPECTRE TELEMETRY</h2>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-xs text-zinc-300 tracking-wider">
        <span>SORTIE: S-04/12</span>
        <span>LOCATION: AREA 51 // BAY 4</span>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#20232a] hover:bg-[#282c35] border border-[#3a3e4c] p-2.5 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)] flex items-center space-x-2 text-xs font-bold tracking-widest text-[#ff3d00]"
      >
        <span>{isOpen ? 'CLOSE BAY' : 'TELEMETRY MENU'}</span>
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#16181d] border-b border-[#3a3e4c] p-6 shadow-2xl z-50 font-mono animate-fadeIn">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#20232a] p-4 border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
              <h3 className="text-xs font-bold text-[#ff3d00] mb-2 uppercase tracking-widest flex items-center space-x-2">
                <Radio className="w-3.5 h-3.5" />
                <span>FLIGHT SYSTEMS</span>
              </h3>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="hover:text-[#ff3d00] cursor-pointer">01. Inertial Navigation Unit</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">02. Ramjet Afterburner Diagnostics</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">03. Thermal Shielding Sensors</li>
              </ul>
            </div>
            <div className="bg-[#20232a] p-4 border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
              <h3 className="text-xs font-bold text-[#ff3d00] mb-2 uppercase tracking-widest">02 // AERODYNAMICS</h3>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="hover:text-[#ff3d00] cursor-pointer">Wind Tunnel Simulation Matrix</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">Shockwave Pressure Mapping</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">Angle of Attack Sweep</li>
              </ul>
            </div>
            <div className="bg-[#20232a] p-4 border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
              <h3 className="text-xs font-bold text-[#ff3d00] mb-2 uppercase tracking-widest">03 // PROGRAM OPERATIONS</h3>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="hover:text-[#ff3d00] cursor-pointer">Sortie Schedule S-01 to S-12</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">Flight Crew Roster</li>
                <li className="hover:text-[#ff3d00] cursor-pointer">Secure Program Briefings</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
