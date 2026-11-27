/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero4: React.FC = () => {
  return (
    <div className="w-full bg-black text-white min-h-[550px] relative overflow-hidden border-b border-white/20 flex flex-col">
      {/* Top Half */}
      <div className="p-8 pb-4 border-b border-white/20 overflow-hidden">
        <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">SPLIT LAYOUT // 04</div>
        <h2 className="text-[16vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap overflow-hidden">
          GEOMETRY
        </h2>
      </div>

      {/* Bottom Half */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8 text-xs font-mono tracking-wider opacity-80 leading-relaxed">
        <div>
          <span className="text-white font-bold block mb-1">[01. PRINCIPLE]</span>
          Absolute reduction of visual noise through strict adherence to standard grid proportions and uncompromised font scaling.
        </div>
        <div>
          <span className="text-white font-bold block mb-1">[02. MEDIUM]</span>
          Black ink on white ground, inverted for screen media. Typography functions simultaneously as structure and ornament.
        </div>
        <div>
          <span className="text-white font-bold block mb-1">[03. CONTEXT]</span>
          Lectures hosted by the Kontur Editorial Board across three European design institutions during October.
        </div>
      </div>
    </div>
  );
};
