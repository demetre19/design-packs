import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface LedgerRow {
  folio: string;
  designation: string;
  caliber: string;
  tolerance: string;
  chamber: string;
  allocation: string;
  disposition: 'VAULTED' | 'ALLOCATED' | 'ATELIER';
  annotation?: string;
}

const LEDGER_ENTRIES: LedgerRow[] = [
  {
    folio: 'FOL-0104',
    designation: 'Tourbillon Souverain No. 12',
    caliber: 'ATH-9901',
    tolerance: '±0.14 s/d',
    chamber: 'GVA-04B',
    allocation: '01 / 08',
    disposition: 'VAULTED',
    annotation: 'Breguet overcoil hand-formed; seismic damper verified 18.0°C / 44% RH',
  },
  {
    folio: 'FOL-0118',
    designation: 'Répétition Minutes Cathédrale',
    caliber: 'ATH-7420',
    tolerance: '±0.19 s/d',
    chamber: 'LDN-11A',
    allocation: '02 / 05',
    disposition: 'ALLOCATED',
  },
  {
    folio: 'FOL-0129',
    designation: 'Quantième Perpétuel Sidéral',
    caliber: 'ATH-8804',
    tolerance: '±0.11 s/d',
    chamber: 'ZRH-02C',
    allocation: '04 / 12',
    disposition: 'VAULTED',
    annotation: 'Equation of time cam calibrated to Geneva meridian N 46°12′ E 06°09′',
  },
  {
    folio: 'FOL-0142',
    designation: 'Chronomètre à Résonance Twin',
    caliber: 'ATH-6100',
    tolerance: '±0.08 s/d',
    chamber: 'GVA-01A',
    allocation: '01 / 03',
    disposition: 'ATELIER',
    annotation: 'Dual balances undergoing final 360-hour six-position acoustic observation',
  },
  {
    folio: 'FOL-0156',
    designation: 'Régulateur de Précision Noir',
    caliber: 'ATH-5209',
    tolerance: '±0.22 s/d',
    chamber: 'TYO-07D',
    allocation: '06 / 15',
    disposition: 'ALLOCATED',
  },
  {
    folio: 'FOL-0171',
    designation: 'Squelette Ponts en Or 18K',
    caliber: 'ATH-9012',
    tolerance: '±0.16 s/d',
    chamber: 'LDN-09F',
    allocation: '03 / 06',
    disposition: 'VAULTED',
  },
  {
    folio: 'FOL-0188',
    designation: 'Observatoire Chronographe Rattrapante',
    caliber: 'ATH-9450',
    tolerance: '±0.12 s/d',
    chamber: 'ZRH-05A',
    allocation: '02 / 10',
    disposition: 'ATELIER',
    annotation: 'Split-seconds column wheel lapped with boxwood and diamond paste',
  },
];

export function Content1() {
  const [filter, setFilter] = useState<'ALL' | 'VAULTED' | 'ALLOCATED' | 'ATELIER'>('ALL');

  const visibleRows =
    filter === 'ALL' ? LEDGER_ENTRIES : LEDGER_ENTRIES.filter((entry) => entry.disposition === filter);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Ledger Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-[#d4b06a] uppercase mb-2">
              <span>DOC. REF // REG-2026-IV</span>
              <span aria-hidden="true">◆</span>
              <span>CHAMBER CUSTODY LEDGER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] tracking-wide">
              Master Horological &amp; Custody Register
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter ledger disposition">
            <span className="text-[10px] font-mono text-[#7a8494] mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-[#d4b06a]" strokeWidth={1.25} />
              STATUS:
            </span>
            {(['ALL', 'VAULTED', 'ALLOCATED', 'ATELIER'] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`px-3 py-1 text-[10px] font-mono tracking-widest border transition-colors whitespace-nowrap shrink-0 ${
                  filter === status
                    ? 'border-[#d4b06a] bg-[#d4b06a] text-[#0b0d10]'
                    : 'border-white/15 text-[#7a8494] hover:border-[#d4b06a]/50 hover:text-[#ece8e1]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Dense Annotated Table-Like Ledger */}
        <div className="w-full overflow-x-auto border-x border-b border-white/10 bg-[#0b0d10]">
          <div className="min-w-[820px]">
            {/* Column Headers */}
            <div className="grid grid-cols-12 border-b border-white/20 bg-[#13171c] text-[10px] font-mono tracking-[0.2em] text-[#d4b06a] uppercase divide-x divide-white/10">
              <div className="col-span-2 px-4 py-3">FOLIO NO.</div>
              <div className="col-span-4 px-4 py-3">TIMEPIECE DESIGNATION</div>
              <div className="col-span-2 px-4 py-3">CALIBER</div>
              <div className="col-span-1 px-4 py-3 text-right">RATE</div>
              <div className="col-span-1 px-4 py-3">CHAMBER</div>
              <div className="col-span-1 px-4 py-3 text-right">SERIES</div>
              <div className="col-span-1 px-4 py-3 text-right">STATE</div>
            </div>

            {/* Ledger Rows */}
            {visibleRows.map((row, idx) => (
              <div key={row.folio} className="border-b border-white/10 last:border-b-0">
                <div className="grid grid-cols-12 items-center text-xs divide-x divide-white/10 hover:bg-[#13171c]/60 transition-colors">
                  <div className="col-span-2 px-4 py-3.5 font-mono tabular-nums text-[#d4b06a] flex items-center gap-2">
                    <span className="text-[10px] text-[#7a8494]">0{idx + 1}</span>
                    <span>{row.folio}</span>
                  </div>
                  <div className="col-span-4 px-4 py-3.5 font-serif text-base text-[#ece8e1] tracking-wide">
                    {row.designation}
                  </div>
                  <div className="col-span-2 px-4 py-3.5 font-mono text-[11px] text-[#7a8494]">
                    {row.caliber}
                  </div>
                  <div className="col-span-1 px-4 py-3.5 font-mono tabular-nums text-[11px] text-[#ece8e1] text-right">
                    {row.tolerance}
                  </div>
                  <div className="col-span-1 px-4 py-3.5 font-mono text-[11px] text-[#7a8494]">
                    {row.chamber}
                  </div>
                  <div className="col-span-1 px-4 py-3.5 font-mono tabular-nums text-[11px] text-[#ece8e1] text-right">
                    {row.allocation}
                  </div>
                  <div className="col-span-1 px-4 py-3.5 font-mono text-[10px] tracking-wider text-right">
                    <span
                      className={
                        row.disposition === 'VAULTED'
                          ? 'text-[#d4b06a]'
                          : row.disposition === 'ATELIER'
                          ? 'text-[#ece8e1]'
                          : 'text-[#7a8494]'
                      }
                    >
                      {row.disposition}
                    </span>
                  </div>
                </div>

                {row.annotation && (
                  <div className="grid grid-cols-12 border-t border-white/5 bg-[#13171c]/30 text-[11px] divide-x divide-white/10">
                    <div className="col-span-2 px-4 py-2 font-mono text-[10px] text-[#7a8494] text-right">
                      NOTE //
                    </div>
                    <div className="col-span-10 px-4 py-2 font-mono text-[11px] text-[#7a8494] flex items-center gap-2">
                      <span className="text-[#d4b06a] text-[9px]">◆</span>
                      <span>{row.annotation}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reconciliation Footer */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] font-mono text-[#7a8494] tracking-wider">
          <div className="flex items-center gap-4">
            <span>DISPLAYED FOLIOS: 0{visibleRows.length}</span>
            <span className="text-[#d4b06a]">◆</span>
            <span>MEAN DEVIATION: ±0.15 s/d</span>
          </div>
          <span>AUDITED BY GENEVA OBSERVATORY // N 46°12′ E 06°09′</span>
        </div>
      </div>
    </section>
  );
}
