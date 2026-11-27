import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 bg-[#f0efeb] border border-[#e2e0d8] py-16">
        <div className="inline-flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">SINGLE COMMISSION FEE STRUCTURE</span>
        </div>
        <h2 className="text-4xl font-medium tracking-tight text-[#16171a]">12% of Total Construction Value</h2>
        <p className="text-stone-600 text-sm max-w-xl mx-auto leading-relaxed">
          Atelier Varden operates on a fixed percentage fee covering complete architectural design, engineering integration, and on-site artistic supervision.
        </p>
        <div className="pt-4">
          <a href="#contact" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-8 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
            <span>Schedule Project Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
