/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 relative overflow-hidden flex justify-between items-center min-h-[300px]">
      <div className="max-w-lg space-y-4">
        <div className="text-[11px] font-mono tracking-widest opacity-70">[03 // VERTICAL SPLIT CTA]</div>
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
          THE KONTUR SYMPOSIUM ARCHIVE
        </h3>
        <p className="text-xs font-mono tracking-wider opacity-80">
          Access complete audio transcripts and specimen folios from past editions.
        </p>
        <button className="bg-white text-black px-6 py-3 text-xs font-mono font-bold tracking-widest hover:opacity-90 flex items-center gap-2">
          EXPLORE ARCHIVE <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="hidden lg:flex absolute right-0 top-0 h-full w-40 overflow-hidden items-center justify-center opacity-15 pointer-events-none select-none">
        <div className="text-[16vw] font-black uppercase whitespace-nowrap rotate-90">
          ARCHIVE
        </div>
      </div>
    </div>
  );
};
