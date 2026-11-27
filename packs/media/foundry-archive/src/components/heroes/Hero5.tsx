import React from 'react';
import { ArrowDown, Bookmark, ExternalLink, ShieldCheck } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-neutral-500 tracking-widest uppercase mb-2 block">SPECIMEN SPECIFICATION ROW</span>
          <h1 className="text-5xl font-serif font-bold text-white mb-4">CASLON ANTIQUA</h1>
          <p className="text-xs text-neutral-400 font-sans">
            Cast from original matrices engraved by William Caslon I in Chiswell Street, London, circa 1734.
          </p>
        </div>
        <div className="border border-neutral-800 divide-y divide-neutral-800 bg-neutral-950 text-xs">
          <div className="p-4 flex justify-between items-center text-neutral-400">
            <span className="font-bold text-white">01 // HAIRLINE 18PT</span>
            <span className="font-serif text-lg tracking-wider text-neutral-200">The quick brown fox jumps over the lazy dog</span>
            <span>REF: CS-01</span>
          </div>
          <div className="p-4 flex justify-between items-center text-neutral-400">
            <span className="font-bold text-white">02 // REGULAR 24PT</span>
            <span className="font-serif text-xl tracking-wider text-neutral-200">The quick brown fox jumps over the lazy dog</span>
            <span>REF: CS-02</span>
          </div>
          <div className="p-4 flex justify-between items-center text-neutral-400">
            <span className="font-bold text-white">03 // BOLD 36PT</span>
            <span className="font-serif text-2xl tracking-wider text-neutral-200">The quick brown fox jumps</span>
            <span>REF: CS-03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
