import React from 'react';

export function Content11() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              DATASHEET 11 // IRREGULAR LABORATORY SPECIMEN MATRIX
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              MATERIALS &amp; ELECTROMAGNETIC SPECIMEN
            </h2>
          </div>
          <span className="font-mono-spec text-[10px] text-neutral-500 hidden sm:block">
            TOLERANCE CLASS // ISO 2768-f
          </span>
        </div>

        {/* Irregular Uneven Cadence Datasheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#272a33] border border-[#272a33] tabular-nums">
          {/* Cell 1: Tall Primary Block (5 cols, 2 rows) */}
          <div className="md:col-span-5 md:row-span-2 bg-[#13151a] p-7 flex flex-col justify-between">
            <div className="flex justify-between font-mono-spec text-[10px]">
              <span className="text-[#ff5a1f] font-bold">SP-01 // STATOR WINDING</span>
              <span className="text-neutral-500">CU-ETP 99.95%</span>
            </div>
            <div className="my-8">
              <div className="font-display font-extrabold text-6xl text-white leading-none">
                18,500
              </div>
              <div className="font-mono-spec text-xs text-[#ff5a1f] mt-2">
                RPM MAXIMUM CONTINUOUS ROTOR SPEED
              </div>
            </div>
            <div className="border-t border-[#272a33] pt-3 flex justify-between font-mono-spec text-[10px] text-neutral-400">
              <span>SLOT FILL FACTOR: 78.4%</span>
              <span>±0.002 MM</span>
            </div>
          </div>

          {/* Cell 2: Medium (4 cols) */}
          <div className="md:col-span-4 bg-[#101114] p-5 flex flex-col justify-between">
            <span className="font-mono-spec text-[10px] text-neutral-500">SP-02 // SEMICONDUCTOR</span>
            <div className="font-display font-extrabold text-2xl text-white mt-3">SiC MOSFET</div>
            <div className="font-mono-spec text-[11px] text-[#ff5a1f] mt-2">1,200 V RATED // 24 KHZ</div>
          </div>

          {/* Cell 3: Narrow (3 cols) */}
          <div className="md:col-span-3 bg-[#16181d] p-5 flex flex-col justify-between">
            <span className="font-mono-spec text-[10px] text-neutral-500">SP-03 // MASS</span>
            <div className="font-mono-spec font-bold text-3xl text-white mt-2">
              182.5 <span className="text-xs text-[#ff5a1f]">KG</span>
            </div>
            <span className="font-mono-spec text-[9px] text-neutral-500 mt-1">DRY HOMOLOGATED</span>
          </div>

          {/* Cell 4: Tiny Split (2 cols) */}
          <div className="md:col-span-2 bg-[#ff5a1f] text-black p-4 flex flex-col justify-between">
            <span className="font-mono-spec text-[9px] font-bold">SP-04</span>
            <div className="font-display font-extrabold text-2xl leading-none mt-2">0.24 Cd</div>
            <span className="font-mono-spec text-[9px] font-bold mt-2">DRAG COEFF</span>
          </div>

          {/* Cell 5: Wide Formula Strip (5 cols) */}
          <div className="md:col-span-5 bg-[#101114] p-5 flex flex-col justify-between">
            <div className="flex justify-between font-mono-spec text-[10px]">
              <span className="text-[#ff5a1f]">SP-05 // SUBFRAME ALLOY</span>
              <span className="text-neutral-500">GRADE 5</span>
            </div>
            <div className="font-mono-spec text-xl font-bold text-white mt-2">
              Ti-6Al-4V <span className="text-xs text-neutral-400 font-normal">TITANIUM TRELLIS</span>
            </div>
            <span className="font-mono-spec text-[10px] text-neutral-500 mt-2">TENSILE: 950 MPA // TIG ARGON PURGED</span>
          </div>

          {/* Cell 6: Wide Bottom Left (7 cols) */}
          <div className="md:col-span-7 bg-[#14161b] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] block">SP-06 // CARBON COMPOSITE MATRIX</span>
              <div className="font-display font-extrabold text-2xl text-white mt-1">TORAYCA T1000G PREPREG</div>
              <span className="font-mono-spec text-[10px] text-neutral-400">24-PLY DIRECTIONAL AUTOCLAVE // 180 °C CURE</span>
            </div>
            <div className="font-mono-spec text-right shrink-0">
              <div className="text-2xl font-bold text-white">6,370 <span className="text-xs text-[#ff5a1f]">MPA</span></div>
              <div className="text-[10px] text-neutral-500">TENSILE MODULUS</div>
            </div>
          </div>

          {/* Cell 7: Medium Bottom Middle (3 cols) */}
          <div className="md:col-span-3 bg-[#101114] p-6 flex flex-col justify-between">
            <span className="font-mono-spec text-[10px] text-neutral-500">SP-07 // COOLANT</span>
            <div className="font-mono-spec text-base font-bold text-white mt-2">ESTER DIELECTRIC</div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] mt-1">42 KV/MM BREAKDOWN</span>
          </div>

          {/* Cell 8: Narrow Bottom Right (2 cols) */}
          <div className="md:col-span-2 bg-[#16181d] p-6 flex flex-col justify-between">
            <span className="font-mono-spec text-[10px] text-neutral-500">SP-08</span>
            <div className="font-mono-spec text-xl font-bold text-[#ff5a1f] mt-2">330 MM</div>
            <span className="font-mono-spec text-[9px] text-neutral-400">CARBON ROTOR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
