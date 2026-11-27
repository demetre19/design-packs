/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer3 = () => {
  return (
    <footer className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] px-8 py-12 flex flex-col md:flex-row items-center justify-between text-xs font-mono uppercase tracking-widest">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="font-bold">HAUS DER FORM</span>
          <span className="text-[#0a0a0a]/50">/ ZÜRICH 1958</span>
        </div>
        <div className="text-[#0a0a0a]/60">
          MINIMAL SINGLE-RULE FOOTER // ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
