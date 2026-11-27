/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Content1: React.FC = () => {
  const rows = [
    {
      ref: 'KT-01',
      title: 'GROTESQUE PROPORTION AUDIT',
      note: 'Optical compensation study across 18–240pt lead & digital matrices',
      speaker: 'BRUNO MÜLLER',
      hall: 'HALL A',
      duration: '90 MIN',
      folio: 'P.014',
      allocation: 'CHF 4,200',
    },
    {
      ref: 'KT-02',
      title: 'BASEL BLEED STANDARD (1962)',
      note: 'Archival ink density measurements on uncoated Munken 120gsm stock',
      speaker: 'ELENA VOSS',
      hall: 'HALL B',
      duration: '60 MIN',
      folio: 'P.038',
      allocation: 'CHF 3,150',
    },
    {
      ref: 'KT-03',
      title: 'ZERO-BASELINE RASTER SYSTEMS',
      note: 'Subdivision of asymmetrical 12-column poster structures',
      speaker: 'KASPER LIND',
      hall: 'HALL A',
      duration: '75 MIN',
      folio: 'P.062',
      allocation: 'CHF 3,800',
    },
    {
      ref: 'KT-04',
      title: 'NEGATIVE SPACE AS LOAD-BEARING MASS',
      note: 'Void-to-ink ratios in municipal Zürich cultural announcements',
      speaker: 'DR. H. KELLER',
      hall: 'ANNEX C',
      duration: '120 MIN',
      folio: 'P.091',
      allocation: 'CHF 5,400',
    },
    {
      ref: 'KT-05',
      title: 'MONOCHROME PRESS CALIBRATION',
      note: 'Double-hit offset black calibration and edge-crop tolerances',
      speaker: 'A. HOFMANN',
      hall: 'PRESS RM',
      duration: '45 MIN',
      folio: 'P.118',
      allocation: 'CHF 2,650',
    },
    {
      ref: 'KT-06',
      title: 'THE COGNITIVE GESTALT OF CROPPED TYPE',
      note: 'Viewer reconstruction thresholds when 38% of glyph contour is severed',
      speaker: 'DR. E. RÄTZ',
      hall: 'HALL B',
      duration: '60 MIN',
      folio: 'P.144',
      allocation: 'CHF 3,300',
    },
  ];

  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-10 md:px-10">
      {/* Top Meta Strip */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/30 pb-4 mb-0 gap-3">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 01 // THE LEDGER — SYMPOSIUM REPERTOIRE &amp; PRODUCTION STATEMENT
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mt-1">
            REPERTOIRE LEDGER — VOL. 42
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 sm:text-right leading-relaxed tabular-nums">
          FISCAL CYCLE: OCT 14–18, 2026<br />
          CURRENCY: SWISS FRANC (CHF) // BASEL MUN.
        </div>
      </div>

      {/* Ledger Table */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[780px] border-x border-b border-white/20">
          {/* Micro-caps Header Row */}
          <div className="grid grid-cols-12 border-b border-white/30 bg-white/[0.04] text-[10px] font-mono tracking-[0.2em] uppercase text-white/70 divide-x divide-white/20">
            <div className="col-span-1 px-3 py-2.5">REF</div>
            <div className="col-span-5 px-3 py-2.5">PROGRAM ITEM &amp; TECHNICAL ANNOTATION</div>
            <div className="col-span-2 px-3 py-2.5">LEAD / SPEAKER</div>
            <div className="col-span-1 px-3 py-2.5">SITE</div>
            <div className="col-span-1 px-3 py-2.5 text-right">DUR.</div>
            <div className="col-span-1 px-3 py-2.5 text-right">FOLIO</div>
            <div className="col-span-1 px-3 py-2.5 text-right">GRANT</div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-white/15">
            {rows.map((row) => (
              <div
                key={row.ref}
                className="grid grid-cols-12 divide-x divide-white/20 hover:bg-white/[0.03] transition-colors items-stretch"
              >
                <div className="col-span-1 px-3 py-3.5 text-[11px] font-mono tracking-widest opacity-60 tabular-nums flex items-start">
                  {row.ref}
                </div>
                <div className="col-span-5 px-3 py-3.5 space-y-1">
                  <div className="text-xs font-bold tracking-tight uppercase flex items-center gap-1.5">
                    <span>{row.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 shrink-0" />
                  </div>
                  <div className="text-[10px] font-mono tracking-wide opacity-55 leading-relaxed">
                    ↳ {row.note}
                  </div>
                </div>
                <div className="col-span-2 px-3 py-3.5 text-[11px] font-mono tracking-wider opacity-85 flex items-start">
                  {row.speaker}
                </div>
                <div className="col-span-1 px-3 py-3.5 text-[10px] font-mono tracking-widest opacity-65 flex items-start">
                  {row.hall}
                </div>
                <div className="col-span-1 px-3 py-3.5 text-[11px] font-mono opacity-75 text-right tabular-nums">
                  {row.duration}
                </div>
                <div className="col-span-1 px-3 py-3.5 text-[11px] font-mono opacity-60 text-right tabular-nums">
                  {row.folio}
                </div>
                <div className="col-span-1 px-3 py-3.5 text-[11px] font-mono font-bold text-right tabular-nums">
                  {row.allocation}
                </div>
              </div>
            ))}
          </div>

          {/* Reconciled Summary Footer Row */}
          <div className="grid grid-cols-12 border-t border-white/30 divide-x divide-white/20 bg-white/[0.02] text-[11px] font-mono tracking-widest uppercase">
            <div className="col-span-1 px-3 py-3 opacity-50">Σ</div>
            <div className="col-span-7 px-3 py-3 opacity-70">
              RECONCILED SYMPOSIUM COMMISSION TOTAL (6 ARCHIVAL SESSIONS)
            </div>
            <div className="col-span-1 px-3 py-3 text-right tabular-nums opacity-70">450M</div>
            <div className="col-span-1 px-3 py-3 text-right tabular-nums opacity-60">144PP</div>
            <div className="col-span-2 px-3 py-3 text-right font-bold tabular-nums">
              CHF 22,500.00
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Audit Line */}
      <div className="flex justify-between items-center mt-3 text-[10px] font-mono tracking-widest opacity-45">
        <span>AUDITED BY KONTUR EDITORIAL BOARD // BASEL</span>
        <span>ISSN 2810-9421 // FORM L-01</span>
      </div>
    </section>
  );
};
