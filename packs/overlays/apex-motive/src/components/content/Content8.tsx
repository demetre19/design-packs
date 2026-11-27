import React, { useState } from 'react';
import { Pin, Crosshair } from 'lucide-react';

export function Content8() {
  const [frontId, setFrontId] = useState<string>('plate');

  const getZ = (id: string, base: number) => (frontId === id ? 40 : base);

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              ARCHIVE 08 // CONTROLLED COLLISION PINBOARD
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              MUNICH LAB FIELD ARTIFACTS
            </h2>
          </div>
          <span className="font-mono-spec text-[10px] text-neutral-400">
            CLICK ANY LAYERED SPECIMEN TO BRING FORWARD
          </span>
        </div>

        {/* Pinboard Stage */}
        <div className="relative bg-carbon border border-[#272a33] p-6 md:p-10 min-h-[580px] flex flex-col lg:block gap-6">
          {/* Corner Crosshairs */}
          <Crosshair size={14} className="hidden lg:block absolute top-4 left-4 text-neutral-600" />
          <Crosshair size={14} className="hidden lg:block absolute bottom-4 right-4 text-neutral-600" />

          {/* Piece 1: Large Dark Gradient Specimen Plate (Slightly tilted -2deg) */}
          <button
            type="button"
            onClick={() => setFrontId('plate')}
            style={{ zIndex: getZ('plate', 10) }}
            className={`text-left lg:absolute lg:top-10 lg:left-8 lg:w-[440px] bg-gradient-to-br from-[#1d2028] via-[#14161b] to-[#0c0d10] border p-6 transition-transform cursor-pointer lg:-rotate-2 ${
              frontId === 'plate' ? 'border-[#ff5a1f] scale-[1.01]' : 'border-[#272a33]'
            }`}
          >
            <div className="flex justify-between items-center font-mono-spec text-[10px] mb-4">
              <span className="text-[#ff5a1f] font-bold">FIG A.1 // CARBON AUTOCLAVE SAMPLE</span>
              <Pin size={12} className="text-[#ff5a1f]" />
            </div>
            <div className="h-44 border border-[#272a33] bg-[#101114]/80 p-4 flex flex-col justify-between">
              <div className="font-mono-spec text-[10px] text-neutral-500">WEAVE: T1000G 12K TWILL</div>
              <div className="font-display font-extrabold text-3xl text-white">7.20 KG MONOCOQUE</div>
              <div className="font-mono-spec text-[10px] text-[#ff5a1f]">CURED 6.5 BAR // 180 °C</div>
            </div>
            <div className="mt-3 font-mono-spec text-[10px] text-neutral-400">
              CAPTION: Ultrasonic void scan passed 0.00% delamination.
            </div>
          </button>

          {/* Piece 2: Overlapping Telemetry Slip (Tilted +2deg, shifted clear of plate center) */}
          <button
            type="button"
            onClick={() => setFrontId('slip')}
            style={{ zIndex: getZ('slip', 20) }}
            className={`text-left lg:absolute lg:top-12 lg:left-[445px] lg:w-[340px] bg-[#e7e8ec] text-[#101114] border-2 p-5 transition-transform cursor-pointer lg:rotate-2 ${
              frontId === 'slip' ? 'border-[#ff5a1f] scale-[1.02]' : 'border-[#272a33]'
            }`}
          >
            <div className="flex justify-between items-center font-mono-spec text-[10px] border-b border-[#101114]/20 pb-2 mb-3">
              <span className="font-bold">SLIP 04 // DYNO PRINTOUT</span>
              <span className="bg-[#ff5a1f] text-black px-1.5 py-0.5 font-bold">PINNED</span>
            </div>
            <div className="font-mono-spec text-xs space-y-1.5 tabular-nums">
              <div className="flex justify-between"><span>PEAK SHAFT KW</span><strong>117.4</strong></div>
              <div className="flex justify-between"><span>MAX RPM</span><strong>18,500</strong></div>
              <div className="flex justify-between"><span>STATOR TEMP</span><strong>79.4 °C</strong></div>
              <div className="flex justify-between"><span>BUS VOLTAGE</span><strong>824.1 V</strong></div>
            </div>
            <div className="mt-4 pt-2 border-t border-[#101114]/20 font-mono-spec text-[10px] text-neutral-600">
              CAPTION: Raw telemetry strip signed Bay 04.
            </div>
          </button>

          {/* Piece 3: Orange Tape Marker Card (Bottom-left overlap) */}
          <button
            type="button"
            onClick={() => setFrontId('note')}
            style={{ zIndex: getZ('note', 30) }}
            className={`text-left lg:absolute lg:bottom-10 lg:left-24 lg:w-[360px] bg-[#16181d] border p-6 transition-transform cursor-pointer lg:rotate-1 ${
              frontId === 'note' ? 'border-[#ff5a1f] scale-[1.02]' : 'border-[#272a33]'
            }`}
          >
            <div className="w-14 h-2 bg-[#ff5a1f] mb-3" />
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] block">MEMO 09 // PILOT FEEDBACK</span>
            <p className="font-display font-extrabold text-xl text-white mt-2 leading-tight">
              “BRAKE MARKERS MOVED 18M DEEPER INTO TURN 1.”
            </p>
            <span className="font-mono-spec text-[10px] text-neutral-400 mt-3 block">
              CAPTION: GP4-RR + 94 kW regen blend log.
            </span>
          </button>

          {/* Piece 4: Tall Right Blueprint Tag (-rotate-2) */}
          <button
            type="button"
            onClick={() => setFrontId('blueprint')}
            style={{ zIndex: getZ('blueprint', 25) }}
            className={`text-left lg:absolute lg:bottom-8 lg:right-8 lg:w-[320px] bg-[#13151a] border p-5 transition-transform cursor-pointer lg:-rotate-2 ${
              frontId === 'blueprint' ? 'border-[#ff5a1f] scale-[1.02]' : 'border-[#272a33]'
            }`}
          >
            <div className="flex justify-between font-mono-spec text-[10px] text-neutral-400 mb-3">
              <span className="text-[#ff5a1f] font-bold">PLATE 12 // WINGLET</span>
              <span>CAD REV 4</span>
            </div>
            <div className="border border-dashed border-[#272a33] p-4 font-mono-spec text-xs text-neutral-300 space-y-2">
              <div>CHORD: 142 MM</div>
              <div>SWEEP: 18.0° ACTIVE</div>
              <div>DOWNFORCE: 48.2 KGF @ 250</div>
            </div>
            <span className="font-mono-spec text-[10px] text-neutral-500 mt-3 block">
              CAPTION: Wind tunnel smoke trace #44.
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
