import React from 'react';
import { Hexagon } from 'lucide-react';

export function Content11() {
  return (
    <section className="bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between mb-4 gap-2">
          <span className="text-[10px] tracking-[0.28em] text-[#ffd500] uppercase">
            // SPECIMEN DATASHEET KD-998-DS · IRREGULAR CELL MATRIX
          </span>
          <span className="text-[10px] text-zinc-500">DIN 70020 · CELL 04 · RUN 07/40</span>
        </div>

        {/* Pure Structural Irregular Datasheet Matrix (1px Hairline Gaps) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-px bg-[#262c36] border border-[#262c36] tabular-nums">
          {/* Cell A: Large 5-col x 2-row Primary Peak Specimen */}
          <div className="col-span-2 md:col-span-5 md:row-span-2 bg-[#14161a] p-6 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span>SPECIMEN A.01 // SHAFT OUTPUT</span>
              <span className="text-[#ffd500] font-bold">LOCKED</span>
            </div>
            <div className="my-6">
              <div className="font-display text-6xl md:text-7xl font-black text-white leading-none">
                612<span className="text-2xl text-[#ffd500] ml-2">NM</span>
              </div>
              <div className="text-xs text-zinc-400 mt-2">AT 6,800 RPM · 2.84 BAR ABS MANIFOLD</div>
            </div>
            <div className="text-[10px] text-zinc-500 border-t border-[#22262f] pt-3 flex justify-between">
              <span>PEAK POWER: 718.5 KW (963 HP)</span>
              <span>±0.02%</span>
            </div>
          </div>

          {/* Cell B: 4-col Top Mid Torque Curve Sparkline */}
          <div className="col-span-2 md:col-span-4 bg-[#0c0d0f] p-4 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] text-zinc-400 mb-2">
              <span>HARMONIC TORQUE TRACE</span>
              <span className="text-[#ffd500]">1,000 HZ</span>
            </div>
            <svg viewBox="0 0 260 56" className="w-full h-14">
              <polyline
                points="0,48 35,44 75,30 115,16 165,12 205,15 240,22 260,26"
                fill="none"
                stroke="#ffd500"
                strokeWidth="1.8"
              />
              <line x1="0" y1="28" x2="260" y2="28" stroke="#22262f" strokeDasharray="3 3" />
            </svg>
            <span className="text-[9px] text-zinc-500">FLAT PLATEAU: 5,400 – 8,100 RPM</span>
          </div>

          {/* Cell C: 3-col Inverted Phosphor Redline Cell */}
          <div className="col-span-1 md:col-span-3 bg-[#ffd500] text-[#0c0d0f] p-4 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] font-extrabold">
              <span>REDLINE CEILING</span>
              <Hexagon className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-4xl font-black leading-none mt-2">8,400</div>
            <div className="text-[10px] font-extrabold tracking-widest">RPM CUTOFF</div>
          </div>

          {/* Cell D: 2-col Narrow Thermal Readout */}
          <div className="col-span-1 md:col-span-2 bg-[#14161a] p-4 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500">OIL SUMP</span>
            <div className="text-xl font-extrabold text-white mt-2">
              94.2<span className="text-[10px] text-zinc-400 ml-0.5">°C</span>
            </div>
          </div>

          {/* Cell E: 3-col Bore x Stroke Micro Spec */}
          <div className="col-span-1 md:col-span-3 bg-[#0c0d0f] p-4 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500">GEOMETRY (BORE × STROKE)</span>
            <div className="text-base font-bold text-white mt-1">89.0 × 80.4 MM</div>
            <span className="text-[10px] text-[#ffd500]">3,998 CC · 12.5:1 CR</span>
          </div>

          {/* Cell F: 2-col Row-Span-2 Vertical Rail Spec */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 bg-[#14161a] p-4 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500">FUEL RAIL</span>
            <div>
              <div className="font-display text-4xl font-black text-[#ffd500] leading-none">350</div>
              <span className="text-[10px] text-zinc-400">BAR PIEZO</span>
            </div>
            <span className="text-[9px] text-zinc-500 border-t border-[#22262f] pt-2">0.11 MS STEP</span>
          </div>

          {/* Cell G: 6-col Wide Micro-Note & Vibration Band */}
          <div className="col-span-2 md:col-span-6 bg-[#0c0d0f] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[9px] text-[#ffd500] block">MICRO-NOTE // TORSIONAL DAMPING</span>
              <p className="text-[11px] font-sans text-zinc-300 mt-0.5">
                Viscous silicone crank damper limits 4th-order torsional twist below 0.09° across full sweep.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-lg font-extrabold text-white">0.04</span>
              <span className="text-[10px] text-zinc-500 ml-1">G-RMS</span>
            </div>
          </div>

          {/* Cell H: 4-col Exhaust Gas Temp */}
          <div className="col-span-2 md:col-span-4 bg-[#14161a] p-4 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-zinc-500 block">EXHAUST GAS TEMP (BANK A/B)</span>
              <span className="text-lg font-extrabold text-white">890.4°C / 888.9°C</span>
            </div>
            <span className="text-[10px] bg-[#0c0d0f] border border-[#262c36] px-2 py-1 text-[#ffd500]">Δ 1.5°C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
