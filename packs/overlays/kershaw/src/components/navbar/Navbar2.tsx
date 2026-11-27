import React, { useState } from 'react';
import { ChevronDown, Cpu, Activity } from 'lucide-react';

export function Navbar2() {
  const [selectedEngine, setSelectedEngine] = useState('KD-998 V8 TWIN-TURBO');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const engines = [
    'KD-998 V8 TWIN-TURBO (8,400 RPM)',
    'KD-640 V6 HYBRID-CELL (9,200 RPM)',
    'KD-1200 QUAD-TURBO W16 (7,800 RPM)'
  ];

  return (
    <header className="bg-[#0c0d0f] border-b border-[#22262f] px-6 py-3 flex items-center justify-between text-white font-mono">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#ffd500]" />
          <span className="font-extrabold tracking-wider text-sm">KERSHAW DYNAMICS</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#14161a] border border-[#262c36] px-3 py-1.5 text-xs text-zinc-200 flex items-center gap-3 hover:border-[#ffd500] transition-colors"
          >
            <span className="w-2 h-2 bg-[#ffd500]" />
            <span className="font-bold">{selectedEngine}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-72 bg-[#14161a] border border-[#262c36] z-50 shadow-2xl">
              {engines.map((eng) => (
                <button
                  key={eng}
                  onClick={() => {
                    setSelectedEngine(eng);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-300 hover:bg-[#ffd500] hover:text-black transition-colors border-b border-[#22262f] last:border-0 font-mono"
                >
                  {eng}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#ffd500]" />
          <span>OIL TEMP: <strong className="text-white">94.2°C</strong></span>
        </div>
        <span className="text-[#ffd500] font-bold">RUN 07/40</span>
      </div>
    </header>
  );
}
