/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <span className="text-xl font-black font-mono text-[#e30613]">01.</span>
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#0a0a0a]/60 block">CTA 03 // SINGLE BUTTON BAND</span>
            <h4 className="text-xl font-bold uppercase tracking-tight">READY TO DEPLOY THE DESIGN SYSTEM?</h4>
          </div>
        </div>

        <a href="#deploy" className="px-6 py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center space-x-2">
          <span>Initialize Now</span>
          <ArrowRight className="w-3 h-3 text-[#e30613]" />
        </a>
      </div>
    </section>
  );
};
