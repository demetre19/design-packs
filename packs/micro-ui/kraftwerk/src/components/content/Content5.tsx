import React from 'react';

export function Content5() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-8 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-05 // OPPOSING DOCTRINE COLLISION // HOMOLOGATION THESIS</span>
          <span className="font-bold">DOCTRINE A VS DOCTRINE B</span>
        </div>

        {/* Split Screen Opposition Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border-2 border-[#111111]">
          {/* Center Seam Collision Anchor */}
          <div
            className="hidden lg:flex flex-col items-center justify-between absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 pointer-events-none py-4"
            aria-hidden="true"
          >
            <span className="bg-[#e8e8e6] border border-[#111111] px-1.5 py-0.5 text-[8px] font-bold">
              + SEAM
            </span>
            <div className="bg-[#e8e8e6] border-2 border-[#111111] px-3 py-4 text-center">
              <div className="text-2xl font-black leading-none tracking-tighter">VS</div>
              <div className="text-[8px] tracking-[0.2em] mt-1">01/02</div>
            </div>
            <span className="bg-[#111111] text-[#e8e8e6] border border-[#e8e8e6] px-1.5 py-0.5 text-[8px] font-bold">
              REF:44
            </span>
          </div>

          {/* LEFT ZONE: Light Paper — Mechanical Purebred Argument (Long-form prose + horizontal tolerance gauges) */}
          <div className="bg-[#e8e8e6] text-[#111111] p-8 lg:pr-14 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111]">
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#555555] mb-3">
                01 // MECHANICAL PURITY
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.92] mb-6">
                DIRECT LINKAGE.<br />ZERO INTERVENTION.
              </h3>
              <p className="text-[11px] leading-relaxed text-[#333333] mb-6">
                Pure mechanical geometry communicates tire slip directly through the steering column before any electronic sensor can sample voltage. In Stuttgart endurance trials, unassisted mechanical feedback reduced mid-corner steering corrections by 19%.
              </p>
            </div>

            {/* Asymmetric Mechanical Calibration Bars */}
            <div className="space-y-3 border-t border-[#111111] pt-5 text-[9px] uppercase">
              <div className="flex justify-between mb-1">
                <span>COLUMN TORQUE FIDELITY</span>
                <span className="font-bold tabular-nums">98.4%</span>
              </div>
              <div className="w-full h-2.5 border border-[#111111] bg-[#ffffff]">
                <div className="h-full bg-[#111111] w-[98%]" />
              </div>

              <div className="flex justify-between pt-2 mb-1">
                <span>MECHANICAL LATENCY</span>
                <span className="font-bold tabular-nums">0.00 MS</span>
              </div>
              <div className="w-full h-2.5 border border-[#111111] bg-[#ffffff]">
                <div className="h-full bg-[#777777] w-[6%]" />
              </div>
            </div>
          </div>

          {/* RIGHT ZONE: Inverted Black — Active Telemetry Argument (Waveform + Key-Value Matrix + Hazard Edge) */}
          <div className="bg-[#111111] text-[#e8e8e6] p-8 lg:pl-14 flex flex-col justify-between relative">
            {/* Hazard Edge Band */}
            <div className="h-2.5 w-full bg-[repeating-linear-gradient(45deg,#e8e8e6,#e8e8e6_4px,#111111_4px,#111111_8px)] mb-6" />

            <div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.25em] text-[#aaaaaa] mb-3">
                <span>02 // ACTIVE TELEMETRY</span>
                <span className="border border-[#e8e8e6] px-1.5 py-0.5 text-[8px]">2,000 HZ</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-5">
                PREDICTIVE DAMPING.<br />SUB-MILLISECOND GAIN.
              </h3>

              {/* Stepped Telemetry Waveform SVG */}
              <div className="border border-[#444444] bg-[#0a0a0a] p-3 mb-6">
                <div className="text-[8px] tracking-widest text-[#888888] mb-2">
                  LIVE DAMPER DISPLACEMENT TRACE // CH-04
                </div>
                <svg viewBox="0 0 400 72" className="w-full h-16" aria-hidden="true">
                  <polyline
                    points="0,56 35,56 50,18 90,18 115,44 165,44 190,12 240,12 270,50 320,50 345,24 400,24"
                    fill="none"
                    stroke="#e8e8e6"
                    strokeWidth="2"
                  />
                  <line x1="0" y1="36" x2="400" y2="36" stroke="#444444" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* Key-Value Matrix (Completely different structure from Left Zone) */}
            <div className="grid grid-cols-3 border border-[#444444] divide-x divide-[#444444] text-[9px] uppercase">
              <div className="p-3">
                <span className="text-[#888888] block text-[8px]">SAMPLE RATE</span>
                <span className="font-bold text-sm tabular-nums">2.0 KHZ</span>
              </div>
              <div className="p-3">
                <span className="text-[#888888] block text-[8px]">ACTUATION</span>
                <span className="font-bold text-sm tabular-nums">1.2 MS</span>
              </div>
              <div className="p-3">
                <span className="text-[#888888] block text-[8px]">CHANNELS</span>
                <span className="font-bold text-sm tabular-nums">128 CH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
