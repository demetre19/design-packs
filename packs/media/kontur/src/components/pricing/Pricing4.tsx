/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Pricing4: React.FC = () => {
  const cards = [
    { code: '01', title: 'EARLY BIRD', price: 'CHF 220' },
    { code: '02', title: 'STANDARD', price: 'CHF 350' },
    { code: '03', title: 'LATE REG', price: 'CHF 440' },
    { code: '04', title: 'ON-SITE', price: 'CHF 520' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[04 // HORIZONTAL TIERS]</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="border border-white/20 p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            <div className="overflow-hidden">
              <span className="text-3xl font-black tracking-tighter uppercase block overflow-hidden whitespace-nowrap">
                {c.title}
              </span>
            </div>
            <div className="my-6">
              <div className="text-2xl font-mono font-bold">{c.price}</div>
              <div className="text-[11px] font-mono tracking-widest opacity-60 mt-1">RELEASE {c.code}</div>
            </div>
            <button className="border border-white/40 text-xs font-mono py-2 tracking-widest hover:bg-white hover:text-black transition-colors">
              SELECT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
