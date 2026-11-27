import React from 'react';
import { Shield } from 'lucide-react';

export function Content13() {
  const engineeringCredits = [
    { role: 'CHIEF ARCHITECT', name: 'MARCUS VANCE' },
    { role: 'STRUCTURAL METALLURGY', name: 'DR. ARIS THORNE' },
    { role: 'SUB-ZERO TELEMETRY', name: 'ELENA ROSTOVA' },
    { role: 'HYDRAULIC SYSTEMS', name: 'HECTOR SALAZAR' },
    { role: 'ACOUSTIC MESH AI', name: 'KAI TAKAHASHI' },
    { role: 'ISO COMPLIANCE LEAD', name: 'INGRID LINDQVIST' },
  ];

  const foundries = [
    { code: 'F-01', city: 'ANTOFAGASTA, CL', spec: 'PRIMARY CASTING' },
    { code: 'F-02', city: 'PERTH, AU', spec: 'HYDRAULIC TEST BED' },
    { code: 'F-03', city: 'ESSEN, DE', spec: 'ALLOY ROLLING MILL' },
    { code: 'F-04', city: 'SUDBURY, CA', spec: 'CRUCIBLE ASSEMBLY' },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-mono">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Artifact Rule */}
        <div className="border-t-4 border-b border-black py-3 mb-10 flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-widest">
          <span>COLOPHON 13 // ARCHIVAL SPECIFICATION CREDITS</span>
          <span className="font-bold">EDITION IV — NOV 2026</span>
        </div>

        {/* Multi-Column Dense Colophon Back Matter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-2 border-black pb-10">
          {/* Column 1: Foundry Stamp & Monograph Statement */}
          <div className="md:col-span-4 space-y-5 md:border-r border-black md:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-[#f25c05] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="font-sans font-black text-base uppercase tracking-tighter leading-none">
                  TITAN FORGE PRESS
                </div>
                <div className="text-[9px] text-neutral-500 uppercase">INDUSTRIAL INFRASTRUCTURE</div>
              </div>
            </div>
            <p className="text-[11px] text-neutral-700 leading-relaxed uppercase">
              Compiled by the Titan Forge Heavy Systems Directorate. All mechanical tolerances, tensile limits, and extraction yield metrics verified under continuous load across active mineral basins.
            </p>
            <div className="border border-black p-3 bg-white text-[10px] space-y-1">
              <div className="flex justify-between">
                <span className="text-neutral-500">TYPE SYSTEM</span>
                <span className="font-bold">HEAVYLINE CONDENSED / MONO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">INK WEIGHTS</span>
                <span className="font-bold">#000000 / #F5F4F0 / #F25C05</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Role-Name Pairs */}
          <div className="md:col-span-4 md:border-r border-black md:pr-8">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#f25c05] mb-4">
              01 // PRINCIPAL DIRECTORATE
            </div>
            <div className="divide-y divide-neutral-300 text-[11px]">
              {engineeringCredits.map((c) => (
                <div key={c.role} className="py-2 flex items-baseline justify-between gap-2">
                  <span className="text-neutral-500 uppercase text-[10px]">{c.role}</span>
                  <span className="font-bold uppercase text-right">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Foundry Locations & Datum Register */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#f25c05] mb-4">
                02 // FABRICATION FOUNDRIES
              </div>
              <div className="space-y-2.5 text-[11px]">
                {foundries.map((f) => (
                  <div key={f.code} className="border-b border-neutral-300 pb-2 flex justify-between">
                    <div>
                      <span className="text-neutral-400 mr-2">{f.code}</span>
                      <span className="font-bold">{f.city}</span>
                    </div>
                    <span className="text-[10px] text-neutral-600">{f.spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black text-[10px] uppercase space-y-1">
              <div className="flex justify-between">
                <span className="text-neutral-500">STANDARD</span>
                <span className="font-bold">ISO-9001:2026 // ASTM-A514</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">DATUM</span>
                <span className="font-bold tabular-nums">WGS-84 // 23°45'12"S 68°12'04"W</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Index Stamp */}
        <div className="pt-4 flex flex-wrap justify-between gap-2 text-[9px] text-neutral-500 uppercase tracking-widest">
          <span>DOC-ID: TF-COL-2026-IV</span>
          <span>PRINTED ON ARCHIVAL BONE-WHITE // NON-COMMERCIAL SPECIMEN</span>
        </div>
      </div>
    </section>
  );
}
