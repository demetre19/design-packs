import React from 'react';

export function Content4() {
  return (
    <section
      aria-label="X-99 Spectre Exploded Diagram"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2a2d35] pb-4 mb-10">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              SCHEMATIC PLATE // EXPLODED 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              X-99A AIRFRAME STATION CALLOUTS
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400 tabular-nums">
            DWG NO: VH-X99-004 // SCALE 1:48
          </span>
        </div>

        {/* Desktop Exploded Diagram Stage */}
        <div className="relative bg-[#111318] border border-[#2a2d35] p-6 lg:p-10">
          <div className="hidden lg:block relative h-[480px]">
            {/* Central Visual Plate + SVG Leader Lines */}
            <svg
              viewBox="0 0 1000 460"
              className="w-full h-full"
              role="img"
              aria-label="Exploded technical schematic of Vanguard X-99 Spectre aircraft with five subsystem leader lines"
            >
              {/* Coordinate Grid */}
              <defs>
                <pattern id="exploded-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22252e" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect x="210" y="60" width="580" height="320" fill="url(#exploded-grid)" stroke="#2a2d35" />

              {/* Concentric Radar/Range Arcs */}
              <circle cx="500" cy="220" r="140" fill="none" stroke="#2a2d35" strokeDasharray="3 5" />
              <circle cx="500" cy="220" r="210" fill="none" stroke="#22252e" />

              {/* Central Aircraft Vector Silhouette (Top-down Delta Planform) */}
              <g transform="translate(500, 220)">
                {/* Main Fuselage & Blended Delta Wing */}
                <polygon
                  points="0,-135 22,-70 115,65 115,92 32,75 18,118 -18,118 -32,75 -115,92 -115,65 -22,-70"
                  fill="#20232a"
                  stroke="#e4e4e7"
                  strokeWidth="1.5"
                />
                {/* Center Spine & Chines */}
                <line x1="0" y1="-135" x2="0" y2="118" stroke="#3a3e4c" strokeWidth="1" />
                <polygon points="0,-95 11,-45 11,45 -11,45 -11,-45" fill="#16181d" stroke="#ff3d00" strokeWidth="1.2" />
                {/* Twin Cantilever Vertical Stabilizers */}
                <line x1="-38" y1="35" x2="-48" y2="96" stroke="#ff3d00" strokeWidth="2" />
                <line x1="38" y1="35" x2="48" y2="96" stroke="#ff3d00" strokeWidth="2" />
                {/* Exhaust Nozzle Glow Ring */}
                <rect x="-15" y="114" width="30" height="7" fill="#ff3d00" />
              </g>

              {/* Leader Line 1: Top-Left -> Nose Stagnation Cone (500, 92) */}
              <polyline points="215,52 380,52 496,92" fill="none" stroke="#ff3d00" strokeWidth="1.2" />
              <circle cx="496" cy="92" r="3.5" fill="#ff3d00" />

              {/* Leader Line 2: Mid-Left -> Port Leading-Edge Carbon Matrix (418, 232) */}
              <polyline points="215,232 418,232" fill="none" stroke="#ff3d00" strokeWidth="1.2" />
              <circle cx="418" cy="232" r="3.5" fill="#ff3d00" />

              {/* Leader Line 3: Top-Right -> Dorsal Cockpit/Avionics Spine (511, 165) */}
              <polyline points="785,68 640,68 511,165" fill="none" stroke="#ff3d00" strokeWidth="1.2" />
              <circle cx="511" cy="165" r="3.5" fill="#ff3d00" />

              {/* Leader Line 4: Mid-Right -> Starboard Cantilever Fin (546, 295) */}
              <polyline points="785,255 660,255 546,295" fill="none" stroke="#ff3d00" strokeWidth="1.2" />
              <circle cx="546" cy="295" r="3.5" fill="#ff3d00" />

              {/* Leader Line 5: Bottom-Center -> Scramjet SERN Exhaust (500, 338) */}
              <polyline points="500,338 500,408 545,408" fill="none" stroke="#ff3d00" strokeWidth="1.2" />
              <circle cx="500" cy="338" r="3.5" fill="#ff3d00" />
            </svg>

            {/* Positioned Annotation Callouts */}
            <div className="absolute top-3 left-0 w-52 bg-[#16181d] border border-[#3a3e4c] p-3">
              <div className="text-[10px] text-[#ff3d00] font-bold">STA-012 // NOSE CONE</div>
              <div className="text-xs font-extrabold uppercase mt-0.5">TUNGSTEN-RHENIUM PROBE</div>
              <div className="text-[10px] text-zinc-400 mt-1 tabular-nums">PEAK: 1,920 °C @ M 4.84</div>
            </div>

            <div className="absolute top-[198px] left-0 w-52 bg-[#16181d] border border-[#3a3e4c] p-3">
              <div className="text-[10px] text-[#ff3d00] font-bold">STA-184 // PORT CHINE</div>
              <div className="text-xs font-extrabold uppercase mt-0.5">C/SiC LEADING EDGE</div>
              <div className="text-[10px] text-zinc-400 mt-1 tabular-nums">ACTIVE LH2 COOLING DUCTS</div>
            </div>

            <div className="absolute top-5 right-0 w-52 bg-[#16181d] border border-[#3a3e4c] p-3">
              <div className="text-[10px] text-[#ff3d00] font-bold">STA-095 // DORSAL BAY</div>
              <div className="text-xs font-extrabold uppercase mt-0.5">INERTIAL IMU + TELEMETRY</div>
              <div className="text-[10px] text-zinc-400 mt-1 tabular-nums">DRIFT: 0.008 NM/HR</div>
            </div>

            <div className="absolute top-[220px] right-0 w-52 bg-[#16181d] border border-[#3a3e4c] p-3">
              <div className="text-[10px] text-[#ff3d00] font-bold">STA-290 // STABILIZER</div>
              <div className="text-xs font-extrabold uppercase mt-0.5">CANTILEVER TITANIUM FIN</div>
              <div className="text-[10px] text-zinc-400 mt-1 tabular-nums">CANT ANGLE: 18.5° OUT</div>
            </div>

            <div className="absolute bottom-2 left-[54.5%] w-64 bg-[#16181d] border border-[#ff3d00]/60 p-3">
              <div className="text-[10px] text-[#ff3d00] font-bold">STA-340 // NOZZLE EXIT</div>
              <div className="text-xs font-extrabold uppercase mt-0.5">SERN SCRAMJET EXHAUST</div>
              <div className="text-[10px] text-zinc-400 mt-1 tabular-nums">EXHAUST VEL: 3,420 M/S</div>
            </div>
          </div>

          {/* Mobile Compact Schematic Fallback */}
          <div className="lg:hidden space-y-4">
            <div className="border border-[#2a2d35] bg-[#16181d] p-4 text-center">
              <div className="text-[10px] text-[#ff3d00] font-bold mb-2">X-99A PLANFORM STATIONS</div>
              <div className="text-xs text-zinc-300">STA-012 NOSE CONE → STA-340 SERN EXHAUST</div>
            </div>
            {[
              ['STA-012', 'TUNGSTEN-RHENIUM PROBE', '1,920 °C @ M 4.84'],
              ['STA-095', 'INERTIAL IMU + TELEMETRY', 'DRIFT: 0.008 NM/HR'],
              ['STA-184', 'C/SiC LEADING EDGE', 'ACTIVE LH2 COOLING DUCTS'],
              ['STA-290', 'CANTILEVER TITANIUM FIN', 'CANT ANGLE: 18.5° OUT'],
              ['STA-340', 'SERN SCRAMJET EXHAUST', 'EXHAUST VEL: 3,420 M/S'],
            ].map(([sta, title, val]) => (
              <div key={sta} className="border border-[#3a3e4c] bg-[#16181d] p-3 flex justify-between items-center text-xs">
                <div>
                  <span className="text-[#ff3d00] font-bold mr-2">{sta}</span>
                  <span className="font-bold">{title}</span>
                </div>
                <span className="text-[10px] text-zinc-400 tabular-nums">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
