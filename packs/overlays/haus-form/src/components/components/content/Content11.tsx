/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content11 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 11 // THE SPECIMEN GRID (DATASHEET DENSITY)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border border-[#0a0a0a] font-mono text-xs uppercase divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a]">
          {/* Cell 1 */}
          <div className="p-6 border-b md:border-b-0 border-[#0a0a0a] space-y-4">
            <span className="text-[#e30613] font-bold">01 // FONT FAMILY</span>
            <div className="text-2xl font-black">GROTESQUE</div>
            <span className="text-[9px] text-[#0a0a0a]/60 block">SPECIMEN Z-99</span>
          </div>

          {/* Cell 2 (Spanning) */}
          <div className="md:col-span-2 p-6 border-b md:border-b-0 border-[#0a0a0a] space-y-4 bg-[#0a0a0a] text-[#ffffff]">
            <span className="text-[#e30613] font-bold">02 // RASTER COORDINATE MATRIX</span>
            <div className="text-xl font-bold">12-COLUMN STRUCTURAL MODULUS</div>
            <p className="text-[10px] text-[#ffffff]/70">Calculated for exact optical proportion across mobile, tablet, and wide desktop viewports.</p>
          </div>

          {/* Cell 3 */}
          <div className="p-6 space-y-4">
            <span className="text-[#e30613] font-bold">03 // OPTICS</span>
            <div className="text-2xl font-black">#E30613</div>
            <span className="text-[9px] text-[#0a0a0a]/60 block">SIGNAL RED ACCENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
