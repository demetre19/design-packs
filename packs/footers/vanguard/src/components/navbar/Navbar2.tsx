import React, { useState } from 'react';
import { ChevronDown, Sliders, Activity } from 'lucide-react';

export function Navbar2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState('X-99A SPECTRE');

  const aircrafts = ['X-99A SPECTRE', 'X-99B VALKYRIE', 'SR-91 OVERLORD', 'HYPERION-X MK.IV'];

  return (
    <header className="w-full bg-[#16181d] border-b border-[#2a2d35] text-white font-mono px-4 lg:px-8 py-3 flex items-center justify-between select-none relative">
      {/* Left: Brand with clipped panel */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-[#20232a] border border-[#3a3e4c] flex items-center justify-center [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
          <Activity className="w-4 h-4 text-[#ff3d00]" />
        </div>
        <div>
          <span className="text-xs tracking-widest text-[#ff3d00] font-bold">PROGRAM COMMAND</span>
          <h2 className="text-sm font-black tracking-wider uppercase font-sans">VANGUARD AEROSPACE</h2>
        </div>
      </div>

      {/* Center: Aircraft Selector Dropdown in Clipped Panel */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-[#20232a] hover:bg-[#282c35] border border-[#3a3e4c] px-4 py-2 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-3 text-xs tracking-widest"
        >
          <span className="text-zinc-400">AIRFRAME:</span>
          <span className="font-extrabold text-[#ff3d00]">{selectedAircraft}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full mt-1 left-0 w-56 bg-[#16181d] border border-[#3a3e4c] shadow-2xl z-50 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            {aircrafts.map((ac) => (
              <button
                key={ac}
                onClick={() => {
                  setSelectedAircraft(ac);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors hover:bg-[#ff3d00]/20 hover:text-[#ff3d00] border-b border-[#2a2d35] last:border-0 ${
                  selectedAircraft === ac ? 'text-[#ff3d00] bg-[#ff3d00]/10 font-bold' : 'text-zinc-300'
                }`}
              >
                {ac}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right: Status Readout */}
      <div className="flex items-center space-x-4 text-xs">
        <div className="hidden lg:flex items-center space-x-2 text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-[#ff3d00] animate-ping" />
          <span>MACH 3.12 // G-LIMIT: 9.0</span>
        </div>
        <button className="bg-[#20232a] hover:bg-[#282c35] border border-[#3a3e4c] p-2 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
          <Sliders className="w-4 h-4 text-[#ff3d00]" />
        </button>
      </div>
    </header>
  );
}
