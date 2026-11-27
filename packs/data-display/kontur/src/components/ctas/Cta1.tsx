/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 overflow-hidden">
      <div className="flex justify-between items-start text-[11px] font-mono tracking-widest opacity-70 mb-4">
        <span>[01 // ACTION CALL]</span>
        <span>OCTOBER 2026</span>
      </div>
      <div className="overflow-hidden my-4 py-2">
        <h3 className="text-[16vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          SECURE
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6 gap-4">
        <span className="text-xs font-mono tracking-wider opacity-75">Limited to 300 delegates across Europe.</span>
        <button className="bg-white text-black px-6 py-3 text-xs font-mono font-bold tracking-widest hover:opacity-90 flex items-center gap-2">
          ACQUIRE SEAT <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
