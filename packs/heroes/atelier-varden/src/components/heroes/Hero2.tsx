import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">FEATURED MONOGRAPH</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#16171a] leading-[1.15]">
            The House as a Static Horizon.
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-xl">
            Rooted in the rugged coastline of Northern Honshu, Residence H balances absolute structural rigor with meditative openness to the sea.
          </p>
          <div className="pt-2">
            <a href="#details" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#16171a] border-b border-[#16171a] pb-1 hover:text-[#b5482e] hover:border-[#b5482e]">
              <span>Explore Architectural Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#f0efeb] border border-[#e2e0d8] p-6 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 pb-3 border-b border-[#e2e0d8]">
            Project Specification Register
          </div>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between py-2 border-b border-[#e2e0d8]/60">
              <span className="text-stone-500 uppercase">Gross Area</span>
              <span className="text-[#16171a] font-medium">420 m²</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#e2e0d8]/60">
              <span className="text-stone-500 uppercase">Bedrooms / Suites</span>
              <span className="text-[#16171a] font-medium">4 Bedrooms</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#e2e0d8]/60">
              <span className="text-stone-500 uppercase">Primary Material</span>
              <span className="text-[#16171a] font-medium">Sugi Timber & Concrete</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#e2e0d8]/60">
              <span className="text-stone-500 uppercase">Location</span>
              <span className="text-[#16171a] font-medium">Kanagawa, Japan</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-stone-500 uppercase">Completion</span>
              <span className="text-[#16171a] font-medium">Autumn 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
