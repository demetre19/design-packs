import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-[#2743f0] text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">STRATA ENTERPRISE DEPLOYMENT // CTA-02</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase">Uncompromising power infrastructure.</h2>
          <p className="text-white/80 text-xs leading-relaxed font-mono">Connect your substations to the most advanced decentralized autonomous grid OS ever engineered.</p>
        </div>
        <a 
          href="#deploy" 
          className="bg-white text-[#2743f0] px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#0d0e10] hover:text-white transition-colors flex items-center gap-2 rounded-[2px] shrink-0 font-bold"
        >
          <span>Deploy Grid OS</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
