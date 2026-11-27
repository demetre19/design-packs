import React from 'react';

export function Testimonial1() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute -top-10 -left-10 text-[16vw] font-black text-white/[0.03] pointer-events-none select-none font-sans">
          01
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 sm:p-12 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative z-10 space-y-6">
          <div className="flex items-center space-x-2 text-xs text-[#ff3d00] font-bold">
            <span>PILOT DEBRIEF // SORTIE S-04</span>
          </div>
          <blockquote className="text-xl sm:text-2xl font-bold font-sans tracking-tight leading-relaxed">
            "At Mach 3.8 over the Mojave range, the Vanguard X-99 stable-locks instantly. Thermal boundary friction is neutralized by the carbon-silicon skin matrix."
          </blockquote>
          <div className="flex items-center justify-between border-t border-[#3a3e4c] pt-6 text-xs">
            <div>
              <div className="font-extrabold uppercase">COL. MARCUS VANCE</div>
              <div className="text-zinc-400">CHIEF TEST PILOT // VANGUARD AEROSPACE</div>
            </div>
            <div className="text-[#ff3d00] font-mono font-bold">FL580 // M 3.84</div>
          </div>
        </div>
      </div>
    </section>
  );
}
