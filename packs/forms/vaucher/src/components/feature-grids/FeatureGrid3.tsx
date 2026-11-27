import React from 'react';
import { Sliders, Watch } from 'lucide-react';

export function FeatureGrid3() {
  const rows = [
    { title: "Geneva Striping (Côtes de Genève)", desc: "Parallel wave motifs meticulously polished onto bridges using boxwood disks and abrasive paste." },
    { title: "Perlage (Circular Graining)", desc: "Overlapping circular impressions applied to mainplates to catch microscopic dust particles." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FEATURE GRID 03 · GENEVA-STRIPE PANELS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Aesthetic & Finishing Finishes</h2>
      </div>

      <div className="space-y-8">
        {rows.map((row, idx) => (
          <div key={idx} className="grid md:grid-cols-12 border border-[#d0d0cc] bg-[#1c2128] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-geneva-stripe opacity-40" />
            <div className="md:col-span-5 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative z-10">
              <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">FINISH REF. 0{idx + 1}</span>
              <h3 className="text-xl font-light tracking-wide mt-4">{row.title}</h3>
            </div>
            <div className="md:col-span-7 p-8 flex items-center relative z-10">
              <p className="font-mono text-xs text-white/80 tracking-wider leading-relaxed">
                {row.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
