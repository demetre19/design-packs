import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto bg-white border border-[#0d0e10]/15 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2px]">
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">SYSTEM INITIALIZATION // CTA-01</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase">Ready to modernize your substation network?</h2>
          <p className="text-[#0d0e10]/70 text-xs leading-relaxed">Deploy Strata Grid OS across your regional microgrid cluster in under 120 seconds with absolute reliability.</p>
        </div>
        <a 
          href="#deploy" 
          className="bg-[#2743f0] text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px] shrink-0"
        >
          <span>Initialize Cluster</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
