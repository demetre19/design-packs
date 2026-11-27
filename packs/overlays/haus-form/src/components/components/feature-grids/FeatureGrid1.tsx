/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid1 = () => {
  const features = [
    { num: "01", title: "Mathematical Grid", desc: "Rigid horizontal and vertical alignment structures governing all layout elements." },
    { num: "02", title: "Grotesque Type", desc: "High-impact neo-grotesque typography with uncompromising readability and weight." },
    { num: "03", title: "Surgical Accent", desc: "Exact placement of signal red (#e30613) as optical anchors and index markers." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FEATURE GRID 01 // HAIRLINE STRUCTURE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#0a0a0a] pt-12">
          {features.map((f, i) => (
            <div key={i} className="space-y-4 pr-6 md:border-r md:last:border-r-0 border-[#0a0a0a]">
              <div className="flex items-center space-x-2">
                <span className="text-[#e30613] font-mono font-bold text-sm">{f.num}.</span>
                <span className="w-1.5 h-1.5 bg-[#e30613] inline-block"></span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{f.title}</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
