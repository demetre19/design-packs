import React from 'react';

export function Content12() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
            CHRONICLE 12 // THREADED THREE-ACT NARRATIVE
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
            PROJECT V12-R DEVELOPMENT LOG
          </h2>
        </div>

        {/* Continuous Vertical Thread Connecting 3 Distinct Layouts */}
        <div className="relative pl-8 md:pl-12">
          {/* Continuous Vertical Orange Thread */}
          <div
            aria-hidden="true"
            className="absolute left-3 md:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#ff5a1f] via-[#ff5a1f] to-[#ff5a1f]/30"
          />

          {/* ACT I — Wide Manifesto Strip + Pinned Wind-Tunnel Pressure Readout */}
          <div className="relative pb-16">
            <span
              aria-hidden="true"
              className="absolute -left-[26px] md:-left-[38px] top-1 w-4 h-4 bg-[#ff5a1f] border-2 border-[#101114]"
            />
            <div className="font-mono-spec text-[10px] text-[#ff5a1f] font-bold mb-3">
              ACT I // T+00 MONTHS — WIND TUNNEL &amp; CONCEPT
            </div>

            <div className="border-t border-b border-[#272a33] py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white">
                  ELIMINATING RADIATOR FRONTAL AREA
                </h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed mt-3">
                  By replacing water-jacket housings with internal dielectric oil channels routed beneath the steering bridge, the front fairing profile narrowed by 64 mm—cutting frontal drag to 0.24 Cd before a single clay buck left Munich.
                </p>
              </div>
              <div className="font-mono-spec text-right shrink-0 border-l border-[#272a33] pl-6">
                <span className="text-[10px] text-neutral-500 block">TUNNEL VELOCITY</span>
                <span className="text-3xl font-bold text-white">250 <span className="text-xs text-[#ff5a1f]">KM/H</span></span>
                <span className="text-[10px] text-[#ff5a1f] block mt-1">DOWNFORCE: 48.2 KGF</span>
              </div>
            </div>
          </div>

          {/* ACT II — Asymmetric Trace Diagram + Staggered Endurance Notes */}
          <div className="relative pb-16">
            <span
              aria-hidden="true"
              className="absolute -left-[26px] md:-left-[38px] top-1 w-4 h-4 bg-[#101114] border-2 border-[#ff5a1f]"
            />
            <div className="font-mono-spec text-[10px] text-[#ff5a1f] font-bold mb-4">
              ACT II // T+14 MONTHS — BENCH TORTURE &amp; THERMAL LOCK
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              {/* Bar Trace */}
              <div className="md:col-span-5 bg-[#16181d] border border-[#272a33] p-5">
                <div className="font-mono-spec text-[10px] text-neutral-400 mb-3">
                  500-HOUR STATOR THERMAL PLATEAU
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[38, 52, 68, 76, 79, 79, 78, 79, 79, 78].map((v, i) => (
                    <div key={i} className="flex-1 bg-[#272a33] relative h-full flex items-end">
                      <div
                        className={`w-full ${v >= 78 ? 'bg-[#ff5a1f]' : 'bg-white/70'}`}
                        style={{ height: `${v}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-mono-spec text-[9px] text-neutral-500 mt-2">
                  <span>HR 000</span>
                  <span className="text-[#ff5a1f]">LOCKED 79.4 °C</span>
                  <span>HR 500</span>
                </div>
              </div>

              {/* Staggered Notes */}
              <div className="md:col-span-7 space-y-3 font-mono-spec text-xs">
                <div className="border-b border-[#272a33] pb-2 flex justify-between gap-4">
                  <span className="text-white font-bold">LOG 14.2 — INVERTER OVERLOAD TEST</span>
                  <span className="text-[#ff5a1f]">640 A CONTINUOUS</span>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Silicon-carbide phase legs survived 1,200 simulated hairpin exits with zero thermal derating, establishing the baseline for Batch 04 production firmware v4.8.
                </p>
              </div>
            </div>
          </div>

          {/* ACT III — Full-Width Lap Sector Timeline Band */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[26px] md:-left-[38px] top-1 w-4 h-4 bg-[#ff5a1f] border-2 border-[#101114]"
            />
            <div className="font-mono-spec text-[10px] text-[#ff5a1f] font-bold mb-4">
              ACT III // T+28 MONTHS — SUZUKA 01:58.42 LAP SIGN-OFF
            </div>

            <div className="bg-[#16181d] border border-[#272a33] p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono-spec text-xs divide-y md:divide-y-0 md:divide-x divide-[#272a33]">
                <div className="pt-2 md:pt-0">
                  <span className="text-[10px] text-neutral-500 block">SECTOR 01 // S-CURVES</span>
                  <span className="text-white font-bold text-lg block mt-1">31.42 S</span>
                  <span className="text-[10px] text-neutral-400">Counter-rotor agility delta</span>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <span className="text-[10px] text-neutral-500 block">SECTOR 02 // DEGNER</span>
                  <span className="text-white font-bold text-lg block mt-1">24.18 S</span>
                  <span className="text-[10px] text-neutral-400">2.14 G lateral load</span>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <span className="text-[10px] text-neutral-500 block">SECTOR 03 // 130R</span>
                  <span className="text-white font-bold text-lg block mt-1">38.90 S</span>
                  <span className="text-[10px] text-neutral-400">298 km/h terminal trap</span>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <span className="text-[10px] text-[#ff5a1f] block">FINAL LAP RECORD</span>
                  <span className="text-[#ff5a1f] font-extrabold text-2xl block mt-1">01:58.42</span>
                  <span className="text-[10px] text-white">PRODUCTION EV BENCHMARK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
