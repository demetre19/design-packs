/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content15 = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-[#ffffff] border-b border-[#0a0a0a] font-sans py-16">
      <div className="max-w-6xl mx-auto border-x border-[#ffffff]/20 px-8">
        <div className="flex items-center space-x-2 mb-12">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 15 // THE INVERTED VAULT (RADIAL CIRCULAR COMPOSITION)</span>
        </div>

        <div className="relative w-full h-[400px] flex items-center justify-center border border-[#ffffff]/20 bg-[#0a0a0a]">
          {/* Central Anchor */}
          <div className="w-24 h-24 rounded-none bg-[#e30613] text-[#ffffff] flex items-center justify-center font-mono font-black text-xl z-20 border-2 border-[#ffffff]">
            ZRH
          </div>

          {/* Radial Nodes */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 border border-[#ffffff]/40 p-4 bg-[#0a0a0a] font-mono text-[10px] uppercase">
            <span className="text-[#e30613]">NORTH //</span> 47.3769° N
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 border border-[#ffffff]/40 p-4 bg-[#0a0a0a] font-mono text-[10px] uppercase">
            <span className="text-[#e30613]">SOUTH //</span> 1958 EST.
          </div>

          <div className="absolute left-8 top-1/2 -translate-y-1/2 border border-[#ffffff]/40 p-4 bg-[#0a0a0a] font-mono text-[10px] uppercase">
            <span className="text-[#e30613]">WEST //</span> RASTER 12
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 border border-[#ffffff]/40 p-4 bg-[#0a0a0a] font-mono text-[10px] uppercase">
            <span className="text-[#e30613]">EAST //</span> GROTESQUE
          </div>
        </div>
      </div>
    </section>
  );
};
