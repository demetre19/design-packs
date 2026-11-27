import React from 'react';

export function Content13() {
  const columns = [
    {
      index: '01',
      heading: 'PROJECT LEADERSHIP',
      pairs: [
        ['Chief Vehicle Architect', 'Lukas Lindner'],
        ['Director of Motorsport', 'Hiroshi Tanaka'],
        ['Head of Homologation', 'Ingrid Solberg'],
        ['Production Batch Lead', 'Matteo Conti'],
      ],
    },
    {
      index: '02',
      heading: 'POWERTRAIN & SiC BUS',
      pairs: [
        ['Axial-Flux Topology', 'Dr. Klaus Weber'],
        ['Dielectric Cooling', 'Sora Takahashi'],
        ['800V Inverter Firmware', 'Elena Voss'],
        ['Solid-State Cell Pack', 'Devon Park'],
      ],
    },
    {
      index: '03',
      heading: 'CHASSIS & AERODYNAMICS',
      pairs: [
        ['T1000G Monocoque Layup', 'Claire Beaumont'],
        ['Active Winglet Kinematics', 'Tomasz Kowalski'],
        ['Öhlins Damping Calibration', 'Marcus Du Plessis'],
        ['GP4-RR Regen Integration', 'Alejandro Soto'],
      ],
    },
    {
      index: '04',
      heading: 'DOSSIER & FABRICATION',
      pairs: [
        ['Assembly Facility', 'Munich Plant 02'],
        ['Track Proving Grounds', 'Suzuka International'],
        ['Structural Composite', 'Torayca T1000G 12K'],
        ['Edition Homologation', 'Series 04 // 001–050'],
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Rule & Artifact Header */}
        <div className="border-t-2 border-b border-[#272a33] py-4 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono-spec text-[10px]">
          <span className="text-[#ff5a1f] font-bold tracking-widest">
            COLOPHON 13 // ENGINEERING CREDITS &amp; FABRICATION RECORD
          </span>
          <span className="text-neutral-500">
            APEX MOTIVE AG — MUNICH // TOKYO // AUSTIN
          </span>
        </div>

        {/* Dense 4-Column Hairline-Separated Colophon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#272a33]">
          {columns.map((col, idx) => (
            <div key={col.index} className={`${idx > 0 ? 'lg:pl-6' : ''} ${idx < 3 ? 'lg:pr-6' : ''}`}>
              <div className="flex items-baseline justify-between border-b border-[#272a33] pb-2 mb-5">
                <span className="font-mono-spec text-[10px] font-bold text-white tracking-wider">
                  {col.heading}
                </span>
                <span className="font-mono-spec text-[10px] text-[#ff5a1f]">{col.index}</span>
              </div>

              <dl className="space-y-3.5 font-mono-spec text-[11px]">
                {col.pairs.map(([role, name]) => (
                  <div key={role} className="border-b border-[#272a33]/50 pb-2">
                    <dt className="text-[10px] text-neutral-500 uppercase">{role}</dt>
                    <dd className="text-neutral-200 font-bold mt-0.5">{name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Bottom Colophon Seal */}
        <div className="mt-12 pt-6 border-t border-[#272a33] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono-spec text-[10px] text-neutral-500">
          <p className="max-w-xl leading-relaxed">
            Set in condensed grotesque display and tabular monospace. All vehicle specifications verified on calibrated dynamometer bay 04 under ISO 2768-f tolerances. No telemetry figures extrapolated.
          </p>
          <div className="border border-[#ff5a1f] px-3 py-1.5 text-[#ff5a1f] font-bold shrink-0">
            ARCHIVE STAMP // 2026-V12R
          </div>
        </div>
      </div>
    </section>
  );
}
