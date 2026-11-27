import React from 'react';

export function Content12() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#111111] pb-3 mb-10 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-12 // THREADED NARRATIVE // THREE-ACT CONTINUUM</span>
          <span className="font-bold">THREAD: 01 → 02 → 03</span>
        </div>

        {/* Continuous Threaded Track Container */}
        <div className="relative pl-6 md:pl-12">
          {/* Continuous Vertical Thread Line Linking All Three Acts */}
          <div
            className="absolute left-2 md:left-4 top-2 bottom-2 w-[2px] bg-[#111111]"
            aria-hidden="true"
          />

          {/* ACT I — Editorial Prose + Inline Metric Band */}
          <div className="relative pb-12">
            {/* Thread Waypoint Node */}
            <div className="absolute -left-[22px] md:-left-[38px] top-1 w-4 h-4 bg-[#111111] border-2 border-[#e8e8e6] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[#e8e8e6]" />
            </div>

            <div className="border-t border-[#111111] pt-3">
              <div className="flex items-center justify-between text-[9px] tracking-[0.22em] text-[#555555] mb-3">
                <span className="font-bold text-[#111111]">ACT I // THE WIND</span>
                <span>STUTTGART WIND TUNNEL — 04:15 CET</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none mb-3">
                    CARVING LAMINAR FLOW OUT OF RAW TURBULENCE
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#333333]">
                    Before a single titanium tube is welded, the K-99 begins as negative pressure inside the Stuttgart rolling-road wind tunnel. Smoke streamlines trace the path from splitter lip to twin Venturi exits, proving zero separation at yaw angles up to 14 degrees.
                  </p>
                </div>
                <div className="md:col-span-4 border border-[#111111] bg-[#f4f4f0] p-3 text-[9px] uppercase">
                  <div className="text-[#555555]">ACT I BENCHMARK</div>
                  <div className="text-2xl font-black tabular-nums mt-1">CD 0.284</div>
                  <div className="text-[#555555] mt-1">DOWNFORCE RATIO 2.41 : 1</div>
                </div>
              </div>
            </div>
          </div>

          {/* ACT II — Structural Hardware Interlude with Vertical Macro Plate */}
          <div className="relative pb-12">
            {/* Thread Waypoint Node */}
            <div className="absolute -left-[22px] md:-left-[38px] top-1 w-4 h-4 bg-[#e8e8e6] border-2 border-[#111111] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[#111111]" />
            </div>

            <div className="border border-[#111111] bg-[#ffffff] p-5 md:p-6">
              <div className="flex items-center justify-between text-[9px] tracking-[0.22em] text-[#555555] border-b border-[#111111] pb-2 mb-5">
                <span className="font-bold text-[#111111]">ACT II // THE FORGE</span>
                <span>METALLURGY BAY — LOT 044</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 border border-[#111111] bg-[#111111]">
                  <img
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
                    alt="Machined titanium quad-turbo manifold and ceramic brake rotor"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[3/4] object-cover grayscale contrast-125"
                  />
                </div>
                <div className="md:col-span-5 space-y-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                    INCONEL, TITANIUM, &amp; 1,040 °C ENDURANCE
                  </h3>
                  <p className="text-[10px] leading-relaxed text-[#444444] uppercase">
                    Four ceramic-bearing turbochargers feed directly from hydroformed Inconel 718 headers. Every weld seam undergoes ultrasonic X-ray inspection before dyno marriage.
                  </p>
                </div>
                <div className="md:col-span-4 border-l border-[#111111] pl-4 space-y-3 text-[9px] uppercase">
                  <div className="border-b border-[#111111] pb-2">
                    <span className="text-[#555555] block">EXHAUST GAS LIMIT</span>
                    <span className="font-black text-sm tabular-nums">1,040 °C CONTINUOUS</span>
                  </div>
                  <div className="border-b border-[#111111] pb-2">
                    <span className="text-[#555555] block">CRANK REDLINE</span>
                    <span className="font-black text-sm tabular-nums">9,200 RPM</span>
                  </div>
                  <div>
                    <span className="text-[#555555] block">ROTOR MATERIAL</span>
                    <span className="font-black text-sm">SILICON CARBIDE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ACT III — Full Black Inversion Resolution */}
          <div className="relative">
            {/* Thread Waypoint Node */}
            <div className="absolute -left-[22px] md:-left-[38px] top-1 w-4 h-4 bg-[#111111] border-2 border-[#e8e8e6] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[#e8e8e6]" />
            </div>

            <div className="bg-[#111111] text-[#e8e8e6] p-6 md:p-8 border-2 border-[#111111]">
              <div className="flex flex-wrap items-center justify-between text-[9px] tracking-[0.22em] text-[#aaaaaa] mb-4">
                <span className="font-bold text-[#e8e8e6]">ACT III // THE CIRCUIT</span>
                <span>NÜRBURGRING NORDSCHLEIFE — VERIFIED</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                    6:42.88 FINAL HOMOLOGATION
                  </h3>
                  <p className="text-[10px] text-[#cccccc] uppercase tracking-wider mt-3 max-w-xl">
                    After 2,400 kilometers of telemetry validation, chassis K-99 #044 receives its final archival stamp and enters permanent Stuttgart register.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="h-8 w-44 bg-[repeating-linear-gradient(90deg,#e8e8e6,#e8e8e6_2px,#111111_2px,#111111_5px)] border border-[#e8e8e6]" />
                  <div className="text-[8px] tracking-widest text-[#aaaaaa] mt-1 text-right">
                    END THREAD // KW-044
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
