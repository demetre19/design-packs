import React from 'react';
import { ArrowDown, Bookmark, ExternalLink, ShieldCheck } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800 flex">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-1 hidden lg:flex justify-center">
          <div className="text-xs text-neutral-500 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 py-4 border-r border-neutral-800">
            DESIGNER: ADRIAN FRUTIGER — 1961
          </div>
        </div>
        <div className="lg:col-span-11">
          <div className="text-xs text-neutral-400 mb-3 flex items-center space-x-2">
            <span className="w-2 h-2 bg-white"></span>
            <span>SPECIMEN H-83</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-serif font-bold text-white tracking-tight mb-6">
            UNIVERS <span className="text-neutral-600 font-sans font-light">ÉTUDES</span>
          </h1>
          <p className="text-sm text-neutral-400 font-sans max-w-3xl leading-relaxed">
            The definitive rationalized sans-serif taxonomy. Twenty-one precisely correlated weights and widths engineered by Adrian Frutiger at Deberny & Peignot. Presented here in its complete uncompressed archival fidelity.
          </p>
        </div>
      </div>
    </section>
  );
}
