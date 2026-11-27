import React from 'react';

export function Hero4() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">MONOGRAPH 04 — ALPINE PAVILION</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#16171a]">
              Spatial austerity embedded in raw stone.
            </h1>
          </div>
          <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            <span>[ PLATE NO. 09 ]</span>
          </div>
        </div>

        <div className="border border-[#e2e0d8] p-3 bg-[#f0efeb]">
          <div className="aspect-[16/9] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80" 
              alt="Alpine Pavilion" 
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
          </div>
          <div className="mt-3 pt-3 border-t border-[#e2e0d8] flex flex-col sm:flex-row justify-between text-xs font-mono text-stone-600">
            <div>LOCATION: ENGADIN VALLEY, SWITZERLAND</div>
            <div>COMPOSITION: EXPOSED GRANITE & OAK</div>
            <div>ARCHITECT: ATELIER VARDEN</div>
          </div>
        </div>
      </div>
    </section>
  );
}
