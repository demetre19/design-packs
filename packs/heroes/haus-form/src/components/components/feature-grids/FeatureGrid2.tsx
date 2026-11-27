/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid2 = () => {
  const items = [
    { id: "01", title: "Asymmetric Layouts", desc: "Deliberate negative space and off-center focal masses guided by proportion." },
    { id: "02", title: "Tabular Structure", desc: "Information organized in strict rows and columns with hairline borders." },
    { id: "03", title: "Crosshair Markers", desc: "Registration marks (+) at structural corners reflecting print production heritage." },
    { id: "04", title: "Monospaced Metadata", desc: "9px uppercase tracking for technical specifications and coordinates." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        <div className="p-8 border-b border-[#0a0a0a] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#e30613]"></span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FEATURE GRID 02 // INDEXED ITEMS</span>
          </div>
          <span className="text-[9px] font-mono text-[#e30613]">[4 MODULES]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a]">
          {items.map((item, idx) => (
            <div key={idx} className={`p-8 ${idx > 1 ? 'border-t border-[#0a0a0a]' : ''} space-y-4`}>
              <div className="flex items-center justify-between">
                <span className="text-xl font-black font-mono text-[#e30613]">{item.id}.</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0a0a0a]/50">MODULE SPEC</span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
