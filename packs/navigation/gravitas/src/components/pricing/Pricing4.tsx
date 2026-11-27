import React from 'react';
import { Check, Shield, ArrowUpRight } from 'lucide-react';

export function Pricing4() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Pricing 04 // Horizontal Tier Scroll</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Weight-Cascade License Headers</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SELECT YOUR GRADE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-800 bg-neutral-950 p-8 space-y-6">
            <div className="text-5xl font-extralight tracking-tighter text-white">Light Tier</div>
            <div className="text-3xl font-light text-neutral-300">$49</div>
            <p className="text-xs font-light text-neutral-400">Single desktop workstation license for freelance editorial designers.</p>
            <button className="w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200">
              Select Light
            </button>
          </div>
          <div className="border border-neutral-700 bg-neutral-950 p-8 space-y-6">
            <div className="text-5xl font-black tracking-tighter text-white">Master Tier</div>
            <div className="text-3xl font-bold text-neutral-200">$290</div>
            <p className="text-xs font-light text-neutral-400">Unlimited enterprise workstation and web embedding master package.</p>
            <button className="w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200">
              Select Master
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
