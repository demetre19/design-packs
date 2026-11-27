import React from 'react';
import { Hexagon } from 'lucide-react';

export function Content1() {
  const rows = [
    {
      seq: '01.A',
      assembly: 'CRANKSHAFT JOURNAL SET',
      sub: '4340 Billet Forging · Deep Nitrided 0.65 mm Case',
      protocol: 'HARMONIC TORSION SWEEP',
      tolerance: '±0.0018 mm',
      peakVal: '8,400',
      peakUnit: 'RPM',
      deltaVal: '+1.4',
      deltaUnit: '°C/MIN',
      state: 'NOMINAL',
    },
    {
      seq: '01.B',
      assembly: 'TWIN-SCROLL TURBINE HOUSING',
      sub: 'Inconel 713C Cast · Ceramic Thermal Barrier',
      protocol: 'EXHAUST GAS BACKPRESSURE',
      tolerance: '±0.015 BAR',
      peakVal: '2.84',
      peakUnit: 'BAR',
      deltaVal: '890.4',
      deltaUnit: '°C EGT',
      state: 'ACTIVE',
    },
    {
      seq: '02.A',
      assembly: 'TITANIUM INTAKE VALVETRAIN',
      sub: 'Ti-6Al-4V Hollow Stem · Pneumatic Return Seat',
      protocol: 'OPTICAL LASER LIFT CHECK',
      tolerance: '±0.004 mm',
      peakVal: '14.20',
      peakUnit: 'MM LIFT',
      deltaVal: '0.02',
      deltaUnit: 'MM FLOAT',
      state: 'NOMINAL',
    },
    {
      seq: '02.B',
      assembly: 'DRY-SUMP SCAVENGE STAGE IV',
      sub: '5-Lobe Rotor Pack · Anodized 7075-T6 Housing',
      protocol: 'CAVITATION / AERATION LOG',
      tolerance: '±0.08 BAR',
      peakVal: '6.45',
      peakUnit: 'BAR OIL',
      deltaVal: '94.2',
      deltaUnit: '°C SUMP',
      state: 'NOMINAL',
    },
    {
      seq: '03.A',
      assembly: 'DIRECT-PORT PIEZO INJECTOR RAIL',
      sub: 'Common Billet Rail · Dual High-Pressure Plungers',
      protocol: 'MASS FLOW CALIBRATION',
      tolerance: '±0.12 CC/S',
      peakVal: '350.0',
      peakUnit: 'BAR RAIL',
      deltaVal: '1,420',
      deltaUnit: 'MG/STROKE',
      state: 'ACTIVE',
    },
    {
      seq: '03.B',
      assembly: 'CLOSED-DECK CYLINDER SLEEVE',
      sub: 'Nikasil Bore Matrix · Cross-Hatch 38° Honing',
      protocol: 'BLOW-BY VOLUMETRIC AUDIT',
      tolerance: '±0.4 L/MIN',
      peakVal: '612',
      peakUnit: 'NM BRAKE',
      deltaVal: '0.31',
      deltaUnit: '% LEAK',
      state: 'NOMINAL',
    },
    {
      seq: '04.A',
      assembly: 'CARBON PLENUM THROTTLE BODY',
      sub: 'Autoclave Pre-Preg · Dual 76 mm Butterfly Plates',
      protocol: 'STEPPER RESPONSE LATENCY',
      tolerance: '±0.3 MS',
      peakVal: '1.85',
      peakUnit: 'MS STEP',
      deltaVal: '41.6',
      deltaUnit: '°C IAT',
      state: 'NOMINAL',
    },
    {
      seq: '04.B',
      assembly: 'EDDY-CURRENT DYNO COUPLING',
      sub: 'Water-Cooled Stator · Zero-Backlash Spline Shaft',
      protocol: 'TRANSIENT BRAKE CALIBRATION',
      tolerance: '±0.02 %',
      peakVal: '718.5',
      peakUnit: 'KW SHAFT',
      deltaVal: '0.04',
      deltaUnit: 'G VIB',
      state: 'VERIFIED',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      {/* Subtle vertical margin channel label */}
      <div className="hidden xl:flex items-center gap-3 absolute left-3 top-20 bottom-20 pointer-events-none select-none">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.35em] text-zinc-600 uppercase">
          CH-04 // CALIBRATION LEDGER STATEMENT // RUN 07/40
        </span>
        <div className="w-px h-full bg-[#22262f]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Ledger Document Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-5 border-b-2 border-[#ffd500] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#ffd500] uppercase mb-1">
              <span className="w-2 h-2 bg-[#ffd500] inline-block" />
              <span>KERSHAW DYNAMICS // CELL 04 AUDIT REGISTER</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
              POWERTRAIN CALIBRATION LEDGER
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-zinc-400 tabular-nums">
            <span>DOSSIER: <strong className="text-white">KD-998-V8</strong></span>
            <span>BAROMETRIC: <strong className="text-white">101.3 KPA</strong></span>
            <span>RUN REF: <strong className="text-[#ffd500]">07 / 40</strong></span>
          </div>
        </div>

        {/* Dense Tabular Ledger */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left tabular-nums">
            <thead>
              <tr className="border-b border-[#262c36] text-[10px] tracking-[0.18em] text-zinc-500 uppercase bg-[#111317]">
                <th className="py-3 pr-4 pl-2 border-r border-[#22262f] font-bold">SEQ</th>
                <th className="py-3 px-4 border-r border-[#22262f] font-bold">ASSEMBLY &amp; MATERIAL SPEC</th>
                <th className="py-3 px-4 border-r border-[#22262f] font-bold">TEST PROTOCOL</th>
                <th className="py-3 px-4 border-r border-[#22262f] font-bold text-right">TOLERANCE</th>
                <th className="py-3 px-4 border-r border-[#22262f] font-bold text-right">PEAK READOUT</th>
                <th className="py-3 px-4 border-r border-[#22262f] font-bold text-right">THERMAL / FLOW</th>
                <th className="py-3 pl-4 pr-2 font-bold text-right">VERDICT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22262f]">
              {rows.map((row) => (
                <tr key={row.seq} className="hover:bg-[#14161a] transition-colors group">
                  <td className="py-3.5 pr-4 pl-2 border-r border-[#22262f] text-xs font-bold text-[#ffd500] align-top whitespace-nowrap">
                    {row.seq}
                  </td>
                  <td className="py-3.5 px-4 border-r border-[#22262f] align-top">
                    <div className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-[#ffd500] transition-colors">
                      {row.assembly}
                    </div>
                    <div className="text-[11px] font-sans text-zinc-500 mt-0.5">
                      NOTE: {row.sub}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 border-r border-[#22262f] text-[11px] text-zinc-300 uppercase tracking-wide align-top whitespace-nowrap">
                    {row.protocol}
                  </td>
                  <td className="py-3.5 px-4 border-r border-[#22262f] text-xs text-zinc-400 text-right align-top whitespace-nowrap">
                    {row.tolerance}
                  </td>
                  <td className="py-3.5 px-4 border-r border-[#22262f] text-right align-top whitespace-nowrap">
                    <span className="text-sm font-extrabold text-white">{row.peakVal}</span>
                    <span className="text-[10px] text-zinc-500 ml-1.5">{row.peakUnit}</span>
                  </td>
                  <td className="py-3.5 px-4 border-r border-[#22262f] text-right align-top whitespace-nowrap">
                    <span className="text-xs font-bold text-[#ffd500]">{row.deltaVal}</span>
                    <span className="text-[10px] text-zinc-500 ml-1.5">{row.deltaUnit}</span>
                  </td>
                  <td className="py-3.5 pl-4 pr-2 text-right align-top whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest ${
                        row.state === 'ACTIVE' ? 'text-[#ffd500]' : 'text-zinc-300'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 inline-block ${
                          row.state === 'ACTIVE' ? 'bg-[#ffd500]' : 'bg-zinc-500'
                        }`}
                      />
                      {row.state}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reconciliation / Sign-off Footer Line */}
        <div className="mt-0 border-t-2 border-[#262c36] bg-[#14161a] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tabular-nums">
          <div className="flex items-center gap-3 text-zinc-400">
            <Hexagon className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>AGGREGATE MASS FLOW VERIFIED: <strong className="text-white">0.842 KG/S</strong></span>
            <span className="text-zinc-600">|</span>
            <span>CORRECTION FACTOR: <strong className="text-white">DIN 70020 (0.994)</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 uppercase">SIGNED: K. VANCE (LAB DIR.)</span>
            <span className="bg-[#ffd500] text-black font-extrabold px-2.5 py-0.5 text-[10px] tracking-widest">
              LEDGER SEALED // 07-40
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
