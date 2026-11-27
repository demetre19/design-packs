import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto bg-[#faf6f0] rounded-[32px] p-8 md:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Partnership Opportunity
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight mb-6">
            Ready to redefine your patient experience?
          </h2>
          <p className="text-[#122420]/80 font-light text-base mb-8 leading-relaxed">
            We partner with a strictly limited number of clinics each quarter to ensure uncompromising dedication and depth.
          </p>
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm"
          >
            <span>Inquire About Q1 Availability</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-5 rounded-[28px] overflow-hidden shadow-xl aspect-[4/3] bg-[#e8f0ec]">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
            alt="Consultation suite"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
