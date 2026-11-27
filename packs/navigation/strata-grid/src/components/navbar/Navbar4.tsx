import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Cpu, Database, Activity, Shield } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#0d0e10]/10 px-6 py-4 font-sans text-[#0d0e10] relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#2743f0]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">STRATA_GRID // 04</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-[#0d0e10]/70">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#2743f0] transition-colors py-1"
            >
              <span>Subsystems</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-[#0d0e10]/15 p-2 grid grid-cols-1 gap-1 z-50 rounded-[2px] shadow-sm">
                <a href="#sub1" className="p-2.5 hover:bg-[#f2f3f5] flex items-start gap-3 transition-colors">
                  <Cpu className="w-4 h-4 text-[#2743f0] mt-0.5" />
                  <div>
                    <div className="font-semibold text-xs text-[#0d0e10]">Core Engine</div>
                    <div className="text-[10px] text-[#0d0e10]/60 font-mono">Real-time load balancing</div>
                  </div>
                </a>
                <a href="#sub2" className="p-2.5 hover:bg-[#f2f3f5] flex items-start gap-3 transition-colors">
                  <Database className="w-4 h-4 text-[#2743f0] mt-0.5" />
                  <div>
                    <div className="font-semibold text-xs text-[#0d0e10]">Telemetry DB</div>
                    <div className="text-[10px] text-[#0d0e10]/60 font-mono">Immutable time-series</div>
                  </div>
                </a>
                <a href="#sub3" className="p-2.5 hover:bg-[#f2f3f5] flex items-start gap-3 transition-colors">
                  <Shield className="w-4 h-4 text-[#2743f0] mt-0.5" />
                  <div>
                    <div className="font-semibold text-xs text-[#0d0e10]">Grid Security</div>
                    <div className="text-[10px] text-[#0d0e10]/60 font-mono">Zero-trust isolation</div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <a href="#telemetry" className="hover:text-[#2743f0] transition-colors">Telemetry</a>
          <a href="#pricing" className="hover:text-[#2743f0] transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-[#2743f0] transition-colors">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a 
            href="#deploy" 
            className="bg-[#2743f0] text-white px-4 py-2 font-mono text-[11px] uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
          >
            <span>Deploy Node</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
