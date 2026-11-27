import React from 'react';

export function Content6() {
  return (
    <section
      aria-label="Flight Test Dossier Margin Book"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-[#2a2d35] pb-4 mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              TECHNICAL MONOGRAPH // MARGIN BOOK 06
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              BOUNDARY LAYER TRANSITION AT MACH 4.8
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400">FOLIO 18 // ANNOTATED EDITION</span>
        </div>

        {/* Narrow Main Column (5 cols ~42%) + Wide Marginalia Lane (7 cols ~58%) */}
        <div className="space-y-10">
          {/* Passage 1 + Aligned Margin Note */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 text-sm text-zinc-200 font-sans leading-relaxed">
              <span className="font-mono text-xs text-[#ff3d00] font-bold mr-2">§1.0</span>
              During high-Mach atmospheric penetration, laminar airflow over the forward chine experiences abrupt shear instability roughly 1.4 meters aft of the nose pitot stagnation cone. Left unmanaged, premature transition multiplies convective skin heating by a factor of 3.6 across the dorsal spine.
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#2a2d35] flex items-start gap-4">
              <span className="text-[10px] font-black text-[#ff3d00] tabular-nums shrink-0 pt-0.5">
                [M.01]
              </span>
              <div className="flex-1 bg-[#111318] border border-[#2a2d35] p-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                    REYNOLDS TRANSITION THRESHOLD
                  </div>
                  <div className="text-xs text-zinc-200 mt-0.5">
                    Re<sub>θ</sub> = 4.18 × 10⁷ · Measured on Sortie S-06
                  </div>
                </div>
                <svg width="84" height="32" viewBox="0 0 84 32" aria-hidden="true" className="shrink-0">
                  <polyline
                    points="2,28 24,26 42,20 56,8 82,4"
                    fill="none"
                    stroke="#ff3d00"
                    strokeWidth="1.5"
                  />
                  <circle cx="42" cy="20" r="2.5" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>

          {/* Passage 2 + Aligned Schlieren Mini-Plate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 text-sm text-zinc-200 font-sans leading-relaxed">
              <span className="font-mono text-xs text-[#ff3d00] font-bold mr-2">§1.1</span>
              To anchor the oblique shock wave cleanly along the inlet cowl lip, Vanguard engineers sculpted a compound cranked-arrow leading edge. Schlieren wind-tunnel plates confirm zero bow-shock detachment across pitch angles from -2° to +9°.
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#2a2d35] flex items-start gap-4">
              <span className="text-[10px] font-black text-[#ff3d00] tabular-nums shrink-0 pt-0.5">
                [M.02]
              </span>
              <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-4">
                <div
                  className="w-full sm:w-44 h-20 border border-[#3a3e4c] relative overflow-hidden shrink-0"
                  style={{
                    background:
                      'radial-gradient(circle at 22% 50%, rgba(255,61,0,0.35), transparent 55%), linear-gradient(135deg, #1b1e26 0%, #0d0f13 100%)',
                  }}
                >
                  <svg viewBox="0 0 180 80" className="w-full h-full" aria-hidden="true">
                    <line x1="18" y1="40" x2="165" y2="10" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
                    <line x1="18" y1="40" x2="165" y2="70" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
                    <polygon points="18,40 130,28 130,52" fill="#20232a" stroke="#ff3d00" strokeWidth="1" />
                  </svg>
                </div>
                <div className="text-[11px] text-zinc-400 leading-relaxed">
                  <div className="text-white font-bold">FIG 4.2 — SCHLIEREN CAPTURE WT-19</div>
                  Mach 4.80 shock cone attachment at 14.2° half-angle wedge. Zero cowl spillage.
                </div>
              </div>
            </div>
          </div>

          {/* Passage 3 + Aligned Pull-Fragment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 text-sm text-zinc-200 font-sans leading-relaxed">
              <span className="font-mono text-xs text-[#ff3d00] font-bold mr-2">§1.2</span>
              Sub-skin liquid hydrogen manifolds act as both endothermic fuel pre-heaters and primary structural sinks. By routing cryogenic flow directly beneath the titanium honeycomb ribs, peak surface temperatures remain 240°C below alloy creep limits.
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#2a2d35] flex items-start gap-4">
              <span className="text-[10px] font-black text-[#ff3d00] tabular-nums shrink-0 pt-0.5">
                [M.03]
              </span>
              <blockquote className="text-base font-sans font-bold text-white border-t border-[#ff3d00] pt-2 max-w-md">
                "Thermal soak never exceeded 1,680°C even during fourteen continuous minutes at FL650."
                <span className="block font-mono text-[10px] text-zinc-400 font-normal mt-1">
                  — DR. E. ROSTOVA, PROPULSION DEBRIEF S-09
                </span>
              </blockquote>
            </div>
          </div>

          {/* Passage 4 + Aligned Formula Reference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 text-sm text-zinc-200 font-sans leading-relaxed">
              <span className="font-mono text-xs text-[#ff3d00] font-bold mr-2">§1.3</span>
              Post-flight ultrasonic inspection of all twenty-four C/SiC leading-edge segments confirmed zero micro-fracture propagation following rapid stratospheric descent and subsonic flare at Edwards Runway 04L.
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#2a2d35] flex items-start gap-4">
              <span className="text-[10px] font-black text-[#ff3d00] tabular-nums shrink-0 pt-0.5">
                [M.04]
              </span>
              <div className="text-xs text-zinc-300 tabular-nums">
                <span className="text-[#ff3d00] font-bold">NDT VERIFICATION:</span> 24/24 SEGMENTS CLEAR · ULTRASONIC ATTENUATION &lt; 0.4 dB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
