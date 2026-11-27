import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Blog 03 // Asymmetric Magazine Grid</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Editorial Feature Stories</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">ISSUE NO. 14</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 border border-neutral-800 bg-neutral-950 p-10 flex flex-col justify-between space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase">Featured Monograph // October 2026</span>
              <h3 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white leading-tight">
                Designing for Eternity: The Permanent Relevance of Grotesque Letterforms
              </h3>
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-neutral-900 text-xs font-mono text-neutral-400">
              <span>BY L. V. HAGEN</span>
              <span>12 MIN READ</span>
            </div>
          </div>
          <div className="lg:col-span-4 border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">Short Note</span>
              <h4 className="text-xl font-normal text-white">Variable Axes in CSS: A Complete Reference</h4>
              <p className="text-xs font-light text-neutral-400">Implementing font-variation-settings cleanly in modern React applications.</p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
              <span>SEP 29, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
