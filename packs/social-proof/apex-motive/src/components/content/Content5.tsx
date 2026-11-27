import React from 'react';
import { Minus, Zap } from 'lucide-react';

export function Content5() {
  return (
    <section className="bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8 flex justify-between items-end">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest">
            ARGUMENT 05 // PROPULSION COLLISION
          </span>
          <span className="font-mono-spec text-[10px] text-neutral-500">
            SUZUKA THERMAL &amp; TORQUE AUDIT
          </span>
        </div>

        {/* Opposing Split-Screen Zones with Center Seam */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border border-[#272a33]">
          {/* Center Seam Collision Element */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="bg-[#ff5a1f] text-black font-display font-extrabold text-2xl px-3 py-4 tracking-tighter border-2 border-[#101114]">
              VS
            </div>
          </div>

          {/* LEFT ZONE: High-Contrast Light Technical Paper — Legacy ICE */}
          <div className="bg-[#e8eaee] text-[#101114] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#101114]/20 pb-3 mb-8 font-mono-spec text-[10px]">
                <span className="font-bold">SIDE A // LEGACY COMBUSTION</span>
                <span className="text-neutral-600">1,000CC 4-STROKE</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-none mb-6">
                THERMAL WASTE &amp; RECIPROCATING DRAG
              </h3>

              {/* Dense failure-mode monospace log list */}
              <div className="font-mono-spec text-xs space-y-4 border-t border-[#101114]/20 pt-5">
                <div className="flex items-start justify-between gap-4 border-b border-[#101114]/10 pb-3">
                  <div>
                    <span className="font-bold block">68.0% ENERGY LOST AS HEAT</span>
                    <span className="text-[11px] text-neutral-600">Radiator drag + exhaust enthalpy bleed</span>
                  </div>
                  <Minus size={14} className="shrink-0 mt-1 text-neutral-600" />
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#101114]/10 pb-3">
                  <div>
                    <span className="font-bold block">240+ MOVING WEAR COMPONENTS</span>
                    <span className="text-[11px] text-neutral-600">Valvetrain, pistons, wet multi-plate clutch</span>
                  </div>
                  <Minus size={14} className="shrink-0 mt-1 text-neutral-600" />
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#101114]/10 pb-3">
                  <div>
                    <span className="font-bold block">TORQUE BAND DELAY TO 9,500 RPM</span>
                    <span className="text-[11px] text-neutral-600">Gearbox interruptions break rear tire traction</span>
                  </div>
                  <Minus size={14} className="shrink-0 mt-1 text-neutral-600" />
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-[#101114]/20 font-mono-spec text-[11px] flex justify-between text-neutral-700">
              <span>PEAK EFFICIENCY</span>
              <span className="font-bold line-through">32.0 % THERMAL</span>
            </div>
          </div>

          {/* Mobile Seam */}
          <div className="lg:hidden bg-[#ff5a1f] text-black font-display font-extrabold text-center py-2 text-sm tracking-widest">
            VS // COLLISION AUDIT
          </div>

          {/* RIGHT ZONE: Deep Graphite — 800V Axial Flux (Completely different internal layout) */}
          <div className="bg-[#101114] text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#272a33] pb-3 mb-8 font-mono-spec text-[10px]">
                <span className="text-[#ff5a1f] font-bold flex items-center gap-1.5">
                  <Zap size={12} /> SIDE B // APEX 800V AXIAL FLUX
                </span>
                <span className="text-neutral-500">APEX-V12 R</span>
              </div>

              {/* Bold stepped typographic callouts + live torque bar traces */}
              <div className="space-y-7">
                <div>
                  <div className="flex justify-between font-mono-spec text-[10px] text-neutral-400 mb-1.5">
                    <span>INVERTER + STATOR EFFICIENCY</span>
                    <span className="text-[#ff5a1f] font-bold">99.4 %</span>
                  </div>
                  <div className="h-3 bg-[#16181d] border border-[#272a33]">
                    <div className="h-full bg-[#ff5a1f] w-[99.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono-spec text-[10px] text-neutral-400 mb-1.5">
                    <span>INSTANTANEOUS TORQUE AT 0 RPM</span>
                    <span className="text-[#ff5a1f] font-bold">128 N·M</span>
                  </div>
                  <div className="h-3 bg-[#16181d] border border-[#272a33]">
                    <div className="h-full bg-white w-[92%]" />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#272a33]">
                  <div className="font-display font-extrabold text-4xl md:text-5xl text-white leading-none">
                    1 ROTATING <span className="text-[#ff5a1f]">ASSEMBLY.</span>
                  </div>
                  <p className="font-mono-spec text-xs text-neutral-400 mt-3 leading-relaxed">
                    Direct-drive electromagnetic flux eliminates pistons, valves, clutch packs, and shift-cut traction spikes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-[#272a33] font-mono-spec text-[11px] flex justify-between">
              <span className="text-neutral-500">0–100 KM/H DELTA</span>
              <span className="text-[#ff5a1f] font-bold">2.14 SEC // -0.48S FASTER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
