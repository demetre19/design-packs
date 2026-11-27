import React from 'react';
import { Plus } from 'lucide-react';

export function Content8() {
  return (
    <section
      className="w-full text-black py-20 border-b-2 border-black overflow-hidden relative"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold bg-white px-2 py-1 border border-black">
            ARCHIVAL PINBOARD / CONTROLLED COLLISION
          </div>
          <div className="font-mono text-[10px] uppercase text-neutral-500 bg-white px-2 py-1 border border-black">
            DOSSIER NO. 26-SZK
          </div>
        </div>

        {/* Controlled Z-Stacked Collision Canvas */}
        <div className="relative min-h-[680px] lg:min-h-[560px]">
          {/* Piece 1: Giant Cropped Condensed Headline Fragment */}
          <div className="relative z-10 lg:absolute lg:top-4 lg:left-0 bg-black text-white px-6 pt-4 pb-8 lg:-rotate-1 border-2 border-black inline-block max-w-2xl">
            <div className="font-mono text-[10px] text-neutral-400 mb-2 tracking-widest uppercase">
              PLATE COLLAGE // PRE-HOMOLOGATION TEST LOG
            </div>
            <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.82]">
              SUZUKA <span className="text-[#ff2e00]">PROOF</span>
            </h2>
          </div>

          {/* Piece 2: Tall Vertical Chassis Frame Plate */}
          <div className="relative z-20 mt-6 lg:mt-0 lg:absolute lg:top-16 lg:right-12 w-full sm:w-80 bg-white p-2 border-2 border-black lg:rotate-2">
            <Plus className="w-3 h-3 text-[#ff2e00] absolute top-1 left-1" />
            <Plus className="w-3 h-3 text-[#ff2e00] absolute top-1 right-1" />
            <img
              src="/src/assets/images/velox_chassis_monocoque_1795617081338.jpg"
              alt="Exposed titanium trellis and carbon monocoque"
              referrerPolicy="no-referrer"
              className="w-full h-72 object-cover grayscale contrast-125"
            />
            <div className="pt-2 pb-1 px-1 flex justify-between font-mono text-[10px] uppercase">
              <span className="font-bold">FIG. 08A — TRELLIS</span>
              <span className="text-[#ff2e00]">WIND BAY 04</span>
            </div>
          </div>

          {/* Piece 3: Overlapping Track Motion Contact Print */}
          <div className="relative z-30 mt-6 lg:mt-0 lg:absolute lg:top-48 lg:left-24 w-full sm:w-[420px] bg-white p-2 border-2 border-black lg:-rotate-2">
            <img
              src="/src/assets/images/velox_track_motion_1795617081295.jpg"
              alt="Suzuka apex pan shot"
              referrerPolicy="no-referrer"
              className="w-full h-56 object-cover grayscale contrast-125"
            />
            <div className="pt-2 flex justify-between font-mono text-[10px] uppercase">
              <span className="font-bold">CONTACT PRINT 14 // H. TANAKA</span>
              <span>64° LEAN</span>
            </div>
          </div>

          {/* Piece 4: Pinned Mono Spec Slip Overlapped Bottom-Right */}
          <div className="relative z-40 mt-6 lg:mt-0 lg:absolute lg:bottom-4 lg:right-48 w-full sm:w-72 bg-white border-2 border-black p-4 lg:rotate-1">
            <Plus className="w-3.5 h-3.5 text-black absolute -top-2 -left-2 bg-white" />
            <Plus className="w-3.5 h-3.5 text-black absolute -top-2 -right-2 bg-white" />
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase mb-2">
              PINNED SPEC SLIP #09
            </div>
            <div className="font-mono text-[11px] space-y-1.5 border-t border-black pt-2">
              <div className="flex justify-between">
                <span>AMBIENT TRACK</span>
                <span className="font-bold tabular-nums">14.2°C</span>
              </div>
              <div className="flex justify-between">
                <span>TIRE COMPOUND</span>
                <span className="font-bold">SC0 SLICK</span>
              </div>
              <div className="flex justify-between">
                <span>PEAK REGEN</span>
                <span className="font-bold text-[#ff2e00] tabular-nums">118 KW</span>
              </div>
            </div>
          </div>

          {/* Piece 5: Red Circular Registration Stamp */}
          <div className="relative z-50 mt-6 lg:mt-0 lg:absolute lg:top-40 lg:left-[470px] w-28 h-28 rounded-full bg-[#ff2e00] text-black border-2 border-black flex flex-col items-center justify-center text-center p-2 rotate-12 select-none">
            <span className="font-mono text-[9px] font-black tracking-widest uppercase">FIA TEST</span>
            <span className="font-black text-xl tracking-tighter leading-none my-0.5">PASSED</span>
            <span className="font-mono text-[8px] font-bold uppercase">NOV 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
