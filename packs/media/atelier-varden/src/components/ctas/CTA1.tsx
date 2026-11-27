import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function CTA1() {
  return (
    <section className="w-full bg-[#fafaf8] py-20 lg:py-28 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">COMMISSION INQUIRY</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#16171a] leading-tight">
          Begin your architectural journey with Atelier Varden.
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">
          We welcome direct discussions regarding residential and cultural commissions across Switzerland, Japan, and Scandinavia.
        </p>
        <div className="pt-4">
          <a href="#contact" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
            <span>Schedule Senior Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
