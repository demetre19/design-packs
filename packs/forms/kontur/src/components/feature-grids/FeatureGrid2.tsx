/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid2: React.FC = () => {
  const cards = [
    { word: 'SYNTH', title: 'Algorithmic Kerning & Optical Spacing', time: '10:00' },
    { word: 'AXIS', title: 'Vertical Typography in Modern UI', time: '12:00' },
    { word: 'VOID', title: 'Black Space as Structural Anchor', time: '14:30' },
    { word: 'FORM', title: 'Post-Digital Swiss Minimalism', time: '16:00' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // LECTURE SERIES CARDS]</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="border border-white/20 p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="absolute -bottom-4 -right-4 text-[7vw] font-black tracking-tighter opacity-15 select-none pointer-events-none uppercase">
              {c.word}
            </div>
            <div className="flex justify-between items-start text-xs font-mono tracking-widest opacity-70 relative z-10">
              <span>MODULE 0{i + 1}</span>
              <span>{c.time}</span>
            </div>
            <div className="relative z-10 my-6">
              <h4 className="text-xl font-bold tracking-tight uppercase">{c.title}</h4>
            </div>
            <div className="text-[11px] font-mono tracking-wider opacity-60 relative z-10">
              KONTUR AUDITORIUM // BASEL
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
