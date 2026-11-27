/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';

export function Media3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="w-full h-80 md:h-[420px] rounded-2xl bg-gradient-to-tr from-[#0a0e12] via-[#152028] to-[#0f4c45] relative overflow-hidden border border-[#e2e8f0] flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute top-6 left-6 bg-[#0a0e12]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] text-white tracking-widest uppercase">
            Video Monograph // 04: Assembly & Calibration
          </div>
          
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#0f4c45] transition-colors relative z-10">
            <Play className="w-6 h-6 ml-0.5 fill-current" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-xs font-mono">
            <span>00:00 / 14:20</span>
            <span>1080p60 // ZURICH LABS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
