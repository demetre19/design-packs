/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat1 = () => {
  const stats = [
    { num: "44", label: "Self-Contained Components" },
    { num: "13", label: "Component Categories" },
    { num: "100%", label: "Swiss Grid Compliance" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">STAT 01 // HUGE NUMERALS IN RULED COLUMNS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a] border border-[#0a0a0a]">
          {stats.map((s, idx) => (
            <div key={idx} className="p-8 md:p-12 text-center space-y-4">
              <div className="text-6xl md:text-8xl font-black font-mono tracking-tighter text-[#0a0a0a]">
                {s.num}<span className="text-[#e30613]">.</span>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#0a0a0a]/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
