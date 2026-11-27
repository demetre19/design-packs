import React from 'react';
import { ArrowDown, Bookmark, ExternalLink, ShieldCheck } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs text-neutral-500 tracking-widest uppercase block mb-3">MONOGRAPH 09 // GROTESQUE</span>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            GROTESK <br />
            <span className="text-neutral-500">SCHRIFT</span>
          </h1>
          <div className="border-t border-neutral-800 pt-4 text-xs text-neutral-400 font-sans leading-relaxed">
            Exhaustive restoration of Swiss sans-serif specimens from 1957. Featuring rigorous geometric construction, ink traps optimized for letterpress, and 8 distinct optical weights.
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-400 border-l border-neutral-800 pl-8">
          <div className="space-y-2">
            <div className="text-neutral-500 font-mono text-[10px]">COL. 01</div>
            <p className="font-sans leading-relaxed">
              Designed during the post-war reconstruction of Zurich typography workshops. The rigorous vertical stems reflect strict modernist principles.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-neutral-500 font-mono text-[10px]">COL. 02</div>
            <p className="font-sans leading-relaxed">
              Every master glyph was scanned at 1200 DPI from original lead matrices cast by Haas Type Foundry in Münchenstein.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-neutral-500 font-mono text-[10px]">COL. 03</div>
            <p className="font-sans leading-relaxed">
              Includes full support for extended Latin, Cyrillic specimen glyphs, and historical ligature tables recorded in 1961.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
