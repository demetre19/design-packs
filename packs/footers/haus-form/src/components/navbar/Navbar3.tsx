/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Navbar3 = () => {
  return (
    <header className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        {/* Big stacked wordmark */}
        <div className="p-8 border-b border-[#0a0a0a] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.3em] mb-2">+ TYPOGRAPHIC ORDER V.3</div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">HAUS DER FORM</h1>
          </div>
          <div className="mt-4 md:mt-0 text-right font-mono text-[10px] uppercase tracking-widest text-[#0a0a0a]/70">
            <div>LOC: 47.3769° N, 8.5417° E</div>
            <div>STATUS: ARCHIVE OPEN</div>
          </div>
        </div>

        {/* Ruled link row */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#0a0a0a] text-xs font-mono uppercase tracking-widest">
          <a href="#foundry" className="p-4 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center justify-between">
            <span><span className="text-[#e30613] mr-2">01.</span>Foundry</span>
            <span>→</span>
          </a>
          <a href="#research" className="p-4 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center justify-between">
            <span><span className="text-[#e30613] mr-2">02.</span>Research</span>
            <span>→</span>
          </a>
          <a href="#exhibition" className="p-4 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center justify-between">
            <span><span className="text-[#e30613] mr-2">03.</span>Exhibition</span>
            <span>→</span>
          </a>
          <a href="#colophon" className="p-4 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center justify-between">
            <span><span className="text-[#e30613] mr-2">04.</span>Colophon</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
