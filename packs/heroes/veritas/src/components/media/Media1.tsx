/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Media1() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="w-full h-80 md:h-[450px] rounded-2xl bg-gradient-to-tr from-[#0a0e12] via-[#16232d] to-[#0f4c45] relative overflow-hidden border border-[#e2e8f0] flex items-center justify-center">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="text-center text-white relative z-10 px-4">
            <span className="text-xs font-mono tracking-[0.25em] text-[#8fa3b0] uppercase block mb-3">PLATE 01 // ZURICH LABORATORY CHASSIS</span>
            <div className="text-2xl md:text-4xl font-light tracking-tight">Grade-5 Milled Titanium Enclosure</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-[#5b6b76] px-2">
          <span>Figure 1.1 — Dual-oven quartz oscillator enclosure machined from a single solid alloy billet.</span>
          <span className="font-mono text-[#0f4c45] font-semibold">ISO_9001</span>
        </div>
      </div>
    </section>
  );
}
