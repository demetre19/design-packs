/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Minus } from 'lucide-react';

export const Content3: React.FC = () => {
  const teeth = [
    {
      side: 'left',
      id: '01',
      tag: 'THESIS // 09:30',
      word: 'COMPRESSION',
      body: 'Tight negative tracking (-0.06em) collapses inter-letter air into a unified dark structural bar.',
    },
    {
      side: 'right',
      id: '02',
      tag: 'COUNTER // 10:15',
      word: 'EXPANSION',
      body: 'Peripheral footnotes pull away to the outer margins at 10px, opening vast pure black silence.',
    },
    {
      side: 'left',
      id: '03',
      tag: 'THESIS // 11:45',
      word: 'SEVERANCE',
      body: 'Every container edge functions as a trim blade; letterforms are never scaled down to fit politely.',
    },
    {
      side: 'right',
      id: '04',
      tag: 'COUNTER // 13:30',
      word: 'CONTINUITY',
      body: 'Although severed visually, the mind completes the missing stroke across the black margin.',
    },
    {
      side: 'left',
      id: '05',
      tag: 'THESIS // 15:00',
      word: 'RIGIDITY',
      body: 'Single vertical axis anchors opposing propositions without symmetry or boxed equality.',
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-12">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 03 // THE INTERLOCK — ZIPPERED DUAL-AXIS DISCOURSE
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            DIALECTIC SPINE
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          AXIS: 50.0% CENTER RULE<br />
          CROSS-SPINE OVERLAP ACTIVE
        </div>
      </div>

      {/* Interlocking Zipper Structure */}
      <div className="relative max-w-5xl mx-auto py-4">
        {/* Continuous Center Spine */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/40 -translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8 md:space-y-2">
          {teeth.map((item) => {
            const isLeft = item.side === 'left';
            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Tooth Block overlapping the center line */}
                <div
                  className={`w-full md:w-[58%] bg-black border border-white/25 p-5 relative z-10 ${
                    isLeft
                      ? 'md:mr-[42%] md:text-left'
                      : 'md:ml-[42%] md:text-right'
                  }`}
                >
                  {/* Spine Node Indicator */}
                  <div
                    className={`hidden md:flex items-center gap-1 absolute top-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest bg-black px-1.5 py-0.5 border border-white/50 ${
                      isLeft ? '-right-5' : '-left-5'
                    }`}
                  >
                    <Minus className="w-2.5 h-2.5" />
                    <span>{item.id}</span>
                  </div>

                  <div
                    className={`flex items-center gap-3 text-[10px] font-mono tracking-widest opacity-60 mb-2 ${
                      isLeft ? 'justify-start' : 'md:justify-end'
                    }`}
                  >
                    <span>[{item.tag}]</span>
                    <span>AXIS CROSSING</span>
                  </div>

                  <div className="overflow-hidden my-1">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.06em] leading-[0.85] uppercase whitespace-nowrap">
                      {item.word}
                    </h3>
                  </div>

                  <p className="text-[11px] font-mono tracking-wide opacity-75 leading-relaxed mt-3 max-w-md inline-block">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Axis Marker */}
      <div className="mt-10 pt-3 border-t border-white/15 flex justify-between text-[10px] font-mono tracking-widest opacity-50">
        <span>LEFT: PROPOSITIONAL THESIS</span>
        <span>CENTER: SHARED VERTICAL RULE</span>
        <span>RIGHT: EMPIRICAL COUNTER</span>
      </div>
    </section>
  );
};
