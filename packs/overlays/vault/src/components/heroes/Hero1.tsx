import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-white text-black border-b border-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-8">
          <span>COVER STORY // 01</span>
          <span>AUTUMN-WINTER 2026/27</span>
          <span>PHOTO: S. LORDS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6 font-serif-editorial">
              SILENCE<br />
              &amp; FORM<span className="text-zinc-400">*</span>
            </h1>
            <p className="text-sm md:text-base font-mono max-w-lg leading-relaxed text-zinc-800 mb-8">
              An exhaustive study on the absence of color and the brutal geometry of heavy wool and architectural leather. Captured in the concrete monoliths of Marseille.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2">
                Explore Editorial <ArrowDownRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono uppercase text-zinc-500">Plate 01 // 44 pages</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-black p-2 bg-black">
              <img 
                src="https://picsum.photos/seed/vault1/600/800.webp" 
                alt="Editorial cover" 
                className="w-full h-[480px] object-cover grayscale contrast-125"
              />
              <div className="bg-white text-black p-3 mt-2 flex justify-between items-center text-[10px] font-mono uppercase">
                <span>Fig. 01 — Heavy Wool Coat</span>
                <span>Marseille Series</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
