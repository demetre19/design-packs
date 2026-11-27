import React from 'react';

export function Stat1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PRACTICE METRICS REGISTER</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e2e0d8] bg-[#f0efeb]">
          <div className="p-8 border-r border-b md:border-b-0 border-[#e2e0d8] space-y-2">
            <div className="text-3xl lg:text-4xl font-medium text-[#16171a] font-mono">44</div>
            <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Completed Residences</div>
          </div>
          <div className="p-8 border-r border-b md:border-b-0 border-[#e2e0d8] space-y-2">
            <div className="text-3xl lg:text-4xl font-medium text-[#16171a] font-mono">14</div>
            <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Years of Practice</div>
          </div>
          <div className="p-8 border-r border-b sm:border-b-0 border-[#e2e0d8] space-y-2">
            <div className="text-3xl lg:text-4xl font-medium text-[#16171a] font-mono">03</div>
            <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Global Studios</div>
          </div>
          <div className="p-8 space-y-2">
            <div className="text-3xl lg:text-4xl font-medium text-[#b5482e] font-mono">100%</div>
            <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Tectonic Rigor</div>
          </div>
        </div>
      </div>
    </section>
  );
}
