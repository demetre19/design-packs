/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white min-h-[550px] relative overflow-hidden border-b border-white/20 p-8 flex flex-col justify-between">
      <div className="flex justify-between items-start text-[11px] font-mono tracking-widest opacity-80">
        <div>SYS // 02 STACKED</div>
        <div>HALL A // 10:00 CET</div>
      </div>

      <div className="my-8 overflow-hidden select-none space-y-2">
        <div className="text-[14vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap -ml-12">
          RADICAL
        </div>
        <div className="text-[14vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap ml-8">
          GRID &amp; VOID
        </div>
        <div className="text-[14vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap -ml-4">
          SYSTEMS
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] font-mono tracking-widest opacity-70 border-t border-white/20 pt-4">
        <span>SWISS DESIGN TRADITION</span>
        <span>[03 DAYS REMAINING]</span>
      </div>
    </div>
  );
};
