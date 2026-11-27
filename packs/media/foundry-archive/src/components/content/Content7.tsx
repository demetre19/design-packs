import React from 'react';
import { Film } from 'lucide-react';

export function Content7() {
  const sprockets = Array.from({ length: 28 });

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-8 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              35MM ARCHIVAL MICROFILM · REEL 04-B
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Film Strip — Continuous Unequal-Width Sequence
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <Film className="w-3.5 h-3.5 text-white" />
            <span>CONTINUOUS HORIZONTAL BAND</span>
          </div>
        </div>

        {/* Continuous horizontal film strip with top & bottom sprocket rails */}
        <div className="bg-neutral-950 border border-neutral-700 overflow-x-auto">
          {/* Top sprocket holes */}
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-neutral-800 min-w-[980px]">
            {sprockets.map((_, idx) => (
              <span
                key={`top-${idx}`}
                aria-hidden="true"
                className="w-3 h-2 border border-neutral-700 bg-neutral-900 inline-block"
              />
            ))}
          </div>

          {/* Frames of deliberately unequal widths: wide -> narrow -> medium -> tiny -> extra-wide -> compact */}
          <div className="flex items-stretch divide-x divide-neutral-700 min-w-[980px]">
            {/* Frame 1: WIDE — Archival prose */}
            <div className="w-80 shrink-0 p-5 flex flex-col justify-between">
              <div className="flex justify-between text-[9px] text-neutral-500 tabular-nums mb-3">
                <span>FRAME [01A]</span>
                <span>35MM ORTHO</span>
              </div>
              <div>
                <h3 className="text-sm font-serif font-bold text-white mb-2">
                  Haas Foundry Transfer (Basel)
                </h3>
                <p className="text-[11px] font-sans text-neutral-400 leading-relaxed">
                  Three oak chests of lead matrices arrived in November 1957 for complete photographic indexing prior to Monotype re-casting.
                </p>
              </div>
              <div className="text-[9px] text-neutral-600 mt-4 pt-2 border-t border-neutral-800">
                EXPOSURE: 1/4S · F/8
              </div>
            </div>

            {/* Frame 2: NARROW — Pure oversized numeral */}
            <div className="w-32 shrink-0 p-4 bg-neutral-900/60 flex flex-col justify-between items-center text-center">
              <span className="text-[9px] text-neutral-500 tabular-nums">[02A]</span>
              <div className="text-4xl font-bold text-white tracking-tighter [writing-mode:vertical-rl] rotate-180 my-2 tabular-nums">
                1957
              </div>
              <span className="text-[9px] text-neutral-500 uppercase">EPOCH</span>
            </div>

            {/* Frame 3: MEDIUM — Framed Specimen Plate */}
            <div className="w-60 shrink-0 p-5 flex flex-col justify-between">
              <div className="flex justify-between text-[9px] text-neutral-500 tabular-nums mb-2">
                <span>FRAME [03A]</span>
                <span>PLATE 114</span>
              </div>
              <div className="h-28 bg-neutral-900 border border-neutral-800 flex items-center justify-center relative">
                <span className="font-serif text-6xl italic text-neutral-200">é</span>
                <span className="absolute bottom-1.5 right-2 text-[9px] text-neutral-500 tabular-nums">
                  18PT STRIKE
                </span>
              </div>
              <div className="text-[10px] text-neutral-400 mt-2">
                Jean Jannon cursive matrix proof, Paris vault.
              </div>
            </div>

            {/* Frame 4: TINY — Vertical reference notch */}
            <div className="w-20 shrink-0 p-3 bg-neutral-100 text-neutral-950 flex flex-col items-center justify-between">
              <span className="text-[9px] font-bold tabular-nums">04A</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180">
                SPLICE // OK
              </span>
              <span className="text-[9px] tabular-nums">1200</span>
            </div>

            {/* Frame 5: EXTRA-WIDE — Giant italic quote */}
            <div className="w-96 shrink-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between text-[9px] text-neutral-500 tabular-nums">
                <span>FRAME [05A] · WIDE GATE</span>
                <span>PARIS ARCHIVE</span>
              </div>
              <blockquote className="font-serif italic text-xl text-white leading-snug my-3">
                “A typeface survives its foundry only when its proportions are recorded in light and ink without vanity.”
              </blockquote>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                — ADRIAN FRUTIGER, DEBERNY &amp; PEIGNOT, 1961
              </div>
            </div>

            {/* Frame 6: COMPACT — Technical emulsion spec */}
            <div className="w-44 shrink-0 p-4 flex flex-col justify-between bg-neutral-900/40">
              <div className="text-[9px] text-neutral-500 tabular-nums">FRAME [06A]</div>
              <div className="space-y-1.5 text-[10px] tabular-nums">
                <div className="flex justify-between border-b border-neutral-800 pb-1">
                  <span className="text-neutral-500">FILM</span>
                  <span className="text-white">TRI-X</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1">
                  <span className="text-neutral-500">RES</span>
                  <span className="text-white">1200 DPI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">LAB</span>
                  <span className="text-white">BASEL</span>
                </div>
              </div>
              <div className="text-[9px] text-neutral-500 uppercase">END REEL 04</div>
            </div>
          </div>

          {/* Bottom sprocket holes */}
          <div className="flex items-center justify-between px-3 py-1.5 border-t border-neutral-800 min-w-[980px]">
            {sprockets.map((_, idx) => (
              <span
                key={`bot-${idx}`}
                aria-hidden="true"
                className="w-3 h-2 border border-neutral-700 bg-neutral-900 inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
