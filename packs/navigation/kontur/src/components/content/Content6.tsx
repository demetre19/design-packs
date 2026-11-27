/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Bookmark } from 'lucide-react';

export const Content6: React.FC = () => {
  const passages = [
    {
      idx: '[1]',
      heading: '01. THE GUILLOTINE MARGIN',
      prose:
        'When the Basel school abandoned symmetrical page margins in the late 1950s, the edge of the paper ceased to act as a protective frame. Instead, the trim knife became an active typographic instrument, severing ascenders mid-stroke to imply continuation beyond the physical sheet.',
      marginType: 'citation',
      marginTag: 'NOTE 01 // ARCHIVE REF. 1958-B',
      marginBody:
        'Hofmann, A. — "Methodik der Bildgestaltung", Kunstgewerbeschule Basel lecture notes, folio 14.',
    },
    {
      idx: '[2]',
      heading: '02. OPTICAL RASTER DENSITY',
      prose:
        'Small informational clusters locked into the upper corners establish an immediate scale shock against monumental grotesque forms. The reader registers the poster first as an architectural silhouette, then decodes its schedule at arm’s length.',
      marginType: 'plate',
      marginTag: 'FIG. 02 // BLACK SPECIMEN PLATE',
      marginWord: 'RASTER',
      marginBody: '12-unit baseline grid overlay on double-hit offset black.',
    },
    {
      idx: '[3]',
      heading: '03. COGNITIVE CLOSURE',
      prose:
        'Even when thirty-five percent of a capital glyph disappears off the left or right boundary, recognition speed remains unimpaired. Familiarity with neo-grotesque geometry lets the viewer reconstruct the missing counter in pure black void.',
      marginType: 'fragment',
      marginTag: 'PULL FRAGMENT // P.088',
      marginWord: 'EDGE AS KNIFE',
      marginBody: 'Dr. E. Rätz — Keynote opening thesis, Hall A, 10:00 CET.',
    },
    {
      idx: '[4]',
      heading: '04. ZERO-ORNAMENT DISCIPLINE',
      prose:
        'No photography, illustration, or chromatic flourish is permitted to compete with letterform mass. Hairline rules at twenty percent opacity suffice to subdivide columns and anchor dates without interrupting the black ground.',
      marginType: 'reference',
      marginTag: 'CROSS-REF // SPEC 2026-K',
      marginBody:
        'See Kontur Monograph Vol. 42, Section III: "Monochrome Screen Translation", pp. 114–129.',
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-10">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 06 // THE MARGIN BOOK — ALIGNED MARGINALIA APPARATUS
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            ON THE BLEED STANDARD
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          BODY: 42% // MARGIN: 58%<br />
          ROW-LOCKED ANNOTATIONS
        </div>
      </div>

      {/* Column Labels */}
      <div className="hidden md:grid grid-cols-12 gap-8 pb-3 border-b border-white/25 text-[10px] font-mono tracking-[0.2em] opacity-55">
        <div className="col-span-5">PRIMARY ESSAY COLUMN (42%)</div>
        <div className="col-span-7 pl-6 border-l border-white/20">MARGINALIA &amp; ARCHIVAL FIGURES (58%)</div>
      </div>

      {/* Aligned Rows */}
      <div className="divide-y divide-white/15">
        {passages.map((p) => (
          <div key={p.idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 items-start">
            {/* Narrow Main Text Column (~42%) */}
            <div className="md:col-span-5 space-y-2.5">
              <div className="text-[11px] font-mono tracking-widest opacity-60">{p.heading}</div>
              <p className="text-xs sm:text-[13px] font-sans leading-[1.7] text-white/90">
                {p.prose}{' '}
                <sup className="font-mono text-[10px] text-white font-bold ml-0.5">{p.idx}</sup>
              </p>
            </div>

            {/* Wide Margin Column (~58%) */}
            <div className="md:col-span-7 md:pl-6 md:border-l border-white/20 flex flex-col justify-start">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 mb-2">
                <Bookmark className="w-3 h-3" />
                <span>
                  {p.idx} {p.marginTag}
                </span>
              </div>

              {p.marginType === 'plate' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-7 border border-white/30 bg-black h-28 overflow-hidden relative flex items-center">
                    <span className="text-[76px] font-black tracking-[-0.07em] leading-none uppercase whitespace-nowrap -ml-3 select-none">
                      {p.marginWord}
                    </span>
                    <span className="absolute top-1.5 right-2 text-[9px] font-mono opacity-60">
                      1:1 PLATE
                    </span>
                  </div>
                  <div className="sm:col-span-5 text-[11px] font-mono opacity-70 leading-relaxed">
                    {p.marginBody}
                  </div>
                </div>
              )}

              {p.marginType === 'fragment' && (
                <div className="border-y border-white/25 py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="text-2xl font-black tracking-tighter uppercase">
                    &ldquo;{p.marginWord}&rdquo;
                  </div>
                  <div className="text-[10px] font-mono opacity-65 sm:text-right">{p.marginBody}</div>
                </div>
              )}

              {(p.marginType === 'citation' || p.marginType === 'reference') && (
                <p className="text-[11px] font-mono tracking-wide opacity-75 leading-relaxed max-w-lg border-t border-white/15 pt-2">
                  {p.marginBody}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
