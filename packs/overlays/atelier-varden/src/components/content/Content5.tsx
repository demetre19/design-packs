import React from 'react';

export function Content5() {
  return (
    <section className="w-full border-b border-[#e2e0d8] font-sans relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Left Opposing Zone: Warm Stone / Monolithic Concrete Argument */}
        <div className="bg-[#f0efeb] text-[#16171a] px-6 py-16 lg:px-14 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#16171a]">
          <div className="max-w-lg ml-auto space-y-8 lg:pr-8">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              <span className="flex items-center space-x-2">
                <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
                <span>THESIS 01 — MINERAL PERMANENCE</span>
              </span>
              <span className="tabular-nums">2,400 KG/M³</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
              Cast Concrete: Thermal Mass &amp; Geological Stillness
            </h2>

            <div className="border-t border-[#16171a] divide-y divide-[#d4d1c8]">
              <div className="py-4 flex justify-between gap-4">
                <span className="text-[11px] font-mono uppercase text-stone-500 shrink-0">01 / INERTIA</span>
                <p className="text-xs text-stone-700 text-right leading-relaxed max-w-xs">
                  Retains daytime solar gain across 14-hour alpine winter nights without mechanical cycling.
                </p>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-[11px] font-mono uppercase text-stone-500 shrink-0">02 / MEMORY</span>
                <p className="text-xs text-stone-700 text-right leading-relaxed max-w-xs">
                  Rough-sawn spruce shuttering imprints organic timber grain permanently into liquid stone.
                </p>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-[11px] font-mono uppercase text-stone-500 shrink-0">03 / SPAN</span>
                <p className="text-xs text-stone-700 text-right leading-relaxed max-w-xs">
                  Monolithic floor plates act simultaneously as structure, ceiling finish, and radiant floor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Seam Element anchoring the collision */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center"
        >
          <div className="bg-[#b5482e] text-[#fafaf8] px-3.5 py-5 text-xs font-mono uppercase tracking-[0.25em] border border-[#16171a] flex flex-col items-center space-y-2">
            <span>01</span>
            <span className="w-4 h-px bg-[#fafaf8]/60" />
            <span className="font-semibold">VS</span>
            <span className="w-4 h-px bg-[#fafaf8]/60" />
            <span>02</span>
          </div>
        </div>

        {/* Right Opposing Zone: Near-Black / Precision Timber Argument (completely different internal layout) */}
        <div className="bg-[#16171a] text-[#fafaf8] px-6 py-16 lg:px-14 lg:py-24">
          <div className="max-w-lg mr-auto space-y-10 lg:pl-8">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
              <span>THESIS 02 — TECTONIC LIGHTNESS</span>
              <span className="text-[#b5482e] tabular-nums">520 KG/M³</span>
            </div>

            <blockquote className="text-xl lg:text-2xl font-normal leading-relaxed text-[#fafaf8] border-b border-stone-800 pb-8">
              &ldquo;Where concrete resists the mountain, timber negotiates with the wind—dry-fitted joinery assembled in three weeks with zero wet trades.&rdquo;
            </blockquote>

            <div className="grid grid-cols-3 gap-4 font-mono">
              <div className="border-r border-stone-800 pr-3">
                <div className="text-[10px] text-stone-500 uppercase">CARBON</div>
                <div className="text-lg text-[#fafaf8] tabular-nums mt-1">-740 kg</div>
              </div>
              <div className="border-r border-stone-800 pr-3">
                <div className="text-[10px] text-stone-500 uppercase">TOLERANCE</div>
                <div className="text-lg text-[#fafaf8] tabular-nums mt-1">±0.5 mm</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-500 uppercase">SPECIES</div>
                <div className="text-lg text-[#b5482e] mt-1">SUGI / FIR</div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider pt-2">
              STUDIO POSITION: NEITHER PREVAILS ALONE — EVERY VARDEN RESIDENCE BINDS BOTH AT A 1:1.6 MASS RATIO.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
