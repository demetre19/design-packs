/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 relative overflow-hidden text-center min-h-[350px] flex flex-col justify-between">
      <div className="text-[11px] font-mono tracking-widest opacity-70">[03 // SPOTLIGHT STAT]</div>
      <div className="overflow-hidden my-auto py-4">
        <h3 className="text-[25vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          1962
        </h3>
      </div>
      <div className="text-xs font-mono tracking-widest opacity-70">
        ORIGIN YEAR OF THE BASEL MUNICIPAL TYPE STANDARD
      </div>
    </div>
  );
};
