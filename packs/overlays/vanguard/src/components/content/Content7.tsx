import React from 'react';

const SPROCKET_COUNT = 22;

export function Content7() {
  return (
    <section
      aria-label="Flight Test Telemetry Film Strip"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-12 px-4 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase">
            REEL S-09 // HIGH-SPEED CAPTURE FILM STRIP 07
          </span>
          <span className="text-[10px] text-zinc-400 tabular-nums">
            1,200 FPS SCHLIEREN REEL · 35MM ARCHIVE
          </span>
        </div>

        {/* Continuous Horizontal Film Strip Container */}
        <div className="bg-[#0b0c10] border-y-2 border-[#3a3e4c] overflow-x-auto">
          {/* Top Sprocket Rail */}
          <div
            aria-hidden="true"
            className="flex items-center justify-between gap-2 px-3 py-1.5 border-b border-[#2a2d35] min-w-[760px] lg:min-w-0"
          >
            {Array.from({ length: SPROCKET_COUNT }).map((_, i) => (
              <span key={i} className="w-3.5 h-2 bg-[#20232a] border border-[#3a3e4c] shrink-0" />
            ))}
          </div>

          {/* 5 Unequal-Width Frames */}
          <div className="flex items-stretch divide-x-4 divide-[#0b0c10] bg-[#16181d] min-w-[760px] lg:min-w-0 h-64">
            {/* Frame 1: WIDE (32%) — Narrative Briefing */}
            <div className="w-[32%] bg-[#1a1d24] p-4 flex flex-col justify-between relative">
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span className="text-[#ff3d00] font-bold">FR.014A</span>
                <span>T+02:14.08</span>
              </div>
              <div>
                <h3 className="text-base font-black font-sans uppercase leading-tight">
                  SHOCK TRAIN LOCKS INSIDE DIFFUSER THROAT
                </h3>
                <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">
                  High-speed optical sensors track pressure wave compression across stations 140–210 as intake ramps pivot 4.2°.
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 uppercase">OPTICAL BAY // CAM-02</div>
            </div>

            {/* Frame 2: NARROW (13%) — Pure Oversized Numeral */}
            <div className="w-[13%] bg-[#ff3d00] text-black p-3 flex flex-col justify-between items-center text-center">
              <span className="text-[10px] font-black tracking-widest">PEAK</span>
              <div className="text-3xl font-black font-sans tracking-tighter leading-none">
                M4.8
              </div>
              <span className="text-[10px] font-bold tabular-nums">FL650</span>
            </div>

            {/* Frame 3: MEDIUM (23%) — Dark-Treated Hangar/Tunnel Image Plate */}
            <div
              className="w-[23%] relative p-4 flex flex-col justify-between overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 60% 45%, rgba(255,61,0,0.22), transparent 60%), linear-gradient(160deg, #1e222b 0%, #0d0f13 100%)',
              }}
            >
              <div className="flex justify-between text-[10px] text-zinc-300 z-10">
                <span>FR.015B</span>
                <span className="text-[#ff3d00]">IR-THERM</span>
              </div>
              <svg viewBox="0 0 220 110" className="w-full h-28 z-10" aria-hidden="true">
                <path d="M 10,85 L 110,25 L 210,85" fill="none" stroke="#ff3d00" strokeOpacity="0.65" strokeWidth="1.2" />
                <polygon points="55,65 110,36 165,65 110,56" fill="#16181d" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <div className="text-[10px] text-zinc-400 z-10">INFRARED LEADING EDGE SCAN</div>
            </div>

            {/* Frame 4: TINY (9%) — Vertical Coordinate Strip */}
            <div className="w-[9%] bg-[#111318] p-2 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.22em] text-zinc-400 [writing-mode:vertical-lr] rotate-180 uppercase whitespace-nowrap">
                37°14&apos;N · 115°48&apos;W · S-09
              </span>
            </div>

            {/* Frame 5: MEDIUM-WIDE (23%) — Pilot Quote Fragment */}
            <div className="w-[23%] bg-[#20232a] p-4 flex flex-col justify-between">
              <span className="text-[10px] text-[#ff3d00] font-bold">VOICE REC // CH.1</span>
              <p className="text-xs font-sans font-bold text-white leading-snug">
                &ldquo;Zero buffet through Mach 4.5. Stick forces are dead steady.&rdquo;
              </p>
              <span className="text-[10px] text-zinc-400">— COL. M. VANCE</span>
            </div>
          </div>

          {/* Bottom Sprocket Rail */}
          <div
            aria-hidden="true"
            className="flex items-center justify-between gap-2 px-3 py-1.5 border-t border-[#2a2d35] min-w-[760px] lg:min-w-0"
          >
            {Array.from({ length: SPROCKET_COUNT }).map((_, i) => (
              <span key={i} className="w-3.5 h-2 bg-[#20232a] border border-[#3a3e4c] shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
