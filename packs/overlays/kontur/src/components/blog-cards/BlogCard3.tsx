/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const BlogCard3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[03 // MAGAZINE GRID]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/20 p-6 flex flex-col justify-between md:col-span-2 min-h-[300px]">
          <div className="text-xs font-mono tracking-widest opacity-60">FEATURED ESSAY // OCT 2026</div>
          <div className="my-4">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              THE ARCHITECTURE OF SILENCE IN DIGITAL INTERFACES
            </h3>
          </div>
          <div className="text-xs font-mono tracking-wider opacity-80">
            By Dr. Hans Keller — Basel Institute of Typographic Research
          </div>
        </div>

        <div className="border border-white/20 p-6 flex flex-col justify-between min-h-[300px]">
          <div className="text-xs font-mono tracking-widest opacity-60">SHORT NOTE // 02</div>
          <div className="my-4">
            <h4 className="text-2xl font-black tracking-tight uppercase">
              GRID RIGIDITY
            </h4>
          </div>
          <div className="text-xs font-mono tracking-wider opacity-70">
            Why flexible layouts fail without strict vertical rhythm constraints.
          </div>
        </div>
      </div>
    </div>
  );
};
