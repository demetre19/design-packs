/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content10: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 relative overflow-hidden min-h-[540px] flex flex-col justify-between px-4 py-8 md:px-8">
      {/* Unexpected Corner Micro-Tag */}
      <div className="flex justify-between items-start text-[10px] font-mono tracking-[0.22em] opacity-65 relative z-20">
        <span>CONTENT 10 // THE INTERRUPTION</span>
        <span>NO IMAGERY // PURE TYPE MASS</span>
      </div>

      {/* Colossal 4-5x Statement Breaking Across All Bounds */}
      <div className="relative my-6 select-none overflow-hidden">
        <div className="text-[21vw] sm:text-[18vw] font-black tracking-[-0.08em] leading-[0.76] uppercase whitespace-nowrap -ml-3">
          NOTHING
        </div>

        {/* Micro-annotation threaded inside the horizontal gap between lines */}
        <div className="my-2 pl-4 sm:pl-[28%] flex items-center gap-4 text-[10px] font-mono tracking-[0.2em] opacity-85">
          <span className="w-8 h-px bg-white/50 inline-block" />
          <span>THESIS STATEMENT IV — BASEL ACADEMY KEYNOTE</span>
        </div>

        <div className="text-[21vw] sm:text-[18vw] font-black tracking-[-0.08em] leading-[0.76] uppercase whitespace-nowrap ml-6 sm:ml-[10%]">
          BEYOND
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="text-[21vw] sm:text-[18vw] font-black tracking-[-0.08em] leading-[0.76] uppercase whitespace-nowrap -ml-2">
            TYPE
          </div>
          <div
            className="hidden sm:block text-right text-[10px] font-mono tracking-[0.22em] opacity-75 leading-relaxed pb-2 pr-2 max-w-[240px]"
            aria-label="Attribution: Bruno Müller, Kontur Opening Address 2026"
          >
            <div className="text-white font-bold">BRUNO MÜLLER</div>
            <div>KONTUR OPENING ADDRESS</div>
            <div>OCT 14, 2026 // BASEL</div>
          </div>
        </div>
      </div>

      {/* Bottom Tucked Counter-Note */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/15 pt-3 text-[10px] font-mono tracking-widest opacity-60 gap-2 relative z-20">
        <span>SCALE RATIO: 28:1 AGAINST BODY TEXT</span>
        <span>UNALTERED GROTESQUE // ZERO ORNAMENT</span>
      </div>
    </section>
  );
};
