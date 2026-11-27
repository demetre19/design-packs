import React from 'react';

export function Content4() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              PLATE IV · ANATOMICAL CALLOUT SCHEMATIC
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Exploded Diagram — Bodoni Époque Capital ‘É’
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400 tabular-nums">SCALE 12:1 · PARMA 1790</div>
        </div>

        {/* Exploded Diagram Stage: Left Callouts | Central Plate | Right Callouts on lg+ with exact SVG leader lines */}
        <div className="relative bg-neutral-950 border border-neutral-800 p-6 lg:p-10">
          <div className="flex justify-between text-[10px] text-neutral-600 mb-6 tabular-nums">
            <span>RETICLE ORIGIN [000, 000]</span>
            <span>OPTICAL MASTER: 72PT DISPLAY</span>
          </div>

          <div className="relative lg:h-[500px] w-full flex flex-col lg:block items-center justify-center">
            {/* Drawn SVG Leader Lines connecting top border of each callout cleanly to exact glyph features */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
            >
              {/* 1. Top-Left annotation top-rule (235, 32) -> Acute Accent tip (508, 134) */}
              <polyline
                points="235,32 395,32 508,134"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1.2"
              />
              <circle cx="508" cy="134" r="4" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" />

              {/* 2. Top-Right annotation top-rule (765, 52) -> Upper Arm Hairline Terminal (555, 198) */}
              <polyline
                points="765,52 648,52 555,198"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1.2"
              />
              <circle cx="555" cy="198" r="4" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" />

              {/* 3. Lower-Left annotation top-rule (235, 290) -> Main Vertical Stem (456, 275) */}
              <polyline
                points="235,290 365,290 456,275"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1.2"
              />
              <circle cx="456" cy="275" r="4" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" />

              {/* 4. Mid-Right annotation top-rule (765, 224) -> Medial Bar Bracket (536, 266) */}
              <polyline
                points="765,224 630,224 536,266"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1.2"
              />
              <circle cx="536" cy="266" r="4" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" />

              {/* 5. Bottom-Right annotation top-rule (765, 386) -> Lower Foot Serif (558, 355) */}
              <polyline
                points="765,386 645,386 558,355"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1.2"
              />
              <circle cx="558" cy="355" r="4" fill="#0a0a0a" stroke="#ffffff" strokeWidth="1.5" />
            </svg>

            {/* Central Visual Plate — compact width so side callouts never overlap it */}
            <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-56 sm:w-64 h-[380px] border border-neutral-700 bg-neutral-900 flex flex-col justify-between p-4 relative z-10">
              <div className="flex justify-between text-[9px] text-neutral-500 tabular-nums border-b border-dashed border-neutral-700 pb-1">
                <span>DIACRITIC CEILING</span>
                <span>+910u</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center select-none">
                <div className="absolute inset-x-0 top-[24%] border-t border-dotted border-neutral-700" />
                <div className="absolute inset-x-0 top-[53%] border-t border-dotted border-neutral-800" />
                <div className="absolute inset-x-0 bottom-[16%] border-t border-dotted border-neutral-700" />
                <div className="absolute inset-y-4 left-[36%] border-l border-dotted border-neutral-800" />

                <span className="font-serif font-bold text-[14.5rem] leading-none text-white tracking-tight">
                  É
                </span>
              </div>

              <div className="flex justify-between text-[9px] text-neutral-500 tabular-nums border-t border-dashed border-neutral-700 pt-1">
                <span>BASELINE DATUM</span>
                <span>000u</span>
              </div>
            </div>

            {/* Flying Annotations strictly outside the central plate bounds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 w-full lg:block">
              {/* 1. Top Left */}
              <div className="lg:absolute lg:left-0 lg:top-[32px] lg:w-[235px] border-t border-neutral-600 pt-2">
                <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
                  <span>01 · ACUTE DIACRITIC</span>
                  <span>[508, 134]</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">42° Tapered Wedge</div>
                <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-snug">
                  Cut separately on French royal strikes; wedge tapers from 28u to a 4u needle apex.
                </p>
              </div>

              {/* 2. Top Right */}
              <div className="lg:absolute lg:right-0 lg:top-[52px] lg:w-[235px] border-t border-neutral-600 pt-2 lg:text-right">
                <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
                  <span>[555, 198]</span>
                  <span>02 · ARM TERMINAL</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">Unbracketed Beak Spur</div>
                <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-snug">
                  Upper arm drops vertically into a crisp 0.08mm hairline beak with zero fillet curve.
                </p>
              </div>

              {/* 3. Lower Left */}
              <div className="lg:absolute lg:left-0 lg:top-[290px] lg:w-[235px] border-t border-neutral-600 pt-2">
                <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
                  <span>03 · PRIMARY STEM</span>
                  <span>[456, 275]</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">1.42mm Vertical Load</div>
                <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-snug">
                  11:1 thick-to-thin contrast ratio defines the high-tension neoclassical Bodoni profile.
                </p>
              </div>

              {/* 4. Mid Right */}
              <div className="lg:absolute lg:right-0 lg:top-[224px] lg:w-[235px] border-t border-neutral-600 pt-2 lg:text-right">
                <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
                  <span>[536, 266]</span>
                  <span>04 · MEDIAL BAR</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">Elevated Optical Waist</div>
                <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-snug">
                  Set 18 units above geometric center to prevent visual sag under display lighting.
                </p>
              </div>

              {/* 5. Bottom Right */}
              <div className="lg:absolute lg:right-0 lg:top-[386px] lg:w-[235px] border-t border-neutral-600 pt-2 sm:col-span-2 lg:text-right">
                <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
                  <span>[558, 355]</span>
                  <span>05 · FOOT SERIF</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">Razor Hairline Base</div>
                <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-snug">
                  Flat 18u slab terminal extending 94u past the lower arm to anchor the baseline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
