/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero1 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] grid grid-cols-1 md:grid-cols-12">
        {/* Left column index & meta */}
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-[#0a0a0a] flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 bg-[#e30613]"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">INDEX // HERO.01</span>
            </div>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Absolute structural precision applied to digital publishing and typographic systems. No superfluous ornamentation.
            </p>
          </div>
          <div className="mt-12 pt-6 border-t border-[#0a0a0a]/20 font-mono text-[9px] uppercase tracking-widest text-[#0a0a0a]/60">
            <div>SYS.REF: 982-CH</div>
            <div>ZÜRICH MUSEUM OF DESIGN</div>
          </div>
        </div>

        {/* Right two-thirds heading & photo plate */}
        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[#e30613] font-mono text-sm font-bold">01.</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em]">The Grid Manifest</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              RATIONAL ORDER <br />
              <span className="text-[#e30613]">UNCOMPROMISING</span> <br />
              TYPOGRAPHY.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="border border-[#0a0a0a] p-4 bg-[#0a0a0a]">
              <div className="w-full h-48 bg-[#ffffff] grayscale overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                  alt="Swiss Architecture" 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>
              <div className="text-[9px] font-mono text-[#ffffff] uppercase tracking-widest mt-2 flex justify-between">
                <span>PLATE 01 // BRUTALIST PAVILION</span>
                <span>[ZURICH]</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-mono uppercase leading-relaxed">
                Constructed for high-density information architectures. Clean raster alignment and strict geometric proportions.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#explore" className="px-6 py-3 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center space-x-2">
                  <span>Explore System</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
