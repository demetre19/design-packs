import React from 'react';

interface CascadeMovement {
  bar: string;
  tempo: string;
  title: string;
  body: string;
  metric: string;
  placement: string;
}

export function Content14() {
  const movements: CascadeMovement[] = [
    {
      bar: 'MEAS. 01',
      tempo: 'WIDE-LEFT · 72%',
      title: 'I. The Parma Alloy Premise (1757)',
      body: 'Antimony-lead type cast at 380°C established a razor-thin hairline equilibrium impossible to reproduce in woodblock or copperplate engraving. Every subsequent revival begins with this metallurgical baseline.',
      metric: '82% Pb · 14% Sb · 4% Sn',
      placement: 'w-full lg:w-[72%] lg:mr-auto',
    },
    {
      bar: 'MEAS. 02',
      tempo: 'NARROW-RIGHT · 42%',
      title: 'II. Optical Weight Drift (1957)',
      body: 'At 8pt Nompareille, stems expand by 18% relative to 72pt display cuts to resist optical dissolution on coated paper.',
      metric: 'RATIO 5:1 → 14:1',
      placement: 'w-full lg:w-[42%] lg:ml-auto',
    },
    {
      bar: 'MEAS. 03',
      tempo: 'MEDIUM-CENTER · 58%',
      title: 'III. Imprimerie Nationale Inventory (1961)',
      body: 'Cataloged across eighteen oak specimen drawers in Paris, Jean Jannon’s 1621 punches were cross-indexed alongside Haas Münchenstein Monotype castings under Jan Tschichold.',
      metric: '1,420 VERIFIED MATRICES',
      placement: 'w-full lg:w-[58%] lg:mx-auto',
    },
    {
      bar: 'MEAS. 04',
      tempo: 'OFFSET-LEFT · 46%',
      title: 'IV. Bézier Node Tolerance (1983)',
      body: 'PostScript conversion constrained curve deviations to 0.5 units per em, anchoring tangent handles strictly at vertical and horizontal extrema.',
      metric: '±0.5U ON 1000 UPM',
      placement: 'w-full lg:w-[46%] lg:ml-[14%]',
    },
    {
      bar: 'MEAS. 05',
      tempo: 'WIDE-RIGHT · 76%',
      title: 'V. Archival Living Preservation (2026)',
      body: 'Rather than locking specimen history behind museum glass alone, Typographica Archiv distributes six calibrated optical masters directly to working typographers and scholars worldwide.',
      metric: 'CABINET 12 · OPEN EDITION',
      placement: 'w-full lg:w-[76%] lg:ml-auto',
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              MATHEMATICAL SCORE · CHOREOGRAPHED WIDTHS
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Cascade — Five Shifting Movements Across Staff Lines
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">72% → 42% → 58% → 46% → 76%</div>
        </div>

        {/* Vertical musical-score staff guide lines in background */}
        <div className="relative space-y-6">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-[14%] border-l border-dashed border-neutral-800 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-[50%] border-l border-dashed border-neutral-800 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-[86%] border-l border-dashed border-neutral-800 pointer-events-none"
          />

          {movements.map((m) => (
            <div
              key={m.bar}
              className={`${m.placement} relative z-10 bg-neutral-950 border-t-2 border-white border-x border-b border-x-neutral-800 border-b-neutral-800 p-6`}
            >
              <div className="flex flex-wrap justify-between items-center text-[10px] text-neutral-500 mb-2 gap-2">
                <span className="text-white font-bold">{m.bar}</span>
                <span className="tracking-widest uppercase">{m.tempo}</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">{m.title}</h3>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed mb-3">{m.body}</p>
              <div className="text-[10px] text-neutral-300 border-t border-neutral-800 pt-2 tabular-nums">
                NOTATION: {m.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
