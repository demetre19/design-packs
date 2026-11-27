/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta1 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-20 text-center">
        <div className="inline-flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CTA 01 // HUGE STATEMENT</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
          INITIALIZE THE <br />
          <span className="text-[#e30613]">TYPOGRAPHIC ORDER</span> <br />
          TODAY.
        </h2>

        <div className="flex justify-center">
          <a href="#acquire" className="px-8 py-4 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center space-x-3">
            <span>Acquire System Specification</span>
            <ArrowRight className="w-4 h-4 text-[#e30613] group-hover:text-[#ffffff]" />
          </a>
        </div>
      </div>
    </section>
  );
};
