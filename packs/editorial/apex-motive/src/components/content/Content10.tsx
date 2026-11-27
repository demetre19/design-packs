import React from 'react';

export function Content10() {
  return (
    <section className="py-24 md:py-32 bg-[#101114] border-b border-[#272a33] text-white relative overflow-hidden">
      {/* Unexpected Left Edge Rotated Timestamp */}
      <div className="hidden md:block absolute left-4 top-10 font-mono-spec text-[10px] text-neutral-500 tracking-widest [writing-mode:vertical-lr] rotate-180">
        WIND TUNNEL RUN 408 // 2026.11.25
      </div>

      {/* Unexpected Top-Right Inverted Tag */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex justify-end mb-4">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest">
            INTERRUPTION 10 // PURE ACOUSTIC SILENCE
          </span>
        </div>

        {/* Enormous Full-Bleed Statement Fragment */}
        <div className="relative select-none">
          <h2 className="font-display font-extrabold text-[15vw] md:text-[126px] lg:text-[152px] leading-[0.82] tracking-tighter text-white">
            ZERO LAG.
          </h2>

          {/* Threading Tiny Annotation Through the Inter-line Gap */}
          <div className="my-2 md:my-3 flex flex-wrap items-center justify-between gap-2 border-y border-[#ff5a1f]/40 py-1.5 px-1 font-mono-spec text-[10px] md:text-xs text-[#ff5a1f]">
            <span>LAT 34.8431° N // SUZUKA SECTOR 02</span>
            <span className="text-white">128 N·M AT 00,000 RPM</span>
            <span>NO CLUTCH // NO DELAY</span>
          </div>

          <div className="font-display font-extrabold text-[15vw] md:text-[126px] lg:text-[152px] leading-[0.82] tracking-tighter text-[#ff5a1f] text-right">
            PURE TORQUE.
          </div>
        </div>

        {/* Bottom-Right Corner Orthogonal Attribution */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <span className="font-mono-spec text-[10px] text-neutral-500 max-w-xs leading-relaxed">
            Statement verified across 18,500 RPM axial-flux bench cycle, Munich Engineering Division.
          </span>
          <span className="font-mono-spec text-[10px] text-neutral-400 border border-[#272a33] px-3 py-1.5 rotate-180 inline-block w-max">
            APEX MOTIVE // V12-R
          </span>
        </div>
      </div>
    </section>
  );
}
