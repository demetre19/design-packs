/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Hero3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white min-h-[500px] relative overflow-hidden border-b border-white/20 p-8 flex flex-col items-center justify-center text-center">
      <div className="absolute top-6 left-6 text-[11px] font-mono tracking-widest opacity-70 text-left">
        EVENT 03<br />ZÜRICH MUNICIPAL
      </div>
      <div className="absolute top-6 right-6 text-[11px] font-mono tracking-widest opacity-70 text-right">
        ADMISSION: FREE<br />REGISTRATION REQ.
      </div>

      <h2 className="text-[18vw] font-black tracking-[-0.08em] leading-[0.8] uppercase w-full overflow-hidden whitespace-nowrap my-6">
        MONUMENT
      </h2>

      <div className="max-w-md text-xs font-mono tracking-wider opacity-80 leading-relaxed mt-2">
        An exhaustive exploration into zero-baseline grid structures, brutalist typography, and the absence of superfluous ornamentation in European graphic communication.
      </div>
    </div>
  );
};
