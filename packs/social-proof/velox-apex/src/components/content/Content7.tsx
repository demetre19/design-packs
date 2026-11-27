import React from 'react';

export function Content7() {
  const sprockets = Array.from({ length: 24 });

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6 flex justify-between items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold">
            35MM TELEMETRY CONTACT STRIP / VARIABLE CADENCE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mt-1">
            THE FILM <span className="text-[#ff2e00]">STRIP</span>
          </h2>
        </div>
        <div className="font-mono text-[10px] text-neutral-500 uppercase hidden sm:block">
          SCROLL HORIZONTALLY ON NARROW VIEWPORTS →
        </div>
      </div>

      {/* Continuous Horizontal Film Band with Sprocket Tracks */}
      <div className="w-full bg-black text-white border-y-2 border-black">
        {/* Top Sprocket Perforation Track */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-neutral-800 overflow-hidden gap-3">
          {sprockets.map((_, idx) => (
            <div key={idx} className="w-4 h-2.5 bg-white shrink-0" />
          ))}
        </div>

        {/* 5 Deliberately Unequal Width Frames */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-neutral-700">
          {/* Frame 1: WIDE (29%) — Track Motion Photograph */}
          <div className="lg:w-[29%] p-4 flex flex-col justify-between bg-neutral-950">
            <div className="flex justify-between font-mono text-[10px] text-neutral-400 mb-2">
              <span className="text-[#ff2e00] font-bold">VX-001A</span>
              <span>ISO 3200 · 1/4000S</span>
            </div>
            <div className="border border-neutral-700 h-48 overflow-hidden relative bg-black">
              <img
                src="/src/assets/images/velox_track_motion_1795617081295.jpg"
                alt="Track pan frame 001A"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-2 left-2 bg-black/90 text-white font-mono text-[9px] px-1.5 py-0.5">
                TURN 09 ENTRY · 212 KM/H
              </div>
            </div>
            <div className="font-mono text-[10px] text-neutral-400 mt-2 uppercase">
              SPOON CURVE LEAN THRESHOLD CAPTURE
            </div>
          </div>

          {/* Frame 2: NARROW (11%) — Pure Oversized Vertical Numeral */}
          <div className="lg:w-[11%] p-4 flex lg:flex-col justify-between items-center bg-black">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold">002A</div>
            <div className="text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white lg:[writing-mode:vertical-lr] lg:rotate-180 select-none">
              64°
            </div>
            <div className="font-mono text-[9px] text-neutral-500 uppercase text-center">
              MAX APEX
            </div>
          </div>

          {/* Frame 3: MEDIUM (24%) — Quote + Telemetry Block */}
          <div className="lg:w-[24%] p-5 flex flex-col justify-between bg-neutral-950">
            <div className="flex justify-between font-mono text-[10px] text-neutral-400">
              <span className="text-[#ff2e00] font-bold">VX-003A</span>
              <span>SECTOR 02</span>
            </div>
            <blockquote className="text-2xl font-black uppercase tracking-tight leading-tight my-4 text-white">
              “ZERO GEAR SHIFT INTERRUPT ON EXIT.”
            </blockquote>
            <div className="border-t border-neutral-800 pt-3 font-mono text-[10px] text-neutral-400 flex justify-between">
              <span>PILOT H. TANAKA</span>
              <span className="text-[#ff2e00]">1.84 G LAT</span>
            </div>
          </div>

          {/* Frame 4: TINY (8%) — Signal Red Accent Marker Frame */}
          <div className="lg:w-[8%] p-3 bg-[#ff2e00] text-black flex lg:flex-col justify-between items-center">
            <span className="font-mono text-[10px] font-black">004A</span>
            <span className="font-black text-xl uppercase tracking-tighter lg:[writing-mode:vertical-lr] lg:rotate-180">
              998 VOLT
            </span>
            <span className="font-mono text-[9px] font-bold">SYNC</span>
          </div>

          {/* Frame 5: WIDE (28%) — Technical Prose + Cropped Detail */}
          <div className="lg:w-[28%] p-4 flex flex-col justify-between bg-black">
            <div className="flex justify-between font-mono text-[10px] text-neutral-400 mb-2">
              <span className="text-[#ff2e00] font-bold">VX-005A</span>
              <span>FINISHING PLATE</span>
            </div>
            <div className="grid grid-cols-12 gap-3 items-center my-auto">
              <div className="col-span-5 border border-neutral-700 h-28 overflow-hidden">
                <img
                  src="/src/assets/images/velox_aero_winglet_1795617079505.jpg"
                  alt="Winglet detail frame 005A"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="col-span-7 font-mono text-[11px] text-neutral-300 leading-relaxed">
                Forged aero shroud directs ambient intake directly across stator fins at 310 km/h terminal velocity.
              </div>
            </div>
            <div className="font-mono text-[10px] text-neutral-500 mt-3 uppercase flex justify-between">
              <span>END OF REEL 04</span>
              <span className="text-white font-bold">1:58.420</span>
            </div>
          </div>
        </div>

        {/* Bottom Sprocket Perforation Track */}
        <div className="flex justify-between items-center px-3 py-2 border-t border-neutral-800 overflow-hidden gap-3">
          {sprockets.map((_, idx) => (
            <div key={idx} className="w-4 h-2.5 bg-white shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
