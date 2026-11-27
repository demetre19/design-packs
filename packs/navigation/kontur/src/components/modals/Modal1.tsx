/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { X } from 'lucide-react';

export const Modal1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 flex justify-center">
      <div className="border border-white/40 p-8 max-w-lg w-full relative overflow-hidden bg-black shadow-2xl">
        <div className="absolute -bottom-6 -right-6 text-[12vw] font-black opacity-10 uppercase select-none pointer-events-none">
          PASS
        </div>
        <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-6">
          <span className="text-[11px] font-mono tracking-widest opacity-70">[MODAL 01 // TICKET SPEC]</span>
          <button className="opacity-70 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4 relative z-10">
          <h3 className="text-3xl font-black tracking-tighter uppercase">PROFESSIONAL PASS</h3>
          <p className="text-xs font-mono tracking-wider opacity-80 leading-relaxed">
            Includes admission to all 12 keynotes, exhibition previews, and the physical specimen box shipped directly to your studio.
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-white/20 text-xs font-mono">
            <span className="opacity-60">FEE: CHF 380</span>
            <button className="bg-white text-black px-4 py-2 font-bold tracking-widest hover:opacity-90">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
