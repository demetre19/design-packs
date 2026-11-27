import React from 'react';
import { CheckSquare, Square } from 'lucide-react';

export function Content11() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-6 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-11 // IRREGULAR SPECIMEN MATRIX // DATASHEET 37599C</span>
          <span className="font-bold">CELLS: A1–F9 // UNEVEN CADENCE</span>
        </div>

        {/* Irregular 12-Column Hairline Matrix */}
        <div className="border-2 border-[#111111] bg-[#f4f4f0] grid grid-cols-1 md:grid-cols-12">
          {/* Cell A1: Wide 5-col */}
          <div className="md:col-span-5 border-b md:border-r border-[#111111] p-4 flex flex-col justify-between bg-[#ffffff]">
            <div className="flex justify-between text-[8px] tracking-widest text-[#555555]">
              <span>CELL A1 // CHASSIS ID</span>
              <span>LOT 044</span>
            </div>
            <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-3">
              VGH-99/K4
            </div>
            <div className="text-[9px] text-[#555555] uppercase mt-2">
              STUTTGART CARBON-TITANIUM PROTOTYPE TUB
            </div>
          </div>

          {/* Cell B1: Narrow 2-col Inverted */}
          <div className="md:col-span-2 border-b md:border-r border-[#111111] p-4 bg-[#111111] text-[#e8e8e6] flex flex-col justify-between">
            <span className="text-[8px] tracking-widest text-[#aaaaaa]">CELL B1</span>
            <div className="text-2xl font-black tabular-nums">1,120</div>
            <span className="text-[8px] tracking-widest">UNIT: KG DRY</span>
          </div>

          {/* Cell C1: Medium 5-col with Swatch Calibration Chips */}
          <div className="md:col-span-5 border-b border-[#111111] p-4 flex flex-col justify-between">
            <div className="flex justify-between text-[8px] tracking-widest text-[#555555] mb-3">
              <span>CELL C1 // SURFACE CHROMATIC STANDARD</span>
              <span>ZERO HUE</span>
            </div>
            <div className="grid grid-cols-5 border border-[#111111] divide-x divide-[#111111] text-[8px] text-center">
              {[
                { hex: '1E1E1E', label: 'INK' },
                { hex: '4D4D4D', label: 'ASH' },
                { hex: '888888', label: 'SLATE' },
                { hex: 'B3B3B3', label: 'FOG' },
                { hex: 'E8E8E6', label: 'PAPER' },
              ].map((sw) => (
                <div key={sw.hex} className="bg-[#ffffff]">
                  <div className="h-6 w-full" style={{ backgroundColor: `#${sw.hex}` }} />
                  <div className="py-1 font-bold">{sw.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cell D1: Tall 3-col spanning 2 rows on desktop */}
          <div className="md:col-span-3 md:row-span-2 border-b md:border-b-0 md:border-r border-[#111111] p-4 flex flex-col justify-between bg-[#e8e8e6]">
            <div>
              <div className="text-[8px] tracking-widest text-[#555555] border-b border-[#111111] pb-1 mb-3">
                CELL D1 // COMPLIANCE
              </div>
              <div className="space-y-2 text-[9px] uppercase">
                <div className="flex items-center justify-between">
                  <span>FIA J.253 ROLL CAGE</span>
                  <CheckSquare className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-between">
                  <span>FT3-1999 FUEL CELL</span>
                  <CheckSquare className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-between">
                  <span>FIRE EXTINGUISH SYS</span>
                  <CheckSquare className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-between text-[#666666]">
                  <span>NIGHT ENDURANCE KIT</span>
                  <Square className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-[#111111]">
              <div className="h-4 w-full bg-[repeating-linear-gradient(45deg,#111111,#111111_4px,#e8e8e6_4px,#e8e8e6_8px)] border border-[#111111]" />
              <div className="text-[8px] tracking-widest mt-1">HIGH VOLTAGE ISOLATED</div>
            </div>
          </div>

          {/* Cell E1: 6-col Middle Wide Readout */}
          <div className="md:col-span-6 border-b md:border-r border-[#111111] p-4 bg-[#ffffff] flex flex-col justify-between">
            <div className="flex justify-between text-[8px] tracking-widest text-[#555555]">
              <span>CELL E1 // SPECIFIC OUTPUT &amp; PEAK REDLINE</span>
              <span>UNIT: KW / RPM</span>
            </div>
            <div className="flex items-baseline gap-4 my-2">
              <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums">
                626.4 KW
              </span>
              <span className="text-xs font-bold text-[#555555] tabular-nums">
                @ 9,200 MIN⁻¹
              </span>
            </div>
            <div className="text-[9px] uppercase text-[#444444]">
              THERMAL EFFICIENCY 41.2% // SHELL V-POWER 102 RON HOMOLOGATED FUEL
            </div>
          </div>

          {/* Cell F1: 3-col Micro-Note */}
          <div className="md:col-span-3 border-b border-[#111111] p-4 flex flex-col justify-between">
            <span className="text-[8px] tracking-widest text-[#555555]">CELL F1 // PRESSURE</span>
            <div className="text-2xl font-black tabular-nums my-1">2.40 BAR</div>
            <span className="text-[8px] uppercase text-[#555555]">PEAK OVERBOOST 2.80 BAR</span>
          </div>

          {/* Cell E2: 4-col */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#111111] p-4 flex flex-col justify-between">
            <span className="text-[8px] tracking-widest text-[#555555]">CELL E2 // WHEELBASE</span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-xl font-black tabular-nums">2,740 MM</span>
              <span className="text-[8px] text-[#555555]">TRACK F/R: 1,680 / 1,645</span>
            </div>
          </div>

          {/* Cell F2: 5-col Barcode & Density */}
          <div className="md:col-span-5 p-4 bg-[#e8e8e6] flex items-center justify-between gap-4">
            <div className="text-[9px] uppercase">
              <div className="font-bold">CELL F2 // DENSITY REF</div>
              <div className="text-[#555555] tabular-nums">CARBON LAYUP: 1,580 KG/M³</div>
            </div>
            <div className="h-7 w-28 shrink-0 bg-[repeating-linear-gradient(90deg,#111,#111_2px,#e8e8e6_2px,#e8e8e6_4px)] border border-[#111111]" />
          </div>
        </div>
      </div>
    </section>
  );
}
