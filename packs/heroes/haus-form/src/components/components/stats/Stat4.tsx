/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat4 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">STAT 04 // SINGLE OVERSIZED NUMERAL FEATURE</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 items-center bg-[#0a0a0a] text-[#ffffff]">
          <div className="md:col-span-5 text-8xl md:text-9xl font-black font-mono tracking-tighter text-[#ffffff]">
            99<span className="text-[#e30613]">.</span>9%
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.3em]">+ METRIC SPECIFICATION</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">ABSOLUTE GRID ALIGNMENT ACCURACY</h3>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#ffffff]/80">
              Measured across all 44 components under strict viewport scaling and modular type ratio testing in Zürich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
