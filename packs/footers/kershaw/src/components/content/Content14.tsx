import React from 'react';

export function Content14() {
  const scoreMeasures = [
    {
      measure: 'M.01',
      tempo: '1,200 RPM',
      alignment: 'w-full md:w-[74%] mr-auto',
      tag: 'WIDE-LEFT // INTAKE RESONANCE',
      headline: 'HELMHOLTZ PLENUM TUNING ENGAGES AT LOW SHAFT VELOCITY',
      note: 'Long-runner acoustic wave reflection boosts cylinder fill efficiency by +11.4% prior to turbocharger spool threshold.',
    },
    {
      measure: 'M.02',
      tempo: '3,800 RPM',
      alignment: 'w-full md:w-[38%] ml-auto',
      tag: 'NARROW-RIGHT // SPOOL CROSSOVER',
      headline: '1.80 BAR POSITIVE MANIFOLD DELTA',
      note: 'Twin-scroll volutes isolate Bank A/B exhaust pulses.',
    },
    {
      measure: 'M.03',
      tempo: '6,800 RPM',
      alignment: 'w-full md:w-[54%] mx-auto',
      tag: 'MEDIUM-CENTER // PEAK TORQUE EQUILIBRIUM',
      headline: '612 NM SUSTAINED ACROSS 2,700 RPM BANDWIDTH',
      note: 'Closed-loop wastegate trims manifold pressure precisely at 2.84 BAR ceiling while fuel rail holds 350 BAR.',
    },
    {
      measure: 'M.04',
      tempo: '7,900 RPM',
      alignment: 'w-full md:w-[40%] mr-auto md:ml-[8%]',
      tag: 'OFFSET-LEFT // PNEUMATIC RETURN',
      headline: 'ZERO VALVETRAIN FLOAT MARGIN',
      note: 'Ti-6Al-4V valves close cleanly within 0.02 mm seat tolerance.',
    },
    {
      measure: 'M.05',
      tempo: '8,400 RPM',
      alignment: 'w-full md:w-[68%] ml-auto',
      tag: 'WIDE-RIGHT // REDLINE CUTOFF',
      headline: '718.5 KW SHAFT POWER VERIFIED AT CELL 04 STATOR',
      note: 'Soft ignition cut arrests crank acceleration at 8,400 RPM with 94.2°C oil equilibrium.',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Background Musical-Score Column Guide Rails */}
        <div
          aria-hidden="true"
          className="hidden md:grid grid-cols-12 gap-4 absolute inset-0 pointer-events-none opacity-25"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-dashed border-[#262c36] h-full" />
          ))}
        </div>

        <div className="relative z-10 mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase">
              // MATHEMATICAL SCORE CADENCE · RPM TEMPO PROGRESSION
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              HARMONIC SWEEP <span className="text-[#ffd500]">CASCADE</span>
            </h2>
          </div>
          <span className="text-[11px] text-zinc-500">SHIFT PATTERN: 74L · 38R · 54C · 40L · 68R</span>
        </div>

        {/* Descending Cascading Measures */}
        <div className="relative z-10 space-y-10">
          {scoreMeasures.map((m) => (
            <div key={m.measure} className={`${m.alignment} border-t-2 border-[#ffd500] bg-[#14161a]/90 p-5`}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] mb-2">
                <span className="text-[#ffd500] font-bold tracking-widest">
                  {m.measure} // {m.tag}
                </span>
                <span className="bg-[#0c0d0f] border border-[#262c36] px-2 py-0.5 text-white font-bold tabular-nums">
                  {m.tempo}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2">
                {m.headline}
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
