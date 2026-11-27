/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Pricing3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 flex justify-center">
      <div className="border border-white/40 p-8 md:p-12 max-w-2xl w-full relative overflow-hidden bg-black">
        <div className="absolute top-4 right-4 text-[11px] font-mono tracking-widest opacity-60">
          [SPOTLIGHT TIER]
        </div>
        <div className="text-xs font-mono tracking-widest opacity-70 mb-2">KONTUR VIP FELLOWSHIP</div>
        <div className="overflow-hidden my-4">
          <h3 className="text-6xl md:text-7xl font-black tracking-tighter uppercase whitespace-nowrap">
            FELLOWSHIP
          </h3>
        </div>
        <div className="text-3xl font-mono font-bold my-4">CHF 1,250</div>
        <p className="text-xs font-mono tracking-wider opacity-80 leading-relaxed mb-8">
          Exclusive access for typography scholars and studio directors. Includes private dinner with keynotes, hardcover archival folio, and lifetime digital archives.
        </p>
        <button className="w-full bg-white text-black py-4 text-xs font-mono tracking-widest font-bold flex items-center justify-center gap-2 hover:opacity-90">
          SECURE FELLOWSHIP TICKET <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
