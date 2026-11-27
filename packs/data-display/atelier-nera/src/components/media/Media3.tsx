import React from 'react';

export function Media3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-8">
        <span>feature plate</span>
        <span>monochrome series</span>
      </div>
      <div className="space-y-4">
        <div className="w-full h-[400px] bg-neutral-100 p-3 border border-black/10">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" alt="Feature plate" className="w-full h-full object-cover grayscale contrast-125" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-light text-black/60 pt-2">
          <span className="lowercase">plate ix / architectural abstraction, milan</span>
          <span className="text-[10px] uppercase tracking-wider text-black/40">gelatin silver print on archival cotton</span>
        </div>
      </div>
    </section>
  );
}
