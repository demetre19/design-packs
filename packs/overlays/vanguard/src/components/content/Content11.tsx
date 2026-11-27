import React from 'react';

export function Content11() {
  return (
    <section
      aria-label="Technical Specimen Datasheet Matrix"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              MATERIAL DATASHEET // SPECIMEN GRID 11
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              ALLOY &amp; COMPOSITE MATRIX VH-X99
            </h2>
          </div>
          <span className="text-[10px] text-zinc-400">BATCH LOT #774-TI // TESTED @ 1,900°C</span>
        </div>

        {/* Irregular Span Datasheet Matrix (6-col desktop grid with 1px hairline gaps) */}
        <div className="bg-[#2a2d35] border border-[#3a3e4c] grid grid-cols-2 md:grid-cols-6 gap-px tabular-nums">
          {/* Cell 1: Large 2x2 Span — Primary Alloy Specimen */}
          <div className="col-span-2 md:row-span-2 bg-[#111318] p-5 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span className="text-[#ff3d00] font-bold">SP-01 // PRIMARY SKIN</span>
              <span>ASTM-F136</span>
            </div>
            <div className="my-4">
              <div className="text-4xl font-black font-sans text-white tracking-tight">
                Ti-6Al-4V
              </div>
              <div className="text-xs text-[#ff3d00] font-bold mt-1">
                SUPERPLASTIC HONEYCOMB CORE
              </div>
            </div>
            <div className="text-[10px] text-zinc-400 border-t border-[#2a2d35] pt-2">
              CREEP LIMIT: 610 °C CONTINUOUS · DENSITY: 4.43 G/CM³
            </div>
          </div>

          {/* Cell 2: Wide 3-col Span — Thermal Metric */}
          <div className="col-span-2 md:col-span-3 bg-[#16181d] p-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-zinc-400 uppercase">NOSE CAP ABLATION RATE</div>
              <div className="text-2xl font-black font-sans text-[#ff3d00] mt-0.5">0.0014 MM/S</div>
            </div>
            <div className="text-right text-[10px] text-zinc-400">
              <div>W-25Re ALLOY</div>
              <div>@ M 4.84</div>
            </div>
          </div>

          {/* Cell 3: Single 1-col Micro Cell */}
          <div className="col-span-1 bg-[#20232a] p-4 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-400">MASS</span>
            <span className="text-xl font-black text-white">14.2 T</span>
          </div>

          {/* Cell 4: Single 1-col Micro Cell */}
          <div className="col-span-1 bg-[#16181d] p-4 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-400">SPAN</span>
            <span className="text-xl font-black text-white">11.2 M</span>
          </div>

          {/* Cell 5: Medium 2-col Span */}
          <div className="col-span-2 bg-[#16181d] p-4 flex flex-col justify-between">
            <div className="text-[10px] text-[#ff3d00] font-bold">SP-02 // LEADING CHINE</div>
            <div className="text-lg font-black font-sans mt-1">C/SiC CERAMIC MATRIX</div>
            <div className="text-[10px] text-zinc-400 mt-1">OXIDATION BARRIER: 1,920 °C</div>
          </div>

          {/* Cell 6: Single 1-col Highlight Cell */}
          <div className="col-span-1 bg-[#ff3d00] text-black p-4 flex flex-col justify-between">
            <span className="text-[10px] font-black">SAFETY</span>
            <span className="text-2xl font-black font-sans">1.55x</span>
          </div>

          {/* Cell 7: Wide 4-col Calibration Note */}
          <div className="col-span-2 md:col-span-4 bg-[#111318] p-4 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-zinc-300 font-bold">
              CRYOGENIC LH2 COOLANT PRESSURE: 42.6 BAR // REGENERATIVE LOOP NOMINAL
            </span>
            <span className="text-[10px] text-[#ff3d00]">CALIBRATION: PASS</span>
          </div>

          {/* Cell 8: 2-col End Block */}
          <div className="col-span-2 bg-[#20232a] p-4 flex items-center justify-between text-xs">
            <span className="text-zinc-400">SHEAR MODULUS</span>
            <span className="font-black text-white">44.0 GPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
