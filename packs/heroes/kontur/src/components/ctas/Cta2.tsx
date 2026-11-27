/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Cta2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 text-center overflow-hidden">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">[02 // CENTERED CLUSTER]</div>
      <div className="max-w-md mx-auto text-xs font-mono tracking-wider opacity-80 mb-6">
        Join leading typographers in Basel for an intensive three-day symposium on modern Swiss design.
      </div>
      <div className="overflow-hidden my-4">
        <h3 className="text-[18vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          REGISTER
        </h3>
      </div>
    </div>
  );
};
