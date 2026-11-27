/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer1 = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-[#ffffff] font-sans border-b border-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#ffffff]/20 p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#ffffff]/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-[#e30613]"></div>
              <span className="font-bold text-base tracking-tight uppercase">HAUS DER FORM</span>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#ffffff]/60">
              Swiss International Typographic Order. Zürich, Switzerland.
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs uppercase">
            <div className="text-[#e30613] font-bold">01. INDEX</div>
            <a href="#institute" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Institute</a>
            <a href="#archive" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Archive</a>
            <a href="#symposium" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Symposium</a>
          </div>

          <div className="space-y-2 font-mono text-xs uppercase">
            <div className="text-[#e30613] font-bold">02. LEGAL</div>
            <a href="#terms" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Terms of License</a>
            <a href="#privacy" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Privacy Policy</a>
            <a href="#colophon" className="block text-[#ffffff]/70 hover:text-[#ffffff] transition-colors">Colophon</a>
          </div>

          <div className="space-y-2 font-mono text-xs uppercase">
            <div className="text-[#e30613] font-bold">03. CONTACT</div>
            <div className="text-[#ffffff]/70">AUSSTELLUNGSSTRASSE 60</div>
            <div className="text-[#ffffff]/70">8005 ZÜRICH, CH</div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#ffffff]/50">
          <div>© 1958–2026 HAUS DER FORM. ALL RIGHTS RESERVED.</div>
          <div className="text-[#e30613] mt-4 md:mt-0">[SYS.V4.4 ACTIVE]</div>
        </div>
      </div>
    </footer>
  );
};
