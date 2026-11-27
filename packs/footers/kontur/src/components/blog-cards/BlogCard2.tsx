/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const BlogCard2: React.FC = () => {
  const list = [
    { num: '01', title: 'ON GROTESQUE PROPORTIONS', time: '6 MIN READ' },
    { num: '02', title: 'SWISS RASTER SYSTEMS EXAMINED', time: '9 MIN READ' },
    { num: '03', title: 'MONOCHROMATIC WEB TYPOGRAPHY', time: '4 MIN READ' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // INDEXED LIST]</div>
      <div className="space-y-6">
        {list.map((item, idx) => (
          <div key={idx} className="border-b border-white/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-baseline space-x-6">
              <span className="text-3xl font-mono font-black opacity-40">{item.num}</span>
              <h4 className="text-2xl md:text-3xl font-black tracking-tight uppercase">{item.title}</h4>
            </div>
            <div className="text-xs font-mono tracking-widest opacity-70">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
