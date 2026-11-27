import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-6">
          <div className="text-[9px] tracking-widest uppercase text-black/50">asymmetric layout</div>
          <h2 className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-tight">
            reduction as the highest form of clarity.
          </h2>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            Every element is scrutinized until only the indispensable remains. We reject additive clutter in favor of serene geometry and disciplined typography.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="w-full h-64 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Grid 1" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="w-full h-64 bg-neutral-100 p-2 border border-black/10 mt-12">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" alt="Grid 2" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}
