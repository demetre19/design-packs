import React from 'react';
import { Film, Zap } from 'lucide-react';

export function Content7() {
  const sprockets = Array.from({ length: 24 });

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              SEQUENCE 07 // CONTINUOUS TELEMETRY REEL
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              TEST SESSION FILM STRIP
            </h2>
          </div>
          <span className="font-mono-spec text-[10px] text-neutral-500 flex items-center gap-1.5">
            <Film size={12} className="text-[#ff5a1f]" /> 35MM // SUZUKA REEL 04
          </span>
        </div>

        {/* Continuous Horizontal Film Strip */}
        <div className="bg-[#0b0c0e] border border-[#272a33] overflow-x-auto">
          {/* Top Sprocket Perforation Track */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#272a33] min-w-[960px]">
            {sprockets.map((_, i) => (
              <span key={i} className="w-3.5 h-2.5 bg-[#1a1d24] border border-[#2f333d] block" />
            ))}
          </div>

          {/* 5 Unequal-Width Mixed-Type Frames */}
          <div className="flex items-stretch min-w-[960px] divide-x divide-[#272a33]">
            {/* Frame 1 — WIDE (33%) Text Narrative */}
            <div className="w-[33%] p-7 flex flex-col justify-between bg-[#121419]">
              <div className="flex justify-between font-mono-spec text-[10px] text-neutral-500">
                <span className="text-[#ff5a1f] font-bold">FRM 001A</span>
                <span>04:12:09.02</span>
              </div>
              <div className="my-6">
                <h3 className="font-display font-extrabold text-2xl text-white leading-tight mb-3">
                  EXITING TURN 11 UNDER FULL PHASE CURRENT
                </h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">
                  Rear tire slip locks onto the 7.0% target envelope as inverter switching climbs to 24 kHz without clutch feathering.
                </p>
              </div>
              <span className="font-mono-spec text-[10px] text-neutral-500">SECTOR 02 // HAIRPIN EXIT</span>
            </div>

            {/* Frame 2 — NARROW (13%) Pure Numeral */}
            <div className="w-[13%] p-5 flex flex-col justify-between items-center text-center bg-[#16181d]">
              <span className="font-mono-spec text-[10px] text-neutral-500">FRM 002A</span>
              <div className="my-4">
                <span className="font-display font-extrabold text-4xl text-[#ff5a1f] tabular-nums block leading-none">
                  2.14
                </span>
                <span className="font-mono-spec text-[10px] text-white tracking-widest mt-1 block">
                  SEC
                </span>
              </div>
              <span className="font-mono-spec text-[9px] text-neutral-400">0–100 KM/H</span>
            </div>

            {/* Frame 3 — MEDIUM (25%) Dark Gradient Plate */}
            <div className="w-[25%] p-6 flex flex-col justify-between bg-gradient-to-tr from-[#101114] via-[#1c2028] to-[#ff5a1f]/15 relative">
              <div className="flex justify-between font-mono-spec text-[10px] text-neutral-400">
                <span className="text-[#ff5a1f]">FRM 003A // PLATE</span>
                <span>298 KM/H</span>
              </div>
              <div className="my-6 flex flex-col items-center justify-center py-6 border border-[#272a33] bg-[#101114]/60">
                <Zap size={30} className="text-[#ff5a1f] mb-2" />
                <span className="font-mono-spec text-[10px] text-neutral-300">AERO TUCK // 48.2 KGF</span>
              </div>
              <span className="font-mono-spec text-[10px] text-neutral-500">BACK STRAIGHT PEAK</span>
            </div>

            {/* Frame 4 — TINY (10%) Rotated Vertical Marker */}
            <div className="w-[10%] p-3 flex flex-col items-center justify-between bg-[#ff5a1f] text-black">
              <span className="font-mono-spec text-[9px] font-bold">004A</span>
              <span className="font-display font-extrabold text-sm tracking-widest [writing-mode:vertical-lr] rotate-180">
                800V // SiC
              </span>
              <span className="font-mono-spec text-[9px] font-bold">LIVE</span>
            </div>

            {/* Frame 5 — MEDIUM-NARROW (19%) Quote */}
            <div className="w-[19%] p-6 flex flex-col justify-between bg-[#121419]">
              <span className="font-mono-spec text-[10px] text-[#ff5a1f]">FRM 005A // PILOT</span>
              <blockquote className="font-display font-bold text-base text-white leading-snug my-4">
                “NO SHIFT SHOCK. ONLY RELENTLESS FORWARD THRUST.”
              </blockquote>
              <span className="font-mono-spec text-[10px] text-neutral-400">— H. TANAKA</span>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Track */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-[#272a33] min-w-[960px]">
            {sprockets.map((_, i) => (
              <span key={i} className="w-3.5 h-2.5 bg-[#1a1d24] border border-[#2f333d] block" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
