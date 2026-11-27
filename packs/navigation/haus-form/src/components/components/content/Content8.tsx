/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content8 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 08 // THE PINBOARD (CONTROLLED COLLISION LAYERING)</span>
        </div>

        <div className="relative min-h-[480px] border border-[#0a0a0a] p-8 bg-[#ffffff] overflow-hidden">
          {/* Piece 1: Image plate */}
          <div className="absolute top-12 left-12 w-72 border-2 border-[#0a0a0a] bg-[#ffffff] p-3 shadow-none z-10 rotate-[-2deg]">
            <div className="w-full h-36 grayscale overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Pinboard image" className="w-full h-full object-cover filter grayscale contrast-150" />
            </div>
            <div className="mt-2 text-[9px] font-mono uppercase flex justify-between">
              <span>[COLLISION 01]</span>
              <span className="text-[#e30613]">ZÜRICH</span>
            </div>
          </div>

          {/* Piece 2: Text block overlapping */}
          <div className="absolute top-36 left-80 w-80 border-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff] p-6 shadow-none z-20 rotate-[3deg]">
            <span className="text-[9px] font-mono text-[#e30613] uppercase">+ FRAGMENT SPEC</span>
            <h4 className="text-xl font-bold uppercase mt-1 mb-2">CONTROLLED CHAOS IN RASTER SPACE</h4>
            <p className="text-xs font-mono uppercase text-[#ffffff]/80">Z-stacking elements across deliberate offsets while preserving absolute typography.</p>
          </div>

          {/* Piece 3: Numeral badge */}
          <div className="absolute bottom-12 right-24 border-2 border-[#e30613] bg-[#ffffff] p-6 z-30 rotate-[-4deg]">
            <div className="text-5xl font-black font-mono text-[#e30613]">08.</div>
            <div className="text-[9px] font-mono uppercase mt-1 text-[#0a0a0a]">PINBOARD INDEX</div>
          </div>
        </div>
      </div>
    </section>
  );
};
