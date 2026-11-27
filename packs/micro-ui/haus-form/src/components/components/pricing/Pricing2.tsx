/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Pricing2 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">PRICING 02 // 3-COLUMN MATRIX (RECOMMENDED HIGHLIGHT)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#0a0a0a] pt-12">
          {/* Col 1 */}
          <div className="border border-[#0a0a0a] p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#e30613] font-bold">01. BASIC</span>
                <span className="text-[9px] font-mono uppercase">SINGLE</span>
              </div>
              <div className="text-4xl font-black font-mono tracking-tighter mb-4">CHF 120</div>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">Essential type specimen and grid templates for individual designers.</p>
            </div>
            <button className="w-full py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
              Select Tier →
            </button>
          </div>

          {/* Col 2 - Recommended (Red Highlight) */}
          <div className="border-2 border-[#e30613] p-8 flex flex-col justify-between space-y-8 bg-[#0a0a0a] text-[#ffffff] relative">
            <div className="absolute -top-3 right-4 bg-[#e30613] text-[#ffffff] text-[9px] font-mono uppercase tracking-widest px-2 py-0.5">
              RECOMMENDED SPECIMEN
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#e30613] font-bold">02. STUDIO</span>
                <span className="text-[9px] font-mono uppercase text-[#ffffff]/70">TEAM</span>
              </div>
              <div className="text-4xl font-black font-mono tracking-tighter mb-4 text-[#ffffff]">CHF 350</div>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#ffffff]/80">Full toolkit with extended weights, variable axes, and enterprise licensing.</p>
            </div>
            <button className="w-full py-3 bg-[#e30613] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#0a0a0a] transition-colors">
              Acquire Studio →
            </button>
          </div>

          {/* Col 3 */}
          <div className="border border-[#0a0a0a] p-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#e30613] font-bold">03. ARCHIVE</span>
                <span className="text-[9px] font-mono uppercase">GLOBAL</span>
              </div>
              <div className="text-4xl font-black font-mono tracking-tighter mb-4">CHF 980</div>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">Unlimited institutional access, custom typesetting consultations, and master files.</p>
            </div>
            <button className="w-full py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
              Select Tier →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
