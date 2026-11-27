/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // STAT ROW]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 border-y border-white/20 py-8">
        <div className="px-4 py-4 md:py-0 text-center">
          <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2">99.8%</div>
          <div className="text-xs font-mono tracking-widest opacity-70">TYPOGRAPHIC FIDELITY</div>
        </div>
        <div className="px-4 py-4 md:py-0 text-center">
          <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2">3 DAYS</div>
          <div className="text-xs font-mono tracking-widest opacity-70">INTENSIVE DISCOURSE</div>
        </div>
        <div className="px-4 py-4 md:py-0 text-center">
          <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2">30+</div>
          <div className="text-xs font-mono tracking-widest opacity-70">YEARS OF ARCHIVES</div>
        </div>
      </div>
    </div>
  );
};
