import React from 'react';

export function Content6() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Monograph Header */}
        <div className="border-b-2 border-black pb-6 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-2">
              ANNOTATED MONOGRAPH / CH. 04 — AEROELASTICITY
            </div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.86]">
              THE MARGIN <span className="text-[#ff2e00]">BOOK</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            42% MAIN COLUMN · 58% ALIGNED MARGINALIA
          </div>
        </div>

        {/* Deliberately Aligned Passage-to-Margin Rows */}
        <div className="space-y-12">
          {/* Row 1: Essay Passage 1 <-> Margin Note [1] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-neutral-900 font-normal">
                <span className="font-black text-3xl float-left mr-3 leading-none">W</span>
                hen a two-wheeled chassis exceeds 260 kilometers per hour, conventional fairing geometry begins generating lift at the steering head rather than load. To counteract front-wheel unloading under full 215 HP acceleration, the V-999 employs a dual-element biplane canard fixed directly into the carbon monocoque bulkhead.<sup className="font-mono text-[10px] font-bold text-[#ff2e00] ml-0.5">[01]</sup>
              </p>
            </div>
            <div className="hidden lg:flex lg:col-span-2 items-center pt-2">
              <div className="w-full h-[1px] bg-black relative">
                <span className="w-1.5 h-1.5 bg-[#ff2e00] block absolute right-0 -top-[2.5px]" />
              </div>
            </div>
            <aside className="lg:col-span-5 border-t border-black pt-2 flex gap-4 items-start">
              <span className="font-mono text-xs font-black text-[#ff2e00] shrink-0">[01]</span>
              <div className="font-mono text-[11px] text-neutral-600 leading-relaxed">
                <div className="font-bold text-black uppercase mb-1">NOTE: FRONT AXLE LOAD DELTA</div>
                Wind tunnel pitot arrays recorded +41.2 kg vertical wheel load at 280 km/h, suppressing wheelie intervention by 74% on Suzuka back straight.
              </div>
            </aside>
          </div>

          {/* Row 2: Essay Passage 2 <-> Cropped Technical Plate + Fig Caption */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-neutral-900">
                Unlike hollow autoclaved wings that flex laterally during rapid chicane transitions, the V-999 foils are compression-molded from chopped forged carbon tow around an aramid honeycomb spar.<sup className="font-mono text-[10px] font-bold text-[#ff2e00] ml-0.5">[02]</sup> Deflection at 64 degrees of lean remains under 0.4 millimeters, preserving predictable steering trail while bleeding vortex drag off the caliper shroud.
              </p>
            </div>
            <div className="hidden lg:flex lg:col-span-2 items-center pt-2">
              <div className="w-full h-[1px] bg-black relative">
                <span className="w-1.5 h-1.5 bg-[#ff2e00] block absolute right-0 -top-[2.5px]" />
              </div>
            </div>
            <aside className="lg:col-span-5 border-t border-black pt-3">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-6 border border-black bg-black overflow-hidden">
                  <img
                    src="/src/assets/images/velox_aero_winglet_1795617079505.jpg"
                    alt="Forged carbon winglet and titanium caliper macro"
                    referrerPolicy="no-referrer"
                    className="w-full h-32 object-cover grayscale contrast-125"
                  />
                </div>
                <div className="col-span-6 font-mono text-[10px] text-neutral-600 leading-relaxed">
                  <span className="text-[#ff2e00] font-bold block mb-1">FIG. 02 — FORGED FOIL</span>
                  11.4° static incidence; 0.38 mm peak tip deflection under 340 kg combined aero load.
                </div>
              </div>
            </aside>
          </div>

          {/* Row 3: Essay Passage 3 <-> Rotated Pull-Fragment + Equation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-neutral-900">
                Every millimeter of trailing-edge wake is channeled downward into the bellypan venturi tunnel, isolating turbulent wheelhouse air from the rear slick contact patch.<sup className="font-mono text-[10px] font-bold text-[#ff2e00] ml-0.5">[03]</sup> Thermal cameras confirm zero boundary-layer separation up to yaw angles of 14 degrees.
              </p>
            </div>
            <div className="hidden lg:flex lg:col-span-2 items-center pt-2">
              <div className="w-full h-[1px] bg-black relative">
                <span className="w-1.5 h-1.5 bg-[#ff2e00] block absolute right-0 -top-[2.5px]" />
              </div>
            </div>
            <aside className="lg:col-span-5 border-t border-black pt-3 flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] text-[#ff2e00] font-bold mb-1">[03] COEFFICIENT EQUILIBRIUM</div>
                <div className="text-3xl font-black tracking-tighter uppercase">
                  Cd·A = 0.214 m²
                </div>
                <div className="font-mono text-[10px] text-neutral-500 mt-1">
                  MEASURED AT SUZUKA WEST STRAIGHT · 2026
                </div>
              </div>
              <div className="bg-black text-white font-mono text-[9px] tracking-[0.25em] uppercase px-2 py-4 [writing-mode:vertical-lr] rotate-180 shrink-0">
                VERIFIED
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
