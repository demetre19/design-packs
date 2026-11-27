import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid2() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden shadow-xl aspect-[4/3] bg-[#faf6f0]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
              alt="Clinical consultation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
              01 — Clinical Strategy
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-tight mb-4">
              Evidence-based pathways tailored to elite wellness practices.
            </h3>
            <p className="text-[#122420]/80 font-light leading-relaxed mb-6">
              We translate complex medical research and longevity protocols into intuitive patient offerings that elevate standard of care and practice valuation.
            </p>
            <a href="#explore" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4f47] hover:text-[#2a7a6d]">
              <span>Explore clinical framework</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 rounded-[28px] overflow-hidden shadow-xl aspect-[4/3] bg-[#faf6f0]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Interior architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1 flex flex-col items-start">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
              02 — Spatial Architecture
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-tight mb-4">
              Sanctuaries designed to lower cortisol from the moment of entry.
            </h3>
            <p className="text-[#122420]/80 font-light leading-relaxed mb-6">
              Every detail of our spatial concepts—from warm acoustic wood panels to soft organic lighting—creates a psychological container of absolute calm.
            </p>
            <a href="#explore" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4f47] hover:text-[#2a7a6d]">
              <span>Discover spatial design</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
