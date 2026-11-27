/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content12 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 12 // THE THREADED NARRATIVE (THREE ACTS LINKED)</span>
        </div>

        <div className="space-y-8 relative">
          {/* Continuous vertical thread line */}
          <div className="absolute top-8 bottom-8 left-6 md:left-8 w-[2px] bg-[#e30613] hidden md:block"></div>

          {/* Act I */}
          <div className="border border-[#0a0a0a] p-6 md:p-8 ml-0 md:ml-16 bg-[#ffffff] relative">
            <div className="absolute -left-10 top-8 w-6 h-6 bg-[#0a0a0a] text-[#ffffff] font-mono text-[10px] font-bold flex items-center justify-center rounded-none hidden md:flex">
              I
            </div>
            <span className="text-[9px] font-mono text-[#e30613] uppercase font-bold">ACT I // GENESIS</span>
            <h3 className="text-xl font-bold uppercase mt-1 mb-2">THE ESTABLISHMENT OF ZÜRICH MODERNISM</h3>
            <p className="text-xs font-mono uppercase text-[#0a0a0a]/80">Origins of the grid doctrine in mid-century Swiss typographic research laboratories.</p>
          </div>

          {/* Act II */}
          <div className="border border-[#0a0a0a] p-6 md:p-8 ml-0 md:ml-16 bg-[#0a0a0a] text-[#ffffff] relative">
            <div className="absolute -left-10 top-8 w-6 h-6 bg-[#e30613] text-[#ffffff] font-mono text-[10px] font-bold flex items-center justify-center rounded-none hidden md:flex">
              II
            </div>
            <span className="text-[9px] font-mono text-[#e30613] uppercase font-bold">ACT II // CODIFICATION</span>
            <h3 className="text-xl font-bold uppercase mt-1 mb-2">MATHEMATICAL PROPORTION AS ABSOLUTE LAW</h3>
            <p className="text-xs font-mono uppercase text-[#ffffff]/80">Codifying proportional rules into rigid structural matrices and hairline divisions.</p>
          </div>

          {/* Act III */}
          <div className="border border-[#0a0a0a] p-6 md:p-8 ml-0 md:ml-16 bg-[#ffffff] relative">
            <div className="absolute -left-10 top-8 w-6 h-6 bg-[#0a0a0a] text-[#ffffff] font-mono text-[10px] font-bold flex items-center justify-center rounded-none hidden md:flex">
              III
            </div>
            <span className="text-[9px] font-mono text-[#e30613] uppercase font-bold">ACT III // TRANSLATION</span>
            <h3 className="text-xl font-bold uppercase mt-1 mb-2">DIGITAL ARCHITECTURE V4.4</h3>
            <p className="text-xs font-mono uppercase text-[#0a0a0a]/80">Applying historical typographic order to modern React and Tailwind component systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
