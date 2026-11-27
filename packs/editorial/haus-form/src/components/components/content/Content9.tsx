/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content9 = () => {
  const categories = [
    {
      cat: "01 // FOUNDRY SPECIMENS",
      items: [
        { name: "Neo-Grotesque Regular", page: "012" },
        { name: "Condensed Display Bold", page: "018" },
        { name: "Monospace Terminal", page: "025" }
      ]
    },
    {
      cat: "02 // GRID ARCHITECTURES",
      items: [
        { name: "12-Column Modular Raster", page: "041" },
        { name: "Asymmetric Margin Ratios", page: "052" },
        { name: "Crosshair Registration Marks", page: "064" }
      ]
    }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 09 // THE INDEX (TYPOGRAPHIC TABLE OF CONTENTS)</span>
        </div>

        <div className="space-y-12">
          {categories.map((c, idx) => (
            <div key={idx} className="border border-[#0a0a0a] p-8 bg-[#ffffff]">
              <h3 className="text-xs font-mono uppercase font-bold text-[#e30613] tracking-widest pb-4 border-b border-[#0a0a0a] mb-6">
                {c.cat}
              </h3>
              <div className="space-y-4 font-mono text-xs uppercase">
                {c.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-[#0a0a0a]/40"></div>
                    <span className="text-[#e30613] font-bold">{item.page}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
