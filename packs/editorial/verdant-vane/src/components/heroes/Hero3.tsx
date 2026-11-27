import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-[#2a7a6d] font-semibold mb-6">
          Editorial Issue No. 08 — Spatial & Somatic Health
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-7xl text-[#122420] tracking-tight leading-[1.05]">
              Designing sanctuaries for the human nervous system.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <p className="text-[#122420]/70 font-light mb-6 text-sm md:text-base max-w-sm">
              We reject clinical coldness in favor of warmth, tactile materiality, and biological rigor that heals the whole person.
            </p>
            <a
              href="#inquire"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all"
            >
              <span>Begin Collaboration</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[24px] overflow-hidden bg-[#e8f0ec] aspect-[4/3] relative">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Interior" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[24px] overflow-hidden bg-[#e8f0ec] aspect-[4/3] relative">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Treatment" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[24px] overflow-hidden bg-[#e8f0ec] aspect-[4/3] relative">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Botanical" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
