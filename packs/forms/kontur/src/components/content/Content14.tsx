/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content14: React.FC = () => {
  const measures = [
    {
      measure: 'M.01',
      alignClass: 'md:w-9/12 md:mr-auto',
      metric: 'WIDTH 75% // LEFT LOCK',
      title: 'GROTESQUE MASS OPENING',
      text: 'The score opens with three-quarter width density, anchoring the upper left margin before releasing into silence.',
    },
    {
      measure: 'M.02',
      alignClass: 'md:w-4/12 md:ml-auto',
      metric: 'WIDTH 33% // RIGHT LOCK',
      title: 'STACCATO INTERJECTION',
      text: 'Compressed four-column note at the far right boundary.',
    },
    {
      measure: 'M.03',
      alignClass: 'md:w-6/12 md:mx-auto',
      metric: 'WIDTH 50% // CENTER LOCK',
      title: 'MEDIAN CADENCE',
      text: 'Exact half-measure equilibrium bridging the left and right quarter staves without symmetry across the whole.',
    },
    {
      measure: 'M.04',
      alignClass: 'md:w-8/12 md:ml-auto',
      metric: 'WIDTH 66% // RIGHT OFFSET',
      title: 'EXTENDED COUNTERPOINT',
      text: 'Two-thirds horizontal sweep returning from the right trim edge to restore architectural tension.',
    },
    {
      measure: 'M.05',
      alignClass: 'md:w-5/12 md:mr-auto',
      metric: 'WIDTH 42% // LEFT RESOLVE',
      title: 'FINAL CADENZA',
      text: 'Terminates short of the center axis, leaving fifty-eight percent pure black rest.',
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-10 relative z-10">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 14 // THE CASCADE — MATHEMATICAL SCORE PROGRESSION
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            PARTITUR // SCORE 05
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          QUARTER-STAFF GUIDES: 25% / 50% / 75%<br />
          TEMPO: STRICT RHYTHM
        </div>
      </div>

      {/* Mathematical Cascade Canvas with Faint Vertical Staff Lines */}
      <div className="relative max-w-6xl mx-auto">
        {/* Background Quarter-Measure Staff Hairlines */}
        <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-white/15" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-white/20" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-dashed border-white/15" />
        </div>

        {/* Descending Shifted Measures */}
        <div className="space-y-6 relative z-10">
          {measures.map((m) => (
            <div
              key={m.measure}
              className={`w-full ${m.alignClass} border-t-2 border-b border-white/40 bg-black/95 py-4 px-5`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest opacity-60 mb-2">
                <span className="font-bold text-white">{m.measure}</span>
                <span>{m.metric}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase">
                  {m.title}
                </h3>
                <p className="text-[11px] font-mono opacity-75 leading-relaxed max-w-lg">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Legend */}
      <div className="hidden md:grid grid-cols-4 max-w-6xl mx-auto mt-6 text-[9px] font-mono tracking-widest opacity-40">
        <span>0.00</span>
        <span>0.25</span>
        <span>0.50</span>
        <span className="text-right">1.00</span>
      </div>
    </section>
  );
};
