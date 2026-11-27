import React from 'react';

export function Content12() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b border-black pb-3 mb-10 font-mono text-[10px] uppercase tracking-widest">
          <span>CONTINUOUS THREAD 12 // THREE-ACT ORE CONVERSION</span>
          <span className="text-[#f25c05] font-bold">UNBROKEN CONDUIT</span>
        </div>

        {/* Threaded Three-Act Narrative Container */}
        <div className="relative pl-8 md:pl-12">
          {/* Continuous Vertical Orange Thread Piercing All Three Acts */}
          <div
            className="absolute left-3 md:left-5 top-0 bottom-0 w-1.5 bg-[#f25c05] z-20"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {/* ACT I: Full-Width Typographic Header + Horizontal Split Bar */}
            <article className="relative">
              <div
                className="absolute -left-7 md:-left-9 top-2 w-5 h-5 bg-black border-2 border-[#f25c05] z-30 flex items-center justify-center font-mono text-[9px] font-bold text-white"
                aria-hidden="true"
              >
                I
              </div>

              <div className="border-t-4 border-black pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                  ACT I // SUBTERRANEAN FRACTURE (T-00:00)
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  SONIC DETONATION &amp; <span className="text-[#f25c05]">CLEAVAGE</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-black bg-white font-mono text-xs divide-y md:divide-y-0 md:divide-x divide-black">
                  <div className="p-4">
                    <span className="text-[10px] text-neutral-500 block uppercase mb-1">METHOD</span>
                    <span className="font-bold">NON-EXPLOSIVE PLASMA PULSE</span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] text-neutral-500 block uppercase mb-1">FRACTURE SIZE</span>
                    <span className="font-bold">120 MM UNIFORM CHUNK</span>
                  </div>
                  <div className="p-4 bg-black text-white">
                    <span className="text-[10px] text-[#f25c05] block uppercase mb-1">DAMPENING</span>
                    <span className="font-bold">ZERO SEISMIC DRIFT</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ACT II: Offset Dark Block (Completely Different Internal Layout) */}
            <article className="relative md:ml-24">
              <div
                className="absolute -left-7 md:-left-[132px] top-6 w-5 h-5 bg-[#f25c05] border-2 border-black z-30 flex items-center justify-center font-mono text-[9px] font-black text-black"
                aria-hidden="true"
              >
                II
              </div>
              {/* Horizontal Branch Linking Thread to Offset Block */}
              <div
                className="hidden md:block absolute -left-[114px] top-8 w-[114px] h-[2px] bg-[#f25c05] z-10"
                aria-hidden="true"
              />

              <div className="bg-black text-white p-8 border-4 border-black">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="max-w-lg">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#f25c05] mb-2">
                      ACT II // VERTICAL EXTRACTION (T+00:14)
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none mb-3">
                      PRESSURIZED RISER ASCENT
                    </h3>
                    <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                      Crushed ore slurry ascends 840 meters through titanium-lined conduits propelled by triple-redundant centrifugal pumps.
                    </p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-neutral-700 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center font-mono shrink-0">
                    <span className="text-[10px] text-neutral-400 uppercase">LIFT VELOCITY</span>
                    <span className="text-4xl font-black text-[#f25c05] tabular-nums">18.4 M/S</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ACT III: Stepped Terminal Output Readout */}
            <article className="relative">
              <div
                className="absolute -left-7 md:-left-9 top-4 w-5 h-5 bg-black border-2 border-[#f25c05] z-30 flex items-center justify-center font-mono text-[9px] font-bold text-white"
                aria-hidden="true"
              >
                III
              </div>

              <div className="border-2 border-black bg-white p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                    ACT III // ELECTRO-MAGNETIC REFINING (T+00:42)
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    CONTINUOUS BULLION CASTING
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-xs tabular-nums">
                  <div className="border border-black px-4 py-2 bg-[#f5f4f0]">
                    <span className="text-[9px] text-neutral-500 block">TEMP</span>
                    <span className="font-black">1,450 °C</span>
                  </div>
                  <div className="border border-black px-4 py-2 bg-[#f5f4f0]">
                    <span className="text-[9px] text-neutral-500 block">PURITY</span>
                    <span className="font-black text-[#f25c05]">99.94%</span>
                  </div>
                  <div className="bg-black text-white px-4 py-2">
                    <span className="text-[9px] text-neutral-400 block">OUTPUT</span>
                    <span className="font-black">450K T/DAY</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
