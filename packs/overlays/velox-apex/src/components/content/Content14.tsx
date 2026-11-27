import React from 'react';

export function Content14() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12 border-b border-black pb-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold">
              MUSICAL SCORE CADENCE / SHIFTING MEASURE WIDTHS
            </div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
              THE <span className="text-[#ff2e00]">CASCADE</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-neutral-500 uppercase">
            9/12 · 4/12 · 6/12 · 3/12+7/12
          </div>
        </div>

        {/* Mathematical Rhythm: Wide-Left -> Narrow-Right -> Medium-Center -> Split Stagger */}
        <div className="space-y-10">
          {/* Measure 01: Wide-Left (9/12) */}
          <div className="lg:w-9/12 lg:mr-auto border-t-2 border-black pt-4">
            <div className="flex justify-between font-mono text-[10px] text-[#ff2e00] font-bold mb-2">
              <span>MEASURE M.01 // WIDE-LEFT [75%]</span>
              <span>CHASSIS RIGIDITY</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-3">
              STRESSED-MEMBER BATTERY GEOMETRY
            </h3>
            <p className="font-mono text-xs text-neutral-600 max-w-2xl leading-relaxed">
              Rather than hanging dead battery mass inside a heavy tubular cradle, the 998V titanium-cased cell pack links steering head directly to swingarm pivot.
            </p>
          </div>

          {/* Measure 02: Narrow-Right (4/12) */}
          <div className="lg:w-4/12 lg:ml-auto border-t-2 border-black bg-black text-white p-5">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold mb-2">
              MEASURE M.02 // NARROW-RIGHT [33%]
            </div>
            <div className="text-5xl font-black tracking-tighter leading-none mb-2 tabular-nums">
              +40%
            </div>
            <p className="font-mono text-[11px] text-neutral-300 leading-relaxed">
              Torsional stiffness increase compared against twin-spar aluminum 1000cc superbikes.
            </p>
          </div>

          {/* Measure 03: Medium-Center (6/12) */}
          <div className="lg:w-6/12 lg:mx-auto border-t-2 border-[#ff2e00] pt-4">
            <div className="flex justify-between font-mono text-[10px] text-neutral-500 font-bold mb-2">
              <span>MEASURE M.03 // MEDIUM-CENTER [50%]</span>
              <span className="text-black">NEURAL ECU</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-2">
              5,000 HZ SLIP VECTORING
            </h3>
            <p className="font-mono text-xs text-neutral-600 leading-relaxed">
              Torque adjustments execute every 200 microseconds before rear carcass deformation exceeds peak grip threshold.
            </p>
          </div>

          {/* Measure 04: Tiny-Left + Wide-Right Offset */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 pt-2">
            <div className="lg:w-3/12 border border-black p-4 bg-neutral-50">
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold">M.04A // 25%</div>
              <div className="text-3xl font-black tracking-tighter mt-1">340 KG</div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">PEAK DOWNFORCE</div>
            </div>

            <div className="lg:w-7/12 lg:mt-6 border-t-2 border-black pt-4">
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold mb-1">
                MEASURE M.04B // WIDE-RIGHT OFFSET [58%]
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-2">
                ACTIVE VENTURI BALANCE
              </h3>
              <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                Front biplane foils and underbelly diffuser balance center-of-pressure within 2% across 140–310 km/h speed range.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
