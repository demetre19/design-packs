import React from 'react';

export function Content8() {
  return (
    <section
      aria-label="Flight Test Control Room Pinboard"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2a2d35] pb-4 mb-8">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              WAR ROOM ARTIFACT BOARD // PINBOARD 08
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              SORTIE S-09 POST-FLIGHT EVIDENCE WALL
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400">BAY 4 DEBRIEF BOARD // UNLOCKED</span>
        </div>

        {/* Desktop Controlled Collision Pinboard */}
        <div
          className="relative bg-[#111318] border border-[#2a2d35] min-h-[540px] hidden lg:block overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(#2a2d35 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          {/* Artifact 1: Wind Tunnel Thermal Plate (Top-Left, -2deg) */}
          <div className="absolute top-10 left-10 w-80 bg-[#20232a] border border-[#3a3e4c] p-3 -rotate-2 z-10">
            <div className="w-2.5 h-2.5 bg-[#ff3d00] absolute -top-1.5 left-1/2 -translate-x-1/2" />
            <div
              className="h-40 border border-[#2a2d35] flex items-end p-3"
              style={{
                background:
                  'radial-gradient(circle at 30% 40%, rgba(255,61,0,0.45), transparent 60%), linear-gradient(145deg, #1b1e25 0%, #0d0f13 100%)',
              }}
            >
              <span className="text-[10px] bg-black/80 px-2 py-0.5 text-[#ff3d00] font-bold">
                IR CAM // 1,680°C PEAK
              </span>
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-zinc-300">
              <span>FIG 01. NOSE CAP THERMOGRAM</span>
              <span className="text-zinc-500">S-09</span>
            </div>
          </div>

          {/* Artifact 2: Overlapping Mach Envelope Trace (Center-Top, +1deg, z-20) */}
          <div className="absolute top-28 left-[220px] w-80 bg-[#16181d] border border-[#ff3d00] p-4 rotate-1 z-20">
            <div className="w-2.5 h-2.5 bg-white absolute -top-1.5 left-6" />
            <div className="flex justify-between text-[10px] text-[#ff3d00] font-bold mb-2">
              <span>TELEMETRY TRACE // CH-04</span>
              <span>VALIDATED</span>
            </div>
            <svg viewBox="0 0 320 90" className="w-full h-24 bg-[#111318] border border-[#2a2d35]" aria-hidden="true">
              <polyline
                points="10,75 65,68 120,46 185,22 250,14 310,16"
                fill="none"
                stroke="#ff3d00"
                strokeWidth="2"
              />
              <polyline
                points="10,80 65,78 120,62 185,48 250,42 310,44"
                fill="none"
                stroke="#52525b"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
            </svg>
            <div className="mt-2 text-[10px] text-zinc-400">
              SOLID: ACTUAL MACH 4.84 // DASHED: PREDICTED CFD
            </div>
          </div>

          {/* Artifact 3: Pilot Handwritten-Style Memo Card (Right-Top, -1deg, z-30 so text stays unobstructed) */}
          <div className="absolute top-10 right-8 w-72 bg-[#e4e6eb] text-[#16181d] p-5 -rotate-1 z-30 border border-white">
            <div className="w-2.5 h-2.5 bg-[#ff3d00] absolute -top-1.5 right-8" />
            <div className="text-[10px] font-black tracking-widest text-[#ff3d00] mb-2">
              CREW CHIEF NOTE // R. KOWALSKI
            </div>
            <p className="text-xs font-bold leading-relaxed">
              &ldquo;Check intake ramp actuator #2 seal torque before S-10 upload. Minor soot trace noted on starboard bleed louver.&rdquo;
            </p>
            <div className="mt-3 pt-2 border-t border-[#16181d]/20 text-[10px] font-bold">
              SIGNED: BAY 4 LEAD · 04:12Z
            </div>
          </div>

          {/* Artifact 4: Raw Strip Readout Overlapping Bottom-Left (z-30, +2deg) */}
          <div className="absolute bottom-10 left-20 w-[420px] bg-[#20232a] border border-[#3a3e4c] p-4 rotate-2 z-30">
            <div className="w-2.5 h-2.5 bg-[#ff3d00] absolute -top-1.5 left-12" />
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-[#ff3d00]">BLACK BOX FRAGMENT // 09:44:12</span>
              <span className="text-zinc-400 tabular-nums">+5.82 G</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] bg-[#111318] p-2 border border-[#2a2d35] tabular-nums">
              <div>AOA: +3.1°</div>
              <div>Q: 1,290 PSF</div>
              <div className="text-[#ff3d00]">MACH: 4.84</div>
            </div>
          </div>

          {/* Artifact 5: Hazard Tag Marker (Bottom-Right, -3deg, z-20) */}
          <div className="absolute bottom-14 right-24 w-64 bg-[#ff3d00] text-black p-4 -rotate-3 z-20">
            <div className="text-[10px] font-black tracking-widest uppercase">
              RANGE CLEARANCE TAG
            </div>
            <div className="text-2xl font-black font-sans tracking-tighter mt-1">
              R-4808N CLEARED
            </div>
            <div className="text-[10px] font-bold mt-1">NEXT WINDOW: 06:00 PST</div>
          </div>
        </div>

        {/* Mobile Stacked Evidence Fallback */}
        <div className="lg:hidden space-y-4">
          <div className="bg-[#20232a] border border-[#3a3e4c] p-4">
            <div className="text-[10px] text-[#ff3d00] font-bold">FIG 01 // NOSE CAP THERMOGRAM</div>
            <div className="text-xs text-zinc-300 mt-1">IR CAM: 1,680°C PEAK AT MACH 4.84</div>
          </div>
          <div className="bg-[#e4e6eb] text-[#16181d] p-4">
            <div className="text-[10px] text-[#ff3d00] font-black">CREW CHIEF NOTE // R. KOWALSKI</div>
            <p className="text-xs font-bold mt-1">
              Check intake ramp actuator #2 seal torque before S-10 upload.
            </p>
          </div>
          <div className="bg-[#ff3d00] text-black p-4">
            <div className="text-[10px] font-black">RANGE CLEARANCE TAG</div>
            <div className="text-lg font-black font-sans">R-4808N CLEARED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
