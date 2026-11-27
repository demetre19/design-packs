/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content1 = () => {
  const ledgerRows = [
    { code: "REG-001", cat: "FOUNDRY SPECIMEN", title: "GROTESQUE NEO-V4", spec: "900 PT / CONDENSED", status: "VERIFIED" },
    { code: "REG-002", cat: "GRID ARCHITECTURE", title: "12-COLUMN MODULAR RASTER", spec: "12 / 24 / 48 PT", status: "ACTIVE" },
    { code: "REG-003", cat: "SIGNAL OPTICS", title: "PITCH BLACK & PURE WHITE", spec: "HEX #0A0A0A / #FFFFFF", status: "STABLE" },
    { code: "REG-004", cat: "SURGICAL ACCENT", title: "SIGNAL RED PRECISION", spec: "HEX #E30613", status: "LOCKED" },
    { code: "REG-005", cat: "TYPOGRAPHIC SCALE", title: "HARMONIC MODULAR PROGRESSION", spec: "1.250 MAJOR THIRD", status: "VERIFIED" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 01 // THE LEDGER (PROGRAMMATIC FINANCIAL STATEMENT)</span>
        </div>

        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">SYSTEM SPECIFICATION LEDGER</h2>

        <div className="border border-[#0a0a0a] overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs uppercase">
            <thead>
              <tr className="border-b border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff] text-[9px] tracking-[0.2em]">
                <th className="p-4 border-r border-[#ffffff]/20">Index Code</th>
                <th className="p-4 border-r border-[#ffffff]/20">Category</th>
                <th className="p-4 border-r border-[#ffffff]/20">Specification Element</th>
                <th className="p-4 border-r border-[#ffffff]/20">Parameter</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0a0a0a]">
              {ledgerRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#0a0a0a]/5 transition-colors">
                  <td className="p-4 border-r border-[#0a0a0a] font-bold text-[#e30613]">{row.code}</td>
                  <td className="p-4 border-r border-[#0a0a0a] text-[#0a0a0a]/70">{row.cat}</td>
                  <td className="p-4 border-r border-[#0a0a0a] font-bold">{row.title}</td>
                  <td className="p-4 border-r border-[#0a0a0a] text-[#0a0a0a]/90">{row.spec}</td>
                  <td className="p-4 font-mono text-[10px] text-[#e30613] font-bold">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
