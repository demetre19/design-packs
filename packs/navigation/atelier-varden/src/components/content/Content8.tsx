import React from 'react';

export function Content8() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                STUDIO WALL — PINBOARD COLLAGE 08
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              Working Study Table: Material &amp; Site Fragments
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase text-stone-500">
            ZÜRICH STUDIO PINWALL · UNCATALOGUED ARTIFACTS
          </span>
        </div>

        {/* Drafting Board Surface */}
        <div className="relative bg-[#f0efeb] border border-[#e2e0d8] p-6 md:p-10 md:min-h-[640px]">
          {/* Corner registration crosshairs */}
          <span aria-hidden="true" className="absolute top-3 left-3 text-xs font-mono text-stone-400">+</span>
          <span aria-hidden="true" className="absolute top-3 right-3 text-xs font-mono text-stone-400">+</span>
          <span aria-hidden="true" className="absolute bottom-3 left-3 text-xs font-mono text-stone-400">+</span>
          <span aria-hidden="true" className="absolute bottom-3 right-3 text-xs font-mono text-stone-400">+</span>

          <div className="relative flex flex-col gap-6 md:block md:h-[560px]">
            {/* Artifact 1: Wide Coastal Elevation (back-left layer) */}
            <figure className="md:absolute md:top-4 md:left-4 md:w-[46%] bg-[#fafaf8] border border-[#16171a] p-2 md:-rotate-1 z-10">
              <div className="flex justify-between items-center mb-1.5 text-[9px] font-mono uppercase text-stone-500">
                <span className="flex items-center space-x-1.5">
                  <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
                  <span>PIN 01 · COASTAL STUDY</span>
                </span>
                <span>1:200</span>
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-[#e2e0d8]">
                <img
                  src="/src/assets/images/varden_film_frame_1795617061941.jpg"
                  alt="Coastal granite site photograph"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-[0.85]"
                />
              </div>
              <figcaption className="mt-1.5 text-[10px] font-mono text-stone-600">
                VÄRMDÖ GRANITE HORIZON — WINDWARD ELEVATION
              </figcaption>
            </figure>

            {/* Artifact 2: Vertical Joinery Study (overlapping center) */}
            <figure className="md:absolute md:top-16 md:left-[38%] md:w-[27%] bg-[#fafaf8] border border-[#16171a] p-2 md:rotate-2 z-20">
              <div className="flex justify-between items-center mb-1.5 text-[9px] font-mono uppercase text-stone-500">
                <span className="flex items-center space-x-1.5">
                  <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
                  <span>PIN 02 · JOINT</span>
                </span>
                <span>1:5</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-[#e2e0d8]">
                <img
                  src="/src/assets/images/varden_margin_detail_1795617061194.jpg"
                  alt="Timber and concrete junction study"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-[0.85]"
                />
              </div>
              <figcaption className="mt-1.5 text-[10px] font-mono text-stone-600">
                FIR MORTISE INTO POURED PIER
              </figcaption>
            </figure>

            {/* Artifact 3: Circular Oculus Polaroid / Contact Print (top-right) */}
            <figure className="md:absolute md:top-2 md:right-4 md:w-[28%] bg-[#fafaf8] border border-[#16171a] p-2 md:-rotate-2 z-10">
              <div className="flex justify-between items-center mb-1.5 text-[9px] font-mono uppercase text-stone-500">
                <span className="flex items-center space-x-1.5">
                  <span className="w-[5px] h-[5px] bg-[#16171a] inline-block" />
                  <span>PIN 03 · OCULUS</span>
                </span>
                <span>ZENITH</span>
              </div>
              <div className="aspect-square overflow-hidden bg-[#e2e0d8]">
                <img
                  src="/src/assets/images/varden_courtyard_oculus_1795617062173.jpg"
                  alt="Concrete courtyard sky oculus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-[0.85] scale-[1.08]"
                />
              </div>
              <figcaption className="mt-1.5 text-[10px] font-mono text-stone-600">
                COURTYARD APERTURE — 11:40 SOLAR GRAZE
              </figcaption>
            </figure>

            {/* Artifact 4: Material Swatch Slip (overlapping bottom-left) */}
            <div className="md:absolute md:bottom-8 md:left-10 md:w-[31%] bg-[#16171a] text-[#fafaf8] border border-[#16171a] p-5 md:rotate-1 z-30 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-stone-400">
                <span className="text-[#b5482e]">SWATCH #04</span>
                <span>CHARRED SUGI</span>
              </div>
              <div className="text-sm font-medium">
                Kiln-Carbonized Cedar · 3.5 mm Char Layer
              </div>
              <p className="text-[11px] font-mono text-stone-300 leading-relaxed">
                Brushed once, oiled with raw tung resin. Zero fungal decay observed across 18-month coastal salt spray trial.
              </p>
            </div>

            {/* Artifact 5: Field Memo Card (overlapping bottom-right) */}
            <div className="md:absolute md:bottom-4 md:right-8 md:w-[34%] bg-[#fafaf8] border border-[#b5482e] p-5 md:-rotate-1 z-40 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase">
                <span className="text-[#b5482e] font-medium">FIELD MEMO · ENGADIN</span>
                <span className="text-stone-400">2026-11</span>
              </div>
              <p className="text-xs text-[#16171a] leading-relaxed">
                &ldquo;Raise west sill by 140 mm to clear February snowdrift accumulation; keep south terrace flush with natural gneiss ledge.&rdquo;
              </p>
              <div className="text-[10px] font-mono text-stone-500 uppercase pt-1 border-t border-[#e2e0d8]">
                INITIALED: M.V. / K.S.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
