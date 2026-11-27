/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content7 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 07 // THE FILM STRIP (UNEVEN RHYTHM BAND)</span>
        </div>

        <div className="border border-[#0a0a0a] overflow-x-auto pb-4">
          <div className="flex items-stretch space-x-4 min-w-[900px] p-4 bg-[#0a0a0a] text-[#ffffff]">
            {/* Frame 1: Wide text */}
            <div className="w-[350px] border border-[#ffffff]/30 p-6 bg-[#0a0a0a] flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#e30613]">FRAME 01 // NARRATIVE</span>
                <h4 className="text-xl font-bold uppercase mt-2">SEQUENTIAL RHYTHM IN PRINT & WEB</h4>
              </div>
              <span className="text-[9px] font-mono text-[#ffffff]/50">350PX</span>
            </div>

            {/* Frame 2: Tiny numeral */}
            <div className="w-[120px] border border-[#ffffff]/30 p-6 bg-[#ffffff] text-[#0a0a0a] flex flex-col justify-between items-center text-center">
              <span className="text-[9px] font-mono text-[#e30613]">FRAME 02</span>
              <div className="text-4xl font-black font-mono">02</div>
              <span className="text-[9px] font-mono text-[#0a0a0a]/50">120PX</span>
            </div>

            {/* Frame 3: Medium image plate */}
            <div className="w-[280px] border border-[#ffffff]/30 p-4 bg-[#ffffff] text-[#0a0a0a] flex flex-col justify-between">
              <div className="w-full h-24 grayscale overflow-hidden">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80" alt="Film plate" className="w-full h-full object-cover filter grayscale contrast-150" />
              </div>
              <div className="flex justify-between items-center mt-2 font-mono text-[9px]">
                <span>PLATE 07</span>
                <span className="text-[#e30613]">280PX</span>
              </div>
            </div>

            {/* Frame 4: Narrow quote */}
            <div className="w-[200px] border border-[#ffffff]/30 p-6 bg-[#0a0a0a] flex flex-col justify-between">
              <span className="text-[9px] font-mono text-[#e30613]">FRAME 04</span>
              <p className="text-xs font-mono uppercase">“Strict timing creates temporal order.”</p>
              <span className="text-[9px] font-mono text-[#ffffff]/50">200PX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
