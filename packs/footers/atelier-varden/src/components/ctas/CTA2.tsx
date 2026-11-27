import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function CTA2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#f0efeb] border border-[#e2e0d8] p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">INVERTED STONE PANEL BAND</span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Commission a Site-Specific Architectural Study</h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our partners evaluate land contours, sun angles, and local zoning to produce comprehensive preliminary massing studies.
            </p>
          </div>
          <a href="#inquire" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-7 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none whitespace-nowrap">
            <span>Initiate Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
