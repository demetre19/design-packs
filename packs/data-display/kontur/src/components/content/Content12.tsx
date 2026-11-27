/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Content12: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-10">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 12 // THE THREADED NARRATIVE — THREE-ACT CONTINUOUS ARC
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            THREE ACTS OF WEIGHT
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block tabular-nums">
          SPAN: 000MM — 840MM<br />
          UNIFIED PHYSICAL THREAD
        </div>
      </div>

      {/* Continuous Physical Thread Track across all 3 Acts */}
      <div className="relative max-w-6xl mx-auto">
        {/* Continuous Horizontal Thread Line (Desktop) */}
        <div
          className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-white/50 z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-20">
          {/* ACT I: Vertical Rotated Title + Narrow Prose */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-white border border-black inline-block shrink-0" />
              <span className="bg-black pr-3 text-[11px] font-mono tracking-[0.2em] font-bold tabular-nums">
                ACT I // 000MM — 1957
              </span>
            </div>

            <div className="border border-white/25 p-5 flex gap-4 flex-1 min-h-[250px]">
              <div className="w-10 border-r border-white/20 pr-3 flex items-center justify-center shrink-0">
                <span className="-rotate-90 whitespace-nowrap text-xs font-mono tracking-[0.25em] font-bold uppercase">
                  LEAD CAST
                </span>
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <h3 className="text-xl font-black tracking-tight uppercase">
                  THE METAL CHASE
                </h3>
                <p className="text-xs font-mono opacity-75 leading-relaxed">
                  Type began as physical alloy locked inside iron furniture. To bleed off the sheet required sawing lead blocks flush against the woodcut edge.
                </p>
                <div className="text-[10px] font-mono opacity-55 border-t border-white/15 pt-2">
                  BASEL FOUNDRY // 48PT LEAD
                </div>
              </div>
            </div>
          </div>

          {/* ACT II: Full-Bleed Cropped Year Plate + Dual Footnotes */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-white border border-black inline-block shrink-0" />
              <span className="bg-black px-2 text-[11px] font-mono tracking-[0.2em] font-bold tabular-nums">
                ACT II // 420MM — 1974
              </span>
            </div>

            <div className="border border-white/25 flex-1 min-h-[250px] flex flex-col justify-between overflow-hidden">
              <div className="p-4 border-b border-white/20 flex justify-between text-[10px] font-mono opacity-65">
                <span>PHOTOTYPESETTING</span>
                <span>OPTICAL NEGATIVE</span>
              </div>
              <div className="overflow-hidden -mx-2 my-auto">
                <div className="text-[108px] font-black tracking-[-0.08em] leading-[0.78] uppercase whitespace-nowrap select-none">
                  1974
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/20 border-t border-white/20 text-[10px] font-mono">
                <div className="p-3 opacity-75">FILM STRIP SCALING</div>
                <div className="p-3 opacity-75">ZERO METAL CONSTRAINT</div>
              </div>
            </div>
          </div>

          {/* ACT III: Inverted Highlight Callout + Horizontal Thesis */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-white border border-black inline-block shrink-0" />
              <span className="bg-black px-2 text-[11px] font-mono tracking-[0.2em] font-bold tabular-nums">
                ACT III // 840MM — 2026
              </span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto hidden lg:block opacity-70" />
            </div>

            <div className="bg-white text-black p-6 flex-1 min-h-[250px] flex flex-col justify-between">
              <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-65">
                <span>SCREEN VIEWPORT</span>
                <span>FINAL STATE</span>
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-[0.88] mb-3">
                  THE BLEED CONTAINER
                </h3>
                <p className="text-xs font-mono opacity-85 leading-relaxed">
                  The browser viewport replaces the steel guillotine—CSS overflow clipping turns responsive frames into living Swiss posters.
                </p>
              </div>
              <div className="border-t border-black/20 pt-3 flex justify-between text-[10px] font-mono font-bold">
                <span>THREAD COMPLETE</span>
                <span>840MM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
