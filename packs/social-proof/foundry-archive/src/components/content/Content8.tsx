import React from 'react';
import { Pin } from 'lucide-react';

export function Content8() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              CURATORIAL DESK · LAYERED EVIDENCE COLLISION
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Pinboard — Unaligned Cabinet 12 Working Artifacts
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">Z-STACKED SPECIMEN FRAGMENTS</div>
        </div>

        {/* Controlled overlapping chaos on desktop: corners & margins overlap while every word stays readable */}
        <div className="relative bg-neutral-950 border border-neutral-800 p-6 lg:p-0 lg:h-[600px]">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #737373 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="space-y-6 lg:space-y-0">
            {/* Artifact 1 (z-10): Left specimen plate — caption remains completely unobstructed below */}
            <div className="lg:absolute lg:left-8 lg:top-8 lg:w-72 bg-neutral-900 border border-neutral-700 p-5 lg:-rotate-2 z-10 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-3">
                <span>[PIN-01] · PLATE IV</span>
                <Pin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="h-44 bg-neutral-950 border border-neutral-800 flex items-center justify-center relative">
                <span className="font-serif text-7xl font-bold text-neutral-200 tracking-tight">
                  Aa
                </span>
                <span className="absolute top-2 left-2 text-[9px] text-neutral-500">
                  GARAMOND 1621
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-3 font-sans">
                <strong className="text-white font-mono text-[10px]">CAPTION:</strong> First-pull proof from Jean Jannon matrix set, Paris.
              </div>
            </div>

            {/* Artifact 2 (z-20): Light cream index slip overlapping only the empty right corner of Artifact 1 */}
            <div className="lg:absolute lg:left-[268px] lg:top-10 lg:w-72 bg-neutral-200 text-neutral-950 border border-neutral-400 p-5 lg:rotate-2 z-20 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-neutral-600 border-b border-neutral-400 pb-1.5 mb-3">
                <span className="font-bold">[PIN-02] · ACCESSION SLIP</span>
                <Pin className="w-3.5 h-3.5 text-neutral-900" />
              </div>
              <div className="font-serif text-lg font-bold leading-snug mb-2">
                Shelf 09B — Lead Alloy Assay
              </div>
              <p className="text-[11px] font-sans text-neutral-800 leading-relaxed mb-3">
                Tested 82% Lead, 14% Antimony, 4% Tin. Zero zinc contamination detected in 1961 metallurgical swipe.
              </p>
              <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-600">
                SIGNED: DR. H. VANDERBILT
              </div>
            </div>

            {/* Artifact 3 (z-30): Dark curatorial field note tucked lower-right so Artifact 2 text is 100% clear */}
            <div className="lg:absolute lg:right-8 lg:top-44 lg:w-80 bg-neutral-950 border border-neutral-500 p-5 lg:-rotate-1 z-30 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 mb-3">
                <span>[PIN-03] · FIELD DISPATCH</span>
                <Pin className="w-3.5 h-3.5 text-white" />
              </div>
              <blockquote className="font-serif italic text-base text-white leading-snug mb-3">
                “Keep the 0.04mm ink-trap notch at the apex of the capital A; do not smooth during Bézier fitting.”
              </blockquote>
              <div className="text-[10px] text-neutral-400 border-t border-neutral-800 pt-2">
                MEMO FROM J. TSCHICHOLD · BASEL, 14 OCT 1961
              </div>
            </div>

            {/* Artifact 4 (z-20): Bottom-left ruler / metric strip */}
            <div className="lg:absolute lg:left-16 lg:bottom-10 lg:w-96 bg-neutral-900 border border-neutral-600 p-4 lg:rotate-1 z-20 shadow-2xl">
              <div className="flex justify-between text-[10px] text-neutral-400 mb-2">
                <span>[PIN-04] · DIDOT CALIBRATION STRIP</span>
                <span>18.0 PT</span>
              </div>
              <div className="flex justify-between border-t border-neutral-700 pt-1 text-[9px] text-neutral-500 tabular-nums">
                <span>| 0mm</span>
                <span>| 5mm</span>
                <span>| 10mm</span>
                <span>| 15mm</span>
                <span>| 20mm</span>
                <span>| 25mm</span>
              </div>
              <div className="text-[11px] font-sans text-neutral-300 mt-2">
                CAPTION: Brass typometer gauge used in Haas Foundry press checks.
              </div>
            </div>

            {/* Artifact 5 (z-40): Overlapping small specimen tag at bottom right */}
            <div className="lg:absolute lg:right-20 lg:bottom-8 lg:w-64 bg-neutral-950 border-2 border-white p-4 lg:rotate-3 z-40 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 mb-2">
                <span>[PIN-05] · DOSSIER TAG</span>
                <Pin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-3xl font-serif font-bold text-white tabular-nums">1983</div>
              <div className="text-[11px] text-neutral-300 mt-1">
                PostScript Type 1 encoding signed off for Cabinet 12 digital vault.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
