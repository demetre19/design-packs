import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="bg-[#1c2128] text-white p-12 md:p-20 border border-[#2e5e8e]/40 relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">CTA 01 · CENTERED REFINED STATEMENT</div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">Secure Your Atelier Allocation</h2>
          <p className="font-mono text-xs text-white/70 tracking-wider leading-relaxed">
            Limited production of 500 numbered pieces per annum. Inquire for private salon viewing and bespoke specifications.
          </p>
          <div className="pt-2">
            <button className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-8 py-3.5 hover:bg-white hover:text-[#232a30] transition-colors inline-flex items-center space-x-2">
              <span>INQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
