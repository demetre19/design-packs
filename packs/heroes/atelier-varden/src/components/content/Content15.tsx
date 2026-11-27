import React from 'react';

export function Content15() {
  return (
    <section className="w-full bg-[#16171a] text-[#fafaf8] py-20 lg:py-28 border-b border-stone-800 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400">
                SECTION 15 — THE INVERTED OCULUS VAULT
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#fafaf8]">
              Radial Solar Alignment Study
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#b5482e] tabular-nums">
            APERTURE Ø 3.80 M · ZENITH COMPASS
          </span>
        </div>

        {/* Radial / Circular Composition breaking orthogonal grid */}
        <div className="relative mx-auto max-w-4xl py-6 lg:py-12">
          <div className="relative flex flex-col lg:block lg:h-[580px]">
            {/* Concentric SVG Compass Rings & Radial Spokes (lg+) */}
            <svg
              aria-hidden="true"
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 580"
            >
              <circle cx="400" cy="290" r="250" fill="none" stroke="#2d2f34" strokeWidth="1" />
              <circle cx="400" cy="290" r="185" fill="none" stroke="#3c3f46" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="400" cy="290" r="132" fill="none" stroke="#b5482e" strokeWidth="1" />
              {/* Cardinal Radial Lines */}
              <line x1="400" y1="20" x2="400" y2="560" stroke="#2d2f34" strokeWidth="1" />
              <line x1="120" y1="290" x2="680" y2="290" stroke="#2d2f34" strokeWidth="1" />
              {/* Diagonal Spokes */}
              <line x1="223" y1="113" x2="577" y2="467" stroke="#232529" strokeWidth="1" />
              <line x1="577" y1="113" x2="223" y2="467" stroke="#232529" strokeWidth="1" />
            </svg>

            {/* Central Circular Oculus Photograph */}
            <div className="mx-auto lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 border border-[#b5482e] bg-[#16171a] z-10">
              <div className="w-full h-full rounded-full overflow-hidden border border-stone-700 bg-stone-900">
                <img
                  src="/src/assets/images/varden_courtyard_oculus_1795617062173.jpg"
                  alt="Circular concrete courtyard sky oculus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-[0.8] scale-[1.08]"
                />
              </div>
            </div>

            {/* Radial Perimeter Stations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
              {/* North Bearing 000° */}
              <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-64 bg-[#1d1f23] border border-stone-700 p-4 text-center space-y-1 z-20">
                <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest tabular-nums">
                  000° NORTH · POLAR AXIS
                </div>
                <div className="text-xs font-medium text-[#fafaf8]">Diffuse Ambient Wash</div>
                <p className="text-[11px] font-mono text-stone-400">
                  Zero direct solar glare; calibrated for archival studio drafting.
                </p>
              </div>

              {/* East Bearing 090° */}
              <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-56 bg-[#1d1f23] border border-stone-700 p-4 space-y-1 z-20">
                <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest tabular-nums">
                  090° EAST · DAWN
                </div>
                <div className="text-xs font-medium text-[#fafaf8]">06:15 Raking Arc</div>
                <p className="text-[11px] font-mono text-stone-400">
                  Warm granite reflection warms the morning hearth chamber.
                </p>
              </div>

              {/* South Bearing 180° */}
              <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-64 bg-[#1d1f23] border border-stone-700 p-4 text-center space-y-1 z-20">
                <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest tabular-nums">
                  180° SOUTH · ZENITH
                </div>
                <div className="text-xs font-medium text-[#fafaf8]">Solar Sundial Ring</div>
                <p className="text-[11px] font-mono text-stone-400">
                  Noon beam inscribes seasonal arc across honed basalt paving.
                </p>
              </div>

              {/* West Bearing 270° */}
              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-56 bg-[#1d1f23] border border-stone-700 p-4 space-y-1 z-20">
                <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest tabular-nums">
                  270° WEST · DUSK
                </div>
                <div className="text-xs font-medium text-[#fafaf8]">Thermal Capture</div>
                <p className="text-[11px] font-mono text-stone-400">
                  Beveled drum rim stores late-day warmth inside 400mm walls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
