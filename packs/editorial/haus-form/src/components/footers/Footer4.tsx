/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer4 = () => {
  return (
    <footer className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="border-b border-[#0a0a0a] pb-12 mb-12">
          <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613] mb-4">+ INSTITUTIONAL ARCHIVE</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">HAUS DER FORM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs uppercase">
          <div className="p-6 border border-[#0a0a0a] space-y-2">
            <span className="text-[#e30613] font-bold">01 // HEADQUARTERS</span>
            <div className="text-[#0a0a0a]/80">Ausstellungsstrasse 60</div>
            <div className="text-[#0a0a0a]/80">8005 Zürich, Switzerland</div>
          </div>
          <div className="p-6 border border-[#0a0a0a] space-y-2">
            <span className="text-[#e30613] font-bold">02 // COMMUNICATIONS</span>
            <div className="text-[#0a0a0a]/80">inquiry@hausderform.ch</div>
            <div className="text-[#0a0a0a]/80">+41 44 210 58 00</div>
          </div>
          <div className="p-6 border border-[#0a0a0a] space-y-2">
            <span className="text-[#e30613] font-bold">03 // SYSTEM STATUS</span>
            <div className="text-[#0a0a0a]/80">ISSN 0982-441X</div>
            <div className="text-[#e30613] font-bold">OPERATIONAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
