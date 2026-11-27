import React from 'react';

export function Content6() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-12 font-mono text-[10px] uppercase tracking-widest">
          <span>FIELD MONOGRAPH 06 // SUBTERRANEAN METALLURGY</span>
          <span>VOL. XII — ANNOTATED EDITION</span>
        </div>

        {/* Row 1: Passage 1 + Aligned Marginalia Note 01 & Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-neutral-300 items-start">
          {/* Narrow Main Text Column (5 cols ≈ 42%) */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] text-[#f25c05] font-bold uppercase mb-2">
              § 01 — BASALT SHEAR DYNAMICS
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
              ON DEEP CRUST FRACTURE THRESHOLDS.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-800">
              Below eight hundred meters, overburden pressure compresses porphyry granite beyond standard hydraulic shear limits. Conventional percussive bits glaze within forty minutes of continuous contact, requiring complete drill-string extraction unless acoustic frequency modulation is applied directly at the yoke <sup className="font-mono text-[10px] font-bold text-[#f25c05]">[1]</sup>.
            </p>
          </div>

          {/* Hairline Alignment Bridge */}
          <div className="hidden lg:flex lg:col-span-2 items-center pt-12" aria-hidden="true">
            <div className="w-full border-t border-black relative">
              <span className="absolute -top-1 left-0 w-2 h-2 bg-black" />
              <span className="absolute -top-1 right-0 w-2 h-2 bg-[#f25c05]" />
            </div>
          </div>

          {/* Wide Marginalia Column (5 cols) */}
          <aside className="lg:col-span-5 bg-white border-2 border-black p-5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-black pb-2 mb-3 text-[10px] uppercase">
              <span className="font-bold text-[#f25c05]">MARGIN NOTE [01]</span>
              <span className="text-neutral-500">REF: ASTM-D7012</span>
            </div>
            <p className="text-[11px] text-neutral-700 leading-relaxed mb-3">
              Uniaxial compressive strength (UCS) recorded at -840m in Atacama Borehole B-19 reached 312 MPa. Harmonic pulsing at 120 Hz reduces required axial thrust by 31.4%.
            </p>
            <div className="bg-black text-white p-2.5 text-[10px] tabular-nums flex justify-between">
              <span>σ_max = 312 MPa</span>
              <span className="text-[#f25c05]">ΔTHRUST: -31.4%</span>
            </div>
          </aside>
        </div>

        {/* Row 2: Passage 2 + Aligned Core Sample Specimen Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-neutral-300 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] text-[#f25c05] font-bold uppercase mb-2">
              § 02 — CORE SAMPLE ASSAY
            </div>
            <p className="text-sm leading-relaxed text-neutral-800">
              Every three-meter cylindrical core extracted by the DX-4 rig is indexed automatically onto steel inspection trays <sup className="font-mono text-[10px] font-bold text-[#f25c05]">[2]</sup>. High-intensity laser spectroscopy scans sulphide vein continuity prior to dispatching autonomous haulers to the active face.
            </p>
          </div>

          <div className="hidden lg:flex lg:col-span-2 items-center pt-6" aria-hidden="true">
            <div className="w-full border-t border-black relative">
              <span className="absolute -top-1 left-0 w-2 h-2 bg-black" />
              <span className="absolute -top-1 right-0 w-2 h-2 bg-[#f25c05]" />
            </div>
          </div>

          <aside className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-32 h-32 shrink-0 border-2 border-black bg-black overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=800&q=80"
                alt="Extracted cylindrical ore core samples in steel inspection tray"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="font-mono text-[11px] space-y-2">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] uppercase inline-block">
                FIG. 02 // TRAY #07–11
              </span>
              <p className="text-neutral-700 leading-snug">
                Photographed under sodium inspection lamps at Core Shed 4. Chalcopyrite mineralization visible across segments 09 and 10.
              </p>
              <div className="text-[10px] font-bold text-[#f25c05] uppercase">
                ASSAY: 2.84% CU // 0.41 G/T AU
              </div>
            </div>
          </aside>
        </div>

        {/* Row 3: Passage 3 + Aligned Pull-Fragment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] text-[#f25c05] font-bold uppercase mb-2">
              § 03 — THERMAL EQUILIBRIUM
            </div>
            <p className="text-sm leading-relaxed text-neutral-800">
              During primary induction refining, slag viscosity determines copper recovery velocity. Maintaining crucible temperature within a four-degree tolerance band prevents refractory spalling across multi-week continuous pours <sup className="font-mono text-[10px] font-bold text-[#f25c05]">[3]</sup>.
            </p>
          </div>

          <div className="hidden lg:flex lg:col-span-2 items-center pt-6" aria-hidden="true">
            <div className="w-full border-t border-black relative">
              <span className="absolute -top-1 left-0 w-2 h-2 bg-black" />
              <span className="absolute -top-1 right-0 w-2 h-2 bg-[#f25c05]" />
            </div>
          </div>

          <aside className="lg:col-span-5 border-t-4 border-black pt-4">
            <div className="font-mono text-[10px] text-neutral-500 uppercase mb-1">
              MARGIN FRAGMENT [03]
            </div>
            <div className="font-black text-2xl uppercase tracking-tight leading-none">
              "FOUR DEGREES SEPARATES <span className="text-[#f25c05]">PURE BULLION</span> FROM CRUCIBLE FAILURE."
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
