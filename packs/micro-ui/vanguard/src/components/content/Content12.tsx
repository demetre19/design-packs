import React from 'react';

export function Content12() {
  return (
    <section
      aria-label="Threaded Sortie Narrative"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-[#2a2d35] pb-4 mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              SORTIE S-09 CHRONICLE // THREADED NARRATIVE 12
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              THREE ACTS OF FLIGHT TEST S-09
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400 tabular-nums">TOTAL DURATION: 24M 18S</span>
        </div>

        {/* Continuous Vertical Thread Linking Three Structurally Distinct Acts */}
        <div className="relative pl-8 sm:pl-14">
          {/* Continuous Signal Thread */}
          <div
            aria-hidden="true"
            className="absolute left-3 sm:left-5 top-2 bottom-2 w-0.5 bg-[#ff3d00]"
          />

          <div className="space-y-12">
            {/* ACT I: Full-Width Horizontal Ignition Strip */}
            <div className="relative">
              <div className="absolute -left-8 sm:-left-14 top-1 bg-[#ff3d00] text-black text-[10px] font-black px-1.5 py-0.5 tabular-nums">
                T+00:00
              </div>
              <div className="border-b border-[#3a3e4c] pb-6">
                <div className="text-[10px] text-[#ff3d00] font-bold tracking-widest mb-1">
                  ACT I // CAPTIVE SEPARATION &amp; LIGHT-OFF
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <h3 className="text-2xl font-black font-sans uppercase max-w-md">
                    CLEAN DROP OVER GROOM LAKE AT 38,000 FEET
                  </h3>
                  <div className="grid grid-cols-3 gap-6 text-xs tabular-nums border-l border-[#2a2d35] pl-6">
                    <div>
                      <div className="text-[10px] text-zinc-500">RELEASE</div>
                      <div className="font-bold">M 0.82</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500">PITCH DOWN</div>
                      <div className="font-bold">-4.5°</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500">IGNITION</div>
                      <div className="font-bold text-[#ff3d00]">1.8 SEC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACT II: Asymmetric Three-Column Stratospheric Cruise Composition */}
            <div className="relative">
              <div className="absolute -left-8 sm:-left-14 top-1 bg-[#16181d] border border-[#ff3d00] text-[#ff3d00] text-[10px] font-black px-1.5 py-0.5 tabular-nums">
                T+04:18
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
                <div className="lg:col-span-5">
                  <div className="text-[10px] text-[#ff3d00] font-bold tracking-widest mb-1">
                    ACT II // HYPERSONIC DASH
                  </div>
                  <h3 className="text-xl font-black font-sans uppercase">
                    FOURTEEN MINUTES AT MACH 4.84
                  </h3>
                </div>
                <div className="lg:col-span-4 text-xs text-zinc-300 font-sans leading-relaxed">
                  Scramjet flameholders lock cleanly as X-99 climbs through FL650. External chase T-38s fall 180 nautical miles astern while Edwards radar maintains continuous skin-track.
                </div>
                <div className="lg:col-span-3 text-right tabular-nums">
                  <div className="text-3xl font-black font-sans text-[#ff3d00]">FL650</div>
                  <div className="text-[10px] text-zinc-400">SKIN: 1,680 °C</div>
                </div>
              </div>
            </div>

            {/* ACT III: Compressed Terminal Recovery Log */}
            <div className="relative">
              <div className="absolute -left-8 sm:-left-14 top-1 bg-white text-black text-[10px] font-black px-1.5 py-0.5 tabular-nums">
                T+19:42
              </div>
              <div className="space-y-2">
                <div className="text-[10px] text-[#ff3d00] font-bold tracking-widest">
                  ACT III // UNPOWERED GLIDE &amp; TOUCHDOWN
                </div>
                <h3 className="text-xl font-black font-sans uppercase">
                  DEAD-STICK FLARE ON EDWARDS RUNWAY 04L
                </h3>
                <div className="mt-3 divide-y divide-[#2a2d35] border-y border-[#2a2d35] text-xs tabular-nums">
                  <div className="py-2 flex justify-between">
                    <span className="text-zinc-400">19:42 // HYDROGEN PURGE COMPLETE</span>
                    <span className="text-white font-bold">FUEL 0.4% RESIDUAL</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-zinc-400">22:10 // TRANSONIC DECELERATION S-TURN</span>
                    <span className="text-white font-bold">M 0.92 · FL280</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-zinc-400">24:18 // MAIN GEAR WEIGHT-ON-WHEELS</span>
                    <span className="text-[#ff3d00] font-black">195 KTS · DROGUE DEPLOYED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
