/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero4 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 border-b md:border-b-0 md:border-r border-[#0a0a0a] font-mono text-[9px] uppercase tracking-[0.2em] space-y-4 text-[#0a0a0a]/70">
          <div className="text-[#e30613] font-bold">04. METADATA COLUMN</div>
          <div>EST: 1958 ZÜRICH</div>
          <div>SYSTEM: SWISS GRID</div>
          <div>COLOR: MONO + RED</div>
          <div>STATUS: ACTIVE V4</div>
        </div>

        <div className="md:col-span-9 p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
            ORDER IS THE PRECURSOR OF ALL RELIABLE COMMUNICATION.
          </h1>
          <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 max-w-2xl mb-8">
            By rejecting decorative noise and embracing strict vertical and horizontal grids, information achieves maximum clarity and timeless authority.
          </p>
          <div className="flex items-center space-x-6 text-xs font-mono uppercase">
            <a href="#specimen" className="px-6 py-3 bg-[#0a0a0a] text-[#ffffff] hover:bg-[#e30613] transition-colors">
              View Specimens →
            </a>
            <a href="#archives" className="px-6 py-3 border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
              Access Archives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
