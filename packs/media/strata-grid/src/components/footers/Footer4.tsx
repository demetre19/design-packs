import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10] border-t border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 bg-[#2743f0] text-white p-10 flex flex-col justify-between gap-8 rounded-[2px]">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="uppercase tracking-wider font-semibold">STRATA GRID INFRASTRUCTURE OS</span>
            <span>[FTR-04]</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight">Ready to modernize your substation grid?</h3>
            <p className="text-white/80 text-xs mt-2 font-mono">Initialize your enterprise dispatch cluster in under 120 seconds.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#deploy" className="bg-white text-[#2743f0] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#0d0e10] hover:text-white transition-colors flex items-center gap-2 rounded-[2px]">
              <span>Initialize System</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-8 border border-[#0d0e10]/15 flex flex-col gap-6 rounded-[2px] font-mono text-xs">
          <div className="font-bold uppercase text-[#0d0e10]/60 tracking-wider">Quick Navigation</div>
          <div className="flex flex-col gap-3">
            <a href="#platform" className="hover:text-[#2743f0] transition-colors">Platform Architecture ↗</a>
            <a href="#telemetry" className="hover:text-[#2743f0] transition-colors">Telemetry Engine ↗</a>
            <a href="#security" className="hover:text-[#2743f0] transition-colors">Post-Quantum Security ↗</a>
            <a href="#register" className="hover:text-[#2743f0] transition-colors">System Register ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
