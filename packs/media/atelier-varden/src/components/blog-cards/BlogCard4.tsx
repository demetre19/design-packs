import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">ESSAY NO. 45</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-medium tracking-tight text-[#16171a] leading-tight">
            The Horizon as a Structural Constraint
          </h1>
          <p className="text-stone-600 text-base max-w-2xl mx-auto">
            Why contemporary residential architecture must defer to the natural topography rather than imposing artificial volumetric dominance.
          </p>
        </div>

        <div className="border-t border-b border-[#e2e0d8] py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="text-stone-400 uppercase block mb-1">Author</span>
            <span className="text-[#16171a] font-medium">Marcus Varden</span>
          </div>
          <div>
            <span className="text-stone-400 uppercase block mb-1">Published</span>
            <span className="text-[#16171a] font-medium">November 2026</span>
          </div>
          <div>
            <span className="text-stone-400 uppercase block mb-1">Category</span>
            <span className="text-[#16171a] font-medium">Architectural Theory</span>
          </div>
          <div>
            <span className="text-stone-400 uppercase block mb-1">Reading Time</span>
            <span className="text-[#16171a] font-medium">7 Minutes</span>
          </div>
        </div>

        <div className="border border-[#e2e0d8] p-2 bg-[#f0efeb]">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Essay header illustration" 
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
          </div>
          <div className="mt-2 text-[10px] font-mono text-stone-500 uppercase text-center">
            FIG. 01 — HORIZON STUDY IN CONCRETE AND SKY
          </div>
        </div>
      </div>
    </section>
  );
}
