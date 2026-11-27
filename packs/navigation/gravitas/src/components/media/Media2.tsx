import React from 'react';
import { Play, Disc, Sliders } from 'lucide-react';

export function Media2() {
  const plates = ['A', 'B', 'G', 'M', 'R', 'X'];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Media 02 // Glyph Plates Gallery</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Optical Master Plates</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">6 PLATES SHOWN</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plates.map((char, idx) => (
            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col items-center justify-center aspect-square relative group">
              <div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-400">
                PLATE 0{idx + 1}
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-neutral-400">
                72PT
              </div>
              <span className="text-8xl font-black text-white group-hover:scale-105 transition-transform">
                {char}
              </span>
              <div className="absolute bottom-4 text-[10px] font-mono text-neutral-400">
                GRAVITAS MASTER CUT
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
