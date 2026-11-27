import React from 'react';

export function Content14() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-8 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-14 // MATHEMATICAL SCORE CASCADE // HORIZONTAL SHIFT RHYTHM</span>
          <span className="font-bold">GRID PITCH: 25% / 50% / 75%</span>
        </div>

        {/* Musical-Score Vertical Pitch Background Container */}
        <div className="relative py-4 space-y-6">
          {/* Vertical Pitch Guide Lines (25%, 50%, 75%) */}
          <div className="hidden md:block absolute inset-y-0 left-1/4 w-[1px] bg-[#111111] opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-[#111111] opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="hidden md:block absolute inset-y-0 left-3/4 w-[1px] bg-[#111111] opacity-15 pointer-events-none" aria-hidden="true" />

          {/* Piece 1: WIDE LEFT (76% width) — Acoustic Harmonic Curve + Spec */}
          <div className="w-full md:w-[76%] mr-auto border-2 border-[#111111] bg-[#ffffff] p-5 relative z-10">
            <div className="flex justify-between items-center text-[8px] tracking-widest text-[#555555] border-b border-[#111111] pb-1.5 mb-3">
              <span>MEASURE 01 // 76% WIDTH // LEFT ANCHOR</span>
              <span className="font-bold text-[#111111]">ACOUSTIC RESONANCE</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-md">
                <h3 className="text-lg font-black uppercase tracking-tight">
                  INCONEL EXHAUST HARMONIC PROFILE
                </h3>
                <p className="text-[10px] text-[#444444] uppercase mt-1 leading-relaxed">
                  Equal-length 180-degree merge collectors tune primary exhaust pulses to 612 Hz at 9,200 RPM peak load.
                </p>
              </div>
              <svg viewBox="0 0 180 48" className="w-40 h-12 shrink-0 border border-[#111111] bg-[#f4f4f0] p-1" aria-hidden="true">
                <path
                  d="M0,24 Q15,4 30,24 T60,24 T90,24 T120,24 T150,24 T180,24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Piece 2: NARROW RIGHT (42% width) — Inverted Black Datum */}
          <div className="w-full md:w-[42%] ml-auto border-2 border-[#111111] bg-[#111111] text-[#e8e8e6] p-5 relative z-10">
            <div className="flex justify-between text-[8px] tracking-widest text-[#aaaaaa] mb-2">
              <span>MEASURE 02 // 42% WIDTH</span>
              <span>RIGHT ANCHOR</span>
            </div>
            <div className="text-4xl font-black tracking-tighter tabular-nums leading-none">
              114.2 DB
            </div>
            <div className="text-[9px] uppercase tracking-widest text-[#cccccc] mt-2">
              UNMUFFLED TRACK PEAK AT 15 METERS
            </div>
          </div>

          {/* Piece 3: MEDIUM CENTER (60% width) — Framed Plate Only with Dual Rulers */}
          <div className="w-full md:w-[60%] mx-auto border-2 border-[#111111] bg-[#f4f4f0] p-3 relative z-10">
            <div className="flex justify-between text-[8px] tracking-widest uppercase mb-1.5">
              <span className="font-bold">MEASURE 03 // 60% WIDTH // CENTERED</span>
              <span>WET CIRCUIT CALIBRATION</span>
            </div>
            <div className="aspect-[16/9] bg-[#111111] border border-[#111111] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
                alt="High-speed wet track calibration run"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[8px] text-[#555555]">
              <span>0 MM</span>
              <span>100 MM</span>
              <span>200 MM</span>
              <span>300 MM</span>
            </div>
          </div>

          {/* Piece 4: OFFSET LEFT-MID (52% width, ml-[14%]) — Sign-off + Hazard Cap */}
          <div className="w-full md:w-[52%] md:ml-[14%] border-2 border-[#111111] bg-[#ffffff] flex items-stretch relative z-10">
            <div className="w-5 shrink-0 bg-[repeating-linear-gradient(45deg,#111111,#111111_4px,#e8e8e6_4px,#e8e8e6_8px)] border-r border-[#111111]" />
            <div className="p-4 flex-1">
              <div className="text-[8px] tracking-widest text-[#555555] mb-1">
                MEASURE 04 // 52% WIDTH // +14% OFFSET
              </div>
              <div className="text-sm font-black uppercase tracking-tight">
                END OF CASCADE SEQUENCE — ALL FOUR MEASURES SYNCHRONIZED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
