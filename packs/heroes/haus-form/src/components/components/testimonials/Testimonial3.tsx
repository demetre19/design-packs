/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">TESTIMONIAL 03 // SINGLE LARGE QUOTE</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 md:p-16">
          <blockquote className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-8">
            “Design is not simply what it looks like and feels like. Design is how the entire system functions under rigorous mathematical laws.”
          </blockquote>
          <div className="border-t border-[#0a0a0a] pt-6 flex flex-col md:flex-row md:items-center justify-between text-xs font-mono uppercase">
            <div>
              <span className="text-[#e30613] font-bold mr-2">01.</span>
              <span>PROFESSOR HANS RUDOLF</span>
            </div>
            <div className="text-[#0a0a0a]/60 mt-2 md:mt-0">
              DIRECTOR OF RESEARCH // ZÜRICH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
