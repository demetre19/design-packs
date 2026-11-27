import React from 'react';
import { Type, Grid, Sliders, Layers } from 'lucide-react';

export function FeatureGrid3() {
  const glyphs = ['Ω', 'Ψ', 'Æ', 'Œ', '§', '¶', '©', '®', '™', '†', '‡', '•'];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Grid 03 // Glyph Set Showcase</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Specialized Editorial Ligatures</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">EXTENDED UNICODE BLOCK</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-neutral-800">
          {glyphs.map((glyph, idx) => (
            <div key={idx} className="border-r border-b border-neutral-800 p-6 bg-neutral-950 text-center flex flex-col items-center justify-center space-y-4 hover:bg-neutral-900 transition-colors">
              <span className="text-4xl font-extralight text-white">{glyph}</span>
              <div className="text-[10px] font-mono text-neutral-400">
                <div>U+03A{idx}</div>
                <div className="text-neutral-300">MASTER CUT</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
