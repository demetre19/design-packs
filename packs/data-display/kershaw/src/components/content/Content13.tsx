import React from 'react';
import { Hexagon } from 'lucide-react';

export function Content13() {
  const columns = [
    {
      idx: '[A-01]',
      heading: 'ENGINEERING AUTHORITY',
      pairs: [
        ['CHIEF POWERTRAIN ARCHITECT', 'KLAUS VANCE'],
        ['TURBOCHARGER AERODYNAMICS', 'DR. ELENA ROUX'],
        ['METALLURGY & FORGINGS', 'STEFAN KRAUSE'],
        ['VALVETRAIN KINEMATICS', 'HANNAH LINDQVIST'],
        ['COMBUSTION TELEMETRY', 'MARCUS CHEN'],
      ],
    },
    {
      idx: '[B-02]',
      heading: 'CELL 04 INSTRUMENTATION',
      pairs: [
        ['DYNAMOMETER STATOR', 'KERSHAW EC-1200'],
        ['TORQUE TRANSDUCER', 'HBM T40B OPTICAL'],
        ['CYLINDER PRESSURE', 'KISTLER 6052C PIEZO'],
        ['EXHAUST LAMBDA', 'BOSCH LSU-ADV WIDEBAND'],
        ['DATA ACQUISITION', '1,000 HZ FPGA BUS'],
      ],
    },
    {
      idx: '[C-03]',
      heading: 'MATERIAL PROVENANCE',
      pairs: [
        ['CRANKSHAFT ALLOY', '4340 VACUUM-MELT BILLET'],
        ['CON-ROD FORGING', 'TI-6AL-4V GRADE 5'],
        ['TURBINE VOLUTE', 'INCONEL 713C SUPERALLOY'],
        ['LINER COATING', 'NIKASIL ELECTRO-PLATE'],
        ['INTAKE PLENUM', 'AUTOCLAVE M40J CARBON'],
      ],
    },
    {
      idx: '[D-04]',
      heading: 'PUBLICATION & TYPE SPEC',
      pairs: [
        ['DISPLAY FACE', 'BARLOW CONDENSED 800'],
        ['TELEMETRY MONO', 'JETBRAINS MONO TABULAR'],
        ['BODY PROSE', 'IBM PLEX SANS'],
        ['SIGNAL ACCENT', 'PHOSPHOR #FFD500'],
        ['DOSSIER EDITION', 'REV 4.2 // NOV 2026'],
      ],
    },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-b border-[#262c36] py-3 mb-10 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.25em] text-zinc-400">
          <span className="text-[#ffd500] font-bold">// COLOPHON &amp; TECHNICAL PROVENANCE</span>
          <span>KERSHAW DYNAMICS GMBH · STUTTGART CELL 04</span>
          <span>ALL READINGS DIN 70020 CORRECTED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#22262f]">
          {columns.map((col, idx) => (
            <div key={col.idx} className={`${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#262c36]">
                <span className="text-[10px] font-extrabold tracking-widest text-white">{col.heading}</span>
                <span className="text-[10px] text-[#ffd500] font-bold">{col.idx}</span>
              </div>
              <dl className="space-y-3">
                {col.pairs.map(([role, name]) => (
                  <div key={role}>
                    <dt className="text-[9px] text-zinc-500 tracking-wider uppercase">{role}</dt>
                    <dd className="text-[11px] text-zinc-200 font-bold tracking-wide">{name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Etched Bottom Serial Stamp */}
        <div className="mt-12 pt-5 border-t border-[#22262f] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500">
          <div className="flex items-center gap-2">
            <Hexagon className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>DOCUMENT SERIAL: KD-COL-2026-0740</span>
          </div>
          <span>PRINTED &amp; VERIFIED IN CELL 04 TELEMETRY LAB</span>
        </div>
      </div>
    </section>
  );
}
