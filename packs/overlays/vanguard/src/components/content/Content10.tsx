import React from 'react';

export function Content10() {
  return (
    <section
      aria-label="Typographic Interruption Statement"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-20 px-4 lg:px-8 relative overflow-hidden"
    >
      {/* Top-Right Corner Coordinate Stamp */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 tracking-[0.25em] border-b border-[#2a2d35] pb-3 mb-8">
          <span className="text-[#ff3d00] font-bold">INTERRUPT // 10</span>
          <span className="tabular-nums">37°14&apos;06&quot;N · 115°48&apos;40&quot;W</span>
        </div>

        {/* Enormous Full-Bleed Statement Fragment */}
        <div className="relative py-4 xl:pl-10">
          {/* Rotated Margin Attribution in Dedicated Left Gutter */}
          <div
            aria-hidden="true"
            className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.28em] text-zinc-400 whitespace-nowrap"
          >
            SORTIE S-09 // M 4.84
          </div>

          <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(3rem,8.5vw,7.75rem)] leading-[0.86] text-white select-none">
            THERMAL <br />
            BARRIER <span className="text-[#ff3d00]">BREACHED</span>
          </h2>

          {/* Annotation Threading Directly Across the Lower Baseline */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#ff3d00] pt-4">
            <div className="text-xs text-zinc-200 max-w-lg font-sans">
              Fourteen continuous minutes above Mach 4.80 across the Nevada Test &amp; Training Range without structural creep or combustor unstart.
            </div>
            <div className="text-right tabular-nums">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                STAGNATION TEMP RECORDED
              </div>
              <div className="text-xl font-black text-[#ff3d00]">1,920 °C // VERIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
