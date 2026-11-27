/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { X } from 'lucide-react';

export const Modal2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 flex justify-center">
      <div className="border border-white/40 p-8 max-w-lg w-full relative overflow-hidden bg-black">
        <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-4">
          <span className="text-[11px] font-mono tracking-widest opacity-70">[MODAL 02 // SPEAKER BIO]</span>
          <button className="opacity-70 hover:opacity-100"><X className="w-4 h-4" /></button>
        </div>
        <div className="overflow-hidden my-4">
          <h3 className="text-6xl font-black tracking-tighter uppercase whitespace-nowrap">
            MÜLLER
          </h3>
        </div>
        <div className="text-xs font-mono tracking-wider opacity-80 space-y-2 mt-4">
          <div className="text-white font-bold">BRUNO MÜLLER — KEYNOTE SPEAKER</div>
          <p className="opacity-70 leading-relaxed">
            Head of Type Design at Basel Academy. Author of &ldquo;The Negative Grid&rdquo; and consultant for international corporate identity standards.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 flex justify-between text-[11px] font-mono opacity-60">
          <span>SESSION // 10:30 CET</span>
          <span>HALL A</span>
        </div>
      </div>
    </div>
  );
};
