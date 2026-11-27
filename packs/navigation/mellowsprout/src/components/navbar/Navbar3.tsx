import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#fdf3e7] py-6 px-6 border-b-2 border-[#3d2530]/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Stacked Wordmark */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#6dbf67] text-white text-xs font-black uppercase tracking-widest shadow-sm">
            Est. 2026
          </span>
          <span className="px-3 py-1 rounded-full bg-[#5ba8e8] text-white text-xs font-black uppercase tracking-widest shadow-sm">
            Play Lab
          </span>
        </div>
        <h1 className="text-3xl font-black text-[#3d2530] flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-[#ff8c42]" /> MellowSprout Studio <Star className="w-6 h-6 text-[#f975a3]" />
        </h1>

        {/* Centered Pill Link Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#3d2530]/10">
          <a href="#" className="px-4 py-1.5 rounded-full text-sm font-bold text-[#3d2530] bg-[#ff8c42] text-white shadow-sm">Home</a>
          <a href="#" className="px-4 py-1.5 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#fdf3e7] transition-colors">Playground</a>
          <a href="#" className="px-4 py-1.5 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#fdf3e7] transition-colors">Catalog</a>
          <a href="#" className="px-4 py-1.5 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#fdf3e7] transition-colors">Workshops</a>
          <a href="#" className="px-4 py-1.5 rounded-full text-sm font-bold text-[#3d2530] hover:bg-[#fdf3e7] transition-colors">Help</a>
        </div>
      </div>
    </header>
  );
}
