import React from 'react';

export function Stat4() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#f0efeb] border border-[#e2e0d8] p-10 lg:p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2 border-r border-[#e2e0d8] pr-6 last:border-r-0">
            <span className="text-stone-400 font-mono text-xs uppercase block">01 / ESTATES</span>
            <div className="text-4xl font-medium text-[#16171a] font-mono">44</div>
            <p className="text-xs font-mono text-stone-500 uppercase">Realized Globally</p>
          </div>

          <div className="space-y-2 border-r border-[#e2e0d8] pr-6 last:border-r-0">
            <span className="text-stone-400 font-mono text-xs uppercase block">02 / AREA</span>
            <div className="text-4xl font-medium text-[#16171a] font-mono">18.5k</div>
            <p className="text-xs font-mono text-stone-500 uppercase">Square Meters</p>
          </div>

          <div className="space-y-2 border-r border-[#e2e0d8] pr-6 last:border-r-0">
            <span className="text-stone-400 font-mono text-xs uppercase block">03 / AWARDS</span>
            <div className="text-4xl font-medium text-[#16171a] font-mono">12</div>
            <p className="text-xs font-mono text-stone-500 uppercase">Architecture Prizes</p>
          </div>

          <div className="space-y-2">
            <span className="text-[#b5482e] font-mono text-xs uppercase block">04 / PRACTICE</span>
            <div className="text-4xl font-medium text-[#b5482e] font-mono">2012</div>
            <p className="text-xs font-mono text-stone-500 uppercase">Established Zürich</p>
          </div>
        </div>
      </div>
    </section>
  );
}
