/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content10 = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-[#ffffff] border-b border-[#0a0a0a] font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto border-x border-[#ffffff]/25 p-12 md:p-24 relative">
        <div className="absolute top-6 left-6 text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613]">
          + CONTENT 10 // THE INTERRUPTION
        </div>

        <div className="absolute bottom-6 right-6 text-[9px] font-mono uppercase tracking-[0.3em] text-[#ffffff]/60 rotate-[-90deg] origin-bottom-right">
          ZÜRICH DOCTRINE // 1958
        </div>

        <div className="py-12">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#ffffff]">
            ORDER IS <br />
            <span className="text-[#e30613]">ABSOLUTE.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
