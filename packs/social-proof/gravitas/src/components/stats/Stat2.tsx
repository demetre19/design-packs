import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Stats 02 // Hairline Separator Row</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Technical Benchmark Data</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">GRID 04-B</span>
        </div>

        <div className="border border-neutral-800 bg-neutral-950 divide-y divide-neutral-900 grid grid-cols-1 md:grid-cols-3 font-mono text-center">
          <div className="p-8 space-y-2 border-b md:border-b-0 md:border-r border-neutral-900">
            <span className="text-5xl font-extralight text-white block">2,400+</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider block">Kerning Pairs</span>
          </div>
          <div className="p-8 space-y-2 border-b md:border-b-0 md:border-r border-neutral-900">
            <span className="text-5xl font-normal text-white block">100%</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider block">Unicode Coverage</span>
          </div>
          <div className="p-8 space-y-2">
            <span className="text-5xl font-black text-white block">0.04em</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider block">Optical Overshoot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
