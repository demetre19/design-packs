/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat2 = () => {
  const rows = [
    { num: "01", metric: "Typography Scale", value: "Strict Modular" },
    { num: "02", metric: "Grid Columns", value: "12-Col Mathematical" },
    { num: "03", metric: "Color Palette", value: "Mono + Signal Red" },
    { num: "04", metric: "Border Radius", value: "0px (Sharp Rectangles)" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">STAT 02 // TABULAR STATS MATRIX</span>
        </div>

        <div className="border border-[#0a0a0a] overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs uppercase">
            <thead>
              <tr className="border-b border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff]">
                <th className="p-4 border-r border-[#ffffff]/20">Index</th>
                <th className="p-4 border-r border-[#ffffff]/20">System Metric</th>
                <th className="p-4">Specification Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0a0a0a]">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#0a0a0a]/5 transition-colors">
                  <td className="p-4 border-r border-[#0a0a0a] font-bold text-[#e30613]">{r.num}.</td>
                  <td className="p-4 border-r border-[#0a0a0a] font-bold">{r.metric}</td>
                  <td className="p-4 text-[#0a0a0a]/80">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
