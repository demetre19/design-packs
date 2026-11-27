/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BlogCard4 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">BLOG 04 // REGISTRATION-MARK META ROW</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 relative">
          <div className="absolute -top-3 -left-3 text-xs font-mono">+</div>
          <div className="absolute -top-3 -right-3 text-xs font-mono">+</div>
          
          <div className="flex justify-between items-center pb-6 border-b border-[#0a0a0a] text-[9px] font-mono uppercase text-[#0a0a0a]/70 mb-6">
            <span className="text-[#e30613] font-bold">01. RESEARCH PUBLICATION</span>
            <span>ISSN 0982-441X</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            TYPOGRAPHIC RESTRAINT AS A FORM OF CULTURAL RESISTANCE.
          </h3>

          <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 mb-8 max-w-3xl">
            Examining how strict adherence to grid systems and neo-grotesque typefaces provides an enduring sanctuary against visual clutter in modern interfaces.
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-[#0a0a0a]">
            <span className="text-[10px] font-mono uppercase">ZÜRICH, NOVEMBER 2026</span>
            <a href="#essay" className="inline-flex items-center space-x-2 text-xs font-mono uppercase font-bold hover:text-[#e30613] transition-colors">
              <span>Read Monograph</span>
              <ArrowRight className="w-3 h-3 text-[#e30613]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
