import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">NUMERICAL REGISTER</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Quantitative Practice Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono text-stone-500 uppercase">METRIC 01</span>
            </div>
            <div className="text-5xl font-medium text-[#16171a] font-mono">18,500</div>
            <p className="text-stone-600 text-xs font-mono uppercase tracking-wider">Square Meters Designed & Realized</p>
          </div>

          <div className="bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono text-stone-500 uppercase">METRIC 02</span>
            </div>
            <div className="text-5xl font-medium text-[#16171a] font-mono">12</div>
            <p className="text-stone-600 text-xs font-mono uppercase tracking-wider">International Architectural Awards</p>
          </div>

          <div className="bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono text-stone-500 uppercase">METRIC 03</span>
            </div>
            <div className="text-5xl font-medium text-[#b5482e] font-mono">03</div>
            <p className="text-stone-600 text-xs font-mono uppercase tracking-wider">Active Global Biennales</p>
          </div>
        </div>
      </div>
    </section>
  );
}
