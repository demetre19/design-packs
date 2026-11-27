import React from 'react';

export function Media1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <div className="flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">ARCHITECTURAL PLATE 01</span>
        </div>

        <div className="border border-[#e2e0d8] p-3 bg-[#f0efeb]">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
              alt="Full width framed plate" 
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
          </div>
          <div className="mt-3 pt-3 border-t border-[#e2e0d8] flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-600">
            <span>PLATE 01 — VILLA VARDEN NORD EXTERIOR PERSPECTIVE</span>
            <span>REINFORCED CONCRETE & DOUGLAS FIR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
