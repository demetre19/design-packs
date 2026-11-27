import React from 'react';

interface StairStep {
  step: string;
  year: string;
  title: string;
  station: string;
  spec: string;
  note: string;
  indentClass: string;
  coord: string;
}

export function Content2() {
  const steps: StairStep[] = [
    {
      step: '01',
      year: '1790',
      title: 'Vault Matrix Extraction',
      station: 'CABINET 12 · TRAY IV',
      spec: '0.02mm micrometer gauge check',
      note: 'Original antimony-lead punches removed from cedar storage under 45% RH archival climate control.',
      indentClass: 'lg:ml-0 lg:w-[44%]',
      coord: 'ΔX 000 · Y 000',
    },
    {
      step: '02',
      year: '1957',
      title: '1200 DPI Photomicrography',
      station: 'BASEL OPTICAL BENCH',
      spec: 'Orthochromatic glass plates',
      note: 'Raking 18-degree tungsten illumination isolates bevel shoulders from flat counter bottoms.',
      indentClass: 'lg:ml-[14%] lg:w-[44%]',
      coord: 'ΔX +14% · Y +120',
    },
    {
      step: '03',
      year: '1961',
      title: 'Ink-Spread Compensation',
      station: 'IMPRIMERIE NATIONALE',
      spec: '−0.04mm rag-press allowance',
      note: 'Jan Tschichold’s optical reductions correct for dampened cotton paper absorption at 12pt and 18pt.',
      indentClass: 'lg:ml-[28%] lg:w-[44%]',
      coord: 'ΔX +28% · Y +240',
    },
    {
      step: '04',
      year: '1983',
      title: 'Extrema Bézier Fitting',
      station: 'ZÜRICH VECTOR LAB',
      spec: '1000 UPM · cubic splines',
      note: 'Inflection points placed strictly at horizontal and vertical extrema to match hand-filed punch geometry.',
      indentClass: 'lg:ml-[42%] lg:w-[44%]',
      coord: 'ΔX +42% · Y +360',
    },
    {
      step: '05',
      year: '2026',
      title: 'Master Foundry Sign-Off',
      station: 'TYPOGRAPHICA ARCHIV',
      spec: 'Checksum #5701-ÉP',
      note: 'Six optical masters certified against primary 1790 Parma rag impressions.',
      indentClass: 'lg:ml-[56%] lg:w-[44%]',
      coord: 'ΔX +56% · Y +480',
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-12 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              PROCESS SEQUENCE · DIAGONAL DESCENT
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Spiral Staircase — Five Stages from Punch to Vector
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">THREADED PROVENANCE PATH</div>
        </div>

        <div className="space-y-6">
          {steps.map((item, idx) => (
            <div key={item.step} className={`${item.indentClass} relative pl-10`}>
              {/* Exact per-step vertical drop + elbow connector anchored directly to the step */}
              <div
                aria-hidden="true"
                className="absolute left-3 top-3 bottom-0 w-px bg-neutral-600"
              />
              {/* Node ring centered at step baseline */}
              <div
                aria-hidden="true"
                className="absolute left-[5px] top-2.5 w-3.5 h-3.5 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center z-10"
              >
                <span className="w-1 h-1 rounded-full bg-white" />
              </div>
              {/* Horizontal connector into step header */}
              <div
                aria-hidden="true"
                className="absolute left-[18px] top-[16px] w-4 h-px bg-neutral-500"
              />
              {/* Stepped horizontal drop-rail connecting this step's vertical stem rightwards into the next step */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute left-3 -bottom-6 w-[calc(31.8%+2px)] h-6 border-l border-b border-neutral-600"
                />
              )}

              <div className="flex items-baseline justify-between border-b border-neutral-800 pb-2 mb-2.5">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-serif italic font-bold text-white tabular-nums leading-none">
                    {item.step}
                  </span>
                  <span className="text-xs text-neutral-400 tabular-nums">{item.year}</span>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                    {item.station}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500 tabular-nums">{item.coord}</span>
              </div>

              <h3 className="text-base font-serif font-bold text-neutral-100 mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed mb-2">
                {item.note}
              </p>
              <div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
                <span>TOLERANCE: {item.spec}</span>
                {idx < steps.length - 1 && (
                  <span className="text-neutral-400">DESCEND TO {steps[idx + 1].step} ↘</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
