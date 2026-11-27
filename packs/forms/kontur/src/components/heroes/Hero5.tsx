/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero5: React.FC = () => {
  return (
    <div className="w-full bg-black text-white min-h-[500px] relative overflow-hidden border-b border-white/20 p-8 flex justify-between items-center">
      <div className="max-w-xl space-y-6">
        <div className="text-[11px] font-mono tracking-widest opacity-70">
          [VERTICAL AXIS // 05]
        </div>
        <h2 className="text-6xl sm:text-7xl font-extrabold tracking-tighter leading-[0.9] uppercase">
          THE ABSOLUTE VOID IN PRINT
        </h2>
        <p className="text-xs font-mono tracking-wider opacity-80 leading-relaxed">
          Examining how cropped monumental typeforces the reader to reconstruct incomplete glyphs through cognitive gestalt completion.
        </p>
        <div className="flex gap-4 pt-2">
          <button className="bg-white text-black px-6 py-3 text-xs font-mono tracking-widest font-bold hover:opacity-90">
            READ MANIFESTO
          </button>
        </div>
      </div>

      {/* Vertical Cropped Word on Right */}
      <div className="hidden lg:flex items-center justify-center overflow-hidden h-full absolute right-0 top-0 w-48 pointer-events-none select-none opacity-20">
        <div className="text-[18vw] font-black tracking-tighter uppercase whitespace-nowrap rotate-90">
          KONTUR
        </div>
      </div>
    </div>
  );
};
