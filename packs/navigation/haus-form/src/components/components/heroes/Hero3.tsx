/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="md:col-span-5 p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff] flex flex-col justify-center">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613] mb-4">NUMERAL SPECIMEN</span>
          <div className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-[#ffffff]">
            44
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#ffffff]/70 mt-4">
            STANDARDIZED COMPONENTS
          </span>
        </div>

        <div className="md:col-span-7 p-8 md:p-16">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-[#e30613]"></span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em]">03. OVERSIZED NUMERAL HERO</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-6">
            THE UNCOMPROMISING DESIGN LANGUAGE OF SWISS MODERNISM.
          </h1>
          <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 mb-8">
            Created for editorial layouts, architectural archives, and type specimen sheets. Strict adherence to grid alignment.
          </p>
          <a href="#browse" className="inline-flex items-center space-x-3 px-6 py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] hover:text-[#ffffff] hover:border-[#e30613] transition-colors">
            <span>Browse All Modules</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
