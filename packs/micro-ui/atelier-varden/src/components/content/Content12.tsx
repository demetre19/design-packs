import React from 'react';

export function Content12() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2e0d8] pb-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                THREADED CHRONICLE — KAMAKURA HORIZON HOUSE
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              Three Acts Along One Datum Line
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
            CONTINUOUS SECTION CUT · 0.0 M → 112.0 M
          </span>
        </div>

        {/* Continuous Vertical Thread Rail linking 3 distinct internal layouts */}
        <div className="relative pl-8 lg:pl-14">
          {/* Continuous Thread Line */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] lg:left-[19px] top-2 bottom-2 w-px bg-[#b5482e]"
          />

          <div className="space-y-16">
            {/* ACT I: Full-span horizontal typography + 3 field telemetry readings */}
            <article className="relative space-y-6">
              <span
                aria-hidden="true"
                className="absolute -left-[25px] lg:-left-[39px] top-1 w-[9px] h-[9px] bg-[#b5482e] border border-[#fafaf8]"
              />
              <div className="flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-[#b5482e] tabular-nums">
                <span>ACT I · 0.0 M DATUM</span>
                <span className="h-px flex-1 bg-[#e2e0d8]" />
                <span className="text-stone-500">SITE EXCAVATION</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#16171a] leading-snug">
                    Carving an earthquake-isolated sanctuary into coastal Kamakura sandstone.
                  </h3>
                </div>
                <div className="lg:col-span-5 grid grid-cols-3 gap-3 border-t border-[#16171a] pt-3 font-mono text-[11px] tabular-nums">
                  <div>
                    <span className="text-stone-400 block text-[9px]">BEDROCK</span>
                    <span className="text-[#16171a]">-4.2 M</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px]">SALT SPRAY</span>
                    <span className="text-[#16171a]">CLASS XS3</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px]">SLOPE</span>
                    <span className="text-[#16171a]">21.5° W</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ACT II: Centered compact plate flanked by twin formwork mix sidebars */}
            <article className="relative space-y-6">
              <span
                aria-hidden="true"
                className="absolute -left-[25px] lg:-left-[39px] top-1 w-[9px] h-[9px] bg-[#fafaf8] border-2 border-[#b5482e]"
              />
              <div className="flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-[#b5482e] tabular-nums">
                <span>ACT II · 48.0 M DATUM</span>
                <span className="h-px flex-1 bg-[#e2e0d8]" />
                <span className="text-stone-500">TECTONIC CASTING</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#f0efeb] border border-[#e2e0d8] p-6">
                <div className="lg:col-span-3 space-y-3 text-xs font-mono border-b lg:border-b-0 lg:border-r border-[#e2e0d8] pb-4 lg:pb-0 lg:pr-4">
                  <div className="text-[10px] text-[#b5482e] uppercase">LEFT WING · MIX</div>
                  <div className="text-[#16171a]">Pozzolanic Marine Concrete</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    35% fly-ash substitution prevents chloride ingress from Pacific winter typhoons.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="border border-[#16171a] p-1.5 bg-[#fafaf8]">
                    <div className="aspect-[16/10] overflow-hidden bg-[#e2e0d8]">
                      <img
                        src="/src/assets/images/varden_exploded_plate_1795617060449.jpg"
                        alt="Cantilever concrete formwork assembly"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover saturate-[0.85]"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-3 text-xs font-mono border-t lg:border-t-0 lg:border-l border-[#e2e0d8] pt-4 lg:pt-0 lg:pl-4">
                  <div className="text-[10px] text-[#b5482e] uppercase">RIGHT WING · JOINERY</div>
                  <div className="text-[#16171a]">Charred Yoshino Sugi</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Kiln-treated planks hung on concealed marine-grade 316L stainless cleats.
                  </p>
                </div>
              </div>
            </article>

            {/* ACT III: Asymmetric statement + compact seasonal solar azimuth register */}
            <article className="relative space-y-6">
              <span
                aria-hidden="true"
                className="absolute -left-[25px] lg:-left-[39px] top-1 w-[9px] h-[9px] bg-[#16171a] border border-[#16171a]"
              />
              <div className="flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-[#b5482e] tabular-nums">
                <span>ACT III · 112.0 M DATUM</span>
                <span className="h-px flex-1 bg-[#e2e0d8]" />
                <span className="text-stone-500">LIGHT CALIBRATION</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <p className="text-lg font-medium text-[#16171a] leading-relaxed">
                    On the winter solstice, afternoon sunlight penetrates 9.2 meters into the tatami gallery; by summer equinox, the deep cedar soffit blocks all direct glare.
                  </p>
                  <div className="text-[11px] font-mono text-stone-500 uppercase">
                    OCCUPIED AUTUMN 2024 · RESIDENCE COMPLETE
                  </div>
                </div>
                <div className="lg:col-span-6 border border-[#e2e0d8] bg-[#fafaf8] divide-y divide-[#e2e0d8] font-mono text-[11px] tabular-nums">
                  <div className="p-3 flex justify-between bg-[#f0efeb]">
                    <span className="text-stone-500">SOLSTICE WINTER (DEC 21)</span>
                    <span className="text-[#b5482e]">ALT 31.2° · 9.2 M REACH</span>
                  </div>
                  <div className="p-3 flex justify-between">
                    <span className="text-stone-500">EQUINOX VERNAL (MAR 20)</span>
                    <span className="text-[#16171a]">ALT 54.6° · 3.1 M REACH</span>
                  </div>
                  <div className="p-3 flex justify-between">
                    <span className="text-stone-500">SOLSTICE SUMMER (JUN 21)</span>
                    <span className="text-[#16171a]">ALT 78.1° · 0.0 M GLARE</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
