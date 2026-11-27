/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const ContactForm3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[03 // MINIMAL INQUIRY]</div>
      <div className="max-w-xl mx-auto border border-white/20 p-8 space-y-6">
        <div>
          <label className="block text-xs font-mono tracking-[0.2em] opacity-80 mb-2">INQUIRY SUBJECT</label>
          <input type="text" className="w-full bg-black border-b border-white/40 pb-2 text-sm font-mono text-white focus:outline-none focus:border-white" placeholder="SPECIMEN ORDER / SPONSORSHIP" />
        </div>
        <div>
          <label className="block text-xs font-mono tracking-[0.2em] opacity-80 mb-2">MESSAGE DETAILS</label>
          <textarea rows={4} className="w-full bg-black border border-white/30 p-3 text-xs font-mono text-white focus:outline-none focus:border-white" placeholder="ENTER MESSAGE..." />
        </div>
        <button className="w-full border border-white text-white py-3 text-xs font-mono tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors">
          TRANSMIT MESSAGE
        </button>
      </div>
    </div>
  );
};
