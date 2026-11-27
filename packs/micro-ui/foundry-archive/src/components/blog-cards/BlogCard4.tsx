import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">04. FEATURED ESSAY WITH OVERSIZED NUMERAL</h2>
          <span className="text-xs text-neutral-500">ESSAY ARCHIVE</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center lg:text-left border-r border-neutral-800 pr-6">
            <div className="text-7xl font-bold text-white font-mono">1957</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-2">FOUNDING EPOCH</div>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Reconstruction of the Basel Foundry Vaults</h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              How post-war typographers in Switzerland cataloged and preserved over three thousand lead matrices, establishing the foundational index for contemporary digital revivals.
            </p>
            <button className="bg-white text-neutral-900 px-6 py-2.5 text-xs font-bold hover:bg-neutral-200 transition-colors">
              READ FULL MANUSCRIPT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
