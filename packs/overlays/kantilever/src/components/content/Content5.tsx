import React from 'react';

export const Content5: React.FC = () => {
  return (
    <section className="relative bg-[#f7f6f3] text-[#14161a] border-b border-[#14161a]/20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Center seam collision emblem */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div className="w-20 h-20 bg-[#ffc72c] text-[#14161a] border-2 border-[#14161a] flex flex-col items-center justify-center transform skew-x-[-12deg]">
            <span className="font-extrabold text-2xl leading-none transform skew-x-[12deg]">VS</span>
            <span className="font-mono text-[9px] font-bold tracking-widest mt-0.5 transform skew-x-[12deg]">
              14° SEAM
            </span>
          </div>
        </div>

        {/* LEFT ZONE: Conventional Orthogonal System (Rigid Constraint Grid) */}
        <div className="bg-[#f7f6f3] text-[#14161a] p-10 md:p-16 lg:pr-20 space-y-8 border-b lg:border-b-0 lg:border-r border-[#14161a]">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              POSITION A · CONVENTIONAL POST & BEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              THE ORTHOGONAL PENALTY
            </h2>
          </div>

          {/* Left internal layout: rigid vertical limitation checklist + ground disruption */}
          <div className="space-y-4 font-mono text-xs border-t border-[#14161a]/20 pt-6">
            <div className="flex items-start justify-between gap-4 border-b border-[#14161a]/15 pb-3">
              <span className="font-bold">01. PERIMETER COLUMN GRID</span>
              <span className="text-[#14161a]/65 text-right">6.0 m MAX BAY</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-[#14161a]/15 pb-3">
              <span className="font-bold">02. EXCAVATION FOOTPRINT</span>
              <span className="text-[#14161a]/65 text-right">100% SITE BLASTING</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-[#14161a]/15 pb-3">
              <span className="font-bold">03. CORNER GLAZING</span>
              <span className="text-[#14161a]/65 text-right">OBSTRUCTED BY MULLIONS</span>
            </div>
          </div>

          {/* Constraint diagram block */}
          <div className="border border-[#14161a]/30 p-5 bg-[#14161a]/[0.03]">
            <div className="font-mono text-[10px] uppercase text-[#14161a]/60 mb-3">
              LOAD PATH: VERTICAL COMPRESSION ONLY
            </div>
            <div className="grid grid-cols-4 gap-3 h-14">
              {[0, 1, 2, 3].map((col) => (
                <div key={col} className="border-x-2 border-t-2 border-[#14161a]/40 flex items-end justify-center pb-1 font-mono text-[9px] text-[#14161a]/60">
                  PIER
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT ZONE: KANTILEVER Meridian Diagonal System (Inverted Charcoal + Vector Equation) */}
        <div className="bg-[#14161a] text-[#f7f6f3] p-10 md:p-16 lg:pl-20 space-y-8 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-16 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #ffc72c 0, #ffc72c 2px, transparent 2px, transparent 10px)',
            }}
          />

          <div className="space-y-2 relative z-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffc72c]">
              POSITION B · KANTILEVER DIAGONAL TECTONICS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              TENSIONED LIBERATION
            </h2>
          </div>

          {/* Right internal layout: asymmetric equation + angled telemetry strip (completely different from left!) */}
          <div className="relative z-10 bg-[#f7f6f3]/5 border border-[#f7f6f3]/15 p-6 space-y-4">
            <div className="font-mono text-[11px] text-[#ffc72c] uppercase">
              MOMENT EQUILIBRIUM EQUATION
            </div>
            <div className="font-mono text-xl md:text-2xl font-bold tracking-tight tabular-nums">
              M<sub className="text-xs">counter</sub> = F<sub className="text-xs">tie</sub> × L · sin(14°) ≥ 1.85 M<sub className="text-xs">tip</sub>
            </div>
            <p className="text-xs text-[#f7f6f3]/75 font-sans leading-relaxed">
              By concentrating dead load into a single uphill granite anchor and projecting diagonal S690QL chords outward, the terrain beneath the building remains ecologically untouched.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-6 font-mono text-xs tabular-nums">
            <div className="transform skew-x-[-10deg] bg-[#ffc72c] text-[#14161a] px-4 py-2 font-bold">
              <span className="transform skew-x-[10deg] block">18.0 m COLUMN-FREE SPAN</span>
            </div>
            <div className="text-[#f7f6f3]/80">
              GROUND DISTURBANCE: <span className="text-[#ffc72c] font-bold">-74%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
