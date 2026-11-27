import React from 'react';
import { Crosshair } from 'lucide-react';

export function Content7() {
  const sprockets = Array.from({ length: 24 });

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <span>CELLULOID SEQUENCE 07 // SMELTING BAY CONTINUITY</span>
          <span className="text-[#f25c05] font-bold">35MM INDUSTRIAL REEL</span>
        </div>

        {/* Continuous Horizontal Film Strip Band */}
        <div className="border-4 border-black bg-black text-white">
          {/* Top Sprocket Perforation Track */}
          <div
            className="h-6 bg-black border-b-2 border-neutral-800 px-3 flex items-center justify-between overflow-hidden"
            aria-hidden="true"
          >
            {sprockets.map((_, i) => (
              <span key={`top-${i}`} className="w-3 h-2.5 bg-[#f5f4f0] shrink-0 mx-1" />
            ))}
          </div>

          {/* Unequal Width Film Frames */}
          <div className="flex flex-col lg:flex-row divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black bg-[#f5f4f0]">
            {/* Frame 1: WIDE (34%) — Smelter Bay Photography */}
            <div className="w-full lg:w-[34%] bg-black relative min-h-[260px] flex flex-col justify-between overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
                alt="Automated ore smelting bay with gantry crane and crucible"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-85"
              />
              <div className="relative z-10 p-3 flex justify-between font-mono text-[10px] bg-gradient-to-b from-black/80 to-transparent">
                <span className="text-[#f25c05] font-bold">FRM 01A</span>
                <span className="text-neutral-300">BAY 04 // POUR</span>
              </div>
              <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 to-transparent font-mono text-[10px] text-neutral-300 uppercase">
                OVERHEAD 120-TON GANTRY CRUCIBLE TRANSFER
              </div>
            </div>

            {/* Frame 2: NARROW (14%) — Pure Vertical Numeral */}
            <div className="w-full lg:w-[14%] bg-white text-black p-4 min-h-[160px] lg:min-h-[260px] flex lg:flex-col items-center justify-between">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">FRM 02B</span>
              <div className="font-black text-4xl lg:text-5xl tracking-tighter uppercase lg:-rotate-90 whitespace-nowrap tabular-nums">
                1,450°C
              </div>
              <span className="font-mono text-[10px] text-[#f25c05] font-bold uppercase">PEAK</span>
            </div>

            {/* Frame 3: MEDIUM (24%) — Editorial Observation */}
            <div className="w-full lg:w-[24%] bg-black text-white p-5 min-h-[220px] lg:min-h-[260px] flex flex-col justify-between">
              <div className="flex justify-between font-mono text-[10px] text-neutral-500">
                <span>FRM 03C</span>
                <span>00:14:09:22</span>
              </div>
              <blockquote className="font-black text-xl uppercase tracking-tight leading-tight my-4">
                "MOLTEN SLAG SKIMS AT SIX METERS PER SECOND WITHOUT THERMAL LOSS."
              </blockquote>
              <div className="font-mono text-[10px] text-[#f25c05] uppercase border-t border-neutral-800 pt-2">
                CHIEF METALLURGIST LOG
              </div>
            </div>

            {/* Frame 4: TINY (10%) — Pure Orange Accent Mass Marker */}
            <div className="w-full lg:w-[10%] bg-[#f25c05] text-black p-3 min-h-[100px] lg:min-h-[260px] flex lg:flex-col items-center justify-between font-mono">
              <span className="text-[10px] font-bold">04D</span>
              <Crosshair className="w-7 h-7 text-black" />
              <span className="text-[10px] font-black uppercase tracking-tighter">CELL-X</span>
            </div>

            {/* Frame 5: MEDIUM-NARROW (18%) — Kilowatt Spec Readout */}
            <div className="w-full lg:w-[18%] bg-[#f5f4f0] text-black p-4 min-h-[200px] lg:min-h-[260px] flex flex-col justify-between font-mono">
              <div className="flex justify-between text-[10px] text-neutral-500 border-b border-black pb-1.5">
                <span>FRM 05E</span>
                <span>48 MW</span>
              </div>
              <div className="space-y-2.5 text-[11px] my-3 tabular-nums">
                <div className="flex justify-between border-b border-neutral-300 pb-1">
                  <span className="text-neutral-500">COIL</span>
                  <span className="font-bold">14.2 KV</span>
                </div>
                <div className="flex justify-between border-b border-neutral-300 pb-1">
                  <span className="text-neutral-500">FLUX</span>
                  <span className="font-bold">2.4 T</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">PURITY</span>
                  <span className="font-bold text-[#f25c05]">99.94%</span>
                </div>
              </div>
              <div className="bg-black text-white text-[9px] text-center py-1 uppercase font-bold">
                END REEL // 07
              </div>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Track */}
          <div
            className="h-6 bg-black border-t-2 border-neutral-800 px-3 flex items-center justify-between overflow-hidden"
            aria-hidden="true"
          >
            {sprockets.map((_, i) => (
              <span key={`bot-${i}`} className="w-3 h-2.5 bg-[#f5f4f0] shrink-0 mx-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
