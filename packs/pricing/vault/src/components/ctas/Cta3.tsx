import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full border-b border-black py-20 px-4 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-6xl font-serif-editorial text-zinc-400 block mb-2">09+</span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight font-serif-editorial mb-6">
          SUBSCRIBE TO THE REVIEW<span className="text-zinc-400">*</span>
        </h2>
        <p className="text-xs font-mono text-zinc-600 max-w-md mx-auto mb-8 uppercase tracking-wider">
          Uncompromising monochrome design &amp; brutalist form.
        </p>
        <button className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
          Start Subscription <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
