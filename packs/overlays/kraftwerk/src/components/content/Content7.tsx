import React from 'react';

export function Content7() {
  const sprocketHoles = Array.from({ length: 28 });

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-6 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-07 // 35MM ARCHIVAL FILM STRIP // UNEQUAL FRAME RHYTHM</span>
          <span className="font-bold">EMULSION: TRI-X 400 // REEL 099</span>
        </div>

        {/* Continuous Horizontal Film Strip */}
        <div className="border-2 border-[#111111] bg-[#111111] text-[#e8e8e6]">
          {/* Top Sprocket Perforation Rail */}
          <div className="px-2 py-2 border-b border-[#333333] flex items-center justify-between gap-2 overflow-hidden">
            {sprocketHoles.map((_, idx) => (
              <span
                key={`top-${idx}`}
                className="w-4 h-2.5 bg-[#e8e8e6] shrink-0 block"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* 5 Unequal-Width Frames in One Continuous Band */}
          <div className="flex flex-col lg:flex-row divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-[#111111] bg-[#e8e8e6] text-[#111111]">
            {/* Frame 1: WIDE (34%) — Panning Track Motion Plate */}
            <div className="lg:w-[34%] flex flex-col justify-between bg-[#111111] text-[#e8e8e6] p-2">
              <div className="flex justify-between text-[8px] tracking-widest mb-1.5">
                <span>FRAME 36A</span>
                <span>1/60S PANNING</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden border border-[#444444]">
                <img
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
                  alt="Endurance prototype at speed on wet asphalt circuit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="text-[8px] text-[#aaaaaa] tracking-widest mt-1.5 uppercase">
                NORDSCHLEIFE WET SESSION // LAP 14
              </div>
            </div>

            {/* Frame 2: NARROW (13%) — Pure Rotated Numeral */}
            <div className="lg:w-[13%] bg-[#f4f4f0] p-3 flex flex-row lg:flex-col items-center justify-between min-h-[110px] lg:min-h-[220px]">
              <span className="text-[8px] tracking-widest text-[#555555]">37A</span>
              <div className="lg:-rotate-90 whitespace-nowrap font-black text-2xl md:text-3xl tracking-tighter tabular-nums">
                06:42.88
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest">LAP REF</span>
            </div>

            {/* Frame 3: MEDIUM (24%) — Dense Technical Log Block */}
            <div className="lg:w-[24%] bg-[#e8e8e6] p-4 flex flex-col justify-between">
              <div className="flex justify-between text-[8px] border-b border-[#111111] pb-1 mb-2">
                <span className="font-bold">FRAME 38A</span>
                <span>LOG: STUTTGART</span>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tight mb-2">
                  WET SURFACE TELEMETRY
                </h3>
                <p className="text-[9px] leading-relaxed text-[#333333] uppercase">
                  Standing water depth 4.2 mm at Flugplatz. Traction intervention remained disengaged; rear diffuser stability preserved via 14° wing trim.
                </p>
              </div>
              <div className="text-[8px] tracking-widest text-[#555555] pt-2 border-t border-[#111111] mt-3">
                PEAK SPEED: 318 KM/H
              </div>
            </div>

            {/* Frame 4: TINY (10%) — Vertical Barcode + ISO Stamp */}
            <div className="lg:w-[10%] bg-[#ffffff] p-3 flex flex-row lg:flex-col items-center justify-between gap-2">
              <span className="text-[8px] font-bold">39A</span>
              <div className="w-24 h-6 lg:w-full lg:h-24 bg-[repeating-linear-gradient(0deg,#111111,#111111_2px,#ffffff_2px,#ffffff_5px)] border border-[#111111]" />
              <span className="text-[8px] font-bold tracking-widest">ISO 800</span>
            </div>

            {/* Frame 5: MEDIUM-NARROW (19%) — Inverted Driver Quote */}
            <div className="lg:w-[19%] bg-[#111111] text-[#e8e8e6] p-4 flex flex-col justify-between border-l border-[#333333]">
              <span className="text-[8px] tracking-widest text-[#888888]">FRAME 40A // QUOTE</span>
              <blockquote className="text-xs font-black uppercase leading-snug tracking-tight my-3">
                “ZERO SNAP OVERSTEER THROUGH WET KERBS.”
              </blockquote>
              <span className="text-[8px] tracking-[0.2em] text-[#aaaaaa] uppercase">
                — K. BECKER
              </span>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Rail + Film Code */}
          <div className="px-2 py-2 border-t border-[#333333] flex items-center justify-between gap-2 overflow-hidden">
            {sprocketHoles.map((_, idx) => (
              <span
                key={`bot-${idx}`}
                className="w-4 h-2.5 bg-[#e8e8e6] shrink-0 block"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex justify-between text-[8px] uppercase tracking-[0.25em] text-[#555555]">
          <span>KRAFTWERK SAFETY FILM 5063</span>
          <span>FRAMES 36A → 40A // CONTINUOUS STRIP</span>
        </div>
      </div>
    </section>
  );
}
