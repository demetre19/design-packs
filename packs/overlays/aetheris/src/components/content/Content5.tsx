import React from 'react';

export function Content5() {
  return (
    <section className="w-full border-b border-white/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT OPPOSED ZONE: Midnight Noir — Mechanical Permanence (Manifesto Layout) */}
        <div className="bg-[#0b0d10] text-[#ece8e1] px-8 sm:px-14 py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#d4b06a]/35">
          <div className="max-w-lg ml-auto">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-4">
              THESIS I // ANALOG PERMANENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-[#ece8e1] mb-8">
              Built to Outlive Every Firmware &amp; Sovereign Currency
            </h2>
            <p className="font-serif italic text-xl text-[#d4b06a] mb-10 pl-6 border-l border-[#d4b06a]/50">
              “A mainspring wound in Geneva requires no server, no battery, and no permission from the century that follows.”
            </p>

            {/* Axiom List with Oldstyle Numerals */}
            <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-serif text-xl text-[#d4b06a]">i.</span>
                  <h3 className="font-mono text-xs tracking-widest text-[#ece8e1] uppercase">
                    Serviceable After 200 Years
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#7a8494] pl-6 leading-relaxed">
                  Every pinion, wheel, and balance staff can be turned anew on a watchmaker’s lathe from raw steel and brass bar stock.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-serif text-xl text-[#d4b06a]">ii.</span>
                  <h3 className="font-mono text-xs tracking-widest text-[#ece8e1] uppercase">
                    Zero Electromagnetic Exposure
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#7a8494] pl-6 leading-relaxed">
                  Silicon hairsprings and soft-iron Faraday inner cages maintain chronometric beat across 15,000 gauss.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT OPPOSED ZONE: Inverted Warm Parchment — Planned Obsolescence (Audit Table Layout) */}
        <div className="bg-[#ece8e1] text-[#0b0d10] px-8 sm:px-14 py-20 lg:pl-20">
          <div className="max-w-lg mr-auto">
            <div className="flex items-center justify-between border-b border-[#0b0d10]/20 pb-3 mb-8 text-[10px] font-mono tracking-[0.25em] uppercase">
              <span>THESIS II // EPHEMERAL HARDWARE</span>
              <span>AUDIT LOG 02</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#0b0d10] mb-8">
              The Inevitable Decay of Sealed Consumer Instruments
            </h2>

            {/* Completely different internal layout: rigid audit clauses */}
            <div className="border-t border-b border-[#0b0d10]/25 divide-y divide-[#0b0d10]/15 font-mono text-xs">
              <div className="py-4 grid grid-cols-12 gap-2 items-baseline">
                <span className="col-span-4 text-[10px] text-[#0b0d10]/60">YEAR 03</span>
                <span className="col-span-8 font-medium line-through decoration-[#0b0d10]/40">
                  Lithium Cell Chemical Exhaustion
                </span>
              </div>
              <div className="py-4 grid grid-cols-12 gap-2 items-baseline">
                <span className="col-span-4 text-[10px] text-[#0b0d10]/60">YEAR 05</span>
                <span className="col-span-8 font-medium line-through decoration-[#0b0d10]/40">
                  Cryptographic Operating Support Terminated
                </span>
              </div>
              <div className="py-4 grid grid-cols-12 gap-2 items-baseline">
                <span className="col-span-4 text-[10px] text-[#0b0d10]/60">YEAR 08</span>
                <span className="col-span-8 font-medium">
                  Proprietary Silicon Replacement Obsolete
                </span>
              </div>
              <div className="py-4 grid grid-cols-12 gap-2 items-baseline">
                <span className="col-span-4 text-[10px] text-[#0b0d10]/60">DISPOSITION</span>
                <span className="col-span-8 font-bold uppercase tracking-wider">
                  ZERO RESIDUAL ARCHIVAL VALUE
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#0b0d10]/70">
              <span>COMPARATIVE LIFESPAN RATIO</span>
              <span className="font-bold text-[#0b0d10]">1 : ∞ GENERATIONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Seam Collision Medallion */}
      <div
        className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#13171c] border border-[#d4b06a] items-center justify-center z-20"
        aria-hidden="true"
      >
        <div className="text-center">
          <span className="font-serif italic text-lg text-[#d4b06a] block leading-none">vs</span>
          <span className="font-mono text-[8px] tracking-widest text-[#ece8e1] block mt-1">01 ⇄ 02</span>
        </div>
      </div>
    </section>
  );
}
