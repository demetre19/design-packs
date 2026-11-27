import React from 'react';

export function Content10() {
  return (
    <section className="relative bg-[#0c0d0f] text-white py-28 md:py-36 px-4 sm:px-8 border-b border-[#22262f] font-mono overflow-hidden">
      {/* Rotated Edge Attribution */}
      <div className="hidden md:flex flex-col items-center gap-3 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="w-2 h-2 bg-[#ffd500]" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.35em] text-zinc-400 uppercase whitespace-nowrap">
          KERSHAW DYNAMICS // STATEMENT 10 // CELL 04 AXIOM
        </span>
      </div>

      {/* Cornered Micro-Annotation Top-Right */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-zinc-500 mb-6">
          <span>REC: 8,400 RPM · 94.2°C MAX</span>
          <span className="text-[#ffd500] font-bold">ZERO-DRIFT MANDATE</span>
        </div>

        {/* Enormous Full-Bleed Statement with Razor Oscilloscope Line Threading Through Letterforms */}
        <div className="relative py-4">
          <h2 className="font-display font-extrabold uppercase tracking-tighter leading-[0.84] text-[13vw] md:text-[10.5vw] lg:text-[9.2rem] text-white select-none">
            ZERO TOLERANCE
            <span className="block text-[#ffd500]">FOR THERMAL</span>
            <span className="block">DRIFT.</span>
          </h2>

          {/* Threading Oscilloscope Ribbon Passing Directly Across Letterforms */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-16 pointer-events-none mix-blend-screen"
          >
            <polyline
              points="0,40 160,40 185,12 205,68 225,22 245,56 265,40 540,40 560,6 580,74 600,14 620,62 640,40 920,40 940,18 960,60 980,40 1200,40"
              fill="none"
              stroke="#ffd500"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* Tucked Pocket Annotation Bottom-Right */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-[#22262f] pt-5">
          <p className="font-sans text-xs text-zinc-400 max-w-md">
            Every horsepower gained on a cold sweep means nothing if combustion stability decays in hour nineteen. We validate at soak equilibrium.
          </p>
          <div className="text-right text-[10px] tracking-[0.2em] text-[#ffd500]">
            <div>SIGNED: K. VANCE // CELL 04</div>
            <div className="text-zinc-500">REF: KD-998-AXIOM-10</div>
          </div>
        </div>
      </div>
    </section>
  );
}
