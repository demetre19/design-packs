import React from 'react';
import { Type, Grid, Sliders, Layers } from 'lucide-react';

export function FeatureGrid4() {
  const features = [
    { title: 'Optical Kerning Tables', weight: 'font-extralight', level: '200' },
    { title: 'Variable Font Axis Support', weight: 'font-light', level: '300' },
    { title: 'Multi-Script Latin Extended', weight: 'font-normal', level: '400' },
    { title: 'Advanced OpenType Ligatures', weight: 'font-medium', level: '500' },
    { title: 'Proportional & Table Figures', weight: 'font-bold', level: '700' },
    { title: 'Subpixel Rasterization Ready', weight: 'font-black', level: '900' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Grid 04 // Weighted Feature List</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Engineering Specifications</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">EACH ITEM SET AT DISTINCT WEIGHT</span>
        </div>

        <div className="border border-neutral-800 bg-neutral-950 divide-y divide-neutral-900">
          {features.map((feat, idx) => (
            <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-neutral-900/40 transition-colors">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                <span className={`text-xl sm:text-2xl text-white tracking-tight ${feat.weight}`}>
                  {feat.title}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-xs font-mono text-neutral-400">
                <span>WEIGHT: {feat.level}</span>
                <span className="text-white hover:underline cursor-pointer">Verify Spec →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
