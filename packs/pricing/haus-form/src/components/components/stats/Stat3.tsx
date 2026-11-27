/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat3 = () => {
  const stats = [
    { num: "01", val: "1958", label: "Establishment Year" },
    { num: "02", val: "44", label: "Design Components" },
    { num: "03", val: "0px", label: "Corner Radius" },
    { num: "04", val: "#E3", label: "Signal Red Code" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">STAT 03 // STATS STRIP WITH RED INDEX MARKERS</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#0a0a0a] pt-12">
          {stats.map((s, idx) => (
            <div key={idx} className="border border-[#0a0a0a] p-6 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#e30613] inline-block"></span>
                <span className="text-xs font-mono text-[#e30613] font-bold">{s.num}.</span>
              </div>
              <div className="text-3xl font-black font-mono tracking-tighter">{s.val}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#0a0a0a]/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
