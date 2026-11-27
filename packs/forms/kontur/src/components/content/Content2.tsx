/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Plus } from 'lucide-react';

export const Content2: React.FC = () => {
  const steps = [
    {
      num: '01',
      coord: 'X:000 Y:000',
      title: 'MANUSCRIPT INTAKE',
      detail: 'Raw lecture abstracts stripped of decorative formatting and normalized to 10pt monospaced proofs.',
      offsetClass: 'md:ml-[0%]',
    },
    {
      num: '02',
      coord: 'X:140 Y:110',
      title: 'RASTER SUBDIVISION',
      detail: '12-column mathematical matrix established at 1:1.414 DIN proportion prior to glyph placement.',
      offsetClass: 'md:ml-[13%]',
    },
    {
      num: '03',
      coord: 'X:280 Y:220',
      title: 'MONUMENTAL SCALING',
      detail: 'Primary grotesque wordmark expanded until ascenders and terminals collide with container boundaries.',
      offsetClass: 'md:ml-[26%]',
    },
    {
      num: '04',
      coord: 'X:420 Y:330',
      title: 'DELIBERATE BLEED CROP',
      detail: 'Edge severing executed strictly mid-counter; overflow hidden acts as the physical guillotine.',
      offsetClass: 'md:ml-[39%]',
    },
    {
      num: '05',
      coord: 'X:560 Y:440',
      title: 'PROOF PRESS EDITION',
      detail: '500 archival sheets pulled in Offset Schwarz 01 on 120gsm stock for Basel distribution.',
      offsetClass: 'md:ml-[52%]',
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 relative overflow-hidden">
      {/* Section Kicker + Cropped Accent */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-10">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 02 // THE SPIRAL STAIRCASE — DIAGONAL PRODUCTION SEQUENCE
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            DESCENT OF FORM
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          STEP INCREMENT: +13% X / +110PX Y<br />
          KONTUR PRESS PROTOCOL
        </div>
      </div>

      {/* Diagonal Stepped Canvas */}
      <div className="relative max-w-5xl mx-auto">
        {/* Continuous Diagonal SVG Spine behind steps (desktop) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="24,132 24,205 130,205 130,348 260,348 260,492 390,492 390,636 520,636"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.25"
          />
          <circle cx="24" cy="132" r="3" fill="#ffffff" />
          <circle cx="130" cy="205" r="3" fill="#ffffff" />
          <circle cx="260" cy="348" r="3" fill="#ffffff" />
          <circle cx="390" cy="492" r="3" fill="#ffffff" />
          <circle cx="520" cy="636" r="3" fill="#ffffff" />
        </svg>

        <div className="space-y-6 md:space-y-5 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`w-full md:w-[46%] ${step.offsetClass} border border-white/25 bg-black p-5 relative`}
            >
              {/* Mobile Vertical Thread */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-6 -bottom-6 w-px h-6 bg-white/40" />
              )}

              <div className="flex items-center justify-between border-b border-white/15 pb-2 mb-3">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest">
                  <Plus className="w-3 h-3 opacity-80" />
                  <span className="font-bold">STAGE {step.num}</span>
                </div>
                <span className="text-[10px] font-mono opacity-50 tabular-nums">
                  {step.coord}
                </span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black tracking-tighter leading-none opacity-25 select-none">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-black tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-mono tracking-wide opacity-75 leading-relaxed mt-1.5">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Coordinate Tag */}
      <div className="mt-10 pt-3 border-t border-white/15 flex justify-between text-[10px] font-mono tracking-widest opacity-50">
        <span>CONTINUOUS VECTOR THREAD // 5 STAGES</span>
        <span>TERMINUS: BASEL EXHIBITION HALL A</span>
      </div>
    </section>
  );
};
