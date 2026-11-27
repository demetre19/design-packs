import React from 'react';

export function Hero5() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-8 h-8 border border-black rounded-full font-bold text-sm">A</span>
          <span className="text-xs uppercase tracking-widest font-bold">INDEX HERO COMPONENT</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
          CV / RESUME & DESIGN DIRECTION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black pt-6 text-xs uppercase tracking-wider">
          <div className="space-y-4">
            <p className="leading-relaxed">
              Marcus Sterling (b. 1986) is a design director focused on typographic taxonomy, publication architecture, and brand identity systems for architectural and cultural institutions.
            </p>
            <div className="font-bold">
              CURRENTLY: PRINCIPAL AT STUDIO STERLING & PROFESSORIAL ADJUNCT.
            </div>
          </div>
          <div className="border border-black p-4 bg-neutral-100 flex flex-col justify-between">
            <div className="text-[10px] uppercase tracking-widest mb-2 font-bold text-neutral-600">KEY METRICS & TIMELINE</div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between border-b border-black pb-1">
                <span>Experience</span>
                <span className="font-bold">12+ Years</span>
              </div>
              <div className="flex justify-between border-b border-black pb-1">
                <span>Exhibitions Curated</span>
                <span className="font-bold">18 Venues</span>
              </div>
              <div className="flex justify-between border-b border-black pb-1">
                <span>Monographs Designed</span>
                <span className="font-bold">34 Volumes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
