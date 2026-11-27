import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">RESIDENTIAL ARCHITECTURE 01</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#16171a] leading-[1.1]">
            Calm authority in monolithic concrete and warm timber.
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-lg">
            Atelier Varden designs enduring residential spaces where precise geometry meets raw elemental texture, establishing a dialogue between topography and shelter.
          </p>
          <div className="pt-4 flex items-center space-x-6">
            <a href="#portfolio" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
              <span>View Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              <span>Zürich · Tokyo · 2026</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="border border-[#e2e0d8] p-2 bg-[#f0efeb]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Architectural Villa" 
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-stone-500 px-1">
              <span>FIG 01 — VILLA VARDEN NORD</span>
              <span>340 M² · REINFORCED CONCRETE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
