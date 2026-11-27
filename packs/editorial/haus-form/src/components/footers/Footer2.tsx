/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer2 = () => {
  return (
    <footer className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FOOTER 02 // RULED MULTI-COLUMN INDEX</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#0a0a0a] pt-12 font-mono text-xs uppercase">
          <div className="space-y-3">
            <span className="text-[#e30613] font-bold">01 // FOUNDRY</span>
            <a href="#grotesque" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Grotesque Sans</a>
            <a href="#variable" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Variable Axes</a>
            <a href="#specimens" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Specimen Sheets</a>
          </div>
          <div className="space-y-3">
            <span className="text-[#e30613] font-bold">02 // RESEARCH</span>
            <a href="#grids" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Grid Systems</a>
            <a href="#manifesto" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Manifesto</a>
            <a href="#essays" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Essays</a>
          </div>
          <div className="space-y-3">
            <span className="text-[#e30613] font-bold">03 // ARCHIVE</span>
            <a href="#exhibits" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Zurich Museum</a>
            <a href="#posters" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Poster Collection</a>
            <a href="#catalog" className="block text-[#0a0a0a]/70 hover:text-[#0a0a0a]">Full Catalog</a>
          </div>
          <div className="space-y-3">
            <span className="text-[#e30613] font-bold">04 // SYSTEM</span>
            <div className="text-[#0a0a0a]/70">Zürich, CH</div>
            <div className="text-[#0a0a0a]/70">ISSN 0982-441X</div>
            <div className="text-[#e30613] font-bold">STATUS: ACTIVE</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
