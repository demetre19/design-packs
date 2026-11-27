import React from 'react';
import { Cpu, ArrowUpRight } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#f2f3f5] border-b border-[#0d0e10]/10 px-6 py-4 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">[REF: NAV-02]</span>
            <span className="font-mono text-xs font-bold tracking-tight">STRATA_CORE</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/70">
            <span>Lat: 37.7749° N</span>
            <span>Grid Load: 99.4%</span>
            <span className="text-[#2743f0] font-bold">● ACTIVE</span>
          </div>
          <a 
            href="#auth" 
            className="border border-[#0d0e10]/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest hover:border-[#2743f0] hover:text-[#2743f0] transition-colors rounded-[2px]"
          >
            Authenticate ↗
          </a>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#0d0e10]/10">
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-[#0d0e10]/80">
            <a href="#overview" className="text-[#2743f0] font-medium">Overview</a>
            <a href="#architecture" className="hover:text-[#2743f0] transition-colors">Architecture</a>
            <a href="#dispatch" className="hover:text-[#2743f0] transition-colors">Dispatch</a>
            <a href="#ledger" className="hover:text-[#2743f0] transition-colors">Ledger</a>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/40 hidden md:inline">SYSTEM_REV_4.08</span>
        </div>
      </div>
    </header>
  );
}
