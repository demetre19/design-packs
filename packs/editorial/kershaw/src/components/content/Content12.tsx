import React from 'react';

export function Content12() {
  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-14">
          <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase">
            // THREE-ACT TELEMETRY CHRONICLE · CONTINUOUS BUS LINE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
            ANATOMY OF <span className="text-[#ffd500]">RUN 07 / 40</span>
          </h2>
        </div>

        {/* Continuous Threading Telemetry Line Traveling Through All Three Acts */}
        <div className="relative pl-8 md:pl-14">
          <div aria-hidden="true" className="absolute left-2 md:left-4 top-2 bottom-2 w-0.5 bg-[#ffd500]" />

          {/* ACT I — Left-Offset Dense Log + Sensor Strip */}
          <div className="relative pb-16">
            <div className="absolute -left-[29px] md:-left-[45px] top-1 w-4 h-4 bg-[#0c0d0f] border-2 border-[#ffd500] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#ffd500]" />
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[#ffd500] mb-1">ACT I · T+00:00:00 // COLD IGNITION</div>
            <h3 className="font-display text-3xl font-extrabold uppercase mb-3">CRANKING SYNC &amp; GALLERY LOCK</h3>
            <p className="font-sans text-sm text-zinc-300 max-w-xl leading-relaxed mb-5">
              Pre-lube scavenge brings main oil pressure to 4.20 BAR before starter engagement. Cam-phasing solenoids settle at zero-overlap idle while intake charge stabilizes at 22.4°C.
            </p>
            <div className="inline-flex flex-wrap gap-6 border-t border-b border-[#262c36] py-2.5 text-[11px] tabular-nums text-zinc-400">
              <span>IDLE: <strong className="text-white">1,150 RPM</strong></span>
              <span>OIL: <strong className="text-white">4.20 BAR</strong></span>
              <span>LAMBDA: <strong className="text-[#ffd500]">0.98 λ</strong></span>
            </div>
          </div>

          {/* ACT II — Wide Oscilloscope Chamber with Flanking Numeric Boundaries */}
          <div className="relative pb-16">
            <div className="absolute -left-[29px] md:-left-[45px] top-1 w-4 h-4 bg-[#ffd500] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#0c0d0f]" />
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[#ffd500] mb-1">ACT II · T+00:24:18 // PEAK BOOST SOAK</div>
            <h3 className="font-display text-3xl font-extrabold uppercase mb-4">FULL-LOAD WOT SWEEP TO 8,400 RPM</h3>

            <div className="border border-[#262c36] bg-[#14161a] p-5 flex flex-col md:flex-row items-center gap-6">
              <div className="text-left shrink-0 tabular-nums">
                <span className="text-[10px] text-zinc-500 block">ENTRY THRESHOLD</span>
                <span className="font-display text-3xl font-black text-white">3,200 RPM</span>
              </div>

              <svg viewBox="0 0 360 70" className="w-full h-16">
                <polyline
                  points="0,58 45,54 90,42 135,28 180,14 225,12 270,15 315,20 360,18"
                  fill="none"
                  stroke="#ffd500"
                  strokeWidth="2"
                />
                <polyline
                  points="0,62 60,58 120,48 180,36 240,26 300,24 360,26"
                  fill="none"
                  stroke="#52525b"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
              </svg>

              <div className="text-right shrink-0 tabular-nums">
                <span className="text-[10px] text-zinc-500 block">PEAK ABSORPTION</span>
                <span className="font-display text-3xl font-black text-[#ffd500]">612 NM</span>
              </div>
            </div>
          </div>

          {/* ACT III — Right-Shifted Forensic Conclusion & Serial Stamp */}
          <div className="relative">
            <div className="absolute -left-[29px] md:-left-[45px] top-1 w-4 h-4 bg-[#0c0d0f] border-2 border-[#ffd500] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#ffd500]" />
            </div>
            <div className="md:ml-auto md:w-[70%] border-t-2 border-[#ffd500] pt-5">
              <div className="flex items-center justify-between text-[10px] tracking-[0.25em] text-[#ffd500] mb-2">
                <span>ACT III · T+00:48:20 // TEARDOWN AUDIT</span>
                <span>STATUS: SEALED</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold uppercase mb-2">
                ZERO BEARING WEAR · POST-SOAK VERIFIED
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Borescope inspection across cylinders 1–8 confirms intact Nikasil cross-hatching and zero ring land carbonization after 180 seconds at 94.2°C sump equilibrium.
              </p>
              <div className="flex items-center justify-between text-[10px] text-zinc-500 bg-[#14161a] px-3 py-2 border border-[#262c36]">
                <span>DOSSIER ARCHIVED: KD-998-07</span>
                <span className="text-[#ffd500] font-bold">END OF THREAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
