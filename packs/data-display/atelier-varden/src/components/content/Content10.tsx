import React from 'react';

export function Content10() {
  return (
    <section className="w-full bg-[#fafaf8] py-20 lg:py-32 border-b border-[#e2e0d8] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Rotated left-edge archival stamp */}
        <div className="hidden lg:flex items-center space-x-2 absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 whitespace-nowrap">
          <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
          <span>INTERRUPTION NO. 10 · AXIAL LOAD THESIS</span>
        </div>

        <div className="lg:pl-10 space-y-6">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
            <span>STATEMENT FRAGMENT — UNABRIDGED</span>
            <span className="text-[#b5482e] tabular-nums">42 KN / M²</span>
          </div>

          <div className="relative">
            <h2 className="text-5xl sm:text-7xl lg:text-[6.75rem] font-medium tracking-[-0.04em] leading-[0.92] text-[#16171a]">
              STONE
              <span className="inline-block align-middle mx-3 sm:mx-5 border border-[#b5482e] px-2.5 py-1 text-[10px] sm:text-xs font-mono tracking-[0.18em] uppercase text-[#b5482e] leading-normal">
                [ FIG. 10A · GRAVITY ]
              </span>
              REMEMBERS EVERY WEIGHT IT HAS CARRIED.
            </h2>
          </div>

          <div className="pt-6 border-t border-[#e2e0d8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-stone-600 uppercase tracking-wider">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span>MARCUS VARDEN — ON TECTONIC PERMANENCE, ZÜRICH 2024</span>
            </div>
            <div className="text-stone-400 tabular-nums">
              ARCHIVE REF. AV-TH-010 · NO PHOTOGRAPHY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
