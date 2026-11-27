import React from 'react';
import { X, Check } from 'lucide-react';

export function Content5() {
  const legacyFailures = [
    { code: 'ERR-01', issue: 'DIESEL IDLING WASTE', val: '38% FUEL LOSS' },
    { code: 'ERR-02', issue: 'UNSCHEDULED SHAFT SHEAR', val: '14 HRS DOWNTIME / WK' },
    { code: 'ERR-03', issue: 'BLIND OPERATOR BLASTING', val: '19% OVER-DILUTION' },
    { code: 'ERR-04', issue: 'HUMAN SHIFT HANDOVER GAP', val: '2.5 HRS LOST / DAY' },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <span>COLLISION 05 // OPERATIONAL PARADIGM</span>
          <span className="font-bold">LEGACY VS AUTONOMOUS MESH</span>
        </div>

        {/* Opposing Split-Screen Argument Container */}
        <div className="relative border-4 border-black grid grid-cols-1 lg:grid-cols-2">
          {/* Center Collision Seam Badge */}
          <div
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 bg-[#f25c05] border-4 border-black items-center justify-center flex-col font-black leading-none"
            aria-hidden="true"
          >
            <span className="text-2xl tracking-tighter text-black">VS</span>
            <span className="font-mono text-[9px] text-black mt-0.5">01 / 02</span>
          </div>

          {/* LEFT ZONE: Bone-White Sparse Failure Log (Legacy Diesel) */}
          <div className="bg-[#f5f4f0] text-black p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
                SIDE A // OBSOLETE ARCHITECTURE
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 line-through decoration-[#f25c05] decoration-4">
                MANUAL DIESEL FLEETS
              </h2>
              <p className="font-mono text-xs text-neutral-600 uppercase leading-relaxed mb-8 max-w-md">
                Fragmented human-piloted machinery operating without acoustic telemetry or cross-basin synchronization.
              </p>

              {/* Sparse Stripped Failure List (Left-aligned, airy) */}
              <div className="space-y-4 font-mono">
                {legacyFailures.map((item) => (
                  <div
                    key={item.code}
                    className="border-b border-black pb-3 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <X className="w-4 h-4 text-neutral-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-neutral-500 block">{item.code}</span>
                        <span className="text-xs font-bold uppercase">{item.issue}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-500 tabular-nums text-right">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-neutral-300 font-mono text-[10px] uppercase text-neutral-500">
              NET EXTRACTION EFFICIENCY: 61.2% // DEPRECATED
            </div>
          </div>

          {/* Mobile VS Divider */}
          <div className="lg:hidden bg-[#f25c05] text-black py-2 px-4 font-black text-center uppercase tracking-widest text-sm border-b-4 border-black">
            COLLISION // LEGACY VS TITAN MESH
          </div>

          {/* RIGHT ZONE: Solid Black Dense Blocky Proof (Titan Neural Mesh) */}
          <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#f25c05] mb-3">
                SIDE B // TITAN FORGE STANDARD
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                NEURAL GRID <span className="text-[#f25c05]">MASS</span>
              </h2>

              {/* Completely Different Internal Layout: Blocky Mass Readout */}
              <div className="bg-neutral-900 border-2 border-neutral-700 p-5 mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase">
                    CONTINUOUS THROUGHPUT GAIN
                  </span>
                  <span className="font-mono text-xs text-[#f25c05] font-bold">+340%</span>
                </div>
                <div className="w-full h-3 bg-neutral-800 overflow-hidden">
                  <div className="w-[94%] h-full bg-[#f25c05]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-[#f25c05] text-black p-4">
                  <Check className="w-4 h-4 mb-2" />
                  <div className="font-black text-lg leading-none mb-1">24/7/365</div>
                  <div className="text-[10px] uppercase font-bold">ZERO SHIFT GAPS</div>
                </div>
                <div className="border-2 border-white p-4">
                  <Check className="w-4 h-4 text-[#f25c05] mb-2" />
                  <div className="font-black text-lg leading-none mb-1">0.04 MS</div>
                  <div className="text-[10px] uppercase text-neutral-400">FIBER LOCK</div>
                </div>
                <div className="col-span-2 border border-neutral-700 p-4 flex items-center justify-between">
                  <span className="text-[11px] uppercase text-neutral-300">
                    ACOUSTIC FRACTURE PREVENTION
                  </span>
                  <span className="text-[#f25c05] font-black">99.98% UPTIME</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-neutral-800 font-mono text-[10px] uppercase text-[#f25c05] flex justify-between">
              <span>NET EXTRACTION EFFICIENCY: 99.4%</span>
              <span>ISO-9001 VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
