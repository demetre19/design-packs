/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero5 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0a0a0a] flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 bg-[#e30613]"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">05. SPLIT COLOR BLOCK HERO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-6">
              THE SWISS INTERNATIONAL STYLE IN DIGITAL SPACE.
            </h1>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 max-w-xl">
              Constructed with high-contrast plates, exact hairline borders, and asymmetric typography.
            </p>
          </div>
          <div className="mt-12 flex items-center space-x-6">
            <a href="#explore" className="px-6 py-3 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors">
              Initialize System →
            </a>
          </div>
        </div>

        {/* Stark color block right */}
        <div className="md:col-span-4 bg-[#0a0a0a] text-[#ffffff] p-8 md:p-12 flex flex-col justify-between">
          <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613]">
            [SPECIMEN BLOCK]
          </div>
          <div className="my-12">
            <div className="text-6xl font-black font-mono tracking-tighter text-[#ffffff] mb-2">#E30613</div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#ffffff]/70">
              Signal Red used with surgical restraint.
            </p>
          </div>
          <div className="border-t border-[#ffffff]/20 pt-4 text-[9px] font-mono text-[#ffffff]/50 uppercase">
            HAUS DER FORM ZÜRICH
          </div>
        </div>
      </div>
    </section>
  );
};
