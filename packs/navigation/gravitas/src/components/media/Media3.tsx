import React from 'react';
import { Play, Disc, Sliders } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12">
        <div className="flex justify-between items-center mb-8 border-b border-neutral-900 pb-4 text-xs font-mono text-neutral-400">
          <span>MEDIA 03 // FEATURE PLATE WITH ANNOTATIONS</span>
          <span>CURVATURE ANALYSIS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 border border-neutral-900 bg-black p-12 text-center flex items-center justify-center">
            <span className="text-9xl font-extralight tracking-tighter text-white">Q</span>
          </div>
          <div className="lg:col-span-4 space-y-6 font-mono text-xs text-neutral-400">
            <div className="space-y-2 border-b border-neutral-900 pb-4">
              <span className="text-white font-bold block">STEM OVERHANG</span>
              <p>Calibrated to exactly 0.04em optical overshoot for absolute visual alignment.</p>
            </div>
            <div className="space-y-2 border-b border-neutral-900 pb-4">
              <span className="text-white font-bold block">TERMINAL ANGLE</span>
              <p>Precision 42-degree termination cut on curved glyphs.</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Sliders className="w-4 h-4 text-neutral-400" />
              <span>Variable Axis: Weight 200–900</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
