import React from 'react';

export function Media2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-12">
        <span>scattered cluster</span>
        <span>gallery layout</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 space-y-2">
          <div className="w-full h-64 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Cluster 1" className="w-full h-full object-cover grayscale" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-black/40 block">fig. a</span>
        </div>
        <div className="md:col-span-4 md:-translate-y-12 space-y-2">
          <div className="w-full h-80 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Cluster 2" className="w-full h-full object-cover grayscale" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-black/40 block">fig. b</span>
        </div>
        <div className="md:col-span-4 space-y-2">
          <div className="w-full h-64 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="Cluster 3" className="w-full h-full object-cover grayscale" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-black/40 block">fig. c</span>
        </div>
      </div>
    </section>
  );
}
