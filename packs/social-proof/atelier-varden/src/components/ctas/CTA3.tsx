import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-20 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">DIRECT COMMISSION DESK 2026</span>
        </div>
        <div>
          <a href="#contact" className="inline-flex items-center space-x-2 text-sm font-mono uppercase tracking-widest text-[#16171a] border-b border-[#16171a] pb-1 hover:text-[#b5482e] hover:border-[#b5482e] transition-colors">
            <span>Contact Senior Partners</span>
            <ArrowRight className="w-4 h-4 text-[#b5482e]" />
          </a>
        </div>
      </div>
    </section>
  );
}
