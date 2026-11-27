import React, { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';

type LedgerFilter = 'ALL' | 'TRACK' | 'ENDURANCE';

interface LedgerRow {
  ref: string;
  subsystem: string;
  protocol: string;
  category: 'TRACK' | 'ENDURANCE';
  peakLoad: string;
  thermalDelta: string;
  efficiency: string;
  status: string;
  footnote: string;
}

const LEDGER_ROWS: LedgerRow[] = [
  {
    ref: 'LN-041',
    subsystem: 'AXIAL FLUX STATOR // FRONT',
    protocol: 'CONTINUOUS DYNO PULL 18,500 RPM',
    category: 'TRACK',
    peakLoad: '117.4 kW',
    thermalDelta: '+18.2 °C',
    efficiency: '97.8 %',
    status: 'PASS // A1',
    footnote: 'Direct dielectric oil circulation held copper winding peak at 79.4 °C across 14 consecutive full-throttle sweeps.',
  },
  {
    ref: 'LN-042',
    subsystem: 'SiC DUAL INVERTER BRIDGE',
    protocol: '800V STEP-TRANSIENT SWITCHING',
    category: 'TRACK',
    peakLoad: '640.0 A',
    thermalDelta: '+11.6 °C',
    efficiency: '99.4 %',
    status: 'PASS // A1',
    footnote: 'Gate-drive dead-time calibrated to 110 ns; zero harmonic ringing observed under regenerative braking reversal.',
  },
  {
    ref: 'LN-043',
    subsystem: 'SOLID-STATE PACK // BAY B',
    protocol: '350 KW DC FAST CHARGE CYCLE',
    category: 'ENDURANCE',
    peakLoad: '348.2 kW',
    thermalDelta: '+22.0 °C',
    efficiency: '96.1 %',
    status: 'PASS // A2',
    footnote: '0–80% SOC completed in 11m 54s with cold-plate glycol loop pre-chilled to 19.0 °C.',
  },
  {
    ref: 'LN-044',
    subsystem: 'T1000G MONOCOQUE SPINE',
    protocol: 'TORSIONAL RIGIDITY & BRAKE DIVE',
    category: 'TRACK',
    peakLoad: '29.4 kN·m',
    thermalDelta: '+01.4 °C',
    efficiency: '99.9 %',
    status: 'PASS // A1',
    footnote: 'Laser-interferometer deflection measured 0.04 mm at steering head under simulated 2.2 G threshold braking.',
  },
  {
    ref: 'LN-045',
    subsystem: 'PLANETARY REDUCTION STAGE',
    protocol: 'HELICAL GEAR MESH // 500 HR RUN',
    category: 'ENDURANCE',
    peakLoad: '128.0 N·m',
    thermalDelta: '+14.8 °C',
    efficiency: '98.7 %',
    status: 'PASS // A1',
    footnote: 'DLC-coated chromoly teeth showed < 0.003 mm flank wear after 500 hours at alternating Suzuka load profiles.',
  },
  {
    ref: 'LN-046',
    subsystem: 'ACTIVE AERO WINGLET ACTUATOR',
    protocol: '250 KM/H DOWNFORCE DEPLOY',
    category: 'TRACK',
    peakLoad: '48.2 kgf',
    thermalDelta: '+06.3 °C',
    efficiency: '94.5 %',
    status: 'PASS // A1',
    footnote: 'Full 18° flap transition executed in 185 ms triggered by front-fork pressure transducer.',
  },
  {
    ref: 'LN-047',
    subsystem: 'BREMBO GP4-RR REGEN BLEND',
    protocol: 'COMBINED DECELERATION HARVEST',
    category: 'ENDURANCE',
    peakLoad: '94.0 kW',
    thermalDelta: '+31.5 °C',
    efficiency: '34.2 %',
    status: 'PASS // A2',
    footnote: '34.2% of kinetic braking energy recovered into cell pack across 20 simulated Suzuka hairpin decelerations.',
  },
];

export function Content1() {
  const [filter, setFilter] = useState<LedgerFilter>('ALL');
  const [selectedRef, setSelectedRef] = useState<string>('LN-041');

  const visibleRows = LEDGER_ROWS.filter((r) => filter === 'ALL' || r.category === filter);
  const activeFootnote = LEDGER_ROWS.find((r) => r.ref === selectedRef) || visibleRows[0];

  return (
    <section className="py-16 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Ledger Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#272a33]">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              DOCUMENT 01 // HOMOLOGATION AUDIT LEDGER
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              DYNAMOMETER &amp; STRUCTURAL SCHEDULE
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono-spec text-[11px]">
            {(['ALL', 'TRACK', 'ENDURANCE'] as LedgerFilter[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setFilter(mode)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  filter === mode
                    ? 'bg-[#ff5a1f] text-black border-[#ff5a1f] font-bold'
                    : 'bg-[#16181d] text-neutral-400 border-[#272a33] hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Dense Annotated Ledger Table */}
        <div className="overflow-x-auto border-x border-b border-[#272a33]">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-[#16181d] border-b border-[#272a33] font-mono-spec text-[10px] text-neutral-400 tracking-widest uppercase">
                <th className="py-3 px-4 border-r border-[#272a33] w-24">REF</th>
                <th className="py-3 px-4 border-r border-[#272a33]">SUBSYSTEM / PROTOCOL</th>
                <th className="py-3 px-4 border-r border-[#272a33] text-right">PEAK LOAD</th>
                <th className="py-3 px-4 border-r border-[#272a33] text-right">THERMAL Δ</th>
                <th className="py-3 px-4 border-r border-[#272a33] text-right">EFFICIENCY</th>
                <th className="py-3 px-4 text-right">SIGN-OFF</th>
              </tr>
            </thead>
            <tbody className="font-mono-spec text-xs divide-y divide-[#272a33] tabular-nums">
              {visibleRows.map((row, index) => {
                const isSelected = row.ref === selectedRef;
                return (
                  <tr
                    key={row.ref}
                    onClick={() => setSelectedRef(row.ref)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#ff5a1f]/10 text-white'
                        : index % 2 === 0
                        ? 'bg-[#101114] hover:bg-[#16181d]'
                        : 'bg-[#13151a] hover:bg-[#16181d]'
                    }`}
                  >
                    <td className="py-3.5 px-4 border-r border-[#272a33] font-bold">
                      <span className={isSelected ? 'text-[#ff5a1f]' : 'text-neutral-400'}>
                        {isSelected ? '▸ ' : ''}
                        {row.ref}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#272a33]">
                      <div className="font-bold text-white tracking-tight">{row.subsystem}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{row.protocol}</div>
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#272a33] text-right text-white font-bold">
                      {row.peakLoad}
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#272a33] text-right text-neutral-300">
                      {row.thermalDelta}
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#272a33] text-right text-[#ff5a1f] font-bold">
                      {row.efficiency}
                    </td>
                    <td className="py-3.5 px-4 text-right text-neutral-300">
                      {row.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-[#16181d] border-t-2 border-[#272a33] font-mono-spec text-[11px] tabular-nums">
                <td className="py-3 px-4 border-r border-[#272a33] text-[#ff5a1f] font-bold">AGGREGATE</td>
                <td className="py-3 px-4 border-r border-[#272a33] text-neutral-400">
                  {visibleRows.length} VERIFIED ENTRIES // MUNICH DYNO BAY 04
                </td>
                <td className="py-3 px-4 border-r border-[#272a33] text-right text-white font-bold">800V BUS</td>
                <td className="py-3 px-4 border-r border-[#272a33] text-right text-neutral-400">MAX +31.5 °C</td>
                <td className="py-3 px-4 border-r border-[#272a33] text-right text-[#ff5a1f] font-bold">97.9 % AVG</td>
                <td className="py-3 px-4 text-right text-white font-bold">CERTIFIED</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Annotated Footnote Ledger Footer */}
        {activeFootnote && (
          <div className="border-x border-b border-[#272a33] bg-[#14161b] px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-spec text-xs">
            <div className="flex items-start gap-3">
              <ArrowDownRight size={15} className="text-[#ff5a1f] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#ff5a1f] font-bold mr-2">NOTE [{activeFootnote.ref}]:</span>
                <span className="text-neutral-300">{activeFootnote.footnote}</span>
              </div>
            </div>
            <span className="text-[10px] text-neutral-500 shrink-0">
              AUDITED // APEX-V12 R BATCH 04
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
