/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cta2 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0a0a0a] flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-2 h-2 bg-[#e30613]"></span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CTA 02 // RULED SPLIT</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            ACCESSIBLE ARCHIVES & METERED SPECIMENS.
          </h3>
        </div>

        <div className="md:col-span-4 p-8 md:p-12 flex items-center justify-center bg-[#0a0a0a] text-[#ffffff]">
          <a href="#access" className="w-full py-5 bg-[#e30613] text-[#ffffff] font-mono text-xs uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#0a0a0a] transition-colors flex items-center justify-center space-x-2 text-center">
            <span>Access System →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
