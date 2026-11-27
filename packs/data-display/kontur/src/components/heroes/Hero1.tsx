/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white min-h-[550px] relative overflow-hidden border-b border-white/20 p-8 flex flex-col justify-between">
      <div className="absolute top-6 left-6 text-[11px] font-mono tracking-widest opacity-80 uppercase leading-relaxed max-w-xs">
        [01 // KONTUR SYMPOSIUM]<br />
        BASEL ART ACADEMY<br />
        OCTOBER 2026
      </div>
      <div className="absolute top-6 right-6 text-[11px] font-mono tracking-widest opacity-80 text-right hidden sm:block">
        CURATED BY M. WEBER<br />
        ISSN 2810-9421
      </div>

      <div className="my-auto py-12 text-center">
        <h2 className="text-[25vw] font-black tracking-[-0.07em] leading-[0.8] uppercase select-none overflow-hidden whitespace-nowrap">
          TYPOGRAPHY
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/20 pt-4">
        <div className="text-[11px] font-mono tracking-widest opacity-70">
          GLOBAL CONFERENCE ON GROTESQUE FORMS
        </div>
        <a href="#tickets" className="flex items-center gap-2 text-xs font-mono tracking-widest bg-white text-black px-4 py-2 hover:opacity-90 font-bold">
          SECURE SEAT <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
