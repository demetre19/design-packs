/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Play } from 'lucide-react';

export const Media1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-4">[01 // VIDEO PLATE VOID]</div>
      <div className="border border-white/20 bg-black min-h-[350px] relative overflow-hidden flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-10">
          <span className="text-[20vw] font-black tracking-tighter uppercase">PLAY</span>
        </div>
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border border-white flex items-center justify-center rounded-none group-hover:bg-white group-hover:text-black transition-colors">
            <Play className="w-6 h-6 ml-1" />
          </div>
          <span className="text-xs font-mono tracking-widest opacity-80">STREAM SYMPOSIUM DOCUMENTARY // 42 MIN</span>
        </div>
        <div className="absolute bottom-4 left-4 text-[11px] font-mono opacity-60">
          CH-RES: 4K 60FPS
        </div>
      </div>
    </div>
  );
};
