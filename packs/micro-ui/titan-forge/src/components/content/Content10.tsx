import React from 'react';

export function Content10() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 md:py-24 border-b-4 border-black font-sans overflow-hidden relative">
      {/* Rotated Edge Coordinate Stamp */}
      <div
        className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 whitespace-nowrap select-none"
        aria-hidden="true"
      >
        INTERRUPTION 10 // TITAN FORGE DOCTRINE // NO. 001
      </div>

      <div className="max-w-6xl mx-auto px-4 md:pl-12 relative">
        {/* Top Corner Micro-Annotation */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest mb-4 border-t border-black pt-2">
          <span>STRUCTURAL AXIOM // 01</span>
          <span className="text-[#f25c05] font-bold">UNCOMPROMISED MASS</span>
        </div>

        {/* Enormous Full-Bleed Statement Fragment */}
        <div className="relative">
          <h2 className="text-[14vw] sm:text-[12vw] lg:text-[126px] font-black uppercase tracking-[-0.06em] leading-[0.82] select-none">
            <span className="block">GRANITE</span>
            <span className="block">YIELDS</span>
            <span className="block">
              TO{' '}
              <span className="bg-black text-[#f25c05] px-3 inline-block">
                MASS.
              </span>
            </span>
          </h2>

          {/* Tucked Unexpected Annotation Threading Into Negative Space */}
          <div className="mt-8 md:mt-0 md:absolute md:top-6 md:right-0 md:w-64 border-t-2 border-black pt-3 font-mono text-[11px] uppercase leading-snug bg-[#f5f4f0]/95">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-[#f25c05] inline-block" aria-hidden="true" />
              <span className="font-bold">DOCTRINE // TF-00</span>
            </div>
            <p className="text-neutral-700">
              Velocity without structural tonnage shatters on contact. Every Titan Forge unit anchors 180 metric tons directly over the bore axis.
            </p>
          </div>
        </div>

        {/* Bottom Hairline Ticks & Attribution */}
        <div className="mt-10 pt-3 border-t border-black flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase text-neutral-600">
          <span>|&lt;--- FULL SPAN TYPOGRAPHIC MASS ---&gt;|</span>
          <span>ARCHIVAL STATEMENT — MARCUS VANCE, 2026</span>
        </div>
      </div>
    </section>
  );
}
