import React from 'react';
import { ArrowDown, Layers, Terminal } from 'lucide-react';

export function Hero2() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="absolute top-6 left-6 text-[10px] font-mono text-neutral-400 leading-tight">
        <div>SPECIMEN 02</div>
        <div>OPTICAL SIZE: 72PT</div>
        <div>WEIGHT: BLACK (900)</div>
      </div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-neutral-400 text-right leading-tight">
        <div>GLYPH COUNT: 846</div>
        <div>SUPPORT: LATIN / CYRILLIC</div>
      </div>

      <div className="max-w-6xl mx-auto text-center my-16">
        <div className="inline-block border border-neutral-800 bg-neutral-950 px-3 py-1 text-[11px] font-mono text-neutral-400 mb-6">
          MONOLITHIC DISPLAY MASTER
        </div>
        <h1 className="text-7xl sm:text-9xl md:text-[14rem] font-black tracking-tighter text-white uppercase leading-none select-none">
          AXIS
        </h1>
        <p className="max-w-xl mx-auto text-neutral-400 text-sm font-light mt-8">
          Uncompromising geometric precision meets brutalist restraint. Designed for uncompromising editorial and architectural branding.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-neutral-900 text-xs font-mono text-neutral-400">
        <div>[01] HAIRLINE (200)</div>
        <div>[02] REGULAR (400)</div>
        <div>[03] BOLD (700)</div>
        <div>[04] ULTRA (950)</div>
      </div>
    </section>
  );
}
