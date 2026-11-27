import React from 'react';

export function Content9() {
  const categories = [
    {
      num: '01',
      title: 'THERMODYNAMICS & FLUIDS',
      entries: [
        { code: '1.01', name: 'Charge Air Intercooling Enthalpy Drop', ref: 'CELL 04 · P.004' },
        { code: '1.02', name: 'Inconel 713C Exhaust Manifold Radiation Budget', ref: 'CELL 04 · P.011' },
        { code: '1.03', name: 'Dry-Sump Five-Stage Scavenge De-Aeration Curve', ref: 'CELL 04 · P.019' },
        { code: '1.04', name: 'Sodium-Filled Valve Stem Heat Transfer Matrix', ref: 'CELL 04 · P.027' },
        { code: '1.05', name: 'Piston Crown Under-Skirt Oil Jet Impingement', ref: 'CELL 04 · P.034' },
      ],
    },
    {
      num: '02',
      title: 'MECHANICAL ARCHITECTURE',
      entries: [
        { code: '2.01', name: '4340 Billet Flat-Plane Crankshaft Torsion Harmonics', ref: 'BENCH A · P.042' },
        { code: '2.02', name: 'Ti-6Al-4V H-Beam Con-Rod Tensile Load Limits', ref: 'BENCH A · P.051' },
        { code: '2.03', name: 'Nikasil Closed-Deck Liner Cross-Hatch Retention', ref: 'BENCH A · P.058' },
        { code: '2.04', name: 'Pneumatic Valve Return Air-Spring Pressure Profile', ref: 'BENCH B · P.066' },
        { code: '2.05', name: 'Zero-Backlash Eddy-Current Spline Coupling', ref: 'CELL 04 · P.073' },
      ],
    },
    {
      num: '03',
      title: 'INSTRUMENTATION & TELEMETRY',
      entries: [
        { code: '3.01', name: '1,000 Hz Piezo Cylinder Pressure Transducer Sync', ref: 'DAQ-01 · P.081' },
        { code: '3.02', name: 'Optical Laser Crank-Angle Torsional Deflection', ref: 'DAQ-02 · P.089' },
        { code: '3.03', name: 'Turbo Shaft Eddy-Current Speed Pickup Calibration', ref: 'DAQ-04 · P.095' },
        { code: '3.04', name: 'Wideband Lambda Bank-to-Bank Fuel Trim Closed Loop', ref: 'ECU-07 · P.104' },
      ],
    },
    {
      num: '04',
      title: 'ENDURANCE & FAILURE MODES',
      entries: [
        { code: '4.01', name: '24-Hour Le Mans Duty Cycle Simulation Protocol', ref: 'RUN 40 · P.112' },
        { code: '4.02', name: 'Knock Threshold Margin Under 45°C Ambient Soak', ref: 'RUN 38 · P.121' },
        { code: '4.03', name: 'Post-Teardown Bearing Shell Spectroscopy Assay', ref: 'LAB 02 · P.130' },
        { code: '4.04', name: 'DIN 70020 Atmospheric Correction Audit Ledger', ref: 'CERT · P.144' },
      ],
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Typographic Dossier Title Banner */}
        <div className="border-t-2 border-b border-[#262c36] py-6 mb-14 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[#ffd500] font-extrabold tracking-widest">INDEX // REV 4.2</span>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none">
              TECHNICAL DOSSIER CONTENTS
            </h2>
          </div>
          <span className="text-[11px] text-zinc-500 tabular-nums">18 SECTIONS · 144 PAGES · KD-998</span>
        </div>

        {/* Dense Typographic Multi-Scale Index Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((cat) => (
            <div key={cat.num}>
              <div className="flex items-baseline justify-between border-b border-[#ffd500] pb-2 mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-black text-[#ffd500] leading-none">{cat.num}</span>
                  <h3 className="text-xs font-extrabold tracking-[0.22em] text-white uppercase">{cat.title}</h3>
                </div>
                <span className="text-[10px] text-zinc-500">{cat.entries.length} ENTRIES</span>
              </div>

              <ul className="space-y-2.5 tabular-nums">
                {cat.entries.map((e) => (
                  <li key={e.code} className="flex items-baseline gap-2 text-xs group">
                    <span className="text-[#ffd500] font-bold shrink-0">{e.code}</span>
                    <span className="font-sans text-zinc-200 group-hover:text-[#ffd500] transition-colors shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-normal">
                      {e.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-[#323846] mx-1 translate-y-[-3px]" />
                    <span className="text-[11px] text-zinc-400 shrink-0 font-bold">{e.ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
