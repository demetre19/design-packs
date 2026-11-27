import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

interface LedgerRow {
  lot: string;
  subsystem: string;
  domain: 'CHASSIS' | 'AERO' | 'POWERTRAIN';
  material: string;
  tolerance: string;
  massKg: number;
  cert: string;
  note: string;
}

const LEDGER_ENTRIES: LedgerRow[] = [
  { lot: 'L-0104', subsystem: 'MONOCOQUE TUB CORE', domain: 'CHASSIS', material: 'T1000G CARBON / TI-6AL-4V', tolerance: '±0.08 MM', massKg: 74.2, cert: 'FIA-J.253', note: 'AUTOCLAVE CURE CYCLE 07 // 6.8 BAR' },
  { lot: 'L-0118', subsystem: 'VENTURI DIFFUSER FLOOR', domain: 'AERO', material: 'PRE-PREG ARAMID HONEYCOMB', tolerance: '±0.15 MM', massKg: 18.6, cert: 'TUNNEL-04', note: 'GROUND EFFECT SEAL TESTED AT 280 KM/H' },
  { lot: 'L-0209', subsystem: 'QUAD-TURBO EXHAUST MANIFOLD', domain: 'POWERTRAIN', material: 'INCONEL 718 THIN-WALL', tolerance: '±0.05 MM', massKg: 14.8, cert: 'THERM-980', note: 'CONTINUOUS THERMAL LOAD RATING 1,040 °C' },
  { lot: 'L-0244', subsystem: 'PUSHROD TORSION BELLCRANK', domain: 'CHASSIS', material: '7075-T6 BILLET / TI PIN', tolerance: '±0.02 MM', massKg: 6.4, cert: 'STRESS-8G', note: 'INBOARD DAMPER ACTUATION // 1:1.18 RATIO' },
  { lot: 'L-0312', subsystem: 'ACTIVE REAR AIRFOIL ELEMENT', domain: 'AERO', material: 'HIGH-MODULUS CARBON SKIN', tolerance: '±0.10 MM', massKg: 9.1, cert: 'DRS-ACT', note: 'HYDRAULIC PITCH RANGE -4° TO +18° IN 90 MS' },
  { lot: 'L-0387', subsystem: 'DRY SUMP SCAVENGE HOUSING', domain: 'POWERTRAIN', material: 'MAGNESIUM RZ5 SAND CAST', tolerance: '±0.03 MM', massKg: 11.3, cert: 'FLOW-4.8', note: 'FIVE-STAGE ROTOR PUMP // 4.8 BAR NOMINAL' },
  { lot: 'L-0419', subsystem: 'FRONT CRASH ATTENUATOR', domain: 'CHASSIS', material: 'CRUSHABLE CARBON CONE', tolerance: '±0.20 MM', massKg: 4.9, cert: 'FIA-IMP', note: 'ABSORBS 78 KJ IMPACT ENERGY AT 15 M/S' },
  { lot: 'L-0452', subsystem: 'CERAMIC BRAKE ROTOR SET (4X)', domain: 'CHASSIS', material: 'C/SIC SILICON CARBIDE', tolerance: '±0.01 MM', massKg: 19.2, cert: 'DYNO-200', note: '390 MM DIAMETER // FORCED VANE COOLING' },
];

export function Content1() {
  const [domainFilter, setDomainFilter] = useState<'ALL' | 'CHASSIS' | 'AERO' | 'POWERTRAIN'>('ALL');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const visibleRows = LEDGER_ENTRIES
    .filter((row) => domainFilter === 'ALL' || row.domain === domainFilter)
    .sort((a, b) => (sortAsc ? a.massKg - b.massKg : b.massKg - a.massKg));

  const totalMass = visibleRows.reduce((acc, r) => acc + r.massKg, 0).toFixed(1);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Ledger Metadata Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#111111] pb-4 mb-0 gap-4">
          <div>
            <div className="text-[9px] tracking-[0.28em] uppercase text-[#555555] mb-1">
              CONTENT-01 // HOMOLOGATION MASS &amp; TOLERANCE LEDGER // FOLIO A14-A26
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
              ASSEMBLY BILL OF MATERIALS
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1 text-[9px] uppercase tracking-widest">
            {(['ALL', 'CHASSIS', 'AERO', 'POWERTRAIN'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setDomainFilter(filter)}
                className={`px-2.5 py-1.5 border border-[#111111] cursor-pointer transition-colors ${
                  domainFilter === filter
                    ? 'bg-[#111111] text-[#e8e8e6] font-bold'
                    : 'bg-[#e8e8e6] text-[#111111] hover:bg-[#d8d8d4]'
                }`}
              >
                {filter}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSortAsc((prev) => !prev)}
              className="px-2.5 py-1.5 border border-[#111111] bg-[#f4f4f0] hover:bg-[#d8d8d4] cursor-pointer flex items-center gap-1"
              aria-label="Sort ledger by mass"
            >
              <ArrowUpDown className="w-3 h-3" />
              <span>MASS {sortAsc ? 'ASC' : 'DESC'}</span>
            </button>
          </div>
        </div>

        {/* Dense Annotated Ledger Structure */}
        <div className="overflow-x-auto border-x border-b border-[#111111] bg-[#f4f4f0]">
          <div className="min-w-[820px]">
            {/* Micro-Caps Header Row */}
            <div className="grid grid-cols-12 border-b-2 border-[#111111] bg-[#111111] text-[#e8e8e6] text-[9px] uppercase tracking-[0.2em] font-bold divide-x divide-[#333333]">
              <div className="col-span-1 px-3 py-2">LOT</div>
              <div className="col-span-3 px-3 py-2">SUBSYSTEM DESIGNATION</div>
              <div className="col-span-3 px-3 py-2">MATERIAL / ALLOY SPEC</div>
              <div className="col-span-2 px-3 py-2">TOLERANCE</div>
              <div className="col-span-1 px-3 py-2 text-right">MASS</div>
              <div className="col-span-2 px-3 py-2">AUDIT / CERT</div>
            </div>

            {/* Annotated Rows */}
            <div className="divide-y divide-[#111111]">
              {visibleRows.map((row, index) => (
                <div key={row.lot} className="hover:bg-[#e8e8e6] transition-colors">
                  <div className="grid grid-cols-12 divide-x divide-[#111111] text-[10px] items-stretch">
                    <div className="col-span-1 px-3 py-2.5 font-bold tabular-nums bg-[#e8e8e6]">
                      {row.lot}
                    </div>
                    <div className="col-span-3 px-3 py-2.5">
                      <div className="font-black uppercase tracking-tight text-[11px]">{row.subsystem}</div>
                      <div className="text-[8px] tracking-[0.18em] text-[#555555] mt-0.5">
                        [{String(index + 1).padStart(2, '0')}] // {row.note}
                      </div>
                    </div>
                    <div className="col-span-3 px-3 py-2.5 uppercase text-[#333333] flex items-center">
                      {row.material}
                    </div>
                    <div className="col-span-2 px-3 py-2.5 tabular-nums flex items-center justify-between">
                      <span>{row.tolerance}</span>
                      <span className="text-[8px] text-[#666666]">ISO-2768</span>
                    </div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-bold tabular-nums flex items-center justify-end">
                      {row.massKg.toFixed(1)} KG
                    </div>
                    <div className="col-span-2 px-3 py-2.5 flex items-center justify-between text-[9px]">
                      <span className="font-bold">{row.cert}</span>
                      <span className="text-[8px] tracking-widest text-[#555555]">PASS</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ledger Checksum Footer */}
            <div className="grid grid-cols-12 border-t-2 border-[#111111] bg-[#e8e8e6] divide-x divide-[#111111] text-[9px] uppercase tracking-widest">
              <div className="col-span-4 px-3 py-2.5 flex items-center justify-between">
                <span>ENTRIES SHOWN: {visibleRows.length} OF {LEDGER_ENTRIES.length}</span>
                <span className="text-[#555555]">ANNEX J VERIFIED</span>
              </div>
              <div className="col-span-5 px-3 py-2.5 flex items-center gap-3">
                <span className="text-[#555555]">GREY CALIBRATION:</span>
                <div className="flex items-center gap-1">
                  {['111111', '4D4D4D', '8A8A8A', 'B3B3B3', 'E8E8E6'].map((hex) => (
                    <span key={hex} className="inline-flex items-center gap-1 text-[8px]">
                      <span className="w-2.5 h-2.5 border border-[#111111] inline-block" style={{ backgroundColor: `#${hex}` }} />
                      <span>{hex}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-1 px-3 py-2.5 text-right font-black tabular-nums bg-[#111111] text-[#e8e8e6]">
                {totalMass} KG
              </div>
              <div className="col-span-2 px-3 py-2 flex items-center gap-2">
                <div className="h-3.5 flex-1 bg-[repeating-linear-gradient(90deg,#111,#111_2px,#e8e8e6_2px,#e8e8e6_4px)] border border-[#111111]" />
                <span className="text-[8px]">37599C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
