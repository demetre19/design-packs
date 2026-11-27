import React from 'react';

export function Content12() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-2">
            CHRONICLE / SUZUKA RECORD RUN — 18 NOV 2026
          </div>
          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            THREADED <span className="text-[#ff2e00]">NARRATIVE</span>
          </h2>
        </div>

        {/* Continuous Signal-Red Thread Rail Linking 3 Distinct Acts */}
        <div className="relative pl-10 sm:pl-16">
          {/* Continuous Vertical Red Thread */}
          <div
            aria-hidden="true"
            className="absolute left-3 sm:left-5 top-2 bottom-2 w-[2px] bg-[#ff2e00]"
          />

          {/* ACT I: Drop-Cap Editorial Column */}
          <article className="relative pb-14 border-b border-black">
            <div className="absolute -left-10 sm:-left-16 top-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#ff2e00] text-black font-mono text-xs font-black flex items-center justify-center border border-black">
              01
            </div>
            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
              ACT I · 05:40 JST — PIT LANE COLD IGNITION
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <h3 className="lg:col-span-5 text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
                SILENCE BEFORE <br />998 VOLTS
              </h3>
              <p className="lg:col-span-7 text-sm leading-relaxed text-neutral-800">
                <span className="text-4xl font-black float-left mr-3 leading-none">N</span>
                o warm-up revs shatter the dawn mist over Mie Prefecture. As pilot Hiroshi Tanaka clicks the carbon kill-switch into Armed state, only the low laminar hum of dual dielectric coolant pumps signals 215 horsepower waiting at zero RPM. Tire blankets strip cleanly; ambient asphalt reads 11.8°C.
              </p>
            </div>
          </article>

          {/* ACT II: Full-Span Photographic Strip with Overlaid Timecode */}
          <article className="relative py-14 border-b border-black">
            <div className="absolute -left-10 sm:-left-16 top-14 w-7 h-7 sm:w-10 sm:h-10 bg-black text-white font-mono text-xs font-black flex items-center justify-center border border-[#ff2e00]">
              02
            </div>
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase tracking-widest mb-3">
              ACT II · 06:12 JST — SPOON CURVE 64° APEX
            </div>
            <div className="relative border-2 border-black bg-black h-64 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/velox_track_motion_1795617081295.jpg"
                alt="Spoon curve 64 degree lean angle record pass"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/70" />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/80 px-2 py-1 border border-[#ff2e00]">
                TELEMETRY FRAME 4412 · LATERAL 1.84 G
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                  APEX LOCK AT 212 KM/H
                </h3>
                <span className="font-mono text-xs font-bold text-[#ff2e00] bg-black px-2 py-1">
                  SLIP VECTORING: ACTIVE (5KHZ)
                </span>
              </div>
            </div>
          </article>

          {/* ACT III: Compact Verification Register & Record Lap */}
          <article className="relative pt-14">
            <div className="absolute -left-10 sm:-left-16 top-14 w-7 h-7 sm:w-10 sm:h-10 bg-[#ff2e00] text-black font-mono text-xs font-black flex items-center justify-center border border-black">
              03
            </div>
            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3">
              ACT III · 06:14 JST — TIMING BEAM CROSSING
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-black text-white p-6 border-2 border-black">
              <div className="md:col-span-5">
                <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase mb-1">
                  OFFICIAL TRANSPONDER LOG
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter tabular-nums leading-none">
                  1:58.420
                </div>
              </div>
              <div className="md:col-span-7 grid grid-cols-2 gap-4 font-mono text-[11px] border-t md:border-t-0 md:border-l border-neutral-800 pt-4 md:pt-0 md:pl-6">
                <div>
                  <div className="text-neutral-500 text-[10px]">SECTOR 01 / S-CURVES</div>
                  <div className="font-bold text-white tabular-nums">31.042 S</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px]">SECTOR 02 / DEGNER</div>
                  <div className="font-bold text-white tabular-nums">28.918 S</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px]">WEST STRAIGHT V_MAX</div>
                  <div className="font-bold text-[#ff2e00] tabular-nums">310.4 KM/H</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px]">PACK THERMAL DELTA</div>
                  <div className="font-bold text-white tabular-nums">+1.4°C</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
