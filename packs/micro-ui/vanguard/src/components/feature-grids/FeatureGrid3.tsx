import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FEATURE GRID // 03</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            ALTERNATING MEDIA-SPEC <span className="text-[#ff3d00]">ROWS</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] items-center">
            <div className="lg:col-span-5 h-48 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:12px_12px]" />
              <span className="text-xs font-bold text-[#ff3d00]">WIND TUNNEL STAGE A</span>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#ff3d00]">01 // AERODYNAMICS</span>
              <h3 className="text-xl font-black uppercase font-sans">SUPERSONIC SHOCKWAVE MITIGATION</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Computational fluid dynamics simulations validated across 400 wind tunnel sorties at Mach 4+. Boundary layer separation is suppressed using micro-jet vortex generators.
              </p>
              <div className="text-xs text-zinc-400 font-mono">SPEC: MACH 4.5 // REYNOLDS 4.2E7</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] items-center">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <span className="text-xs font-bold text-[#ff3d00]">02 // THERMAL PROTECTION</span>
              <h3 className="text-xl font-black uppercase font-sans">CARBON-SILICON HEAT DISPERSAL</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Active coolant channels circulating through leading-edge titanium ribs absorb and redirect stagnation enthalpy away from the primary cabin structure.
              </p>
              <div className="text-xs text-zinc-400 font-mono">SPEC: 1,800°C STAGNATION LIMIT</div>
            </div>
            <div className="lg:col-span-5 h-48 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:12px_12px]" />
              <span className="text-xs font-bold text-[#ff3d00]">THERMAL MATRIX STAGE B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
