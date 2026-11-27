/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Media3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-4">[03 // FEATURE PLATE]</div>
      <div className="border border-white/20 p-8 min-h-[300px] relative flex flex-col justify-between">
        <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest opacity-70">
          ARCHIVE REF // 994-X
        </div>
        <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest opacity-70 text-right">
          SCALE 1:1<br />BASEL PRINTING
        </div>

        <div className="my-auto py-12 text-center">
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            SPECIMEN
          </h3>
        </div>

        <div className="flex justify-between items-center border-t border-white/20 pt-4 text-xs font-mono tracking-widest opacity-70">
          <span>BLACK INK ON MULLER PAPER</span>
          <span>[PLATE SECURED]</span>
        </div>
      </div>
    </div>
  );
};
