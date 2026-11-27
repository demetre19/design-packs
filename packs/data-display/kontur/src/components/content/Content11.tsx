/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content11: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-8">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 11 // THE SPECIMEN GRID — FOUNDRY OPTICAL DATASHEET
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            KONTUR GROTESK // SPEC 900
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block tabular-nums">
          REV. 2026.10 // 1000 UPEM<br />
          UNEVEN MATRIX CADENCE
        </div>
      </div>

      {/* Irregular Multi-Span Hairline Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/25 border border-white/25">
        {/* Cell 1: Oversized Specimen (2 cols x 2 rows) */}
        <div className="col-span-2 md:row-span-2 bg-black p-6 flex flex-col justify-between overflow-hidden min-h-[240px]">
          <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-60">
            <span>GLYPH MASTER</span>
            <span>WT 900</span>
          </div>
          <div className="text-[130px] md:text-[150px] font-black tracking-[-0.07em] leading-[0.8] select-none my-auto">
            Aa
          </div>
          <div className="text-[10px] font-mono tracking-widest opacity-60 flex justify-between border-t border-white/15 pt-2">
            <span>GROTESQUE DISPLAY</span>
            <span>U+0041 / U+0061</span>
          </div>
        </div>

        {/* Cell 2: Wide Metric Strip (3 cols x 1 row) */}
        <div className="col-span-2 md:col-span-3 bg-black p-5 flex flex-col justify-between">
          <div className="text-[10px] font-mono tracking-widest opacity-55">
            CAP HEIGHT / X-HEIGHT RATIO
          </div>
          <div className="flex items-baseline gap-6 my-2">
            <span className="text-4xl font-black tracking-tighter tabular-nums">714</span>
            <span className="text-xs font-mono opacity-60">/</span>
            <span className="text-4xl font-black tracking-tighter tabular-nums">528</span>
            <span className="text-[11px] font-mono opacity-70 uppercase">UPEM (73.9%)</span>
          </div>
          <div className="text-[10px] font-mono opacity-50">
            CALIBRATED FOR 15–25VW BLEED HEADLINES
          </div>
        </div>

        {/* Cell 3: Narrow Single-Col Unit (1 col x 1 row) */}
        <div className="col-span-1 bg-black p-4 flex flex-col justify-between">
          <div className="text-[9px] font-mono tracking-widest opacity-55">STEM</div>
          <div className="text-3xl font-black tracking-tighter tabular-nums my-2">118</div>
          <div className="text-[9px] font-mono opacity-55">UNITS</div>
        </div>

        {/* Cell 4: Narrow Tracking Cell (1 col x 1 row) */}
        <div className="col-span-1 bg-black p-4 flex flex-col justify-between">
          <div className="text-[9px] font-mono tracking-widest opacity-55">TRACK</div>
          <div className="text-2xl font-black tracking-tighter tabular-nums my-2">-0.065</div>
          <div className="text-[9px] font-mono opacity-55">EM SCALE</div>
        </div>

        {/* Cell 5: Kerning Pair Table (2 cols x 2 rows) */}
        <div className="col-span-2 md:row-span-2 bg-black p-5 flex flex-col justify-between">
          <div className="text-[10px] font-mono tracking-widest opacity-60 border-b border-white/15 pb-2">
            CRITICAL KERNING PAIRS
          </div>
          <div className="divide-y divide-white/15 text-xs font-mono my-2 tabular-nums">
            {[
              ['AV', '-42 U'],
              ['To', '-38 U'],
              ['LT', '-50 U'],
              ['KO', '-18 U'],
              ['VA', '-44 U'],
            ].map(([pair, val]) => (
              <div key={pair} className="py-1.5 flex justify-between">
                <span className="font-bold">{pair}</span>
                <span className="opacity-70">{val}</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] font-mono opacity-45">OPTICAL TABLE V4</div>
        </div>

        {/* Cell 6: Micro-Note (1 col x 1 row) */}
        <div className="col-span-1 bg-black p-4 flex flex-col justify-between">
          <div className="text-[9px] font-mono tracking-widest opacity-55">LEADING</div>
          <div className="text-3xl font-black tracking-tighter tabular-nums my-2">0.82</div>
          <div className="text-[9px] font-mono opacity-55">MIN RATIO</div>
        </div>

        {/* Cell 7: Inverted Accent Unit (2 cols x 1 row) */}
        <div className="col-span-2 bg-white text-black p-5 flex flex-col justify-between">
          <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-65">
            <span>CHARSET COVERAGE</span>
            <span>412 GLYPHS</span>
          </div>
          <div className="text-xl font-black tracking-tight uppercase my-1">
            LATIN EXTENDED-A + SWISS DIACRITICS
          </div>
          <div className="text-[10px] font-mono opacity-75">Ä Ö Ü ß // U+0020–U+017F</div>
        </div>

        {/* Cell 8: Lower Cropped Character Strip (1 col x 1 row) */}
        <div className="col-span-1 bg-black p-4 overflow-hidden flex flex-col justify-between">
          <span className="text-[9px] font-mono tracking-widest opacity-55">SYMBOLS</span>
          <span className="text-3xl font-black tracking-[-0.06em] leading-none select-none my-1">
            &amp;§¶†
          </span>
          <span className="text-[9px] font-mono opacity-55">SET 04</span>
        </div>

        {/* Cell 9: Descender / Baseline Unit (1 col x 1 row, fills col 6 of Row 3) */}
        <div className="col-span-1 bg-black p-4 flex flex-col justify-between">
          <div className="text-[9px] font-mono tracking-widest opacity-55">DESCENDER</div>
          <div className="text-3xl font-black tracking-tighter tabular-nums my-2">-214</div>
          <div className="text-[9px] font-mono opacity-55">UPEM FLOOR</div>
        </div>
      </div>
    </section>
  );
};
