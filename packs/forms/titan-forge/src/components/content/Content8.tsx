import React from 'react';

export function Content8() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <span>FIELD DOSSIER 08 // SURVEY PINBOARD</span>
          <span className="text-[#f25c05] font-bold">UNALIGNED ARTIFACT STACK</span>
        </div>

        {/* Controlled Collision Pinboard Surface */}
        <div
          className="relative border-4 border-black bg-[#eae8e1] p-6 md:p-10 min-h-[640px]"
          style={{
            backgroundImage:
              'radial-gradient(#000000 0.75px, transparent 0.75px)',
            backgroundSize: '20px 20px',
          }}
        >
          {/* Floating Corner Stamp */}
          <div className="inline-block bg-black text-white px-3 py-1 font-mono text-[10px] uppercase mb-6 lg:mb-0 lg:absolute lg:top-6 lg:left-6 z-40">
            BOARD REF: SECTOR 7-ALPHA // FIELD EVIDENCE
          </div>

          {/* Desktop Layered Pinboard / Mobile Staggered Stack */}
          <div className="relative lg:h-[560px] flex flex-col lg:block gap-8">
            {/* Piece 1: Tall Drill Rig Photo (Rotated -2deg, z-10) */}
            <figure className="relative lg:absolute lg:top-8 lg:left-8 lg:w-[300px] bg-white border-4 border-black p-2.5 -rotate-2 z-10">
              {/* Orange Pin Marker */}
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f25c05] border-2 border-black"
                aria-hidden="true"
              />
              <img
                src="https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=800&q=80"
                alt="Vertical diamond core mining drill tower against overcast sky"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover grayscale contrast-125 border border-black"
              />
              <figcaption className="pt-2 font-mono text-[10px] uppercase flex justify-between">
                <span className="font-bold">EXHIBIT A // DX-4 TOWER</span>
                <span className="text-neutral-500">ELEV +42M</span>
              </figcaption>
            </figure>

            {/* Piece 2: Macro Ore Vein Photo (Overlapping center-right, rotated +1.5deg, z-20) */}
            <figure className="relative lg:absolute lg:top-16 lg:left-[290px] lg:w-[390px] bg-white border-4 border-black p-2.5 rotate-1 z-20">
              <span
                className="absolute -top-2 right-8 w-4 h-4 bg-[#f25c05] border-2 border-black"
                aria-hidden="true"
              />
              <img
                src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=800&q=80"
                alt="Fractured subterranean iron ore face with laser survey grid"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover grayscale contrast-125 border border-black"
              />
              <figcaption className="pt-2 font-mono text-[10px] uppercase flex justify-between">
                <span className="font-bold">EXHIBIT B // LASER SURVEY X-420.5</span>
                <span className="text-[#f25c05] font-bold">64.2% FE</span>
              </figcaption>
            </figure>

            {/* Piece 3: Heavy Black Field Note Overlapping Lower Seam (z-30, rotated -1deg) */}
            <div className="relative lg:absolute lg:bottom-4 lg:left-[255px] lg:w-[370px] bg-black text-white border-4 border-[#f25c05] p-6 -rotate-1 z-30">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#f25c05] uppercase mb-3">
                <span>FIELD DISPATCH // #884</span>
                <span>URGENT</span>
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight leading-none mb-3">
                ROCK BOLT SHEAR DETECTED AT Y-1180.3
              </h3>
              <p className="font-mono text-[11px] text-neutral-300 leading-relaxed">
                Autonomous grouting rig dispatched. Laser survey grid locked prior to primary blast wave.
              </p>
            </div>

            {/* Piece 4: Stamped Assay Slip Top Right (z-30, rotated +3deg) */}
            <div className="relative lg:absolute lg:top-6 lg:right-8 lg:w-[270px] bg-[#f5f4f0] border-2 border-black p-5 rotate-2 z-30 font-mono">
              <div className="border-b-2 border-black pb-2 mb-3 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase">ASSAY SLIP</span>
                <span className="bg-[#f25c05] text-black px-1.5 py-0.5 text-[9px] font-black">
                  PASS
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] tabular-nums">
                <div className="flex justify-between">
                  <span className="text-neutral-500">DEPTH</span>
                  <span className="font-bold">-1,180.3 M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">DENSITY</span>
                  <span className="font-bold">4.82 G/CM³</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">MOISTURE</span>
                  <span className="font-bold">0.41%</span>
                </div>
              </div>
            </div>

            {/* Piece 5: Bottom-Right Orange Tape & Coordinate Tag (z-40) */}
            <div className="relative lg:absolute lg:bottom-6 lg:right-10 lg:w-[240px] bg-[#f25c05] text-black border-2 border-black p-4 -rotate-2 z-40 font-mono">
              <div className="text-[9px] font-bold uppercase tracking-widest mb-1">
                SURVEY COORDINATES
              </div>
              <div className="font-sans font-black text-xl tracking-tight leading-none">
                23°45'S // 68°12'W
              </div>
              <div className="text-[10px] mt-2 border-t border-black pt-1 uppercase font-bold">
                ATACAMA BASIN // SECTOR 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
