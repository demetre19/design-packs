/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid4: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[04 // ASYMMETRIC GRID]</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/20 p-6 flex flex-col justify-between min-h-[250px]">
          <div className="text-xs font-mono tracking-widest opacity-60">CELL A // 01</div>
          <div>
            <h4 className="text-2xl font-black tracking-tight uppercase mb-2">RAW GROTESQUE</h4>
            <p className="text-xs font-mono tracking-wider opacity-75">Unprocessed letterforms rendered at maximum scale.</p>
          </div>
          <div className="text-[10px] font-mono opacity-40">FOUNDRY SPEC 01</div>
        </div>

        <div className="bg-black border border-white/10 p-6 flex items-center justify-center min-h-[250px]">
          <div className="text-center">
            <div className="text-xs font-mono tracking-widest opacity-30">[PURE VOID]</div>
            <div className="text-4xl font-black tracking-tighter uppercase mt-2 opacity-20">BLANK</div>
          </div>
        </div>

        <div className="border border-white/20 p-6 flex flex-col justify-between min-h-[250px]">
          <div className="text-xs font-mono tracking-widest opacity-60">CELL C // 03</div>
          <div>
            <h4 className="text-2xl font-black tracking-tight uppercase mb-2">GRID MATRIX</h4>
            <p className="text-xs font-mono tracking-wider opacity-75">Strict alignment across columns and horizontal hairlines.</p>
          </div>
          <div className="text-[10px] font-mono opacity-40">FOUNDRY SPEC 03</div>
        </div>
      </div>
    </div>
  );
};
