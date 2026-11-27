/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Stat1: React.FC = () => {
  const stats = [
    { num: '42', label: 'ANNUAL EDITIONS' },
    { num: '18', label: 'KEYNOTE SPEAKERS' },
    { num: '300', label: 'DELEGATE LIMIT' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[01 // MONUMENTAL STATS]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="border border-white/20 p-6 flex flex-col justify-between overflow-hidden min-h-[220px] relative">
            <div className="absolute -top-6 -right-2 overflow-hidden select-none pointer-events-none">
              <span className="text-[12vw] font-black tracking-tighter opacity-15 uppercase">
                {s.num}
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest opacity-60">STAT 0{idx + 1}</div>
            <div className="my-4">
              <div className="text-6xl font-black tracking-tighter uppercase">{s.num}</div>
              <div className="text-xs font-mono tracking-widest opacity-80 mt-2">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
