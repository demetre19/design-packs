import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#faf6f0] py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#1d4f47] text-[#faf6f0] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a7a6d] text-[#faf6f0] text-xs uppercase tracking-widest font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Transformation</span>
        </div>

        <h2 className="font-serif text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.15] mb-6">
          Elevate your clinical practice into a sanctuary of calm luxury.
        </h2>

        <p className="text-[#faf6f0]/80 font-light max-w-xl mx-auto mb-10 text-base md:text-lg">
          Schedule a confidential initial consultation with Dr. Elena Vance and our principal strategy team.
        </p>

        <a
          href="#consult"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#faf6f0] text-[#1d4f47] font-medium text-sm hover:bg-[#faf6f0]/90 transition-all shadow-lg"
        >
          <span>Schedule Initial Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
