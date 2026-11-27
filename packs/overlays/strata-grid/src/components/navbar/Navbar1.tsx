import React from 'react';
import { ArrowUpRight, Terminal, Menu } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-white border-b border-[#0d0e10]/10 px-6 py-4 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#2743f0]" />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold">STRATA // 01</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-[#0d0e10]/70">
          <a href="#grid" className="hover:text-[#2743f0] transition-colors">Grid OS</a>
          <a href="#telemetry" className="hover:text-[#2743f0] transition-colors">Telemetry</a>
          <a href="#nodes" className="hover:text-[#2743f0] transition-colors">Substations</a>
          <a href="#register" className="hover:text-[#2743f0] transition-colors">Register</a>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="#access" 
            className="bg-[#2743f0] text-white px-4 py-2 text-[11px] font-mono uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
          >
            <span>Console Access</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button className="md:hidden p-2 text-[#0d0e10]" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
