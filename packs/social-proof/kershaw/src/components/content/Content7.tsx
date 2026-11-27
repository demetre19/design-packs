import React from 'react';

export function Content7() {
  const sprocketCount = 36;

  return (
    <section className="relative bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-[10px] tracking-[0.25em] text-zinc-400">
          <span className="text-[#ffd500]">// HIGH-SPEED OPTICAL FILM STRIP · 4,000 FPS SHUTTER</span>
          <span>CELL 04 · ROLL 07/40</span>
        </div>

        {/* Continuous Film Strip Container with Top & Bottom Sprocket Rails */}
        <div className="border-t-2 border-b-2 border-[#262c36] bg-[#111317]">
          {/* Top Sprocket Perforations */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#22262f] bg-[#0c0d0f]">
            {Array.from({ length: sprocketCount }).map((_, idx) => (
              <span
                key={`t-${idx}`}
                className={`w-2.5 h-1.5 border ${
                  idx % 6 === 0 ? 'border-[#ffd500] bg-[#ffd500]/20' : 'border-[#262c36] bg-[#14161a]'
                }`}
              />
            ))}
          </div>

          {/* Unequal-Width Mixed Content Film Frames */}
          <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#262c36]">
            {/* FRAME 01 — WIDE (32%): Narrative & Calibration Context */}
            <div className="lg:w-[32%] p-6 flex flex-col justify-between bg-[#14161a]">
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#ffd500] mb-3">
                  <span>FRM 01A</span>
                  <span>00:00:04.12</span>
                </div>
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight leading-none mb-3">
                  OPTICAL COMBUSTION CAPTURE
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Sapphire-window cylinder head probe records flame-front propagation across 8,400 RPM peak load sweeps.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#22262f] flex justify-between text-[10px] text-zinc-500">
                <span>EXPOSURE: 1/8000S</span>
                <span className="text-white">KD-998</span>
              </div>
            </div>

            {/* FRAME 02 — NARROW (11%): Pure Rotated Numeral */}
            <div className="lg:w-[11%] p-4 bg-[#0c0d0f] flex flex-row lg:flex-col items-center justify-between">
              <span className="text-[10px] text-zinc-500">FRM 02</span>
              <div className="lg:-rotate-90 whitespace-nowrap font-display text-4xl font-black text-[#ffd500] tracking-tighter tabular-nums">
                8,400
              </div>
              <span className="text-[10px] text-zinc-400 font-bold">RPM</span>
            </div>

            {/* FRAME 03 — MEDIUM (23%): Dark CSS Concrete-Stage Turbine Plate */}
            <div className="lg:w-[23%] p-5 bg-[radial-gradient(circle_at_center,#1d212b_0%,#0c0d0f_75%)] flex flex-col justify-between relative">
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span>FRM 03B</span>
                <span className="text-[#ffd500]">ROTOR STAGE</span>
              </div>
              <div className="my-4 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-[#ffd500]/50 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full border border-dashed border-zinc-500 flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#ffd500] rotate-45" />
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-[#ffd500]/30" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-[#ffd500]/30" />
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 text-center">WHEEL SPEED: 142,000 RPM</span>
            </div>

            {/* FRAME 04 — TINY (9%): Inverted Phosphor Alert Cell */}
            <div className="lg:w-[9%] p-4 bg-[#ffd500] text-[#0c0d0f] flex flex-row lg:flex-col items-center justify-between font-extrabold">
              <span className="text-[9px] tracking-widest">FRM 04</span>
              <span className="font-display text-2xl leading-none tabular-nums">2.84</span>
              <span className="text-[10px] tracking-widest">BAR</span>
            </div>

            {/* FRAME 05 — MEDIUM-NARROW (16%): Engineer Field Quote */}
            <div className="lg:w-[16%] p-5 bg-[#14161a] flex flex-col justify-between">
              <span className="text-[10px] text-[#ffd500]">FRM 05C // NOTE</span>
              <p className="font-sans text-xs text-zinc-300 italic leading-snug my-3">
                “Flame travel remains symmetric within 0.8° crank angle across Bank A &amp; B.”
              </p>
              <span className="text-[10px] text-zinc-500 uppercase">— E. ROUX</span>
            </div>

            {/* FRAME 06 — TINY/NARROW (9%): Oscilloscope Vertical Ribbon */}
            <div className="lg:w-[9%] p-4 bg-[#0c0d0f] flex flex-row lg:flex-col items-center justify-between">
              <span className="text-[9px] text-zinc-500">07/40</span>
              <svg viewBox="0 0 32 100" className="w-8 h-20">
                <polyline
                  points="16,0 18,12 6,20 26,28 10,38 24,48 4,58 28,68 14,78 20,88 16,100"
                  fill="none"
                  stroke="#ffd500"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-[9px] text-[#ffd500]">LOCK</span>
            </div>
          </div>

          {/* Bottom Sprocket Perforations */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-[#22262f] bg-[#0c0d0f]">
            {Array.from({ length: sprocketCount }).map((_, idx) => (
              <span
                key={`b-${idx}`}
                className={`w-2.5 h-1.5 border ${
                  idx % 6 === 0 ? 'border-[#ffd500] bg-[#ffd500]/20' : 'border-[#262c36] bg-[#14161a]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
