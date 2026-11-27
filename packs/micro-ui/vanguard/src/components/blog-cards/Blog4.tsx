import React from 'react';

export function Blog4() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[22vw] font-black text-white/[0.03] uppercase font-sans">
          X-99
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-block bg-[#ff3d00]/10 border border-[#ff3d00]/40 px-3 py-1 text-xs font-bold text-[#ff3d00]">
          ARTICLE HEADER // WATERMARK EDITION
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans leading-none">
          THE GEOMETRY OF <span className="text-[#ff3d00]">SUPERSONIC SHOCK</span>
        </h1>
        <p className="text-zinc-300 text-sm max-w-2xl mx-auto leading-relaxed">
          An in-depth engineering review of delta-wing shockwave attachment and boundary layer control under extreme thermal loads.
        </p>
        <div className="flex items-center justify-center space-x-6 text-xs text-zinc-400 pt-4">
          <span>AUTHOR: DR. V. KERNEL</span>
          <span>DATE: 2026.11.24</span>
          <span className="text-[#ff3d00] font-bold">READ TIME: 8 MIN</span>
        </div>
      </div>
    </section>
  );
}
