import React from 'react';
import { Cpu, Layers } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none flex">
      {/* Hazard Stripe Corner */}
      <div className="w-12 bg-[repeating-linear-gradient(45deg,#111,#111_4px,#e8e8e6_4px,#e8e8e6_8px)] border-r border-[#111111] flex items-center justify-center">
        <span className="text-[8px] bg-[#111] text-[#e8e8e6] px-0.5 rotate-90">+</span>
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between px-4 py-2 text-[10px] uppercase tracking-widest">
        <div className="flex items-center space-x-4 py-1 md:py-0">
          <div className="flex items-center space-x-2 font-black text-xs">
            <Cpu className="w-4 h-4" />
            <span>KRAFTWERK // ARCHIVE SYSTEM</span>
          </div>
          <span className="text-[9px] text-[#666] hidden sm:inline">CODE: A14-SPEC</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-4 text-[#555]">
            <span>STATUS: ACTIVE</span>
            <span>NODE: 03</span>
          </div>
          <div className="flex items-center space-x-2 border-l border-[#111111] pl-4">
            <a href="#system" className="hover:bg-[#111] hover:text-[#e8e8e6] px-2 py-1 transition-colors">SYSTEM</a>
            <a href="#logs" className="hover:bg-[#111] hover:text-[#e8e8e6] px-2 py-1 transition-colors">LOGS</a>
            <a href="#exit" className="hover:bg-[#111] hover:text-[#e8e8e6] px-2 py-1 transition-colors">EXIT</a>
          </div>
        </div>
      </div>
    </header>
  );
}
