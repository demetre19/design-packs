import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">CTA 03 // Split Vertical Weight List</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Elevate Your Editorial Projects</h2>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Join thousands of premier design studios worldwide utilizing Gravitas for digital publishing and brand architecture.
          </p>
          <button className="bg-white text-black px-8 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            Acquire Master Archive
          </button>
        </div>
        <div className="lg:col-span-5 border border-neutral-800 bg-neutral-950 p-8 space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-neutral-900 pb-2 text-neutral-400">
            <span>WEIGHT</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between font-extralight text-white"><span>Hairline (200)</span> <span>READY</span></div>
          <div className="flex justify-between font-light text-neutral-200"><span>Light (300)</span> <span>READY</span></div>
          <div className="flex justify-between font-normal text-neutral-300"><span>Regular (400)</span> <span>READY</span></div>
          <div className="flex justify-between font-bold text-neutral-400"><span>Bold (700)</span> <span>READY</span></div>
          <div className="flex justify-between font-black text-neutral-500"><span>Extra Black (900)</span> <span>READY</span></div>
        </div>
      </div>
    </section>
  );
}
