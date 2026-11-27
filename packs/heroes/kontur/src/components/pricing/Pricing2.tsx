/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Pricing2: React.FC = () => {
  const passes = [
    { title: 'DAY PASS // MONDAY', access: 'Keynotes & Exhibition', price: 'CHF 90' },
    { title: 'DAY PASS // TUESDAY', access: 'Workshops & Panels', price: 'CHF 110' },
    { title: 'DAY PASS // WEDNESDAY', access: 'Closing Debates & Portfolio Review', price: 'CHF 110' },
    { title: 'FULL 3-DAY PASSPORT', access: 'Complete Access + Specimen Book', price: 'CHF 280' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // TABLE PASSES]</div>
      <div className="border border-white/20 divide-y divide-white/20">
        {passes.map((p, i) => (
          <div key={i} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/5 transition-colors">
            <div>
              <div className="text-xl font-bold tracking-tight uppercase">{p.title}</div>
              <div className="text-xs font-mono tracking-wider opacity-70 mt-1">{p.access}</div>
            </div>
            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono tracking-widest opacity-60">REF // 0{i + 1}</span>
              <span className="text-lg font-mono font-bold">{p.price}</span>
              <button className="bg-white text-black px-4 py-2 text-xs font-mono font-bold tracking-widest">
                BOOK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
