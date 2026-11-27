/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Media2: React.FC = () => {
  const plates = [
    { num: 'PLATE 01', caption: 'Basel Academy Exhibition Hall A — Type Specimen Display' },
    { num: 'PLATE 02', caption: 'Zürich Annex — Negative Space Workshop in Progress' },
    { num: 'PLATE 03', caption: 'Archival Press Folio — 1962 Swiss Poster Collection' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[02 // GALLERY PLATES]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plates.map((p, i) => (
          <div key={i} className="border border-white/20 p-6 flex flex-col justify-between min-h-[260px]">
            <div className="border border-white/10 h-32 flex items-center justify-center bg-black">
              <span className="text-xs font-mono tracking-widest opacity-30">[VOID PLATE]</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-[10px] font-mono tracking-widest opacity-50 mb-1">{p.num}</div>
              <p className="text-xs font-mono tracking-wider opacity-80 leading-relaxed">{p.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
