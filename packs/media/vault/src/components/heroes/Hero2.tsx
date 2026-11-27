import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full border-b border-black grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-black text-white p-12 lg:p-20 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono text-zinc-400">
          <span>MONOCHROME SERIES</span>
          <span>VOL. 09</span>
        </div>
        <div className="my-12">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 block mb-4">02+ FEATURED EXHIBIT</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            THE BLACK<br />
            SQUARE<span className="text-zinc-500">*</span>
          </h1>
          <p className="text-xs md:text-sm font-mono text-zinc-300 leading-relaxed max-w-md">
            Stripping away the noise of contemporary garment design to reveal pure skeletal silhouettes and uncompromising textural contrasts.
          </p>
        </div>
        <div>
          <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono bg-white text-black px-6 py-3 hover:bg-zinc-200 transition-colors">
            View Exhibition <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="bg-white p-6 lg:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-black">
        <div className="w-full max-w-md border border-black p-2 bg-black">
          <img 
            src="https://picsum.photos/seed/vault2/600/750.webp" 
            alt="Split hero" 
            className="w-full h-[450px] object-cover grayscale contrast-150"
          />
          <div className="bg-white text-black p-3 mt-2 flex justify-between items-center text-[10px] font-mono uppercase">
            <span>Look 04 // Silk Poplin</span>
            <span>Studio Archive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
