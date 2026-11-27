import React from 'react';

export function Content5() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-8 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              THESIS &amp; ANTITHESIS · MATERIAL COLLISION
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Split Screen Argument — Alloy Press vs. Spline Math
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">ARCHIVAL DEBATE NO. 04</div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 border border-neutral-700">
          {/* Center Seam Medallion anchoring the collision */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full bg-neutral-900 border-2 border-white text-center shadow-2xl">
            <span className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase">VERSUS</span>
            <span className="text-2xl font-serif italic font-bold text-white leading-none my-0.5">
              VS
            </span>
            <span className="text-[9px] text-neutral-400 tabular-nums">1757·1983</span>
          </div>

          {/* LEFT ZONE: Inverted warm alabaster paper manifesto (Hand-struck physical press) */}
          <div className="bg-neutral-100 text-neutral-950 p-8 lg:p-12 flex flex-col justify-between relative">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block text-[10px] tracking-[0.25em] text-neutral-500 uppercase [writing-mode:vertical-rl] rotate-180 border-l border-neutral-300 pl-2 py-2 shrink-0">
                PROPOSITION A · HOT METAL
              </div>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase mb-2">
                  PARMA FOUNDRY · 1757
                </div>
                <h3 className="text-3xl font-serif font-bold text-neutral-950 leading-tight mb-5">
                  The Physical Authority of Lead &amp; Ink Bite
                </h3>
                <p className="text-xs font-sans text-neutral-800 leading-relaxed mb-6 first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:leading-none">
                  Metal type lives only under hydraulic pressure. When an antimony-lead punch bites into dampened Fabriano cotton paper, capillary ink spread thickens hairline terminals by 0.04mm—an organic halo no sterile mathematical curve can replicate without deliberate optical pre-distortion.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-5 mt-6 space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-neutral-600">MEDIUM</span>
                <span className="font-bold">HAND-FILED STEEL PUNCH · BRASS MATRIX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">OPTICAL RULE</span>
                <span className="font-bold">SEPARATE MASTER CUT PER POINT SIZE</span>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-[9px] tracking-widest uppercase text-neutral-500">
                  PRESSURE GAUGE
                </span>
                <div className="flex-1 h-1.5 bg-neutral-300">
                  <div className="h-full w-4/5 bg-neutral-950" />
                </div>
                <span className="tabular-nums font-bold">820 PSI</span>
              </div>
            </div>
          </div>

          {/* Mobile separator seam */}
          <div className="lg:hidden bg-neutral-900 border-y border-neutral-700 py-3 text-center text-xs font-bold tracking-[0.25em] text-white">
            VS — 1757 / 1983 COLLISION
          </div>

          {/* RIGHT ZONE: Dark technical coordinate specification (Completely different internal structure) */}
          <div className="bg-neutral-950 text-neutral-100 p-8 lg:p-12 lg:pl-16 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 mb-5">
                <span className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
                  PROPOSITION B · POSTSCRIPT TYPE 1
                </span>
                <span className="text-xs text-white tabular-nums">1000 UPM</span>
              </div>

              <h3 className="text-2xl font-mono font-bold text-white tracking-tight mb-4">
                INVARIANT BÉZIER COORDINATE GEOMETRY
              </h3>

              <div className="border border-neutral-800 divide-y divide-neutral-800 text-[11px] mb-6">
                <div className="p-3 flex justify-between items-center">
                  <span className="text-neutral-400">ON-CURVE EXTREMA</span>
                  <span className="text-white tabular-nums">X:412 Y:718 (0° TANGENT)</span>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-neutral-400">CUBIC HANDLE RATIO</span>
                  <span className="text-white tabular-nums">0.551915 · SYMMETRIC</span>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-neutral-400">STEM HINT ZONE</span>
                  <span className="text-white tabular-nums">BLUE VALUES [-14, 0, 718, 732]</span>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-neutral-400">KERNING MATRIX</span>
                  <span className="text-white tabular-nums">2,840 CLASS PAIRS</span>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-4 text-xs font-sans text-neutral-400 leading-relaxed">
              Digital outlines liberate the letterform from physical wear: the thousandth impression on a high-DPI screen remains identical to the first mathematical strike in 1983.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
