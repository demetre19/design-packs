import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Stat3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 border-t border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="font-light text-7xl md:text-9xl tracking-tighter block leading-none">99%</span>
        </div>
        <div className="md:col-span-7 space-y-6">
          <span className="text-[9px] tracking-widest uppercase text-black/50">index benchmark</span>
          <h3 className="font-light text-2xl md:text-3xl lowercase tracking-tight">
            reduction efficiency across all curated digital platforms.
          </h3>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            By eliminating non-essential visual friction, our client platforms achieve lightning-fast loading and profound user engagement.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-2 text-xs font-light lowercase border-b border-black pb-1">
              review benchmarks <ArrowRight className="w-3 h-3 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
