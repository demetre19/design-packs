/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid3: React.FC = () => {
  const speakers = [
    { name: 'BRUNO MÜLLER', role: 'Type Director, Zürich', topic: 'The Monumental Glyph' },
    { name: 'ELENA VOSS', role: 'Professor of Design, Basel', topic: 'Negative Space Theory' },
    { name: 'KASPER LIND', role: 'Foundry Lead, Geneva', topic: 'Mathematical Grids' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[03 // SPEAKER INDEX]</div>
      <div className="space-y-8">
        {speakers.map((s, idx) => (
          <div key={idx} className="border-b border-white/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4">
            <div className="flex items-baseline space-x-4">
              <span className="text-xs font-mono tracking-widest opacity-50">0{idx + 1}</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{s.name}</h3>
            </div>
            <div className="max-w-xs text-xs font-mono tracking-wider opacity-75 space-y-1">
              <div className="text-white font-bold">{s.topic}</div>
              <div>{s.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
