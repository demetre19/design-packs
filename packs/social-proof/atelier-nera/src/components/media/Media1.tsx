import React from 'react';

export function Media1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 text-center border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/40 mb-8">centered media plate</div>
      <div className="max-w-md mx-auto space-y-4">
        <div className="w-full h-80 bg-neutral-100 p-3 border border-black/10">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" alt="Centered Plate" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="text-xs font-light text-black/60 lowercase">
          plate 07 — study in light and quiet geometry
        </div>
      </div>
    </section>
  );
}
