import React from 'react';

interface LedgerEntry {
  code: string;
  element: string;
  annotation: string;
  loadSpan: string;
  tolerance: string;
  elevation: string;
  status: 'VERIFIED' | 'CRITICAL' | 'ANCHORED';
}

export const Content1: React.FC = () => {
  const rows: LedgerEntry[] = [
    {
      code: 'KL-01A',
      element: 'PRIMARY BEDROCK ANCHOR PIER',
      annotation: 'Post-tensioned vertical tie-downs drilled 42 m into granite stratum',
      loadSpan: '1,840 kN · 0.0 m',
      tolerance: '±0.02 mm',
      elevation: '-14.20 m',
      status: 'ANCHORED',
    },
    {
      code: 'KL-02B',
      element: 'NORTH DIAGONAL CHORD TRUSS',
      annotation: 'S690QL box-section inclined at 12.5° above rail corridor',
      loadSpan: '620 kN/m · 18.0 m',
      tolerance: '±0.05 mm',
      elevation: '+4.80 m',
      status: 'CRITICAL',
    },
    {
      code: 'KL-03C',
      element: 'C60/75 CANTILEVER DECK SLAB',
      annotation: 'Hollow-core prestressed slab cast against charred cedar formwork',
      loadSpan: '48.5 kN/m² · 14.4 m',
      tolerance: '±0.08 mm',
      elevation: '+9.60 m',
      status: 'VERIFIED',
    },
    {
      code: 'KL-04D',
      element: 'KINETIC SOLAR LOUVER ARRAY',
      annotation: 'Anodized aluminum fins pitched at 14° along south-west elevation',
      loadSpan: '2.4 kN/m² · 3.2 m',
      tolerance: '±0.02 mm',
      elevation: '+13.40 m',
      status: 'VERIFIED',
    },
    {
      code: 'KL-05E',
      element: 'COUNTERWEIGHT BALLAST CORE',
      annotation: 'High-density magnetite concrete core balancing east terrace moment',
      loadSpan: '3,120 kN · 6.0 m',
      tolerance: '±0.04 mm',
      elevation: '+1.20 m',
      status: 'CRITICAL',
    },
    {
      code: 'KL-06F',
      element: 'ACOUSTIC THERMAL BREAK JOINT',
      annotation: 'Elastomeric shear isolator separating studio floor from steel frame',
      loadSpan: '190 kN · 0.4 m',
      tolerance: '±0.01 mm',
      elevation: '+17.80 m',
      status: 'ANCHORED',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] pt-0 pb-20 border-b border-[#14161a]/20 relative overflow-hidden">
      {/* Diagonal hatch strip along top edge */}
      <div
        className="w-full h-3 border-b border-[#14161a]/20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #14161a 0, #14161a 1px, transparent 1px, transparent 7px)',
          opacity: 0.18,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-12 space-y-8">
        {/* Dense program header bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#14161a] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-2.5 h-2.5 bg-[#ffc72c] transform skew-x-[-12deg]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/70">
                SCHEDULE A-04 · STRUCTURAL BILL OF QUANTITIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
              STÄFA PAVILION — TECTONIC LEDGER
            </h2>
          </div>

          <div className="font-mono text-[11px] uppercase text-right space-y-1 tabular-nums shrink-0">
            <div>DOC REF: KNT-2026-884</div>
            <div className="text-[#14161a]/60">GROSS VOLUME: 4,820 m³ · LEVELS: 4</div>
          </div>
        </div>

        {/* The Ledger Table-like Structure */}
        <div className="overflow-x-auto border border-[#14161a]/25 bg-[#f7f6f3]">
          <div className="min-w-[820px]">
            {/* Micro-caps header row with vertical hairline column divisions */}
            <div className="grid grid-cols-12 divide-x divide-[#14161a]/20 bg-[#14161a] text-[#f7f6f3] font-mono text-[10px] tracking-[0.18em] uppercase">
              <div className="col-span-2 px-3 py-3 font-bold">CODE</div>
              <div className="col-span-4 px-4 py-3 font-bold">SYSTEM ELEMENT & FIELD ANNOTATION</div>
              <div className="col-span-2 px-3 py-3 font-bold">LOAD / SPAN</div>
              <div className="col-span-1 px-3 py-3 font-bold">TOL.</div>
              <div className="col-span-2 px-3 py-3 font-bold">ELEVATION</div>
              <div className="col-span-1 px-3 py-3 font-bold text-right">STATE</div>
            </div>

            {/* Ledger Rows */}
            <div className="divide-y divide-[#14161a]/20">
              {rows.map((row) => (
                <div
                  key={row.code}
                  className="grid grid-cols-12 divide-x divide-[#14161a]/20 items-stretch hover:bg-[#14161a]/[0.03] transition-colors"
                >
                  <div className="col-span-2 px-3 py-4 font-mono text-xs font-bold tabular-nums flex items-center gap-2 whitespace-nowrap">
                    {row.status === 'CRITICAL' && (
                      <span className="w-1.5 h-4 bg-[#ffc72c] transform skew-x-[-12deg] shrink-0" />
                    )}
                    <span>{row.code}</span>
                  </div>

                  <div className="col-span-4 px-4 py-4">
                    <div className="font-extrabold uppercase text-sm tracking-tight">{row.element}</div>
                    <div className="text-xs text-[#14161a]/65 mt-1 font-sans">{row.annotation}</div>
                  </div>

                  <div className="col-span-2 px-3 py-4 font-mono text-[11px] tabular-nums flex items-center">
                    {row.loadSpan}
                  </div>

                  <div className="col-span-1 px-3 py-4 font-mono text-[11px] tabular-nums text-[#14161a]/75 flex items-center whitespace-nowrap">
                    {row.tolerance}
                  </div>

                  <div className="col-span-2 px-3 py-4 font-mono text-xs font-bold tabular-nums flex items-center justify-between whitespace-nowrap">
                    <span>{row.elevation}</span>
                    <span className="text-[10px] text-[#14161a]/45">ASL+</span>
                  </div>

                  <div className="col-span-1 px-3 py-4 font-mono text-[10px] font-bold flex items-center justify-end">
                    <span
                      className={
                        row.status === 'CRITICAL'
                          ? 'bg-[#ffc72c] text-[#14161a] px-1.5 py-0.5 transform skew-x-[-10deg]'
                          : 'text-[#14161a]/70'
                      }
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ledger Footer Totals Bar */}
            <div className="grid grid-cols-12 divide-x divide-[#14161a]/20 border-t-2 border-[#14161a] bg-[#14161a]/5 font-mono text-xs tabular-nums">
              <div className="col-span-6 px-4 py-3 uppercase font-bold flex items-center justify-between">
                <span>AGGREGATE STRUCTURAL VERIFICATION</span>
                <span className="text-[10px] text-[#14161a]/60">EUROCODE 2 / SIA 262</span>
              </div>
              <div className="col-span-2 px-3 py-3 font-bold whitespace-nowrap">5,770 kN TOTAL</div>
              <div className="col-span-1 px-3 py-3 text-[#14161a]/70 whitespace-nowrap">±0.03</div>
              <div className="col-span-3 px-3 py-3 font-bold flex items-center justify-between">
                <span>DELTA: 32.00 m</span>
                <span className="text-[10px] bg-[#14161a] text-[#ffc72c] px-2 py-0.5">SIGNED 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
