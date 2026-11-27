import React from 'react';

interface CascadeBar {
  measure: string;
  label: string;
  title: string;
  body: string;
  datum: string;
  gridClass: string;
  toneClass: string;
}

const BARS: CascadeBar[] = [
  {
    measure: 'M.01',
    label: 'WIDE LEFT · 8 COLS',
    title: 'Horizon Line Precedes Volume',
    body: 'Every commission begins by drawing the untouched ridge or shoreline before a single interior room is assigned.',
    datum: 'COL 01—08',
    gridClass: 'lg:col-start-1 lg:col-span-8',
    toneClass: 'bg-[#f0efeb] border-[#16171a]',
  },
  {
    measure: 'M.02',
    label: 'NARROW RIGHT · 5 COLS',
    title: 'Shadow Depth',
    body: 'Deep reveals protect glazing from summer zenith heat.',
    datum: 'COL 08—12',
    gridClass: 'lg:col-start-8 lg:col-span-5',
    toneClass: 'bg-[#fafaf8] border-[#b5482e]',
  },
  {
    measure: 'M.03',
    label: 'MEDIUM CENTER · 6 COLS',
    title: 'Unpainted Mineral Surfaces',
    body: 'Pigment belongs inside the aggregate mix, never brushed on as synthetic film.',
    datum: 'COL 03—08',
    gridClass: 'lg:col-start-3 lg:col-span-6',
    toneClass: 'bg-[#f0efeb] border-[#e2e0d8]',
  },
  {
    measure: 'M.04',
    label: 'COMPACT LEFT · 4 COLS',
    title: 'Acoustic Buffer',
    body: 'Staggered stone halls silence coastal wind.',
    datum: 'COL 01—04',
    gridClass: 'lg:col-start-1 lg:col-span-4',
    toneClass: 'bg-[#16171a] text-[#fafaf8] border-[#16171a]',
  },
  {
    measure: 'M.05',
    label: 'WIDE RIGHT · 8 COLS',
    title: 'Generational Tectonic Endurance',
    body: 'Designed for one-hundred-year structural cycles with accessible mechanical chases and zero glued assemblies.',
    datum: 'COL 05—12',
    gridClass: 'lg:col-start-5 lg:col-span-8',
    toneClass: 'bg-[#fafaf8] border-[#16171a]',
  },
];

export function Content14() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2e0d8] pb-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                MATHEMATICAL CADENCE — 12-COLUMN SCORE
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              Five Principles in Stepped Measure
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tabular-nums">
            GRID SHIFT: 8 / 5 / 6 / 4 / 8
          </span>
        </div>

        <div className="space-y-4">
          {BARS.map((bar) => {
            const isDark = bar.toneClass.includes('bg-[#16171a]');
            return (
              <div key={bar.measure} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className={`${bar.gridClass} border p-6 space-y-2.5 ${bar.toneClass}`}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest tabular-nums">
                    <span className="text-[#b5482e] font-medium">
                      {bar.measure} · {bar.label}
                    </span>
                    <span className={isDark ? 'text-stone-400' : 'text-stone-500'}>
                      {bar.datum}
                    </span>
                  </div>
                  <h3 className={`text-lg font-medium ${isDark ? 'text-[#fafaf8]' : 'text-[#16171a]'}`}>
                    {bar.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                    {bar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
