/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content3 = () => {
  const items = [
    { num: "01", side: "left", title: "THEORY OF PROPORTION", desc: "Mathematical ratios governing vertical grid rhythms." },
    { num: "02", side: "right", title: "GROTESQUE GEOMETRY", desc: "Uncompromising letterform construction principles." },
    { num: "03", side: "left", title: "OPTICAL ANCHORS", desc: "Surgical deployment of signal red (#e30613)." },
    { num: "04", side: "right", title: "ABSOLUTE CONTRAST", desc: "Pure pitch black and absolute white pairing." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16 relative">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 03 // THE INTERLOCK (ZIPPER TEETH HANGING ON CENTER RULE)</span>
        </div>

        <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">SYSTEMIC DUALITY MESH</h2>

        {/* Center vertical rule */}
        <div className="absolute top-44 bottom-16 left-1/2 w-[1px] bg-[#0a0a0a] hidden md:block"></div>

        <div className="space-y-8 relative">
          {items.map((item, idx) => {
            const isLeft = item.side === 'left';
            return (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isLeft ? '' : 'md:text-right'}`}>
                <div className={`${isLeft ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className={`border border-[#0a0a0a] p-6 bg-[#ffffff] relative ${isLeft ? 'border-l-4 border-l-[#e30613]' : 'border-r-4 border-r-[#e30613]'}`}>
                    <div className="text-xs font-mono font-bold text-[#e30613] mb-1">{item.num}. INTERLOCK</div>
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
