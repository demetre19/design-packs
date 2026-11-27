/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content6 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 06 // THE MARGIN BOOK (ANNOTATED MARGINALIA)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#0a0a0a] pt-12">
          {/* Main Text Column (45%) */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-[#e30613]">01.</span>
              <p className="text-sm font-mono uppercase leading-relaxed mt-2">
                Typography is the invisible architectural skeleton that gives spoken language its permanent physical form on the printed or digital page.
              </p>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#e30613]">02.</span>
              <p className="text-sm font-mono uppercase leading-relaxed mt-2">
                By stripping away decorative humanist flourishes, the neo-grotesque achieves absolute transparency and timeless legibility across media.
              </p>
            </div>
          </div>

          {/* Wide Margin Column (55% with aligned marginalia) */}
          <div className="md:col-span-7 border-l border-[#0a0a0a] pl-8 space-y-12 font-mono text-xs uppercase text-[#0a0a0a]/70">
            <div className="space-y-2">
              <span className="text-[#e30613] font-bold">[NOTE 01 // ARCHIVAL REF: 44-A]</span>
              <p className="text-[#0a0a0a]">Refer to Zürich Museum Monograph on Structural Letterforms, page 112.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#e30613] font-bold">[NOTE 02 // TECHNICAL SPEC]</span>
              <p className="text-[#0a0a0a]">Letter spacing and em-quad calculations verified under strict optical density standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
