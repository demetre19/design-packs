/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid4 = () => {
  const cells = [
    { num: "01", title: "Pure Contrast", desc: "Strict binary color palette: absolute white and pitch black." },
    { num: "02", title: "Hairline Rules", desc: "1px black borders separating all structural divisions." },
    { num: "03", title: "Zero Radius", desc: "Sharp rectangular corners. No border-radius smoothing permitted." },
    { num: "04", title: "Signal Red", desc: "Surgical application of #e30613 for focus and index markers." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        <div className="p-8 border-b border-[#0a0a0a] flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FEATURE GRID 04 // 2X2 RULED MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a]">
          {cells.map((c, i) => (
            <div key={i} className={`p-8 md:p-12 ${i > 1 ? 'border-t border-[#0a0a0a]' : ''} space-y-4`}>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-black font-mono text-[#e30613]">{c.num}.</span>
                <span className="w-2 h-2 bg-[#0a0a0a]"></span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{c.title}</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
