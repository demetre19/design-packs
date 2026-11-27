import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">CTA 01 // Cascading TRY IT Stack</span>
        <div className="flex flex-col items-center tracking-tighter leading-none select-none">
          <span className="font-extralight text-5xl sm:text-8xl text-white">TRY IT NOW</span>
          <span className="font-light text-5xl sm:text-8xl text-neutral-300">TRY IT NOW</span>
          <span className="font-normal text-5xl sm:text-8xl text-neutral-500">TRY IT NOW</span>
          <span className="font-bold text-5xl sm:text-8xl text-neutral-700">TRY IT NOW</span>
        </div>
        <p className="max-w-xl mx-auto text-neutral-400 text-sm font-light">
          Experience the uncompromising optical clarity of Gravitas across all 12 master weights.
        </p>
        <div className="pt-4">
          <button className="bg-white text-black px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors inline-flex items-center space-x-2">
            <span>Acquire Full Family</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
