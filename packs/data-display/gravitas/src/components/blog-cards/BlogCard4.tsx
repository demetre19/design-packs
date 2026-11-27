import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-10 space-y-8">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Blog 04 // Cascading Title Post</div>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-tighter text-white">TYPOGRAPHY</h1>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tighter text-neutral-300">AS ARCHITECTURE</h1>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-neutral-600">AND SYSTEM</h1>
        </div>
        <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-2xl pt-4">
          How modern type foundries bridge the gap between historical metal casting and high-performance variable web fonts without sacrificing optical rhythm.
        </p>
        <div className="pt-6 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-400">
          <span>GRAVITAS EDITORIAL DESK</span>
          <span className="text-white hover:underline cursor-pointer">Read Full Monograph →</span>
        </div>
      </div>
    </section>
  );
}
