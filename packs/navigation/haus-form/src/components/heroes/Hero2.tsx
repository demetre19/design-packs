/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero2 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">02. ASYMMETRIC COMPOSITION</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-12">
          THE GRID AS LAW. <br />
          <span className="text-[#e30613]">FUNCTION BEFORE DECORATION.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#0a0a0a] pt-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#e30613] font-bold">01 // RASTER</span>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Every coordinate is locked to mathematical columns. Alignment defines legibility.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#e30613] font-bold">02 // GROTESQUE</span>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Neo-grotesque letterforms stripped of humanist eccentricities, rendered in pure black and white.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#e30613] font-bold">03 // RESTRAINT</span>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Signal red (#e30613) applied solely for indicators, index markers, and focal points.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
