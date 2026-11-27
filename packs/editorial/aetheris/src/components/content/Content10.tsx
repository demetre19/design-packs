import React from 'react';

export function Content10() {
  return (
    <section className="w-full bg-[#0b0d10] py-28 sm:py-36 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
      {/* Rotated Left-Edge Archival Stamp */}
      <div
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono tracking-[0.4em] text-[#7a8494] whitespace-nowrap"
        aria-hidden="true"
      >
        ARCHIVE INTERRUPT // NO. 10 — DO NOT DUPLICATE
      </div>

      {/* Top-Right Cornered Coordinate */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center mb-8 text-[10px] font-mono tracking-[0.3em] text-[#d4b06a]">
          <span>◆ FOLIO INTERRUPT</span>
          <span>N 46°12′ E 06°09′</span>
        </div>

        {/* Enormous Full-Bleed Typographic Statement */}
        <div className="relative">
          <h2 className="font-serif uppercase text-[#ece8e1] text-[clamp(3.1rem,9.2vw,8.75rem)] leading-[0.88] tracking-[-0.02em] select-none">
            <span className="block">SILENCE IS</span>
            <span className="block md:pl-20">
              THE <span className="italic font-normal text-[#d4b06a]">ONLY</span>
            </span>
            <span className="block">MEASURE OF</span>
            <span className="block md:text-right">PERMANENCE</span>
          </h2>

          {/* Unexpected Micro-Annotation Tucked Inside Letterform Negative Space */}
          <div className="mt-8 md:mt-0 md:absolute md:right-4 md:top-[30%] max-w-xs border-t border-b border-[#d4b06a]/50 py-3 px-4 bg-[#0b0d10]/95">
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#d4b06a] block mb-1">
              MARGINAL NOTE // 0.0004MM
            </span>
            <p className="font-mono text-[11px] text-[#7a8494] leading-relaxed">
              True chronometric authority does not announce itself; it persists unremarked across centuries inside sealed gold and stone.
            </p>
          </div>
        </div>

        {/* Bottom-Right Attribution Rule */}
        <div className="mt-14 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono tracking-[0.25em] text-[#7a8494]">
          <span>AETHERIS &amp; CO. — GENEVA MANIFESTO</span>
          <span className="text-[#ece8e1]">— MASTER WATCHMAKER’S MAXIM, EST. MMXXIV</span>
        </div>
      </div>
    </section>
  );
}
