import React from 'react';

interface LedgerRow {
  ref: string;
  subsystem: string;
  subnote: string;
  envelope: string;
  flux: string;
  delta: string;
  disp: 'PASS' | 'HOLD' | 'PEAK';
}

const LEDGER_ROWS: LedgerRow[] = [
  {
    ref: 'L-01.A',
    subsystem: 'NOSE PITOT CONE // TUNGSTEN-RHENIUM TIP',
    subnote: 'Stagnation thermal probe & shock-angle transducer array',
    envelope: 'M 4.84 · FL640',
    flux: '1,840 kW/m²',
    delta: '+0.002 mm',
    disp: 'PEAK',
  },
  {
    ref: 'L-01.B',
    subsystem: 'DORSAL VARIABLE INTAKE RAMP // ACTUATOR SET 02',
    subnote: 'Schlieren shock-train lock under 12° angle-of-attack sweep',
    envelope: 'M 3.92 · FL560',
    flux: '910 kW/m²',
    delta: '-0.140 deg',
    disp: 'PASS',
  },
  {
    ref: 'L-02.A',
    subsystem: 'SCRAMJET COMBUSTOR LINER // C/SiC MATRIX',
    subnote: 'Supersonic hydrogen injection rail & flameholder cavity',
    envelope: 'M 4.50 · FL610',
    flux: '2,420 kW/m²',
    delta: '+0.018 bar',
    disp: 'PEAK',
  },
  {
    ref: 'L-02.B',
    subsystem: 'REGENERATIVE CRYOGENIC FUEL MANIFOLD',
    subnote: 'LH2 endothermic heat exchanger feeding leading-edge ribs',
    envelope: 'M 4.10 · FL580',
    flux: '640 kW/m²',
    delta: '-14.2 °C',
    disp: 'PASS',
  },
  {
    ref: 'L-03.A',
    subsystem: 'VENTRAL TITANIUM HONEYCOMB BULKHEAD',
    subnote: 'Primary load-bearing spine between stations STA-140 and STA-310',
    envelope: 'M 3.40 · FL490',
    flux: '380 kW/m²',
    delta: '+5.82 G',
    disp: 'PASS',
  },
  {
    ref: 'L-03.B',
    subsystem: 'ELEVON CARBON-PHENOLIC HINGE SEAL',
    subnote: 'High-frequency flutter damper during transonic deceleration',
    envelope: 'M 1.18 · FL320',
    flux: '215 kW/m²',
    delta: '+0.041 Hz',
    disp: 'HOLD',
  },
];

export function Content1() {
  return (
    <section
      aria-label="Flight Test Ledger"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-12 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex">
        {/* Vertical Stencil Margin Index */}
        <div className="hidden md:flex flex-col items-center justify-between border-r border-[#2a2d35] pr-4 mr-6 py-1 select-none">
          <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold [writing-mode:vertical-lr] rotate-180 uppercase">
            LEDGER // S-09 AUDIT
          </span>
          <span className="text-[10px] text-zinc-500 [writing-mode:vertical-lr] rotate-180">
            FOLIO 04-B
          </span>
        </div>

        <div className="flex-1 min-w-0">
          {/* Top Document Title Strip */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-[#3a3e4c] pb-3 mb-0">
            <div className="flex items-baseline gap-4">
              <span className="text-[11px] text-[#ff3d00] font-bold tracking-[0.25em] uppercase">
                PROGRAM LEDGER
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
                X-99 SPECTRE THERMAL &amp; STRUCTURAL SCHEDULE
              </h2>
            </div>
            <div className="text-[11px] text-zinc-400 tabular-nums">
              RANGE: AREA-51 // SORTIE S-09 // UNITS: SI-METRIC
            </div>
          </div>

          {/* Dense Annotated Ledger Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left tabular-nums">
              <thead>
                <tr className="border-b border-[#3a3e4c] bg-[#111318] text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                  <th className="py-2.5 px-3 border-r border-[#2a2d35] w-20">REF</th>
                  <th className="py-2.5 px-3 border-r border-[#2a2d35]">SUBSYSTEM / TEST ARTICLE</th>
                  <th className="py-2.5 px-3 border-r border-[#2a2d35] whitespace-nowrap">ENVELOPE</th>
                  <th className="py-2.5 px-3 border-r border-[#2a2d35] text-right whitespace-nowrap">THERMAL FLUX</th>
                  <th className="py-2.5 px-3 border-r border-[#2a2d35] text-right whitespace-nowrap">NOMINAL DELTA</th>
                  <th className="py-2.5 px-3 text-right w-20">DISP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2d35] text-xs">
                {LEDGER_ROWS.map((row) => (
                  <tr key={row.ref} className="hover:bg-[#20232a]/60 transition-colors align-top">
                    <td className="py-3 px-3 border-r border-[#2a2d35] font-bold text-[#ff3d00] whitespace-nowrap">
                      {row.ref}
                    </td>
                    <td className="py-3 px-3 border-r border-[#2a2d35]">
                      <div className="font-bold text-white tracking-tight">{row.subsystem}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{row.subnote}</div>
                    </td>
                    <td className="py-3 px-3 border-r border-[#2a2d35] text-zinc-300 whitespace-nowrap">
                      {row.envelope}
                    </td>
                    <td className="py-3 px-3 border-r border-[#2a2d35] text-right text-white font-semibold whitespace-nowrap">
                      {row.flux}
                    </td>
                    <td className="py-3 px-3 border-r border-[#2a2d35] text-right text-zinc-300 whitespace-nowrap">
                      {row.delta}
                    </td>
                    <td className="py-3 px-3 text-right font-extrabold whitespace-nowrap">
                      <span
                        className={
                          row.disp === 'PEAK'
                            ? 'text-[#ff3d00]'
                            : row.disp === 'HOLD'
                            ? 'text-amber-400'
                            : 'text-zinc-300'
                        }
                      >
                        {row.disp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#3a3e4c] bg-[#111318] text-[11px]">
                  <td className="py-3 px-3 border-r border-[#2a2d35] text-zinc-500 font-bold">TOTAL</td>
                  <td className="py-3 px-3 border-r border-[#2a2d35] text-zinc-300">
                    6 INSTRUMENTED ARTICLES VERIFIED // ZERO STRUCTURAL DELAMINATION
                  </td>
                  <td className="py-3 px-3 border-r border-[#2a2d35] text-zinc-400">MAX M 4.84</td>
                  <td className="py-3 px-3 border-r border-[#2a2d35] text-right font-bold text-[#ff3d00]">
                    6,405 kW/m²
                  </td>
                  <td className="py-3 px-3 border-r border-[#2a2d35] text-right text-zinc-400">±0.02%</td>
                  <td className="py-3 px-3 text-right font-black text-[#ff3d00]">CLOSED</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Micro-Footer Warning Band */}
          <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-500">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block w-16 h-2"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(-45deg, #ff3d00, #ff3d00 4px, #16181d 4px, #16181d 8px)',
                }}
              />
              <span>CALIBRATED AGAINST WIND TUNNEL RUN #WT-408</span>
            </div>
            <span>CERTIFIED: VANGUARD FLIGHT STRUCTURES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
