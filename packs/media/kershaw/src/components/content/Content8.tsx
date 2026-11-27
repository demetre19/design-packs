import React from 'react';
import { Hexagon } from 'lucide-react';

export function Content8() {
  return (
    <section
      className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#262c36 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase">
              // CELL 04 DRAFTING BENCH · UNSORTED TEST ARTIFACTS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              ENGINEER <span className="text-[#ffd500]">WORKBENCH PINBOARD</span>
            </h2>
          </div>
          <span className="hidden sm:inline text-[10px] bg-[#14161a] border border-[#262c36] px-3 py-1 text-zinc-400">
            6 LAYERED ARTIFACTS · RUN 07/40
          </span>
        </div>

        {/* Controlled Chaos Pinboard Collage (Desktop Absolute Layered, Mobile Safe Stacked Offset) */}
        <div className="relative lg:h-[580px] flex flex-col lg:block gap-6">
          {/* FIG 01: Background Large Blueprint Plate (z-10) */}
          <div className="lg:absolute lg:top-4 lg:left-6 lg:w-[430px] bg-[#14161a] border border-[#262c36] p-5 z-10 lg:-rotate-2">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-3">
              <span>FIG. 01 // TURBINE INLET PLATE</span>
              <Hexagon className="w-3.5 h-3.5 text-[#ffd500]" />
            </div>
            <div className="h-48 bg-[radial-gradient(circle_at_60%_40%,#232834_0%,#0c0d0f_80%)] border border-[#22262f] relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 240 140" className="w-full h-full">
                <circle cx="120" cy="70" r="50" fill="none" stroke="#3f4654" strokeWidth="1" />
                <circle cx="120" cy="70" r="34" fill="none" stroke="#ffd500" strokeDasharray="3 3" strokeWidth="1.2" />
                <line x1="20" y1="70" x2="220" y2="70" stroke="#262c36" />
                <line x1="120" y1="10" x2="120" y2="130" stroke="#262c36" />
                <text x="16" y="24" fill="#ffd500" fontSize="9" fontFamily="monospace">
                  142,000 RPM
                </text>
              </svg>
            </div>
            <p className="text-[10px] text-zinc-400 mt-2">CAPTION: Cold-side compressor clearance laser sweep (0.18 mm).</p>
          </div>

          {/* FIG 02: Overlapping Phosphor-Yellow Warning Tag (z-30) */}
          <div className="lg:absolute lg:top-16 lg:left-[340px] lg:w-64 bg-[#ffd500] text-[#0c0d0f] p-4 z-30 lg:rotate-3 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
            <div className="flex items-center justify-between text-[10px] font-extrabold border-b border-[#0c0d0f]/25 pb-1.5 mb-2">
              <span>FIG. 02 // REDLINE TAG</span>
              <span>#07-WARN</span>
            </div>
            <div className="font-display text-4xl font-black leading-none mb-1">94.2°C</div>
            <p className="text-[11px] font-sans font-bold leading-snug">
              CAPTION: Oil sump ceiling logged at 180s sustained wide-open throttle hold.
            </p>
          </div>

          {/* FIG 03: Lab Oscilloscope Strip (z-20) */}
          <div className="lg:absolute lg:top-8 lg:right-8 lg:w-[390px] bg-[#0c0d0f] border border-[#262c36] p-4 z-20 lg:rotate-1">
            <div className="flex justify-between text-[10px] text-[#ffd500] mb-2">
              <span>FIG. 03 // KNOCK SENSOR TRACE</span>
              <span>CH-09 · 12 KHZ</span>
            </div>
            <svg viewBox="0 0 320 64" className="w-full h-16 bg-[#14161a] border border-[#22262f]">
              <polyline
                points="0,32 24,32 32,12 40,52 48,22 56,42 64,32 110,32 118,8 126,56 134,18 142,46 150,32 220,32 228,16 236,48 244,32 320,32"
                fill="none"
                stroke="#ffd500"
                strokeWidth="1.5"
              />
            </svg>
            <p className="text-[10px] text-zinc-500 mt-2">CAPTION: Clean detonation envelope across cylinders 1–8.</p>
          </div>

          {/* FIG 04: Handwritten-Style Engineer Memo Slip Overlapping Plate & Trace (z-40) */}
          <div className="lg:absolute lg:top-[220px] lg:left-[260px] lg:w-[360px] bg-[#181b21] border-2 border-zinc-400/50 p-5 z-40 lg:-rotate-1">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2">
              <span className="text-[#ffd500] font-bold">FIG. 04 // BENCH SLIP 07</span>
              <Hexagon className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <h3 className="font-display text-2xl font-extrabold uppercase text-white mb-2">
              WASTEGATE PRELOAD +1.5 TURN
            </h3>
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
              CAPTION: Mechanical spring tension raised prior to Run 07; eliminated 4,800 RPM mid-range boost dip and stabilized 612 NM plateau.
            </p>
          </div>

          {/* FIG 05: Bottom-Left Serial Stamp Plaque (z-20) */}
          <div className="lg:absolute lg:bottom-6 lg:left-12 lg:w-72 bg-[#14161a] border border-[#ffd500] p-4 z-20 lg:rotate-2">
            <div className="text-[10px] text-[#ffd500] font-bold mb-1">FIG. 05 // BLOCK SERIAL</div>
            <div className="text-xl font-extrabold tracking-widest text-white">KD-998-00412</div>
            <p className="text-[10px] text-zinc-400 mt-1">CAPTION: Etched billet crankcase verification plate.</p>
          </div>

          {/* FIG 06: Bottom-Right Compression Calibration Card (z-30) */}
          <div className="lg:absolute lg:bottom-8 lg:right-12 lg:w-80 bg-[#14161a] border border-[#262c36] p-5 z-30 lg:-rotate-2">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-3">
              <span>FIG. 06 // LEAKDOWN AUDIT</span>
              <span className="text-[#ffd500] font-bold">0.31% MAX</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] tabular-nums mb-2">
              {['C1: 0.2', 'C2: 0.3', 'C3: 0.2', 'C4: 0.3', 'C5: 0.3', 'C6: 0.2', 'C7: 0.3', 'C8: 0.3'].map((c) => (
                <div key={c} className="bg-[#0c0d0f] border border-[#22262f] py-1 text-zinc-300">
                  {c}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-zinc-500">CAPTION: Post-run warm leakdown percentages across all 8 Nikasil bores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
