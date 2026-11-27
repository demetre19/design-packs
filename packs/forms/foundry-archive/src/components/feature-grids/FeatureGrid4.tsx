import React from 'react';
import { Layers, Shield, FileText, Compass } from 'lucide-react';

export function FeatureGrid4() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">04. COMPARISON GRID: OLD VS NEUE</h2>
          <span className="text-xs text-neutral-500">HISTORICAL EVOLUTION</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 p-8">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">COLUMN A // 1757 STRIKE</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Old-Style Lead Cast</h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              Characterized by organic irregularities, soft bracketed serifs, heavy ink bleed on rag paper, and irregular baseline alignment reflecting hand-filed metal punches.
            </p>
            <div className="border-t border-neutral-800 pt-4 text-xs text-neutral-500">
              PHYSICAL TOLERANCE: ± 0.04MM
            </div>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">COLUMN B // 2026 REVISION</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Neue Digital Revival</h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              Mathematical curve interpolation, optical compensation for high-DPI displays, rigorous kerning tables, and optional historical ligature sets.
            </p>
            <div className="border-t border-neutral-800 pt-4 text-xs text-neutral-500">
              VECTOR TOLERANCE: SUB-PIXEL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
