/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial2: React.FC = () => {
  const items = [
    { word: 'MONUMENTAL', author: 'Typographic Today' },
    { word: 'UNCOMPROMISING', author: 'Basel Review' },
    { word: 'ESSENTIAL', author: 'Studio Monograph' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // QUOTE WALL]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="border border-white/20 p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[10px] font-mono opacity-50">0{idx + 1}</div>
            <div className="overflow-hidden my-4">
              <h4 className="text-4xl font-black tracking-tighter uppercase whitespace-nowrap">
                {item.word}
              </h4>
            </div>
            <div className="text-xs font-mono tracking-widest opacity-70 border-t border-white/20 pt-4">
              — {item.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
