import React from 'react';

export function Content11() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <span>DATASHEET MATRIX 11 // ALLOY &amp; HYDRAULIC SPECIMENS</span>
          <span className="font-bold tabular-nums">DOC: TF-MAT-900</span>
        </div>

        {/* Irregular Uneven Cadence Datasheet Matrix (1px solid black hairline cells) */}
        <div className="bg-black border-2 border-black grid grid-cols-2 md:grid-cols-6 gap-[1px] font-mono">
          {/* Cell 1: Large Dominant Alloy Block (2x2 on desktop) */}
          <div className="col-span-2 md:row-span-2 bg-black text-white p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#f25c05] uppercase tracking-widest block mb-2">
                01 // PRIMARY ALLOY SPECIMEN
              </span>
              <h3 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                4340-CR
              </h3>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800 text-[11px] text-neutral-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-neutral-500">TENSILE</span>
                <span className="font-bold">1,860 MPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">HARDNESS</span>
                <span className="font-bold text-[#f25c05]">HV 1,850</span>
              </div>
            </div>
          </div>

          {/* Cell 2: Wide Header Strip (3 cols) */}
          <div className="col-span-2 md:col-span-3 bg-white p-4 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-neutral-500 uppercase block">CHEMICAL MASS RATIO</span>
              <span className="font-sans font-black text-lg uppercase tracking-tight">
                CHROMIUM-MOLYBDENUM MATRIX
              </span>
            </div>
            <span className="bg-[#f25c05] text-black px-2 py-1 text-[10px] font-black">GRADE A+</span>
          </div>

          {/* Cell 3: Tiny 1x1 Unit */}
          <div className="col-span-1 bg-[#f5f4f0] p-4 flex flex-col justify-between">
            <span className="text-[9px] text-neutral-500 uppercase">CARBON</span>
            <span className="text-2xl font-black tabular-nums">0.42%</span>
          </div>

          {/* Cell 4: 1x1 Unit */}
          <div className="col-span-1 bg-white p-4 flex flex-col justify-between">
            <span className="text-[9px] text-neutral-500 uppercase">NICKEL</span>
            <span className="text-2xl font-black tabular-nums">1.85%</span>
          </div>

          {/* Cell 5: Tall Narrow Vertical Column (1 col, 2 rows on md) */}
          <div className="col-span-1 md:row-span-2 bg-[#f25c05] text-black p-4 flex flex-col justify-between">
            <span className="text-[9px] font-black uppercase tracking-wider">MELT POINT</span>
            <div className="font-sans font-black text-3xl tracking-tighter leading-none my-4 tabular-nums">
              1,510°C
            </div>
            <span className="text-[9px] uppercase font-bold border-t border-black pt-2">
              VACUUM ARC
            </span>
          </div>

          {/* Cell 6: Medium Horizontal Cell (2 cols) */}
          <div className="col-span-2 bg-white p-4 flex flex-col justify-between">
            <div className="flex justify-between items-baseline">
              <span className="text-[9px] text-neutral-500 uppercase">OPERATING HYDRAULIC LOAD</span>
              <span className="text-[9px] font-bold text-[#f25c05]">PEAK</span>
            </div>
            <div className="font-sans font-black text-3xl uppercase tracking-tight tabular-nums mt-2">
              14,000 PSI
            </div>
            <span className="text-[10px] text-neutral-600 mt-1">
              TESTED TO 3.0X SAFETY FACTOR (42,000 PSI BURST)
            </span>
          </div>

          {/* Cell 7: Wide Bottom-Left Footnote Bar (3 cols) */}
          <div className="col-span-2 md:col-span-3 bg-white p-4 flex flex-wrap items-center justify-between gap-2 text-[10px]">
            <span className="font-bold uppercase">CHARPY V-NOTCH IMPACT (-40°C)</span>
            <span className="font-black text-base tabular-nums">94 JOULES</span>
            <span className="text-neutral-500 uppercase">ZERO BRITTLE FRACTURE</span>
          </div>

          {/* Cell 8: 2-col Density Readout */}
          <div className="col-span-2 bg-black text-white p-4 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-neutral-400 uppercase block">BULK DENSITY</span>
              <span className="font-black text-xl tabular-nums text-[#f25c05]">7.85 G/CM³</span>
            </div>
            <span className="text-[9px] border border-neutral-700 px-2 py-1 uppercase">ISO-683</span>
          </div>
        </div>
      </div>
    </section>
  );
}
