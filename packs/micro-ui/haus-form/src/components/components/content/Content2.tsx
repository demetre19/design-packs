/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content2 = () => {
  const steps = [
    { num: "01", title: "GEOMETRIC EXTRACTION", desc: "Isolating structural forms from historical Swiss architectural blueprints." },
    { num: "02", title: "MODULAR RASTER LOCK", desc: "Establishing strict 12-column vertical and horizontal grid coordinates." },
    { num: "03", title: "TYPOGRAPHIC REDUCTION", desc: "Stripping humanist variations to produce absolute grotesque purity." },
    { num: "04", title: "SURGICAL CALIBRATION", desc: "Applying signal red (#e30613) solely for index markers and optical focus." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16 relative overflow-hidden">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">CONTENT 02 // THE SPIRAL STAIRCASE (DIAGONAL THREADED FLOW)</span>
        </div>

        <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">PROCEDURAL ASCENT & DESCENT</h2>

        <div className="space-y-8 relative">
          {steps.map((step, idx) => {
            const offsets = ["ml-0", "ml-8 md:ml-24", "ml-16 md:ml-48", "ml-24 md:ml-72"];
            return (
              <div key={idx} className={`${offsets[idx]} max-w-lg border border-[#0a0a0a] p-6 bg-[#ffffff] relative z-10 shadow-none`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono font-bold text-[#e30613]">{step.num}. STEP</span>
                  <span className="w-2 h-2 bg-[#0a0a0a]"></span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{step.title}</h3>
                <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
