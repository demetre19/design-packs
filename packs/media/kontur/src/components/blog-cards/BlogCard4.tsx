/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const BlogCard4: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 relative overflow-hidden p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-4">[04 // BLEED TITLE BAND]</div>
      <div className="overflow-hidden my-4 py-2 border-y border-white/20">
        <h3 className="text-[14vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          MONOGRAPH
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="text-xs font-mono tracking-wider opacity-80 leading-relaxed">
          An in-depth study of the 1962 Basel exhibition posters, detailing exact ink densities, paper weights, and typographic proportions used by the masters.
        </div>
        <div className="flex justify-between items-end">
          <div className="text-xs font-mono tracking-widest opacity-60">CATALOG NO. 884-B</div>
          <button className="bg-white text-black px-6 py-3 text-xs font-mono font-bold tracking-widest hover:opacity-90">
            DOWNLOAD PDF
          </button>
        </div>
      </div>
    </div>
  );
};
