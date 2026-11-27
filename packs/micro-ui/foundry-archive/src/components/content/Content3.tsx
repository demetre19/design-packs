import React from 'react';

interface InterlockEntry {
  index: string;
  side: 'left' | 'right';
  era: string;
  eraLabel: string;
  title: string;
  detail: string;
  metric: string;
}

export function Content3() {
  const entries: InterlockEntry[] = [
    {
      index: '01',
      side: 'left',
      era: '1757',
      eraLabel: 'PHYSICAL PUNCH',
      title: 'Hand-Cut Steel Counterpunch',
      detail: 'Tempered steel blank struck into brass matrix; internal bowl depth gauged by eye against candle flame.',
      metric: 'RELIEF DEPTH: 1.85MM',
    },
    {
      index: '02',
      side: 'right',
      era: '1957',
      eraLabel: 'MONOTYPE CAST',
      title: 'Hot-Metal Composition Caster',
      detail: 'Compressed air drives molten lead-antimony alloy at 370°C into bronze matrix case in Basel.',
      metric: 'CYCLE: 140 CHARS/MIN',
    },
    {
      index: '03',
      side: 'left',
      era: '1961',
      eraLabel: 'PHOTOMECHANICAL',
      title: 'Negative Film Strip Master',
      detail: 'Lumitype glass disc exposes letterforms through variable anamorphic lenses at Imprimerie Nationale.',
      metric: 'REDUCTION: 1:12 OPTICAL',
    },
    {
      index: '04',
      side: 'right',
      era: '1983',
      eraLabel: 'POSTSCRIPT TYPE 1',
      title: 'Cubic Spline Outline Program',
      detail: 'Hand-placed on-curve extrema and off-curve control handles encode stem weights for rasterization.',
      metric: 'GRID: 1000 UNITS/EM',
    },
    {
      index: '05',
      side: 'left',
      era: '1994',
      eraLabel: 'OPTICAL MASTERS',
      title: 'Multiple Master Interpolation Axis',
      detail: 'Continuous weight and optical-size axes preserve hairline fragility at 72pt and open apertures at 8pt.',
      metric: 'AXES: WT · OPSZ · WDTH',
    },
    {
      index: '06',
      side: 'right',
      era: '2026',
      eraLabel: 'ARCHIVAL RELEASE',
      title: 'Cryptographic Specimen Checksum',
      detail: 'Digitized OTF/WOFF2 binaries sealed to Cabinet 12 provenance ledger with complete historical glyph table.',
      metric: 'GLYPHS: 1,420 VERIFIED',
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              DIALECTIC SPINE · METAL TO DIGITAL
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Interlock — Alternating Artifacts on a Shared Axis
            </h2>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-neutral-400 uppercase tracking-widest">
            <span>← ODD: ANALOG STRIKE</span>
            <span>EVEN: SYSTEMATIC CAST →</span>
          </div>
        </div>

        <div className="relative py-4">
          {/* Continuous shared central spine */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700 -translate-x-1/2"
          />

          <div className="space-y-6 md:space-y-0">
            {entries.map((entry, idx) => {
              const isLeft = entry.side === 'left';
              return (
                <div
                  key={entry.index}
                  className={`relative md:grid md:grid-cols-12 items-start ${
                    idx > 0 ? 'md:-mt-4' : ''
                  }`}
                >
                  {isLeft ? (
                    <>
                      {/* Left tooth extending to and overlapping the center spine */}
                      <div className="md:col-span-6 md:pr-10 md:text-right pb-6 md:pb-10 relative">
                        <div className="border-t border-neutral-700 pt-3 relative">
                          {/* Center-line interlocking tab */}
                          <div className="hidden md:flex items-center justify-center absolute -right-14 -top-3.5 w-8 h-7 bg-neutral-900 border border-neutral-500 text-xs font-bold text-white z-20 tabular-nums">
                            {entry.index}
                          </div>
                          {/* Horizontal tooth bridge into center */}
                          <div className="hidden md:block absolute -right-10 top-0 w-10 h-px bg-neutral-500" />

                          <div className="flex md:justify-end items-baseline gap-3 mb-1.5">
                            <span className="md:hidden text-xs font-bold text-white border border-neutral-600 px-1.5 py-0.5">
                              {entry.index}
                            </span>
                            <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                              {entry.eraLabel}
                            </span>
                            <span className="text-xl font-serif font-bold text-neutral-200 tabular-nums">
                              {entry.era}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-bold text-white mb-1.5">
                            {entry.title}
                          </h3>
                          <p className="text-xs font-sans text-neutral-400 leading-relaxed md:ml-auto md:max-w-md">
                            {entry.detail}
                          </p>
                          <div className="text-[10px] text-neutral-500 tracking-wider uppercase mt-2 tabular-nums">
                            {entry.metric}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:col-span-6" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:col-span-6" />
                      {/* Right tooth extending from and overlapping the center spine */}
                      <div className="md:col-span-6 md:pl-10 pb-6 md:pb-10 relative">
                        <div className="border-t border-neutral-700 pt-3 relative">
                          {/* Center-line interlocking tab */}
                          <div className="hidden md:flex items-center justify-center absolute -left-14 -top-3.5 w-8 h-7 bg-neutral-950 border border-neutral-500 text-xs font-bold text-white z-20 tabular-nums">
                            {entry.index}
                          </div>
                          {/* Horizontal tooth bridge from center */}
                          <div className="hidden md:block absolute -left-10 top-0 w-10 h-px bg-neutral-500" />

                          <div className="flex items-baseline gap-3 mb-1.5">
                            <span className="md:hidden text-xs font-bold text-white border border-neutral-600 px-1.5 py-0.5">
                              {entry.index}
                            </span>
                            <span className="text-xl font-serif font-bold text-neutral-200 tabular-nums">
                              {entry.era}
                            </span>
                            <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                              {entry.eraLabel}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-bold text-white mb-1.5">
                            {entry.title}
                          </h3>
                          <p className="text-xs font-sans text-neutral-400 leading-relaxed md:max-w-md">
                            {entry.detail}
                          </p>
                          <div className="text-[10px] text-neutral-500 tracking-wider uppercase mt-2 tabular-nums">
                            {entry.metric}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
