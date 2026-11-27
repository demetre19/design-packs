import React from 'react';
import { Type, Grid, Sliders, Layers } from 'lucide-react';

export function FeatureGrid2() {
  const branches = [
    { title: 'Gravitas Sans', count: '12 Cuts', desc: 'Neogrotesque clean line geometry.' },
    { title: 'Gravitas Serif', count: '8 Cuts', desc: 'High-contrast transitional bracketed serifs.' },
    { title: 'Gravitas Mono', count: '6 Cuts', desc: 'Fixed-width developer and terminal face.' },
    { title: 'Gravitas Display', count: '4 Cuts', desc: 'Extreme header widths for posters.' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Grid 02 // Font Family Tree</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Unified Superfamily Architecture</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">30 STYLES TOTAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, idx) => (
            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                  <span>BRANCH 0{idx + 1}</span>
                  <span className="text-white font-bold">{branch.count}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{branch.title}</h3>
                <p className="text-neutral-400 text-sm font-light">
                  {branch.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>OTF + WOFF2 INCLUDED</span>
                <span className="text-white hover:underline cursor-pointer">Explore Family →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
