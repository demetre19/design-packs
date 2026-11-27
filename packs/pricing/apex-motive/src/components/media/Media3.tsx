import React from 'react';
import { Play, Zap } from 'lucide-react';

export function Media3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// LAUNCH REEL</span>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-8">APEX MACHINE PERFORMANCE</h2>

        <div className="bg-[#16181d] border border-[#272a33] p-16 clip-corner-lg relative overflow-hidden flex flex-col items-center justify-center min-h-[350px]">
          <div className="absolute top-4 left-4 font-mono-spec text-[10px] text-neutral-500">
            DURATION: 03:45 // 4K 60FPS
          </div>

          <div className="w-24 h-24 bg-[#ff5a1f] clip-corner flex items-center justify-center text-black mb-6 hover:bg-white transition-colors cursor-pointer shadow-2xl">
            <Play size={36} className="fill-black ml-1" />
          </div>
          <span className="font-mono-spec text-xs text-white">CLICK TO ENGAGE VIDEO STREAM</span>
        </div>
      </div>
    </section>
  );
}
