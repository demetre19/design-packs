import React from 'react';

export function Content7() {
  const sprockets = Array.from({ length: 24 });

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              CONTACT SEQUENCE 35MM — VÄRMDÖ ARCHIPELAGO
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tabular-nums">
            ROLL 07 · FRAMES 24A—28
          </span>
        </div>

        {/* Continuous Film Strip Container */}
        <div className="border border-[#16171a] bg-[#f0efeb]">
          {/* Top Sprocket Perforation Rail */}
          <div className="px-3 py-2 border-b border-[#16171a] bg-[#16171a] flex items-center justify-between gap-2 overflow-hidden">
            {sprockets.map((_, idx) => (
              <span
                key={`top-${idx}`}
                className="w-3 h-2 bg-[#fafaf8]/85 shrink-0"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Deliberately Unequal Width Horizontal Frame Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#16171a] bg-[#fafaf8]">
            {/* Frame 24A — Wide Landscape Image (5 cols) */}
            <div className="md:col-span-5 p-3 flex flex-col justify-between space-y-2">
              <div className="aspect-[16/9] overflow-hidden border border-[#e2e0d8] bg-[#e2e0d8]">
                <img
                  src="/src/assets/images/varden_film_frame_1795617061941.jpg"
                  alt="Värmdö coastal house embedded into granite shoreline"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-[0.82]"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-stone-500 uppercase tabular-nums">
                <span>24A · NORTH SHORE ELEVATION</span>
                <span className="text-[#b5482e]">f/8 · 1/250s</span>
              </div>
            </div>

            {/* Frame 25 — Narrow Pure Numeral (1 col) */}
            <div className="md:col-span-1 p-3 bg-[#f0efeb] flex flex-row md:flex-col items-center justify-between">
              <span className="text-[10px] font-mono text-stone-500 uppercase">NO.</span>
              <span className="text-4xl font-medium text-[#b5482e] font-mono tabular-nums tracking-tighter">
                07
              </span>
              <span className="text-[9px] font-mono text-stone-400 uppercase">25</span>
            </div>

            {/* Frame 26A — Medium Editorial Text Block (3 cols) */}
            <div className="md:col-span-3 p-4 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  26A · FIELD OBSERVATION
                </div>
                <h3 className="text-base font-medium text-[#16171a] leading-snug">
                  Low-Slung Profile Against Baltic Gales
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Roof height never exceeds 3.4 meters above mean granite ridge, allowing winter winds to sweep smoothly across the zinc parapet.
                </p>
              </div>
              <div className="text-[10px] font-mono text-stone-500 border-t border-[#e2e0d8] pt-2 tabular-nums">
                SPAN: 28.4 M · WIDTH: 6.2 M
              </div>
            </div>

            {/* Frame 27 — Tiny Vertical Technical Strip (1 col) */}
            <div className="md:col-span-1 p-2 bg-[#16171a] text-[#fafaf8] flex md:flex-col items-center justify-between text-[9px] font-mono uppercase tracking-widest">
              <span>ISO 400</span>
              <span className="md:[writing-mode:vertical-rl] md:rotate-180 text-[#b5482e]">
                KODAK TRI-X STUDY
              </span>
              <span>27</span>
            </div>

            {/* Frame 28 — Medium-Narrow Quote Fragment (2 cols) */}
            <div className="md:col-span-2 p-4 bg-[#f0efeb] flex flex-col justify-between space-y-3">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <p className="text-xs font-medium text-[#16171a] leading-relaxed italic">
                &ldquo;Granite does not ask for symmetry; it asks for quiet horizontal alignment.&rdquo;
              </p>
              <div className="text-[10px] font-mono text-stone-500 uppercase">28 · STUDIO LOG</div>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Rail */}
          <div className="px-3 py-2 border-t border-[#16171a] bg-[#16171a] flex items-center justify-between gap-2 overflow-hidden">
            {sprockets.map((_, idx) => (
              <span
                key={`bot-${idx}`}
                className="w-3 h-2 bg-[#fafaf8]/85 shrink-0"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
