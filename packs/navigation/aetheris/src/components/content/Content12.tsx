import React from 'react';

export function Content12() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
            CONTINUOUS NARRATIVE THREAD // THREE ACTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
            Lineage of a Sovereign Caliber
          </h2>
        </div>

        {/* Continuous Golden Thread Traveling Horizontally Through All Three Acts */}
        <div className="relative">
          {/* Visible Continuous Horizontal Thread Line on Desktop */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[26px] h-[1px] bg-[#d4b06a]/65 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* ACT I: Single-Column Philosophical Prose + Alloy Formula Margin */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8 bg-[#0b0d10] pr-4 w-fit">
                <span className="w-3.5 h-3.5 rotate-45 border border-[#d4b06a] bg-[#13171c] inline-block" />
                <span className="font-mono text-xs tracking-widest text-[#d4b06a]">ACT I // THE SMELT</span>
              </div>
              <div className="border-l border-white/15 pl-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#ece8e1] mb-4">
                    Mineral Purity Under Vacuum
                  </h3>
                  <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-6">
                    Before a single tooth is milled, raw ore is stripped of volatile trace elements inside our induction crucibles. Unblemished grain boundaries determine how cleanly a gear tooth accepts black polishing decades later.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 font-mono text-[11px] flex justify-between text-[#ece8e1]">
                  <span className="text-[#7a8494]">FORMULA</span>
                  <span>Ti 90% · Al 6% · V 4%</span>
                </div>
              </div>
            </div>

            {/* ACT II: Split Micro-Specification + Circular SVG Schematic */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8 bg-[#0b0d10] px-4 lg:-ml-4 w-fit">
                <span className="w-3.5 h-3.5 rotate-45 border border-[#d4b06a] bg-[#d4b06a] inline-block" />
                <span className="font-mono text-xs tracking-widest text-[#d4b06a]">ACT II // THE ESCAPEMENT</span>
              </div>
              <div className="bg-[#13171c] border border-white/10 p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-5 mb-5">
                  <svg viewBox="0 0 80 80" className="w-20 h-20 shrink-0" aria-label="Escapement wheel thread glyph">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(236,232,225,0.2)" />
                    <circle cx="40" cy="40" r="22" fill="none" stroke="#d4b06a" strokeDasharray="3 3" />
                    <line x1="6" y1="40" x2="74" y2="40" stroke="rgba(212,176,106,0.5)" />
                    <circle cx="40" cy="40" r="4" fill="#d4b06a" />
                  </svg>
                  <div>
                    <h3 className="font-serif text-xl text-[#ece8e1] mb-1">21,600 Beats/Hr</h3>
                    <span className="font-mono text-[10px] text-[#7a8494]">60-SEC TOURBILLON</span>
                  </div>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#7a8494]">COMPONENTS</span>
                    <span className="text-[#ece8e1]">384 HAND-FINISHED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7a8494]">ASSEMBLY TIME</span>
                    <span className="text-[#d4b06a]">420 HOURS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACT III: Monumental Centered Quote + Dual Coordinate Stamps */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8 bg-[#0b0d10] px-4 lg:-ml-4 w-fit">
                <span className="w-3.5 h-3.5 rotate-45 border border-[#d4b06a] bg-[#13171c] inline-block" />
                <span className="font-mono text-xs tracking-widest text-[#d4b06a]">ACT III // THE VAULT</span>
              </div>
              <div className="flex-1 flex flex-col justify-between text-center border-y border-white/15 py-6 px-4">
                <span className="text-[#d4b06a] text-xs">◆</span>
                <p className="font-serif italic text-2xl text-[#ece8e1] leading-snug my-4">
                  “Custody completes what the watchmaker begins: shielding mechanical truth from entropy.”
                </p>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#7a8494] border-t border-white/10 pt-3">
                  <span>GVA N 46°12′</span>
                  <span className="text-[#d4b06a]">CHAMBER SEALED</span>
                  <span>LDN N 51°30′</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
