import React from 'react';

const COLOPHON_GROUPS = [
  {
    code: 'C.01',
    section: 'FLIGHT COMMAND & CREW',
    items: [
      ['CHIEF TEST PILOT', 'COL. MARCUS VANCE'],
      ['FLIGHT TEST DIRECTOR', 'R. KOWALSKI'],
      ['CHASE COMMAND', 'MAJ. K. SULLIVAN'],
      ['RANGE SAFETY OFFICER', 'CAPT. D. MERCER'],
    ],
  },
  {
    code: 'C.02',
    section: 'PROPULSION & STRUCTURES',
    items: [
      ['SCRAMJET ARCHITECT', 'DR. ELENA ROSTOVA'],
      ['THERMAL MATRIX LEAD', 'DR. H. TAKAHASHI'],
      ['C/SiC COMPOSITES', 'VANGUARD MATERIALS DIV.'],
      ['CRYOGENIC SYSTEMS', 'BAY 4 PROPELLANT LAB'],
    ],
  },
  {
    code: 'C.03',
    section: 'AVIONICS & INSTRUMENTATION',
    items: [
      ['INERTIAL GUIDANCE', 'DR. V. KERNEL'],
      ['TELEMETRY ENCRYPTION', 'MIL-STD-1553 / 409.2 MHZ'],
      ['SCHLIEREN OPTICS', 'REEL ARCHIVE WT-400'],
      ['BLACK BOX RECORDER', 'TRIPLE-REDUNDANT SSD'],
    ],
  },
  {
    code: 'C.04',
    section: 'DOCUMENTATION SPEC',
    items: [
      ['BRAND AUTHORITY', 'VANGUARD HYPERSONICS'],
      ['CLASSIFICATION', 'PROGRAM X-99 SPECTRE'],
      ['FACILITY', 'AREA 51 // NEVADA RANGE'],
      ['REVISION STAMP', '2026.11.25 // REV 4.8'],
    ],
  },
];

export function Content13() {
  return (
    <section
      aria-label="Program Colophon and Credits"
      className="w-full bg-[#111318] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2a2d35] pb-3 mb-8">
          <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase">
            PROGRAM COLOPHON // ARTIFACT 13
          </span>
          <span className="text-[10px] text-zinc-500">
            VANGUARD HYPERSONICS · EXPERIMENTAL PROPULSION DIVISION
          </span>
        </div>

        {/* 4-Column Hairline-Separated Back-Matter Artifact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#2a2d35] border-y border-[#2a2d35]">
          {COLOPHON_GROUPS.map((grp) => (
            <div key={grp.code} className="p-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#2a2d35] pb-2">
                <span className="text-[10px] font-black text-[#ff3d00]">{grp.code}</span>
                <span className="text-[10px] font-bold text-zinc-300 tracking-wider">
                  {grp.section}
                </span>
              </div>
              <dl className="space-y-3 text-[11px]">
                {grp.items.map(([role, name]) => (
                  <div key={role}>
                    <dt className="text-[9px] text-zinc-500 tracking-widest uppercase">{role}</dt>
                    <dd className="text-zinc-200 font-semibold mt-0.5">{name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[10px] text-zinc-500">
          <span>TYPESET IN MONOSPACE TELEMETRY &amp; CONDENSED DISPLAY · NO UNAUTHORIZED REPRODUCTION</span>
          <span className="text-[#ff3d00] font-bold">END OF RECORD // S-09</span>
        </div>
      </div>
    </section>
  );
}
