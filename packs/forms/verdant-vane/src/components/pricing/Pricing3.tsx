import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-3xl mx-auto bg-[#e8f0ec] rounded-[32px] p-10 md:p-14 shadow-lg text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#faf6f0] text-[#2a7a6d] text-xs font-semibold uppercase tracking-widest mb-6">
          All-Inclusive Partnership
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight mb-4">
          The Verdant & Vane Master Retainer
        </h2>

        <p className="text-[#122420]/80 font-light max-w-xl mx-auto mb-8 text-sm md:text-base">
          A singular, uncompromising engagement model designed to transform your entire clinical practice from the ground up.
        </p>

        <div className="mb-8">
          <span className="font-serif text-5xl font-bold text-[#122420]">$15,000</span>
          <span className="text-xs text-[#122420]/70 ml-2 uppercase tracking-wider">/ month retainer</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
          <div className="flex items-center gap-3 text-sm text-[#122420]">
            <Check className="w-4 h-4 text-[#2a7a6d]" />
            <span>Full brand architecture</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#122420]">
            <Check className="w-4 h-4 text-[#2a7a6d]" />
            <span>Spatial & acoustic design</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#122420]">
            <Check className="w-4 h-4 text-[#2a7a6d]" />
            <span>Custom biomarker protocols</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#122420]">
            <Check className="w-4 h-4 text-[#2a7a6d]" />
            <span>Executive retreat hosting</span>
          </div>
        </div>

        <a
          href="#inquire"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm"
        >
          <span>Request Master Partnership</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
