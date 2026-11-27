import React from 'react';

export function Content8() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-8 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-08 // LAB PINBOARD COLLISION // UNALIGNED ARCHIVE SURFACE</span>
          <span className="font-bold">BOARD 04 // STUTTGART BAY 2</span>
        </div>

        {/* Dot-Grid Pinboard Canvas */}
        <div className="relative border-2 border-[#111111] bg-[#dcdcd8] bg-[radial-gradient(#111111_0.85px,transparent_0.85px)] [background-size:18px_18px] p-6 md:p-10 min-h-[540px] lg:h-[620px]">
          {/* Artifact 1 (z-10): Large Wind Tunnel Plate — tilted -1deg top-left */}
          <div className="relative lg:absolute lg:top-6 lg:left-6 lg:w-[47%] z-10 -rotate-1 border-2 border-[#111111] bg-[#ffffff] p-2.5">
            <div className="flex justify-between items-center text-[8px] uppercase tracking-widest mb-1.5">
              <span className="font-bold">+ PIN 01 // TUNNEL RUN</span>
              <span>FIG A — SMOKE ATTACHMENT</span>
            </div>
            <div className="aspect-[4/3] bg-[#111111] overflow-hidden border border-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
                alt="Prototype vehicle undergoing wind tunnel laminar smoke test"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-[9px] font-bold uppercase mt-2 text-right">
              RUN 042 // 280 KM/H
            </div>
          </div>

          {/* Artifact 2 (z-30): Cockpit Square Plate — overlapping top-right, rotated +2deg */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:top-10 lg:right-10 lg:w-[27%] z-30 rotate-2 border-2 border-[#111111] bg-[#e8e8e6] p-2">
            <div className="bg-[#111111] text-[#e8e8e6] text-[8px] px-1.5 py-0.5 uppercase tracking-widest mb-1.5 flex justify-between">
              <span>PIN 02 // SWITCHBANK</span>
              <span>+</span>
            </div>
            <div className="aspect-square bg-[#111111] overflow-hidden border border-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Cockpit manual toggle switch cluster"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-[8px] uppercase mt-1.5 text-[#333333]">
              CAPT: ANALOGUE OVERRIDE GUARDS
            </div>
          </div>

          {/* Artifact 3 (z-40): Inverted Homologation Stamp Slip — floating center-top collision */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:top-4 lg:left-[44%] lg:w-[24%] z-40 -rotate-2 border-2 border-[#e8e8e6] bg-[#111111] text-[#e8e8e6] p-4">
            <div className="text-[8px] tracking-[0.25em] text-[#aaaaaa] mb-1">
              STAMP // ANNEX J
            </div>
            <div className="text-lg font-black uppercase tracking-tight leading-none">
              LOT 044 CLEARED
            </div>
            <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,#e8e8e6,#e8e8e6_2px,#111111_2px,#111111_4px)] my-2.5" />
            <div className="text-[8px] uppercase text-[#cccccc]">
              INSPECTOR: K. SCHMIDT // STUTTGART
            </div>
          </div>

          {/* Artifact 4 (z-20): Vertical Turbine Assembly Plate — bottom-center-right overlap */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:right-[23%] lg:w-[22%] z-20 -rotate-2 border-2 border-[#111111] bg-[#f4f4f0] p-2">
            <div className="aspect-[3/4] bg-[#111111] overflow-hidden border border-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
                alt="Machined titanium quad-turbo exhaust manifold and ceramic rotor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-[8px] font-bold uppercase mt-1.5">
              PIN 03 // INCONEL MANIFOLD
            </div>
          </div>

          {/* Artifact 5 (z-30): Typed Engineering Memo with Redaction Bars — overlapping bottom-left */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:bottom-4 lg:left-10 lg:w-[35%] z-30 rotate-1 border-2 border-[#111111] bg-[#ffffff] p-4">
            <div className="flex justify-between items-center border-b border-[#111111] pb-1.5 mb-2 text-[8px] uppercase tracking-widest">
              <span className="font-bold">MEMO // INTERNAL DISPATCH</span>
              <span>NO. 884-K</span>
            </div>
            <p className="text-[10px] leading-relaxed uppercase text-[#222222]">
              TURBINE INLET TEMP REACHED{' '}
              <span className="bg-[#111111] text-[#111111] px-1 select-none" aria-label="redacted value">
                1040C
              </span>{' '}
              AT LAP 19. CERAMIC BEARINGS SHOWED ZERO RADIAL PLAY POST-TEARDOWN.
            </p>
            <div className="mt-3 pt-2 border-t border-[#111111] flex items-center justify-between text-[8px] text-[#555555]">
              <span>CALIBRATION: 1E1E1E / B3B3B3</span>
              <span className="font-bold text-[#111111]">FILED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
