/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Film } from 'lucide-react';

export const Content7: React.FC = () => {
  const sprockets = Array.from({ length: 28 });

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-8">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 07 // THE FILM STRIP — UNEQUAL-CADENCE HORIZONTAL REEL
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            SEQUENCE REEL // 35MM
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60">
          <Film className="w-3.5 h-3.5" />
          <span>6 UNEQUAL FRAMES</span>
        </div>
      </div>

      {/* Scrollable Film Strip Container */}
      <div className="w-full overflow-x-auto pb-2">
        <div className="min-w-[1040px] border-y border-white/40 bg-black">
          {/* Top Sprocket Perforation Rail */}
          <div className="flex justify-between items-center px-3 py-1.5 border-b border-white/25 bg-white/[0.03]">
            {sprockets.map((_, idx) => (
              <div
                key={`top-${idx}`}
                className="w-3.5 h-2 border border-white/40 bg-black"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* 6 Unequal Frames Row */}
          <div className="flex items-stretch divide-x divide-white/35 h-[270px]">
            {/* Frame 1: Wide (27%) — Essay Text */}
            <div className="w-[27%] p-5 flex flex-col justify-between">
              <div className="text-[10px] font-mono tracking-widest opacity-55">
                FR.01 // TEXT [27%]
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black tracking-tight uppercase leading-none">
                  KINETIC INTERVALS
                </h3>
                <p className="text-[11px] font-mono opacity-75 leading-relaxed">
                  Type in motion obeys the same cadence as 35mm celluloid: wide pauses interrupted by narrow shock frames.
                </p>
              </div>
              <div className="text-[9px] font-mono opacity-50">00:00:04:12</div>
            </div>

            {/* Frame 2: Narrow (9%) — Pure Vertical Numeral */}
            <div className="w-[9%] p-3 flex flex-col justify-between items-center overflow-hidden bg-white/[0.03]">
              <span className="text-[9px] font-mono opacity-55">FR.02</span>
              <span className="text-7xl font-black tracking-tighter leading-none -rotate-90 select-none">
                02
              </span>
              <span className="text-[9px] font-mono opacity-50">9%</span>
            </div>

            {/* Frame 3: Medium-Wide (24%) — Visual Black Plate */}
            <div className="w-[24%] p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="text-[10px] font-mono tracking-widest opacity-55 z-10">
                FR.03 // VISUAL PLATE [24%]
              </div>
              <div className="overflow-hidden my-auto -mx-4">
                <div className="text-[96px] font-black tracking-[-0.07em] leading-[0.8] uppercase whitespace-nowrap select-none">
                  FILM
                </div>
              </div>
              <div className="flex justify-between text-[9px] font-mono opacity-55 z-10">
                <span>ARCHIVE BASEL</span>
                <span>DOUBLE-HIT</span>
              </div>
            </div>

            {/* Frame 4: Medium-Narrow (15%) — Pull Quote */}
            <div className="w-[15%] p-4 flex flex-col justify-between bg-white text-black">
              <div className="text-[10px] font-mono tracking-widest opacity-60">
                FR.04 [15%]
              </div>
              <blockquote className="text-sm font-black tracking-tight uppercase leading-tight">
                &ldquo;RHYTHM IS UNEQUAL DURATION.&rdquo;
              </blockquote>
              <div className="text-[9px] font-mono opacity-65">E. RUDER</div>
            </div>

            {/* Frame 5: Medium (17%) — Technical Spec List */}
            <div className="w-[17%] p-4 flex flex-col justify-between">
              <div className="text-[10px] font-mono tracking-widest opacity-55">
                FR.05 // SPEC [17%]
              </div>
              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex justify-between border-b border-white/15 pb-1">
                  <span className="opacity-55">GATE</span>
                  <span>1.85:1</span>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-1">
                  <span className="opacity-55">RATE</span>
                  <span>24 FPS</span>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-1">
                  <span className="opacity-55">STOCK</span>
                  <span>KODAK 5222</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-55">LAB</span>
                  <span>ZÜRICH</span>
                </div>
              </div>
              <div className="text-[9px] font-mono opacity-45">VERIFIED REEL</div>
            </div>

            {/* Frame 6: Tiny (8%) — Timecode Strip */}
            <div className="w-[8%] p-3 flex flex-col justify-between items-center text-center">
              <span className="text-[9px] font-mono opacity-55">FR.06</span>
              <span className="text-[10px] font-mono tracking-[0.2em] -rotate-90 whitespace-nowrap opacity-80">
                END // 24FPS
              </span>
              <span className="text-[9px] font-mono opacity-45">8%</span>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Rail */}
          <div className="flex justify-between items-center px-3 py-1.5 border-t border-white/25 bg-white/[0.03]">
            {sprockets.map((_, idx) => (
              <div
                key={`bot-${idx}`}
                className="w-3.5 h-2 border border-white/40 bg-black"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
