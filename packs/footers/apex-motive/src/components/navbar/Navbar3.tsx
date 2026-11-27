import React from 'react';
import { Cpu, ArrowUpRight } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#101114] border-b border-[#272a33] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Vertical text accent */}
          <div className="hidden sm:flex flex-col items-center justify-center border-r border-[#272a33] pr-4">
            <span className="font-mono-spec text-[9px] text-[#ff5a1f] tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
              SYS.03
            </span>
          </div>

          <div>
            <span className="font-extrabold text-lg tracking-tighter text-white block">APEX MOTIVE</span>
            <span className="font-mono-spec text-[10px] text-neutral-400 block tracking-wider">HYPER-ELECTRIC DIVISION</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-mono-spec text-xs text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5a1f]">PWR:</span> 145 kW PEAK
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff5a1f]">TRQ:</span> 15.2 kgm
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff5a1f]">WGT:</span> 194 kg
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#portal" className="font-display text-xs text-white hover:text-[#ff5a1f] flex items-center gap-1">
            <span>RIDER PORTAL</span>
            <ArrowUpRight size={14} className="text-[#ff5a1f]" />
          </a>
        </div>
      </div>
    </header>
  );
}
