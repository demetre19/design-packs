/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">[03 // PRESS ARCHIVE]</div>
      <div className="overflow-hidden mb-8">
        <h3 className="text-[12vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          PRESS
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono tracking-wider opacity-80 leading-relaxed border-t border-white/20 pt-6">
        <div>
          <span className="text-white font-bold block mb-2">NOVUM WORLD OF DESIGN</span>
          &ldquo;Kontur has redefined the parameters of European symposium collateral through relentless type reduction.&rdquo;
        </div>
        <div>
          <span className="text-white font-bold block mb-2">ARCHITECTURAL REVIEW</span>
          &ldquo;The architecture of the event mirrors its graphic identity: brutal, unapologetic, perfectly aligned.&rdquo;
        </div>
        <div>
          <span className="text-white font-bold block mb-2">TYPO-GRAFICA ZÜRICH</span>
          &ldquo;An essential annual fixture for practitioners who reject ornamentation in favor of structural truth.&rdquo;
        </div>
      </div>
    </div>
  );
};
