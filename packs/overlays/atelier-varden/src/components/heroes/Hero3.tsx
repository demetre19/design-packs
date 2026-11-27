import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">EXHIBITION & WORKS 2026</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#16171a] leading-[1.08]">
            Architecture as calm authority in the landscape.
          </h1>
        </div>

        <div className="border border-[#e2e0d8] p-2 bg-[#f0efeb]">
          <div className="aspect-[21/9] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80" 
              alt="Architectural Interior" 
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e2e0d8] bg-[#f0efeb]">
          <div className="p-6 border-r border-b md:border-b-0 border-[#e2e0d8]">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">01 / LOCATION</div>
            <div className="text-sm font-medium text-[#16171a]">Zürichberg, Switzerland</div>
          </div>
          <div className="p-6 border-r border-b md:border-b-0 border-[#e2e0d8]">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">02 / AREA</div>
            <div className="text-sm font-medium text-[#16171a]">510 m² Net Floor</div>
          </div>
          <div className="p-6 border-r border-b sm:border-b-0 border-[#e2e0d8]">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">03 / PROGRAM</div>
            <div className="text-sm font-medium text-[#16171a]">Private Residence</div>
          </div>
          <div className="p-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">04 / INQUIRY</div>
              <div className="text-sm font-medium text-[#b5482e]">Available Q3</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#b5482e]" />
          </div>
        </div>
      </div>
    </section>
  );
}
