import React from 'react';

export const Content11: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              DATASHEET 11 // MATERIAL & PHYSICAL SPECIMEN MATRIX
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              ALLOY & AGGREGATE PARAMETERS
            </h2>
          </div>
          <span className="font-mono text-xs tabular-nums bg-[#14161a] text-[#ffc72c] px-3 py-1 whitespace-nowrap shrink-0">
            LAB BATCH #2026-SIA
          </span>
        </div>

        {/* Irregular Spanning Hairline Specimen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-[#14161a] border border-[#14161a]">
          {/* Cell 1: Large 3-col x 2-row anchor specimen */}
          <div className="md:col-span-3 md:row-span-2 bg-[#f7f6f3] p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="bg-[#14161a] text-[#ffc72c] px-2 py-0.5 font-bold">SPECIMEN A-01</span>
              <span className="text-[#14161a]/60">EN 10025-6</span>
            </div>
            <div className="my-6">
              <div className="text-5xl md:text-6xl font-extrabold font-mono tracking-tighter">S690QL</div>
              <div className="text-xs font-extrabold uppercase mt-2 tracking-wide">
                QUENCHED & TEMPERED STRUCTURAL STEEL
              </div>
              <p className="text-xs text-[#14161a]/70 mt-2 font-sans leading-relaxed">
                Primary cantilevered box chords and tension pins. Sub-zero impact tested to -40°C for alpine shear exposure.
              </p>
            </div>
            <div className="pt-4 border-t border-[#14161a]/20 grid grid-cols-3 gap-2 font-mono text-[11px] tabular-nums">
              <div>
                <span className="text-[#14161a]/50 block text-[9px]">YIELD</span>
                <span className="font-bold">690 MPa</span>
              </div>
              <div>
                <span className="text-[#14161a]/50 block text-[9px]">ELONGATION</span>
                <span className="font-bold">14.0 %</span>
              </div>
              <div>
                <span className="text-[#14161a]/50 block text-[9px]">DENSITY</span>
                <span className="font-bold">7,850 kg/m³</span>
              </div>
            </div>
          </div>

          {/* Cell 2: 2-col wide metric */}
          <div className="md:col-span-2 bg-[#14161a] text-[#f7f6f3] p-6 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#ffc72c]">SPECIMEN B-04 // CONCRETE</span>
            <div className="text-3xl font-extrabold font-mono tabular-nums my-2">C60/75</div>
            <div className="font-mono text-[11px] text-[#f7f6f3]/75">
              MAGNETITE BALLAST · 2,450 kg/m³ · WATER/CEMENT 0.31
            </div>
          </div>

          {/* Cell 3: 1-col tall diagonal hatch cell */}
          <div
            className="md:col-span-1 bg-[#ffc72c] text-[#14161a] p-4 flex flex-col justify-between"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, rgba(20,22,26,0.12) 0, rgba(20,22,26,0.12) 2px, transparent 2px, transparent 8px)',
            }}
          >
            <span className="font-mono text-[10px] font-bold">AXIS</span>
            <div className="text-3xl font-extrabold font-mono tabular-nums">14°</div>
          </div>

          {/* Cell 4: 1-col compact micro-note */}
          <div className="md:col-span-1 bg-[#f7f6f3] p-4 flex flex-col justify-between font-mono">
            <span className="text-[9px] text-[#14161a]/55 uppercase">CAMBER TOL.</span>
            <span className="text-lg font-extrabold tabular-nums">±0.02</span>
            <span className="text-[10px] text-[#14161a]/70">mm / 10 m</span>
          </div>

          {/* Cell 5: 2-col elastomeric break */}
          <div className="md:col-span-2 bg-[#f7f6f3] p-5 flex flex-col justify-between">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="font-bold">SPECIMEN C-09 // ARAMID BREAK</span>
              <span className="text-[#14161a]/60">U = 0.14</span>
            </div>
            <div className="text-xs font-sans text-[#14161a]/75 mt-2">
              High-compressive thermal isolator preventing cold bridging at cantilever root.
            </div>
          </div>

          {/* Cell 6: 4-col wide acoustic glazing band */}
          <div className="md:col-span-4 bg-[#f7f6f3] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#14161a]/60">
                SPECIMEN D-12 // TRIPLE LOW-IRON ACOUSTIC LAMINATE
              </span>
              <div className="text-xl font-extrabold uppercase mt-1">
                64.2 MM STRUCTURAL CURTAIN WALL GLASS
              </div>
            </div>
            <div className="font-mono text-xs tabular-nums text-right shrink-0">
              <div className="font-bold">Rw = 49 dB</div>
              <div className="text-[#14161a]/60">g-VALUE: 0.28</div>
            </div>
          </div>

          {/* Cell 7: 2-col dark flag */}
          <div className="md:col-span-2 bg-[#14161a] text-[#ffc72c] p-6 flex items-center justify-between font-mono">
            <div>
              <div className="text-[10px] text-[#f7f6f3]/60 uppercase">SEISMIC CLASS</div>
              <div className="text-2xl font-extrabold">ZONE 4 OK</div>
            </div>
            <span className="text-xs border border-[#ffc72c] px-2 py-1">TESTED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
