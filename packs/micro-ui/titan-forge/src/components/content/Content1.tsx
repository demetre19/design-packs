import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LedgerRow {
  code: string;
  basin: string;
  strata: string;
  method: string;
  grade: string;
  output: string;
  status: 'ACTIVE' | 'PEAK' | 'STANDBY';
}

export function Content1() {
  const rows: LedgerRow[] = [
    {
      code: 'TF-01A',
      basin: 'ATACAMA NORTH BASIN',
      strata: 'PORPHYRY COPPER // -840M',
      method: 'DIAMOND CORE DX-4',
      grade: '2.84% CU',
      output: '142,500 T',
      status: 'PEAK',
    },
    {
      code: 'TF-04C',
      basin: 'PILBARA IRON RIDGE',
      strata: 'HEMATITE BANDED // -310M',
      method: 'EXCAVATOR TF-900',
      grade: '64.20% FE',
      output: '198,400 T',
      status: 'ACTIVE',
    },
    {
      code: 'TF-07B',
      basin: 'YAKUTIA PERMAFROST',
      strata: 'KIMBERLITE PIPE // -1,120M',
      method: 'THERMAL SHIELD RIG',
      grade: '4.12 CT/T',
      output: '18,900 T',
      status: 'ACTIVE',
    },
    {
      code: 'TF-11D',
      basin: 'KALGOORLIE FAULT LINE',
      strata: 'QUARTZ VEIN // -690M',
      method: 'ACOUSTIC MESH DRILL',
      grade: '9.40 G/T',
      output: '64,200 T',
      status: 'STANDBY',
    },
    {
      code: 'TF-14E',
      basin: 'SUDBURY IMPACT CRATER',
      strata: 'SULFIDE MASS // -1,480M',
      method: 'INDUCTION SMELT CELL-X',
      grade: '3.95% NI',
      output: '91,000 T',
      status: 'PEAK',
    },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Register Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#f25c05] inline-block" aria-hidden="true" />
            <span className="font-bold">LEDGER 01 // DAILY EXTRACTION MANIFEST</span>
          </div>
          <span className="text-neutral-600 tabular-nums">AUDIT PERIOD: 2026.11.24 // UTC 00:00–24:00</span>
        </div>

        {/* Dense Ledger Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88]">
            THE EXTRACTION <span className="text-[#f25c05]">LEDGER</span>.
          </h2>
          <p className="font-mono text-[11px] uppercase text-neutral-600 max-w-xs leading-snug">
            Certified volumetric tonnage statement across five primary mineral basins.
          </p>
        </div>

        {/* Theatrical Program / Financial Statement Table Structure */}
        <div className="border-t-4 border-b-4 border-black bg-white overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="border-b-2 border-black bg-[#f5f4f0] font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                <th className="py-3 px-4 border-r border-black font-bold w-24">ID</th>
                <th className="py-3 px-4 border-r border-black font-bold">BASIN &amp; STRATA</th>
                <th className="py-3 px-4 border-r border-black font-bold">EQUIPMENT UNIT</th>
                <th className="py-3 px-4 border-r border-black font-bold text-right">ASSAY GRADE</th>
                <th className="py-3 px-4 border-r border-black font-bold text-right">24H TONNAGE</th>
                <th className="py-3 px-4 font-bold text-right w-28">STATE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black">
              {rows.map((row) => (
                <tr key={row.code} className="group hover:bg-neutral-100 transition-colors">
                  <td className="py-5 px-4 border-r border-black font-mono text-xs font-bold tabular-nums align-top">
                    <span className="text-neutral-400 mr-1">#</span>
                    {row.code}
                  </td>
                  <td className="py-5 px-4 border-r border-black align-top">
                    <div className="font-black text-lg md:text-xl uppercase tracking-tight leading-none mb-1.5 group-hover:text-[#f25c05] transition-colors">
                      {row.basin}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 tabular-nums">
                      {row.strata}
                    </div>
                  </td>
                  <td className="py-5 px-4 border-r border-black font-mono text-xs uppercase align-middle text-neutral-800">
                    {row.method}
                  </td>
                  <td className="py-5 px-4 border-r border-black font-mono text-xs font-bold text-right tabular-nums align-middle">
                    {row.grade}
                  </td>
                  <td className="py-5 px-4 border-r border-black font-mono text-base font-black text-right tabular-nums align-middle">
                    {row.output}
                  </td>
                  <td className="py-5 px-4 font-mono text-[10px] font-bold text-right align-middle">
                    <span
                      className={
                        row.status === 'PEAK'
                          ? 'text-[#f25c05]'
                          : row.status === 'ACTIVE'
                          ? 'text-black'
                          : 'text-neutral-400'
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-black text-white font-mono border-t-4 border-black">
                <td colSpan={3} className="py-4 px-4 text-xs uppercase tracking-widest">
                  CONSOLIDATED GROSS THROUGHPUT // 05 BASINS VERIFIED
                </td>
                <td className="py-4 px-4 text-right text-[10px] text-neutral-400 uppercase border-l border-neutral-800">
                  AVG YIELD: 99.4%
                </td>
                <td className="py-4 px-4 text-right text-xl font-black text-[#f25c05] tabular-nums border-l border-neutral-800">
                  515,000 T
                </td>
                <td className="py-4 px-4 text-right border-l border-neutral-800">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase text-white">
                    <span>ISO-9001</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#f25c05]" />
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom Footnote Micro-Line */}
        <div className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-[10px] text-neutral-500 uppercase">
          <span>* MEASURED AT PRIMARY CONVEYOR WEIGHBRIDGE</span>
          <span>TITAN FORGE METALLURGICAL AUDIT // DOC-L01</span>
        </div>
      </div>
    </section>
  );
}
