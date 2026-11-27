import React from 'react';
import { Check, Shield, ArrowUpRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 relative">
        <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-xs font-mono uppercase font-bold">
          Spotlight License
        </div>
        <div className="space-y-6">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Pricing 03 // Single Spotlight Master</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Gravitas Complete Master Archive</h2>
          <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-2xl">
            Get instant access to all 30 superfamily cuts across Sans, Serif, Mono, and Display with lifetime updates and commercial print rights.
          </p>
          <div className="text-5xl font-extralight tracking-tight text-white py-4">
            $290 <span className="text-xs font-mono text-neutral-400">/ perpetual master key</span>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black px-8 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center space-x-2">
              <span>Acquire Complete Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="border border-neutral-700 text-white px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-900 transition-colors">
              View EULA Agreement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
