/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content13 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 13 // THE COLOPHON (ART BOOK BACK MATTER)</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 md:p-12 bg-[#ffffff] font-mono text-xs uppercase">
          <div className="text-sm font-bold pb-4 border-b border-[#0a0a0a] mb-6 flex justify-between items-center">
            <span>COLOPHON & SYSTEM CREDITS</span>
            <span className="text-[#e30613]">[ISSN 0982-441X]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-[#e30613] font-bold block">01 // TYPOGRAPHY</span>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">FACE</div>
                <div className="font-bold">Grotesque Sans Pro</div>
              </div>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">WEIGHTS</div>
                <div className="font-bold">400, 700, 900 Black</div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[#e30613] font-bold block">02 // PRODUCTION</span>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">LOCATION</div>
                <div className="font-bold">Zürich Research Lab</div>
              </div>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">SYSTEM VER</div>
                <div className="font-bold">v4.4 (Stable Release)</div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[#e30613] font-bold block">03 // EDITORIAL</span>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">CURATOR</div>
                <div className="font-bold">Dr. Emil Müller</div>
              </div>
              <div>
                <div className="text-[#0a0a0a]/60 text-[10px]">YEAR</div>
                <div className="font-bold">1958–2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
