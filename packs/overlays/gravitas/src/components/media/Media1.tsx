import React from 'react';
import { Play, Disc, Sliders } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Media 01 // Specimen Video Plate</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Foundry Casting Process Overview</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">PLATE 01 // 1080P MASTER</span>
        </div>

        <div className="border border-neutral-800 bg-neutral-950 aspect-video relative flex items-center justify-center group cursor-pointer">
          <div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-400">
            RECORDING: ZURICH FOUNDRY LABS
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-mono text-neutral-400">
            FRAME RATE: 60 FPS
          </div>
          <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-400">
            AUDIO: 48KHZ UNCOMPRESSED
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-400">
            DURATION: 03:42
          </div>

          <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-8 h-8 fill-black ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
