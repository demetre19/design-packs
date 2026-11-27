import React from 'react';

export function Hero5() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-8">
        <span>portfolio monograph</span>
        <span>edition iv</span>
      </div>
      <h1 className="font-light text-4xl md:text-6xl tracking-tighter lowercase max-w-2xl mb-12 leading-[1.1]">
        curated artifacts &amp; digital expressions.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/10">
        <div className="space-y-3">
          <div className="w-full h-56 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" alt="Plate 1" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="text-[10px] uppercase tracking-wider text-black/50">plate 01 / spatial study</div>
        </div>
        <div className="space-y-3 md:translate-y-8">
          <div className="w-full h-56 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" alt="Plate 2" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="text-[10px] uppercase tracking-wider text-black/50">plate 02 / editorial form</div>
        </div>
        <div className="space-y-3">
          <div className="w-full h-56 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80" alt="Plate 3" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="text-[10px] uppercase tracking-wider text-black/50">plate 03 / typographic grid</div>
        </div>
      </div>
    </section>
  );
}
