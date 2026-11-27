import React from 'react';
import { BookOpen } from 'lucide-react';

export function Content6() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              SCHOLARLY GLOSS · FOLIO 44R–45V
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Margin Book — Annotated Optical Thesis
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">MAIN TEXT 42% · MARGINALIA 58%</div>
        </div>

        {/* Aligned rows: Left narrow prose column (5/12 = ~42%), Right wide margin (7/12 = ~58%) */}
        <div className="space-y-8">
          {/* Passage 1 + Aligned Marginalia 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:border-r lg:border-neutral-800 lg:pr-8">
              <p className="text-xs font-sans text-neutral-300 leading-7">
                When Giambattista Bodoni assembled his final <em>Manuale Tipografico</em> specimens in Parma, he rejected the uniform scaling practiced by later pantographic foundries.<sup className="text-white font-mono ml-0.5">[1]</sup> Each body size from <em>Nompareille</em> to <em>Papale</em> required an independent steel punch cut by hand to preserve legibility under candlelit reading distance.
              </p>
            </div>
            <div className="lg:col-span-7 pt-1 border-t border-dashed border-neutral-800 lg:border-t-0 flex items-start gap-4">
              <span className="text-xs font-bold text-white shrink-0 tabular-nums">[1]</span>
              <div className="text-[11px] text-neutral-400 space-y-1">
                <div className="text-neutral-200 font-bold uppercase tracking-wider text-[10px]">
                  BIBLIOGRAPHIC CITATION · PARMA 1818
                </div>
                <p className="font-sans leading-relaxed">
                  cf. Bodoni, G. <em>Manuale Tipografico</em>, Vol. I, Folio 14v. Preserved in Cabinet 12, Shelf 04. Contrast ratio shifts from 5:1 at 8pt Nompareille to 14:1 at 72pt Papale.
                </p>
              </div>
            </div>
          </div>

          {/* Passage 2 + Aligned Thumbnail Plate Marginalia 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:border-r lg:border-neutral-800 lg:pr-8">
              <p className="text-xs font-sans text-neutral-300 leading-7">
                During the 1957 Basel reconstruction project, photographic enlargements of original lead impressions revealed subtle inward cupping along the vertical stem flanks.<sup className="text-white font-mono ml-0.5">[2]</sup> Far from an engraving error, this micro-concavity prevents halation when heavy black ink meets damp cotton rag.
              </p>
            </div>
            <div className="lg:col-span-7 pt-1 border-t border-dashed border-neutral-800 lg:border-t-0 flex flex-col sm:flex-row items-start gap-4">
              <span className="text-xs font-bold text-white shrink-0 tabular-nums">[2]</span>
              {/* Small framed grayscale specimen plate inside margin */}
              <div className="w-36 shrink-0 border border-neutral-700 bg-neutral-950 p-2">
                <div className="h-20 bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                  <span className="font-serif text-5xl font-bold text-neutral-200 tracking-tighter">
                    H
                  </span>
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-neutral-700" />
                </div>
                <div className="text-[9px] text-neutral-500 mt-1.5 tabular-nums">
                  FIG. 2A · 1200 DPI SCAN
                </div>
              </div>
              <div className="text-[11px] text-neutral-400">
                <div className="text-neutral-200 font-bold uppercase tracking-wider text-[10px] mb-1">
                  PLATE REFERENCE · STEM WAISTING
                </div>
                <p className="font-sans leading-relaxed">
                  Measured concavity: 0.018mm inward taper at mid-height on 18pt Monotype cast (Basel Tray VII).
                </p>
              </div>
            </div>
          </div>

          {/* Passage 3 + Aligned Pull-Fragment Marginalia 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:border-r lg:border-neutral-800 lg:pr-8">
              <p className="text-xs font-sans text-neutral-300 leading-7">
                In 1961, Jan Tschichold codified these optical compensations into a four-master schedule for the Imprimerie Nationale revival.<sup className="text-white font-mono ml-0.5">[3]</sup> Every acute serif bracket was retained in its crispest geometric state while counter apertures widened proportionally below 12pt.
              </p>
            </div>
            <div className="lg:col-span-7 pt-1 border-t border-dashed border-neutral-800 lg:border-t-0 flex items-start gap-4">
              <span className="text-xs font-bold text-white shrink-0 tabular-nums">[3]</span>
              <div className="flex-1 border-y border-neutral-800 py-3 flex items-center justify-between gap-4">
                <blockquote className="font-serif italic text-base text-neutral-200 leading-snug">
                  “Optical truth is never identical to mathematical symmetry; the eye demands weighted mercy.”
                </blockquote>
                <span className="hidden sm:block text-[9px] tracking-widest text-neutral-500 uppercase [writing-mode:vertical-rl] rotate-180 shrink-0">
                  J. TSCHICHOLD 1961
                </span>
              </div>
            </div>
          </div>

          {/* Passage 4 + Aligned Optical Scale Marginalia 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:border-r lg:border-neutral-800 lg:pr-8">
              <p className="text-xs font-sans text-neutral-300 leading-7">
                Our 1983 PostScript encoding and 2026 digital revision preserve all four optical tiers.<sup className="text-white font-mono ml-0.5">[4]</sup> Rather than distorting a single outline, the archive serves discrete master curves mapped directly to historical Didot sizes.
              </p>
            </div>
            <div className="lg:col-span-7 pt-1 border-t border-dashed border-neutral-800 lg:border-t-0 flex items-start gap-4">
              <span className="text-xs font-bold text-white shrink-0 tabular-nums">[4]</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                  <span>OPTICAL MASTER GRADIENT TABLE</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-[10px] tabular-nums border-t border-neutral-800 pt-2">
                  <div>
                    <div className="text-white font-bold">8pt</div>
                    <div className="text-neutral-500">5:1 Ratio</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">14pt</div>
                    <div className="text-neutral-500">8:1 Ratio</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">36pt</div>
                    <div className="text-neutral-500">11:1 Ratio</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">72pt</div>
                    <div className="text-neutral-500">14:1 Ratio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
