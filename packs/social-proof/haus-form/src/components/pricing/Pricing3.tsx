/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Pricing3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16 text-center">
        <div className="inline-flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">PRICING 03 // SINGLE TYPOGRAPHIC STATEMENT</span>
        </div>

        <div className="text-6xl md:text-8xl font-black font-mono tracking-tighter text-[#0a0a0a] mb-6">
          CHF 240<span className="text-[#e30613]">.</span>
        </div>

        <p className="text-xs font-mono uppercase tracking-widest text-[#0a0a0a]/80 max-w-xl mx-auto mb-8">
          Flat-rate lifetime access to all 44 component systems, continuous updates, and raw design specifications.
        </p>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center space-x-3">
            <span>Acquire Complete System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
