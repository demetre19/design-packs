/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const ContactForm2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // SPLIT FORM]</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-white/20 p-8 items-center">
        <div className="overflow-hidden">
          <div className="text-[11px] font-mono tracking-widest opacity-60 mb-2">APPLICATION 2026</div>
          <h3 className="text-[11vw] lg:text-[7vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
            REGISTER
          </h3>
          <p className="text-xs font-mono tracking-wider opacity-75 mt-4">
            Secure your seat for the October symposium. Strict capacity limits enforced.
          </p>
        </div>
        <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-white/20 lg:pl-8 pt-6 lg:pt-0">
          <div>
            <label className="block text-[11px] font-mono tracking-widest opacity-70 mb-1">DESIGNER NAME</label>
            <input type="text" className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none" placeholder="E. RUDER" />
          </div>
          <div>
            <label className="block text-[11px] font-mono tracking-widest opacity-70 mb-1">EMAIL</label>
            <input type="email" className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none" placeholder="eruder@basel.ch" />
          </div>
          <button className="w-full bg-white text-black py-3 text-xs font-mono font-bold tracking-widest hover:opacity-90 mt-2">
            TRANSMIT REGISTRATION
          </button>
        </div>
      </div>
    </div>
  );
};
