/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content14 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 14 // THE CASCADE (MUSICAL SCORE SHIFTING RHYTHM)</span>
        </div>

        <div className="space-y-6">
          {/* Item 1: Wide Left */}
          <div className="w-full md:w-3/4 border border-[#0a0a0a] p-6 bg-[#ffffff] ml-0">
            <div className="flex justify-between items-center text-xs font-mono text-[#e30613] font-bold mb-2">
              <span>01. WIDE LEFT // MEASURE 1</span>
              <span>[4/4 TIME]</span>
            </div>
            <h4 className="text-xl font-bold uppercase">PRIMARY RHYTHMIC ACCENT</h4>
            <p className="text-xs font-mono uppercase text-[#0a0a0a]/80 mt-1">Establishing foundational vertical alignment across the left raster boundary.</p>
          </div>

          {/* Item 2: Narrow Right */}
          <div className="w-full md:w-1/2 border border-[#0a0a0a] p-6 bg-[#0a0a0a] text-[#ffffff] ml-auto">
            <div className="flex justify-between items-center text-xs font-mono text-[#e30613] font-bold mb-2">
              <span>02. NARROW RIGHT // MEASURE 2</span>
              <span>[CONTRAST]</span>
            </div>
            <h4 className="text-xl font-bold uppercase">SYNCOPATED CONTRAST</h4>
            <p className="text-xs font-mono uppercase text-[#ffffff]/80 mt-1">Shifting density to the opposing margin for compositional tension.</p>
          </div>

          {/* Item 3: Medium Center */}
          <div className="w-full md:w-2/3 border border-[#0a0a0a] p-6 bg-[#ffffff] mx-auto">
            <div className="flex justify-between items-center text-xs font-mono text-[#e30613] font-bold mb-2">
              <span>03. MEDIUM CENTER // MEASURE 3</span>
              <span>[RESOLUTION]</span>
            </div>
            <h4 className="text-xl font-bold uppercase">CENTRAL ARCHITECTURAL RESOLUTION</h4>
            <p className="text-xs font-mono uppercase text-[#0a0a0a]/80 mt-1">Centering focus on absolute typographic hierarchy and hairline rules.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
