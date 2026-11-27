/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content5 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        <div className="p-8 border-b border-[#0a0a0a] flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 05 // THE SPLIT SCREEN ARGUMENT (INVERTED OPPOSITION)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* Left Zone (White) */}
          <div className="p-8 md:p-16 bg-[#ffffff] text-[#0a0a0a] border-b md:border-b-0 md:border-r border-[#0a0a0a] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#e30613] font-bold uppercase">01 // POSITION A (RATIONAL ORDER)</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight">RIGID MATHEMATICAL GRID</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
                Absolute adherence to vertical raster lines and modular proportions ensures uncompromising cognitive clarity and zero decorative noise.
              </p>
            </div>
            <div className="border-t border-[#0a0a0a] pt-4 font-mono text-[9px] uppercase">
              ZÜRICH DOCTRINE 1958
            </div>
          </div>

          {/* Center Seam Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#e30613] text-[#ffffff] font-black text-xl flex items-center justify-center font-mono border-2 border-[#0a0a0a] hidden md:flex z-20">
            VS
          </div>

          {/* Right Zone (Black) */}
          <div className="p-8 md:p-16 bg-[#0a0a0a] text-[#ffffff] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#e30613] font-bold uppercase">02 // POSITION B (ORGANIC CHAOS)</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight">FLUID DECORATIVE NOISE</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#ffffff]/80">
                Randomized positioning, organic rounded corners, and soft gradient washes create approachable yet ephemeral visual experiences.
              </p>
            </div>
            <div className="border-t border-[#ffffff]/20 pt-4 font-mono text-[9px] uppercase text-[#ffffff]/60">
              REJECTED PARADIGM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
