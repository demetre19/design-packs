import React from 'react';
import { X, Check } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-2xl mx-auto border border-neutral-700 bg-neutral-950 p-8 space-y-8 relative shadow-2xl">
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Modal 02 // License Comparison</span>
          <button className="text-neutral-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-white">Select License Scope</h3>
          <p className="text-xs font-light text-neutral-400">Compare desktop workstation vs studio team distribution rights.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 font-mono text-xs">
          <div className="border border-neutral-800 bg-black p-4 space-y-3">
            <span className="text-white font-bold block">DESKTOP [1 USER]</span>
            <div className="text-xl font-bold">$49</div>
            <p className="text-neutral-400 font-light">1 workstation, print & raster graphics.</p>
            <button className="w-full bg-neutral-900 text-white py-2 border border-neutral-700 hover:bg-neutral-800">Select</button>
          </div>
          <div className="border border-neutral-700 bg-neutral-900 p-4 space-y-3">
            <span className="text-white font-bold block">STUDIO [10 USERS]</span>
            <div className="text-xl font-bold">$180</div>
            <p className="text-neutral-300 font-light">10 workstations, web WOFF2 & e-book embedding.</p>
            <button className="w-full bg-white text-black py-2 font-bold hover:bg-neutral-200">Select Pro</button>
          </div>
        </div>
      </div>
    </section>
  );
}
