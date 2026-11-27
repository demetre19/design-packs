import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-[#e8f0ec] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="text-xs uppercase tracking-[0.25em] text-[#2a7a6d] font-semibold mb-3">
          Confidential Assessment
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight mb-6">
          Begin your journey with Verdant & Vane.
        </h2>

        <p className="text-[#122420]/80 font-light max-w-xl mx-auto mb-10 text-base">
          Request our complete 2026 practice portfolio and service prospectus.
        </p>

        <a
          href="#prospectus"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm"
        >
          <span>Request 2026 Prospectus</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
