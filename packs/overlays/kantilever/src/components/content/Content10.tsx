import React from 'react';

export const Content10: React.FC = () => {
  return (
    <section className="relative bg-[#14161a] text-[#f7f6f3] py-28 md:py-36 overflow-hidden border-b border-[#f7f6f3]/15">
      {/* Diagonal Slicing Yellow Band cutting behind/across */}
      <div
        aria-hidden="true"
        className="absolute left-[-10%] right-[-10%] top-1/2 -translate-y-1/2 h-24 md:h-32 bg-[#ffc72c] transform -rotate-[8deg] pointer-events-none"
      />

      {/* Structural Crosshair Marks */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top-left tiny technical note */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] mb-10">
          <span className="text-[#ffc72c]">INTERLUDE 10 // MANIFESTO AXIOM</span>
          <span className="text-[#f7f6f3]/60">SPAN / DEPTH ≥ 8.5</span>
        </div>

        {/* Enormous Full-Bleed Statement Fragment */}
        <div className="relative">
          <h2 className="text-[13vw] sm:text-[11vw] lg:text-[8.5rem] font-extrabold uppercase tracking-tighter leading-[0.88] select-none mix-blend-normal">
            <span className="block text-[#f7f6f3]">CANTILEVER</span>
            <span className="block text-[#14161a] bg-[#ffc72c] inline-block px-3 transform -skew-x-6 my-2">
              IS DEFIANCE
            </span>
            <span className="block text-[#f7f6f3]">MADE SOLID.</span>
          </h2>

          {/* Unexpected rotated attribution tucked beside/across letterforms */}
          <div className="mt-10 md:mt-0 md:absolute md:right-2 md:bottom-4 bg-[#f7f6f3] text-[#14161a] px-4 py-3 font-mono text-[11px] uppercase tracking-wider transform md:-rotate-6 max-w-xs border border-[#14161a]">
            <div className="font-bold">— H. VANCE, PRINCIPAL</div>
            <div className="text-[#14161a]/65 mt-0.5">
              ZURICH ETH SYMPOSIUM · 19.04.2024
            </div>
          </div>
        </div>

        {/* Bottom corner coordinate marker */}
        <div className="mt-12 pt-4 border-t border-[#f7f6f3]/20 flex flex-wrap justify-between gap-4 font-mono text-[10px] text-[#f7f6f3]/55 uppercase">
          <span>NO VERTICAL PERIMETER SUPPORTS</span>
          <span>AXIS: 14° MERIDIAN</span>
        </div>
      </div>
    </section>
  );
};
