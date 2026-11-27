import React, { useState } from 'react';
import { Shield, Radio, ChevronRight, Menu } from 'lucide-react';

export function Navbar1() {
  const [activeTab, setActiveTab] = useState('TELEMETRY');

  return (
    <header className="w-full bg-[#16181d] border-b border-[#2a2d35] text-white font-mono px-4 lg:px-8 py-3 flex items-center justify-between select-none relative overflow-hidden">
      {/* Background HUD radar line accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ff3d0010_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Left: Stencil Wordmark */}
      <div className="flex items-center space-x-4 relative z-10">
        <div className="flex items-center space-x-2 bg-[#ff3d00]/10 border border-[#ff3d00]/40 px-3 py-1.5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
          <Radio className="w-4 h-4 text-[#ff3d00] animate-pulse" />
          <span className="text-xs tracking-widest font-extrabold text-[#ff3d00]">SYS.01</span>
        </div>
        <div>
          <h1 className="text-lg font-black tracking-tighter uppercase font-sans">VANGUARD <span className="text-[#ff3d00]">//</span> X-99</h1>
          <p className="text-[10px] text-zinc-400 tracking-widest">FLIGHT TEST FACILITY</p>
        </div>
      </div>

      {/* Center: Condensed Links */}
      <nav className="hidden md:flex items-center space-x-6 text-xs font-bold tracking-widest relative z-10">
        {['TELEMETRY', 'AERODYNAMICS', 'PROPULSION', 'SORTIES', 'DIAGNOSTICS'].map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`transition-colors flex items-center space-x-1 px-2 py-1 ${
              activeTab === item ? 'text-[#ff3d00] bg-[#ff3d00]/10 border-b-2 border-[#ff3d00]' : 'text-zinc-300 hover:text-white'
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </nav>

      {/* Right: Afterburner CTA */}
      <div className="flex items-center space-x-3 relative z-10">
        <div className="hidden sm:flex flex-col text-right text-[10px] text-zinc-400">
          <span>MACH 2.84 // FL520</span>
          <span className="text-[#ff3d00] font-bold">TRANSPONDER: ACTIVE</span>
        </div>
        <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-extrabold text-xs tracking-widest px-4 py-2 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] flex items-center space-x-2 transition-transform active:scale-95">
          <span>ENGAGE LAUNCH</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </header>
  );
}
