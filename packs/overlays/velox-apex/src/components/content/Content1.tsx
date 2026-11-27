import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface LedgerRow {
  ref: string;
  assembly: string;
  subsystem: 'CHASSIS' | 'POWERTRAIN' | 'AERO';
  material: string;
  massKg: string;
  tolerance: string;
  batchNote: string;
}

const LEDGER_ROWS: LedgerRow[] = [
  { ref: 'VX-101', assembly: 'MAIN STRUCTURAL MONOCOQUE', subsystem: 'CHASSIS', material: 'T1100G PREPREG CARBON', massKg: '11.40', tolerance: '±0.05 MM', batchNote: 'AUTOCLAVE CURED' },
  { ref: 'VX-104', assembly: 'REAR CANTILEVER SUBFRAME', subsystem: 'CHASSIS', material: 'TI-6AL-4V BILLET CNC', massKg: '02.80', tolerance: '±0.02 MM', batchNote: '5-AXIS MILLED' },
  { ref: 'VX-201', assembly: '998V SOLID-STATE CORE PACK', subsystem: 'POWERTRAIN', material: 'CERAMIC ELECTROLYTE CELL', massKg: '68.50', tolerance: '±0.10 MM', batchNote: 'DIELECTRIC SEALED' },
  { ref: 'VX-208', assembly: 'DUAL AXIAL-FLUX STATOR PAIR', subsystem: 'POWERTRAIN', material: 'COBALT-IRON LAMINATION', massKg: '19.20', tolerance: '±0.01 MM', batchNote: '215 HP RATED' },
  { ref: 'VX-302', assembly: 'BIPLANE DOWNFORCE CANARD', subsystem: 'AERO', material: 'FORGED CHOPPED CARBON', massKg: '01.65', tolerance: '±0.08 MM', batchNote: '340 KG @ 280 KM/H' },
  { ref: 'VX-309', assembly: 'VENTURI BELLY DIFFUSER', subsystem: 'AERO', material: 'ARAMID HONEYCOMB SANDWICH', massKg: '02.10', tolerance: '±0.12 MM', batchNote: 'SUZUKA SPEC' },
  { ref: 'VX-411', assembly: '390MM DUAL FRONT ROTORS', subsystem: 'CHASSIS', material: 'CARBON-SILICON CARBIDE', massKg: '03.40', tolerance: '±0.01 MM', batchNote: '8-PISTON CALIPER' },
];

export function Content1() {
  const [filter, setFilter] = useState<'ALL' | 'CHASSIS' | 'POWERTRAIN' | 'AERO'>('ALL');
  const [selectedRef, setSelectedRef] = useState<string>('VX-201');

  const visibleRows = filter === 'ALL' ? LEDGER_ROWS : LEDGER_ROWS.filter((r) => r.subsystem === filter);
  const totalMass = visibleRows.reduce((acc, r) => acc + parseFloat(r.massKg), 0).toFixed(2);

  return (
    <section className="w-full bg-white text-black py-14 border-b-2 border-black relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Register Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-black">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-1">
              FOLIO 01 / ARCHITECTURAL BILL OF MATERIALS
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              THE MASS <span className="text-[#ff2e00]">LEDGER</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1 border border-black p-1 bg-white">
            {(['ALL', 'CHASSIS', 'POWERTRAIN', 'AERO'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest cursor-pointer transition-colors whitespace-nowrap ${
                  filter === cat ? 'bg-black text-white font-bold' : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dense Annotated Ledger Table */}
        <div className="border-t-2 border-b-2 border-black relative overflow-x-auto">
          <Plus className="w-3 h-3 absolute -top-1.5 -left-1.5 text-[#ff2e00]" />
          <Plus className="w-3 h-3 absolute -top-1.5 -right-1.5 text-[#ff2e00]" />

          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-black font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 divide-x divide-black bg-neutral-50">
                <th className="py-2.5 px-3 font-bold">PART REF</th>
                <th className="py-2.5 px-3 font-bold">SUB-ASSEMBLY NOMENCLATURE</th>
                <th className="py-2.5 px-3 font-bold">SPECIFIED ALLOY / MATRIX</th>
                <th className="py-2.5 px-3 font-bold text-right">MASS (KG)</th>
                <th className="py-2.5 px-3 font-bold text-right">TOLERANCE</th>
                <th className="py-2.5 px-3 font-bold">BATCH NOTE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black font-mono text-[11px]">
              {visibleRows.map((row) => {
                const isSelected = selectedRef === row.ref;
                return (
                  <tr
                    key={row.ref}
                    onClick={() => setSelectedRef(row.ref)}
                    className={`divide-x divide-black cursor-pointer transition-colors ${
                      isSelected ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'
                    }`}
                  >
                    <td className={`py-3 px-3 font-bold tabular-nums whitespace-nowrap ${isSelected ? 'text-[#ff2e00]' : 'text-black'}`}>
                      {row.ref}
                    </td>
                    <td className="py-3 px-3 font-sans font-black uppercase tracking-tight text-sm">
                      {row.assembly}
                    </td>
                    <td className={`py-3 px-3 uppercase ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {row.material}
                    </td>
                    <td className="py-3 px-3 text-right font-bold tabular-nums">
                      {row.massKg}
                    </td>
                    <td className={`py-3 px-3 text-right tabular-nums whitespace-nowrap ${isSelected ? 'text-[#ff2e00]' : 'text-neutral-700'}`}>
                      {row.tolerance}
                    </td>
                    <td className="py-3 px-3 uppercase tracking-wider text-[10px] whitespace-nowrap">
                      {row.batchNote}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-black divide-x divide-black font-mono text-xs bg-white">
                <td colSpan={3} className="py-3 px-3 uppercase tracking-[0.2em] text-[10px] font-bold">
                  SUBTOTAL AUDITED ASSEMBLIES ({visibleRows.length} ENTRIES) — DRY CURB TARGET: 198.00 KG
                </td>
                <td className="py-3 px-3 text-right font-black tabular-nums text-base text-[#ff2e00]">
                  {totalMass}
                </td>
                <td colSpan={2} className="py-3 px-3 font-mono text-[10px] text-neutral-500 uppercase">
                  VERIFIED SUZUKA METROLOGY BAY 02
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
