import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PRACTICE MANIFESTO</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#16171a] leading-[1.2]">
            Designing habitable volumes with absolute restraint.
          </h1>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every line is verified against the natural topography. We reject superfluous ornamentation in favor of tectonic truth and spatial tranquility.
          </p>
          <div className="pt-2">
            <a href="#contact" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-5 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
              <span>Commission Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-[#e2e0d8] p-2 bg-[#f0efeb]">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80" 
                alt="Tall architectural view" 
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>
            <div className="mt-2 text-right text-[10px] font-mono text-stone-500 uppercase tracking-widest">
              ATELIER VARDEN ARCHIVES — PLATE 12
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f0efeb] py-4 border-t border-[#e2e0d8] px-6 text-center text-xs font-mono text-stone-600 uppercase tracking-widest">
        ZÜRICH · TOKYO · STOCKHOLM — SELECTED FOR THE 2026 ARCHITECTURAL BIENNALE
      </div>
    </section>
  );
}
