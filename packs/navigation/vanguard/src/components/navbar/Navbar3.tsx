import React from 'react';
import { Terminal, ShieldAlert } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#16181d] border-b border-[#2a2d35] text-white font-mono flex items-stretch select-none">
      {/* Vertical Stencil Accent Left */}
      <div className="bg-[#ff3d00] text-black px-3 py-3 flex items-center justify-center font-black tracking-widest text-xs uppercase [writing-mode:vertical-lr] rotate-180">
        SEC-09 // STAGED
      </div>

      <div className="flex-1 px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-[#ff3d00]" />
            <span className="text-sm font-extrabold tracking-tighter uppercase font-sans">VANGUARD <span className="text-[#ff3d00]">CORP</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs text-zinc-400 tracking-widest border-l border-[#2a2d35] pl-6">
            <span>ALT: FL510</span>
            <span>SPEED: 2,410 KTS</span>
            <span className="text-[#ff3d00] font-bold">STATUS: NOMINAL</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-xs bg-[#20232a] border border-[#3a3e4c] px-3 py-1.5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#ff3d00]" />
            <span className="text-zinc-300">SECURE LINK</span>
          </div>
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-4 py-2 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
            DIAGNOSTICS
          </button>
        </div>
      </div>
    </header>
  );
}
