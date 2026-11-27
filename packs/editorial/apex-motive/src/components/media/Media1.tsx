import React from 'react';
import { Crosshair, Play, Zap } from 'lucide-react';

export function Media1() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CINEMATIC PLATE</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TRACK VISION // 01</h2>
        </div>

        <div className="relative bg-[#16181d] border border-[#272a33] p-12 clip-corner-lg overflow-hidden min-h-[450px] flex items-center justify-center">
          {/* Corner readouts */}
          <div className="absolute top-4 left-4 font-mono-spec text-[10px] text-[#ff5a1f] flex items-center gap-2">
            <Crosshair size={12} /> CAM-01 // SUZUKA HAIRPIN
          </div>
          <div className="absolute top-4 right-4 font-mono-spec text-[10px] text-neutral-400">
            250 KM/H // APEX-V12 R
          </div>
          <div className="absolute bottom-4 left-4 font-mono-spec text-[10px] text-neutral-500">
            LATERAL G: 2.14G
          </div>
          <div className="absolute bottom-4 right-4 font-mono-spec text-[10px] text-[#ff5a1f]">
            REC [●] 4K 120FPS
          </div>

          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-[#ff5a1f] clip-corner mx-auto flex items-center justify-center text-black mb-6 hover:bg-white transition-colors cursor-pointer shadow-2xl">
              <Play size={32} className="fill-black ml-1" />
            </div>
            <span className="font-mono-spec text-xs text-neutral-300 block">PLAY CINEMATIC RUN REEL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
