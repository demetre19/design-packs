/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content9: React.FC = () => {
  const sections = [
    {
      roman: 'I',
      category: 'FOUNDATIONS OF GROTESQUE',
      entries: [
        { num: '01', title: 'THE AKZIDENZ LEGACY & OPTICAL WEIGHT', author: 'B. MÜLLER', page: 'P. 004' },
        { num: '02', title: 'NEGATIVE COUNTER PROPORTIONS IN DISPLAY SCALE', author: 'E. VOSS', page: 'P. 022' },
        { num: '03', title: 'TRACKING DECAY AT -0.07EM', author: 'K. LIND', page: 'P. 041' },
        { num: '04', title: 'MATHEMATICAL RASTER SUBDIVISION', author: 'H. KELLER', page: 'P. 058' },
      ],
    },
    {
      roman: 'II',
      category: 'EXHIBITION PLATES & SPECIMENS',
      entries: [
        { num: '05', title: 'PLATE 01–12: BASEL MUNICIPAL POSTERS (1959–1964)', author: 'ARCHIVE', page: 'P. 076' },
        { num: '06', title: 'PLATE 13–24: SEVERED ASCENDERS & EDGE BLEEDS', author: 'A. HOFMANN', page: 'P. 104' },
        { num: '07', title: 'PLATE 25–32: DOUBLE-HIT SCHWARZ 01 PRESS TRIALS', author: 'PRESS LAB', page: 'P. 132' },
        { num: '08', title: 'PLATE 33–40: VERTICAL AXIS TYPOGRAPHIC MONUMENTS', author: 'E. RUDER', page: 'P. 158' },
      ],
    },
    {
      roman: 'III',
      category: 'SYMPOSIUM PROCEEDINGS',
      entries: [
        { num: '09', title: 'KEYNOTE TRANSCRIPT: FORM FOLLOWS VOID', author: 'B. MÜLLER', page: 'P. 176' },
        { num: '10', title: 'PANEL DEBATE: SYMMETRY VS. ASYMMETRIC COLLISION', author: 'VARIOUS', page: 'P. 192' },
        { num: '11', title: 'APPENDIX A: KONTUR FOUNDRY UPEM METRICS', author: 'BOARD', page: 'P. 208' },
        { num: '12', title: 'COLOPHON, LEGAL DEPOSIT & INDEX OF NAMES', author: 'BASEL', page: 'P. 218' },
      ],
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 overflow-hidden">
      {/* Header Band with Cropped Index Word */}
      <div className="border-b border-white/25 pb-6 mb-10 relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.22em] opacity-65 mb-2">
          <span>CONTENT 09 // THE INDEX — MONOGRAPH VOL. 42 TABLE OF CONTENTS</span>
          <span>224 PAGES // ISBN 978-3-906-2026</span>
        </div>
        <div className="overflow-hidden -mx-2">
          <h2 className="text-[14vw] md:text-[10vw] font-black tracking-[-0.07em] leading-[0.8] uppercase whitespace-nowrap select-none">
            INDEX
          </h2>
        </div>
      </div>

      {/* Grouped Dense Index Entries */}
      <div className="max-w-5xl mx-auto space-y-10">
        {sections.map((sec) => (
          <div key={sec.roman} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            {/* Terse Category Label Column */}
            <div className="md:col-span-3 border-t border-white/40 pt-3 flex md:flex-col justify-between md:justify-start gap-2">
              <span className="text-4xl font-black tracking-tighter leading-none">{sec.roman}.</span>
              <span className="text-[10px] font-mono tracking-[0.2em] opacity-70 uppercase leading-relaxed mt-1">
                {sec.category}
              </span>
            </div>

            {/* Dot-Leader Entries Column */}
            <div className="md:col-span-9 border-t border-white/20 pt-3 space-y-3.5">
              {sec.entries.map((entry) => (
                <div key={entry.num} className="group">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono font-bold opacity-50 tabular-nums shrink-0">
                      {entry.num}
                    </span>
                    <span className="text-sm sm:text-base font-bold tracking-tight uppercase">
                      {entry.title}
                    </span>
                    {/* Dotted / Hairline Leader */}
                    <span
                      className="flex-1 border-b border-dotted border-white/35 min-w-[24px] -translate-y-1"
                      aria-hidden="true"
                    />
                    <span className="hidden sm:inline text-[10px] font-mono tracking-widest opacity-50 shrink-0">
                      {entry.author}
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest tabular-nums shrink-0">
                      {entry.page}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
