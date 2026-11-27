/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content4 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 04 // THE EXPLODED DIAGRAM (TECHNICAL ANNOTATIONS)</span>
        </div>

        <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">ARCHITECTURAL SCHEMATIC PLATE</h2>

        <div className="relative border border-[#0a0a0a] p-8 md:p-20 bg-[#0a0a0a] text-[#ffffff] min-h-[450px] flex items-center justify-center">
          {/* Top-left annotation */}
          <div className="absolute top-6 left-6 border border-[#ffffff]/30 p-4 bg-[#0a0a0a] max-w-xs font-mono text-[10px] uppercase">
            <span className="text-[#e30613] font-bold">01. AXIS RASTER</span>
            <p className="mt-1 text-[#ffffff]/70">Strict vertical alignment coordinate 47.3769° N</p>
          </div>

          {/* Top-right annotation */}
          <div className="absolute top-6 right-6 border border-[#ffffff]/30 p-4 bg-[#0a0a0a] max-w-xs font-mono text-[10px] uppercase">
            <span className="text-[#e30613] font-bold">02. OPTICAL ANCHOR</span>
            <p className="mt-1 text-[#ffffff]/70">Signal red #e30613 surgical precision marker</p>
          </div>

          {/* Center visual plate */}
          <div className="w-64 h-64 border-2 border-[#ffffff] p-4 flex flex-col justify-between grayscale bg-[#ffffff] text-[#0a0a0a]">
            <div className="flex justify-between font-mono text-[9px] uppercase">
              <span>[PLATE 04]</span>
              <span className="text-[#e30613]">+</span>
            </div>
            <div className="text-center font-black text-2xl uppercase tracking-tighter">
              HAUS DER FORM <br />
              SCHEMATIC
            </div>
            <div className="flex justify-between font-mono text-[9px] uppercase">
              <span>ZÜRICH</span>
              <span>1958</span>
            </div>
          </div>

          {/* Bottom annotation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#ffffff]/30 p-4 bg-[#0a0a0a] max-w-md font-mono text-[10px] uppercase text-center">
            <span className="text-[#e30613] font-bold">03. STRUCTURAL HIERARCHY</span>
            <p className="mt-1 text-[#ffffff]/70">Zero border radius encapsulation with 1px hairline divisions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
