/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial1 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">TESTIMONIAL 01 // RULED QUOTE BLOCK</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 md:p-12 relative bg-[#0a0a0a] text-[#ffffff]">
          <div className="absolute top-6 right-6 text-6xl font-black text-[#e30613] font-serif">“</div>
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613] block mb-4">01 // CRITICAL ACCLAIM</span>
          <blockquote className="text-xl md:text-3xl font-bold uppercase tracking-tight leading-snug mb-8">
            “The typographic discipline and rigorous mathematical grid of Haus Der Form set the definitive standard for modern digital publishing.”
          </blockquote>
          <div className="border-t border-[#ffffff]/20 pt-4 flex justify-between items-center text-xs font-mono uppercase">
            <span>Dr. Emil Müller // Zurich Museum of Design</span>
            <span className="text-[#e30613]">[1984 ARCHIVE]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
