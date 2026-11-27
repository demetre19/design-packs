import React from 'react';

interface IndexGroup {
  sectionNum: string;
  category: string;
  folioRange: string;
  entries: { code: string; title: string; rev: string; page: string }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    sectionNum: '01',
    category: 'STRUCTURAL MONOCOQUE & SAFETY CELL',
    folioRange: 'PP. 001–042',
    entries: [
      { code: '1.01', title: 'T1000G CARBON LAYUP SCHEDULE & FIBER ORIENTATION', rev: 'REV.4', page: 'P.004' },
      { code: '1.02', title: 'TITANIUM ROLL HOOP BULKHEAD ATTACHMENT TORQUE', rev: 'REV.2', page: 'P.012' },
      { code: '1.03', title: 'FIA ANNEX J FRONTAL CRASH CONE DEFORMATION LOG', rev: 'REV.7', page: 'P.027' },
      { code: '1.04', title: 'TORSIONAL RIGIDITY TEST BENCH CERTIFICATES', rev: 'REV.1', page: 'P.038' },
    ],
  },
  {
    sectionNum: '02',
    category: 'AERODYNAMIC SURFACES & TUNNEL CORRELATION',
    folioRange: 'PP. 043–096',
    entries: [
      { code: '2.01', title: 'VENTURI FLOOR THROAT PRESSURE DISTRIBUTION MAPS', rev: 'REV.5', page: 'P.044' },
      { code: '2.02', title: 'ACTIVE SWAN-NECK REAR AIRFOIL HYDRAULIC LIMITS', rev: 'REV.3', page: 'P.061' },
      { code: '2.03', title: 'FRONT SPLITTER PITCH SENSITIVITY AT 300 KM/H', rev: 'REV.2', page: 'P.079' },
      { code: '2.04', title: 'STUTTGART WIND TUNNEL BLOCKAGE CORRECTIONS', rev: 'REV.6', page: 'P.091' },
    ],
  },
  {
    sectionNum: '03',
    category: '4.0L QUAD-TURBO V8 POWERTRAIN & TRANSAXLE',
    folioRange: 'PP. 097–148',
    entries: [
      { code: '3.01', title: 'FORGED TITANIUM CONNECTING ROD FATIGUE CURVES', rev: 'REV.3', page: 'P.098' },
      { code: '3.02', title: 'INCONEL 718 MANIFOLD THERMAL EXPANSION JOINTS', rev: 'REV.4', page: 'P.114' },
      { code: '3.03', title: 'PNEUMATIC VALVETRAIN 9,200 RPM HARMONIC AUDIT', rev: 'REV.2', page: 'P.129' },
      { code: '3.04', title: '7-SPEED SEAMLESS MAGNESIUM TRANSAXLE RATIOS', rev: 'REV.1', page: 'P.142' },
    ],
  },
];

export function Content9() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dense Typographic Header */}
        <div className="border-t-2 border-b-2 border-[#111111] py-4 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            MASTER BINDER INDEX
          </h2>
          <div className="text-[9px] uppercase tracking-[0.25em] text-[#555555]">
            CONTENT-09 // FOLIO 001–148 // ARCHIVE EDITION 2026.4
          </div>
        </div>

        {/* Multi-Scale Category Index Groups */}
        <div className="space-y-8">
          {INDEX_GROUPS.map((group) => (
            <div key={group.sectionNum} className="border-b border-[#111111] pb-6">
              {/* Group Category Header */}
              <div className="flex items-baseline justify-between mb-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter tabular-nums">
                    {group.sectionNum}
                  </span>
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest">
                    {group.category}
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-[#555555] shrink-0">
                  {group.folioRange}
                </span>
              </div>

              {/* Entries with Hairline / Dot Leaders */}
              <div className="space-y-2 pl-0 md:pl-14">
                {group.entries.map((entry) => (
                  <div
                    key={entry.code}
                    className="flex items-baseline gap-2 text-[10px] md:text-[11px] uppercase group"
                  >
                    <span className="font-bold tabular-nums text-[#555555] shrink-0">
                      {entry.code}
                    </span>
                    <span className="font-bold tracking-tight shrink-0 max-w-[68%] sm:max-w-none truncate sm:whitespace-normal">
                      {entry.title}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted border-[#111111] min-w-[20px] -translate-y-1"
                      aria-hidden="true"
                    />
                    <span className="text-[8px] text-[#555555] tracking-widest shrink-0 hidden sm:inline">
                      [{entry.rev}]
                    </span>
                    <span className="font-black tabular-nums shrink-0 bg-[#f4f4f0] px-1 border border-[#111111] text-[9px]">
                      {entry.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Reference Colophon Line */}
        <div className="mt-6 flex flex-wrap justify-between items-center text-[9px] uppercase tracking-[0.2em] text-[#555555]">
          <span>SEE ALSO: APPENDIX F-99 (TELEMETRY CHANNELS) // ANNEX J-253</span>
          <span className="font-bold text-[#111111]">TOTAL ARCHIVED PLATES: 412</span>
        </div>
      </div>
    </section>
  );
}
