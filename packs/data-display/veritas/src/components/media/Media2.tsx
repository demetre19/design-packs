/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Media2() {
  const items = [
    { label: "PLATE_01", title: "Dual Cesium Standard" },
    { label: "PLATE_02", title: "Acoustic Dampening Ring" },
    { label: "PLATE_03", title: "Optical Fiber Backplane" },
    { label: "PLATE_04", title: "Silicon PUF Escrow Module" }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Metallurgical & Optical Plates
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Visual component catalog.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="w-full h-56 rounded-xl bg-gradient-to-br from-[#0a0e12] to-[#16232d] flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase">
                  {item.label}
                </div>
                <div className="text-center">
                  <div className="text-white/60 font-mono text-xs tracking-wider mb-1">VERITAS SPECIFICATION</div>
                  <div className="text-lg font-light tracking-tight">{item.title}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#5b6b76]">
                <span>Certified Sovereign Component</span>
                <span className="font-mono text-[#0f4c45] font-semibold">INSPECTION_OK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
