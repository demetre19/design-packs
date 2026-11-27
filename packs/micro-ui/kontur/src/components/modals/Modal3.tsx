/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Check } from 'lucide-react';

export const Modal3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 flex justify-center">
      <div className="border border-dashed border-white/40 p-8 max-w-md w-full bg-black relative">
        <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white">
            <Check className="w-4 h-4" /> [CONFIRMED STUB]
          </div>
          <span className="text-[11px] font-mono opacity-50">#88492</span>
        </div>
        <div className="text-center my-6 space-y-2">
          <div className="text-[10px] font-mono tracking-widest opacity-60">ADMIT ONE BEARER</div>
          <div className="text-4xl font-black tracking-tighter uppercase">KONTUR PASS</div>
          <div className="text-xs font-mono tracking-wider opacity-70">OCTOBER 14, 2026 // BASEL</div>
        </div>
        <div className="border-t border-white/20 pt-4 flex justify-between text-[11px] font-mono opacity-60">
          <span>BARCODE: 9832-110</span>
          <span>CH-4051</span>
        </div>
      </div>
    </div>
  );
};
