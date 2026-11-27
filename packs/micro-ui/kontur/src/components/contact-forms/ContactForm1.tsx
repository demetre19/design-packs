/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const ContactForm1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[01 // BOOKING SLIP]</div>
      <div className="border border-white/20 p-8 max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between border-b border-white/20 pb-4 text-xs font-mono">
          <span className="opacity-60">FORM REF</span>
          <span className="font-bold">SLIP-884-CH</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono tracking-widest opacity-70 mb-2">FULL LEGAL NAME</label>
            <input type="text" className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none focus:border-white" placeholder="DR. ALBERT HOFMANN" />
          </div>
          <div>
            <label className="block text-[11px] font-mono tracking-widest opacity-70 mb-2">INSTITUTION / AFFILIATION</label>
            <input type="text" className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none focus:border-white" placeholder="BASEL TYPO FOUNDRY" />
          </div>
          <div>
            <label className="block text-[11px] font-mono tracking-widest opacity-70 mb-2">TICKET CATEGORY</label>
            <select className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none focus:border-white">
              <option>PROFESSIONAL (CHF 380)</option>
              <option>STUDENT (CHF 120)</option>
              <option>FELLOWSHIP (CHF 1,250)</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-white text-black py-4 text-xs font-mono font-bold tracking-widest hover:opacity-90">
          SUBMIT REGISTRATION SLIP
        </button>
      </div>
    </div>
  );
};
