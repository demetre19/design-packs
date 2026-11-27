import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-12 text-center space-y-8">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">CTA 02 // Centered Specimen Energy</span>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase">
          Master Your Typography Today
        </h2>
        <p className="max-w-xl mx-auto text-neutral-400 text-sm font-light leading-relaxed">
          Instant download of OTF, TTF, and WOFF2 master files with lifetime commercial rights and free minor weight updates.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-white text-black px-8 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            License Studio Pro ($180)
          </button>
          <button className="border border-neutral-700 text-white px-8 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-900 transition-colors">
            Contact Foundry Desk
          </button>
        </div>
      </div>
    </section>
  );
}
